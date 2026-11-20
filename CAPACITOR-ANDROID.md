# SmashX Android (Capacitor)

This setup keeps the existing root web files as the single source of truth. The browser version continues to use GitHub Pages. The Android build stages copies of the same files into `www/`; it does not maintain a second copy of the app logic.

## Current setup

- Application ID: `com.melahelboy.smashx`
- Capacitor: 8.6.2
- Web source: existing root `index.html`, CSS and JavaScript
- Firebase: existing web Firebase project configuration is retained
- Android build: GitHub Actions creates a debug APK artifact when web app files change on `main`, or when manually run

## Local build commands

```bash
npm install
npm run android:generate
npm run android:sync
cd android
./gradlew assembleDebug
```

## Important before Play Store release

The workflow currently creates a **debug APK for testing only**. It does not create a Play Store-signed AAB.

Before release, complete and test native Android Google sign-in with the existing Firebase project. Register the Android app using the final application ID, add the required SHA fingerprints in Firebase Authentication, and configure the native Google authentication bridge. Do not change the existing browser sign-in flow.

A separate release workflow can then build a signed AAB using a signing key stored only in GitHub Actions Secrets. Never commit a keystore or its passwords to this repository.

The existing `index.html`, `manifest.json`, `sw.js`, Firebase web configuration, and Firestore rules are not modified by this setup.
