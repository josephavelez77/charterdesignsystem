---
name: ship
description: Sync with remote before starting work, or verify, commit, push and optionally release to npm when work is done. Use `/ship start` at the beginning of a session and `/ship` (or `/ship release`) when finished.
---

# Ship

The day-to-day loop for this repo: **sync → work → commit, push, and (optionally) release**.

- `/ship start` — get local up to date with `origin/main` before working.
- `/ship` — verify, commit everything in one commit, push. Then ask whether to release.
- `/ship release` — same as `/ship`, but go straight into the release step without asking.

## Ground rules

- **Run each git / npm command as its own Bash call.** Don't prefix with `cd` and don't chain with `&&` — the local permission rules (`git fetch`, `git pull`, `git stash`, `git push`, `npm version`) only match single commands. Chained commands fall through to the safety classifier and get blocked. The working directory is already the repo root.
- Never force-push, never `git reset --hard`, never rewrite commits that are already on `origin`.
- If anything is ambiguous (diverged branches, merge conflicts, unexpected files), stop and ask instead of guessing.

## `/ship start` — sync

1. `git fetch`
2. `git status -sb` — read the ahead/behind counts.
3. If **behind** only:
   - Uncommitted changes? `git stash push -m "ship: pre-pull"`, then `git pull --ff-only`, then `git stash pop`.
   - Clean tree? `git pull --ff-only`.
   - If `stash pop` conflicts, stop and show the conflicting files.
4. If **ahead and behind** (diverged), stop and ask — don't merge or rebase on your own.
5. Report: commits pulled (`git log --oneline` of the new range), and whether local edits were restored.

## `/ship` — verify, commit, push

1. **Sync first.** Run the `/ship start` steps so the commit lands on top of the latest `origin/main`.
2. **Verify.** Run each, stop on failure and report the error:
   - `npm run typecheck`
   - `npm run build`
   - `npm run llms` (regenerates `llms-full.txt` from JSDoc)
3. **Review what's changing.** `git status --short` and `git diff --stat`. Call out anything the user may not expect — e.g. edits the doc-review Stop hook made to `CLAUDE.md` / `llms.txt`, or files outside the work just done.
4. **Commit.** `git add -A`, then one commit with a short subject line and a bullet list of the changes. Note any breaking public-API change (removed export, renamed prop) explicitly in the body. End with the Co-Authored-By trailer.
5. **Push.** `git push`. Pushing `main` only redeploys Storybook to Netlify — it does **not** publish to npm.
6. **Ask whether to release** (skip the question for `/ship release`).

## Release — publish to npm

Publishing is triggered by pushing a `v*` tag; `.github/workflows/publish.yml` publishes with npm trusted publishing (OIDC, no token).

1. **Pick the bump.** Patch for fixes, minor for features — and minor for breaking changes while the version is `0.x`. Confirm with the user if unclear.
2. **Check for tag collisions — this repo has old tags.** GitHub has leftover tags `v0.1.1`–`v0.3.5` from before the package was on npm, so a plain `npm version patch` can fail with "tag already exists".
   - `git ls-remote --tags origin` and find the highest existing `vX.Y.Z` (ignore `^{}` lines).
   - Choose the bumped version; if its tag already exists, move above the highest existing tag.
3. **Bump with an explicit version:** `npm version X.Y.Z` (commits and tags locally).
   - If it fails partway it can leave an untagged version commit behind. That's harmless — just run `npm version` again with a free version; don't reset.
4. **Push:** `git push --follow-tags`.
5. **Verify it actually published.** A green CI run isn't proof, and the registry can lag 30–60s:
   - `npm view @josephavelez77/charter-design-system version`
   - If it still shows the old version, wait ~30s and check again (a few times) before calling it a failure.
6. **If publish fails:** CI logs need a GitHub sign-in and `gh` isn't installed, so ask the user to open the failed run and paste the **Publish** step output. Likely causes: the npm trusted publisher config (repo `charterdesignsystem`, workflow `publish.yml`, no environment, "Allow npm publish" checked), or the version already existing on npm. Re-running a failed run uses the workflow file from the tagged commit — fixes to the workflow need a new version.
7. **Report:** version published, npm link, and anything notable (breaking changes, skipped version numbers).
