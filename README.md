# SmashX

SmashX is a mobile-first badminton scoring and session-management app.

## Source of truth

- `index.html` in the repository root is the single application entry point.
- Keep the app UI, scoring logic, session management, player management, and match history in this file.
- `manifest.json`, `sw.js`, icons, and logos are supporting PWA/Android assets; they are not duplicate application entry points.
- Do not use or deploy the old `dist/index.html` copy.

## Firebase project

- Firebase project ID: `smashx-pro2026`
- `.firebaserc` selects this project for Firebase CLI.
- `firebase.json` serves the repository root.
- Firebase Hosting deployment is manual only through **Actions → Deploy SmashX to Firebase Hosting → Run workflow**.
- Do not change the Firebase project ID or replace the existing Firebase project when maintaining this repository.

## Android build

- Package: `com.smashx.badmintonscorer`
- App name: `SmashX`
- Android build workflow: `.github/workflows/android-apk.yml`
- Build starts when app source/assets change on `main`, or manually from GitHub Actions.
- Play Store bundle output: `app-release.aab` (uploaded as the `SmashX-Play-Store-AAB` workflow artifact).
- Current configured release: version name `1.0.6`, version code `6`.

## Important Firebase data-backup note

This repository stores application source and public configuration only. Do **not** commit Firestore exports, Authentication user exports, service-account keys, private credentials, or personal user data to this public repository. Back up Firestore to a protected Google Cloud Storage bucket using Firebase/Google Cloud scheduled exports, and keep Authentication user exports in a restricted, encrypted backup location. Verify a restore procedure before deleting or changing any Firebase data.

## Safe maintenance

1. Keep one canonical application file: root `index.html`.
2. Keep the Firebase project ID and manual-only Hosting workflow unchanged unless explicitly requested.
3. Test Android builds before Play Console upload.
4. Never delete Firebase collections, users, signing keys, or backup files as part of Git cleanup.
