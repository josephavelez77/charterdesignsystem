# Changelog

All notable changes to this project will be documented here.

The format follows [Keep a Changelog](https://keepachangelog.com/en/1.0.0/) and this project adheres to [Semantic Versioning](https://semver.org/).

---

## [0.1.4] — 2026-06-06

### Added
- `llms.txt` — full component API reference for AI coding agents
- `CLAUDE.md` — Claude-specific project conventions and styling guide

---

## [0.1.3] — 2026-06-06

### Fixed
- Added `./dist/index` and `./dist/index.js` specifiers to the exports map for Figma Make CDN compatibility

---

## [0.1.2] — 2026-06-06

### Fixed
- Added `./dist/index` and `./dist/index.js` specifiers to the exports map for Figma Make CDN compatibility

---

## [0.1.1] — 2026-06-06

### Added
- GitHub Actions CI/CD workflow — pushing a version tag automatically publishes to the Figma npm registry
- `README.md` with full install, setup, theming, component table, and token documentation
- `sideEffects: ["dist/tokens/*.css"]` field so bundlers preserve the token CSS

### Fixed
- Added 6 missing barrel exports: `Alert`, `Avatar`, `Badge`, `Checkbox`, `DataGrid`, `UserIdentificationTag`
- FontAwesome peer dependency range corrected from `>=6` to `>=7`
- Added JetBrains Mono to Google Fonts import in token CSS
- Corrected font family names in token JSON sources (Poppins → DM Serif Display, Inter → DM Sans)
- Widened `ListItem` subtitle prop to `React.ReactNode`

### Changed
- Version bumped from `0.0.1` to `0.1.0`

---

## [0.0.1] — 2026-05-01

### Added
- Initial release with 60+ components
- CSS custom property design token system with dark/light theming
- Full TypeScript support with exported prop types
- Storybook with theme switcher, a11y addon, and docs
- Vite library build outputting ESM and CJS formats
