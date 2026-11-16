# HamzPedia Panel — UI starter

This repository is a Pterodactyl Panel source fork with an initial HamzPedia glassmorphism UI shell.

## Current UI changes
- Violet/dark glassmorphism page background.
- Fixed left navigation sidebar with responsive compact mode.
- HamzPedia wordmark placeholder and violet gradient mark.
- Dashboard/account content shell and top status header.
- Existing Pterodactyl authentication, routes, API calls, and Wings integration are retained.

## Build
Use the repository's existing toolchain and lockfile. The upstream `package.json` declares Node.js >= 22 and provides:
```bash
yarn install
yarn build:production
```

## Branding settings roadmap
The logo and background are currently visual placeholders, not yet dynamically configurable. The next implementation phase should add a server-persisted branding settings model/API and a Super Admin-only settings screen for logo upload, background image upload, overlay, and brand text. Do not use browser localStorage as the source of truth for global branding.
