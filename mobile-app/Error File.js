Error File

Failed to construct transformer:  DuplicateError: Duplicated files or mocks. Please check the console for more info
    at setModule (/workspaces/luxe-pass/mobile-app/node_modules/metro-file-map/src/index.js:450:17)
    at workerReply (/workspaces/luxe-pass/mobile-app/node_modules/metro-file-map/src/index.js:507:9)
    at async Promise.all (index 24501)
    at HasteMap._applyFileDelta (/workspaces/luxe-pass/mobile-app/node_modules/metro-file-map/src/index.js:672:7)
    at /workspaces/luxe-pass/mobile-app/node_modules/metro-file-map/src/index.js:327:9
    at DependencyGraph.ready (/workspaces/luxe-pass/mobile-app/node_modules/metro/src/node-haste/DependencyGraph.js:95:5)
    at Bundler.ready (/workspaces/luxe-pass/mobile-app/node_modules/metro/src/Bundler.js:69:5)
    at IncrementalBundler.ready (/workspaces/luxe-pass/mobile-app/node_modules/metro/src/IncrementalBundler.js:289:5)
    at Server.ready (/workspaces/luxe-pass/mobile-app/node_modules/metro/src/Server.js:1085:5) {
  mockPath1: 'src/components/package.json',
  mockPath2: 'temp_backup/src/components/package.json'
}
Unrecognized event: {"type":"transformer_load_failed","error":{"mockPath1":"src/components/package.json","mockPath2":"temp_backup/src/components/package.json","name":"Error","message":"Duplicated files or mocks. Please check the console for more info","stack":"Error: Duplicated files or mocks. Please check the console for more info\n    at setModule (/workspaces/luxe-pass/mobile-app/node_modules/metro-file-map/src/index.js:450:17)\n    at workerReply (/workspaces/luxe-pass/mobile-app/node_modules/metro-file-map/src/index.js:507:9)\n    at async Promise.all (index 24501)\n    at HasteMap._applyFileDelta (/workspaces/luxe-pass/mobile-app/node_modules/metro-file-map/src/index.js:672:7)\n    at /workspaces/luxe-pass/mobile-app/node_modules/metro-file-map/src/index.js:327:9\n    at DependencyGraph.ready (/workspaces/luxe-pass/mobile-app/node_modules/metro/src/node-haste/DependencyGraph.js:95:5)\n    at Bundler.ready (/workspaces/luxe-pass/mobile-app/node_modules/metro/src/Bundler.js:69:5)\n    at IncrementalBundler.ready (/workspaces/luxe-pass/mobile-app/node_modules/metro/src/IncrementalBundler.js:289:5)\n    at Server.ready (/workspaces/luxe-pass/mobile-app/node_modules/metro/src/Server.js:1085:5)"}}
Started Metro Bundler
Unable to resolve asset "./assets/splash.png" from "splash.image" in your app.json or app.config.js
Error: Problem validating asset fields in app.json. Learn more.
 • Field: Android.adaptiveIcon.foregroundImage - cannot access file at './assets/adaptive-icon.png'.
 • Field: Splash.image - cannot access file at './assets/splash.png'.
 • Field: splash.image - cannot access file at './assets/splash.png'.
 • Field: android.adaptiveIcon.foregroundImage - cannot access file at './assets/adaptive-icon.png'.
 • Field: icon - image should be square, but the file at './assets/icon.png' has dimensions 876x799.

/workspaces/luxe-pass/mobile-app/node_modules/metro-file-map/src/index.js:450
          throw new DuplicateError(
                ^
Error: Duplicated files or mocks. Please check the console for more info
    at setModule (/workspaces/luxe-pass/mobile-app/node_modules/metro-file-map/src/index.js:450:17)
    at workerReply (/workspaces/luxe-pass/mobile-app/node_modules/metro-file-map/src/index.js:507:9)
    at async Promise.all (index 24501)
    at HasteMap._applyFileDelta (/workspaces/luxe-pass/mobile-app/node_modules/metro-file-map/src/index.js:672:7)
    at /workspaces/luxe-pass/mobile-app/node_modules/metro-file-map/src/index.js:327:9
    at DependencyGraph.ready (/workspaces/luxe-pass/mobile-app/node_modules/metro/src/node-haste/DependencyGraph.js:95:5)
    at Bundler.ready (/workspaces/luxe-pass/mobile-app/node_modules/metro/src/Bundler.js:69:5)
    at IncrementalBundler.ready (/workspaces/luxe-pass/mobile-app/node_modules/metro/src/IncrementalBundler.js:289:5)
    at Server.ready (/workspaces/luxe-pass/mobile-app/node_modules/metro/src/Server.js:1085:5)

    Warnings:

    Error: Problem validating asset fields in /workspaces/luxe-pass/mobile-app/app.json. Learn more: https://docs.expo.dev/
 • Field: Android.adaptiveIcon.foregroundImage - cannot access file at './assets/adaptive-icon.png'.
 • Field: Splash.image - cannot access file at './assets/splash.png'.
 • Field: icon - image should be square, but the file at './assets/icon.png' has dimensions 876x799.

This project is using an SDK version that by default targets Android API level 33 or lower. To submit your app to the Google Play Store after August 31 2024, you must target Android API level 34 or higher.
Advice: Upgrade to Expo SDK 50 or later, which by default supports Android API level 34 Learn more: https://support.google.com/googleplay/android-developer/answer/11926878?hl=en

Some dependencies are incompatible with the installed expo version:
  @react-native-async-storage/async-storage@2.1.1 - expected version: 1.18.2
  expo-font@13.0.3 - expected version: ~11.4.0
  expo-linear-gradient@14.0.2 - expected version: ~12.3.0
  react-native@0.72.6 - expected version: 0.72.10
  react-native-gesture-handler@2.22.1 - expected version: ~2.12.0
  react-native-reanimated@3.16.7 - expected version: ~3.3.0

  Error: Problem validating asset fields in /workspaces/luxe-pass/mobile-app/app.json. Learn more: https://docs.expo.dev/
 • Field: Android.adaptiveIcon.foregroundImage - cannot access file at './assets/adaptive-icon.png'.
 • Field: Splash.image - cannot access file at './assets/splash.png'.
 • Field: icon - image should be square, but the file at './assets/icon.png' has dimensions 876x799.

This project is using an SDK version that by default targets Android API level 33 or lower. To submit your app to the Google Play Store after August 31 2024, you must target Android API level 34 or higher.
Advice: Upgrade to Expo SDK 50 or later, which by default supports Android API level 34 Learn more: https://support.google.com/googleplay/android-developer/answer/11926878?hl=en

Some dependencies are incompatible with the installed expo version:
  @react-native-async-storage/async-storage@2.1.1 - expected version: 1.18.2
  expo-font@13.0.3 - expected version: ~11.4.0
  expo-linear-gradient@14.0.2 - expected version: ~12.3.0
  react-native@0.72.6 - expected version: 0.72.10
  react-native-gesture-handler@2.22.1 - expected version: ~2.12.0
  react-native-reanimated@3.16.7 - expected version: ~3.3.0
Your project may not work correctly until you install the correct versions of the packages.
Fix with: npx expo install --fix
Found outdated dependencies
Advice: Use 'npx expo install --check' to review and upgrade your dependencies.

Updates and installations

env: load .env
env: export DATABASE_URL
Some dependencies are incompatible with the installed expo version:
  @react-native-async-storage/async-storage@2.1.1 - expected version: 1.18.2
  expo-font@13.0.3 - expected version: ~11.4.0
  expo-linear-gradient@14.0.2 - expected version: ~12.3.0
  react-native@0.72.6 - expected version: 0.72.10
  react-native-gesture-handler@2.22.1 - expected version: ~2.12.0
  react-native-reanimated@3.16.7 - expected version: ~3.3.0
Your project may not work correctly until you install the correct versions of the packages.
Fix with: npx expo install --fix
› Installing 6 SDK 49.0.0 compatible native modules using yarn
> yarn add @react-native-async-storage/async-storage@1.18.2 expo-font@~11.4.0 expo-linear-gradient@~12.3.0 react-native@0.72.10 react-native-gesture-handler@~2.12.0 react-native-reanimated@~3.3.0
yarn add v1.22.22
[1/4] Resolving packages...
[2/4] Fetching packages...
[3/4] Linking dependencies...
warning "react-native > @react-native/codegen@0.72.8" has unmet peer dependency "@babel/preset-env@^7.1.6".
warning "react-native > @react-native/codegen > jscodeshift@0.14.0" has unmet peer dependency "@babel/preset-env@^7.1.6".
warning " > react-native-reanimated@3.3.0" has unmet peer dependency "@babel/plugin-proposal-nullish-coalescing-operator@^7.0.0-0".
warning " > react-native-reanimated@3.3.0" has unmet peer dependency "@babel/plugin-proposal-optional-chaining@^7.0.0-0".
warning " > react-native-reanimated@3.3.0" has unmet peer dependency "@babel/plugin-transform-arrow-functions@^7.0.0-0".
warning " > react-native-reanimated@3.3.0" has unmet peer dependency "@babel/plugin-transform-shorthand-properties@^7.0.0-0".
warning " > react-native-reanimated@3.3.0" has unmet peer dependency "@babel/plugin-transform-template-literals@^7.0.0-0".
[4/4] Building fresh packages...
success Saved lockfile.
success Saved 15 new dependencies.
info Direct dependencies
├─ @react-native-async-storage/async-storage@1.18.2
├─ expo-linear-gradient@12.3.0
├─ react-native-gesture-handler@2.12.1
├─ react-native-reanimated@3.3.0
└─ react-native@0.72.10
info All dependencies
├─ @babel/plugin-transform-object-assign@7.25.9
├─ @react-native-async-storage/async-storage@1.18.2
├─ @react-native-community/cli-clean@11.3.10
├─ @react-native-community/cli-doctor@11.3.10
├─ @react-native-community/cli-hermes@11.3.10
├─ @react-native-community/cli-plugin-metro@11.3.10
├─ @react-native-community/cli-types@11.3.10
├─ @react-native-community/cli@11.3.10
├─ @react-native/codegen@0.72.8
├─ deprecated-react-native-prop-types@4.2.3
├─ expo-linear-gradient@12.3.0
├─ prop-types@15.8.1
├─ react-native-gesture-handler@2.12.1
├─ react-native-reanimated@3.3.0
└─ react-native@0.72.10
Done in 14.08s.

Logs for your project will appear below. Press Ctrl+C to exit.
metro-file-map: Haste module naming collision: luxepass-mobile
  The following files share their name; please adjust your hasteImpl:
    * <rootDir>/src/components/package.json
    * <rootDir>/temp_backup/src/components/package.json

metro-file-map: Haste module naming collision: luxepass
  The following files share their name; please adjust your hasteImpl:
    * <rootDir>/temp_backup/package.json
    * <rootDir>/package.json

Failed to construct transformer:  DuplicateError: Duplicated files or mocks. Please check the console for more info
    at setModule (/workspaces/luxe-pass/mobile-app/node_modules/metro-file-map/src/index.js:450:17)
    at workerReply (/workspaces/luxe-pass/mobile-app/node_modules/metro-file-map/src/index.js:507:9)
    at async Promise.all (index 23917)
    at HasteMap._applyFileDelta (/workspaces/luxe-pass/mobile-app/node_modules/metro-file-map/src/index.js:672:7)
    at /workspaces/luxe-pass/mobile-app/node_modules/metro-file-map/src/index.js:327:9
    at DependencyGraph.ready (/workspaces/luxe-pass/mobile-app/node_modules/metro/src/node-haste/DependencyGraph.js:95:5)
    at Bundler.ready (/workspaces/luxe-pass/mobile-app/node_modules/metro/src/Bundler.js:69:5)
    at IncrementalBundler.ready (/workspaces/luxe-pass/mobile-app/node_modules/metro/src/IncrementalBundler.js:289:5)
    at Server.ready (/workspaces/luxe-pass/mobile-app/node_modules/metro/src/Server.js:1085:5) {
  mockPath1: 'src/components/package.json',
  mockPath2: 'temp_backup/src/components/package.json'
}
Unrecognized event: {"type":"transformer_load_failed","error":{"mockPath1":"src/components/package.json","mockPath2":"temp_backup/src/components/package.json","name":"Error","message":"Duplicated files or mocks. Please check the console for more info","stack":"Error: Duplicated files or mocks. Please check the console for more info\n    at setModule (/workspaces/luxe-pass/mobile-app/node_modules/metro-file-map/src/index.js:450:17)\n    at workerReply (/workspaces/luxe-pass/mobile-app/node_modules/metro-file-map/src/index.js:507:9)\n    at async Promise.all (index 23917)\n    at HasteMap._applyFileDelta (/workspaces/luxe-pass/mobile-app/node_modules/metro-file-map/src/index.js:672:7)\n    at /workspaces/luxe-pass/mobile-app/node_modules/metro-file-map/src/index.js:327:9\n    at DependencyGraph.ready (/workspaces/luxe-pass/mobile-app/node_modules/metro/src/node-haste/DependencyGraph.js:95:5)\n    at Bundler.ready (/workspaces/luxe-pass/mobile-app/node_modules/metro/src/Bundler.js:69:5)\n    at IncrementalBundler.ready (/workspaces/luxe-pass/mobile-app/node_modules/metro/src/IncrementalBundler.js:289:5)\n    at Server.ready (/workspaces/luxe-pass/mobile-app/node_modules/metro/src/Server.js:1085:5)"}}
Started Metro Bundler
Unable to resolve asset "./assets/splash.png" from "splash.image" in your app.json or app.config.js
Error: Problem validating asset fields in app.json. Learn more.
 • Field: Android.adaptiveIcon.foregroundImage - cannot access file at './assets/adaptive-icon.png'.
 • Field: Splash.image - cannot access file at './assets/splash.png'.
 • Field: splash.image - cannot access file at './assets/splash.png'.
 • Field: android.adaptiveIcon.foregroundImage - cannot access file at './assets/adaptive-icon.png'.
 • Field: icon - image should be square, but the file at './assets/icon.png' has dimensions 876x799.

The following packages were not updated. You should check the READMEs for those repositories to determine what version is compatible with your new set of packages:
@expo-google-fonts/inter, @expo-google-fonts/montserrat, @expo/webpack-config, @react-navigation/native, @react-navigation/stack, @supabase/supabase-js, babel-plugin-module-resolver

✖ Failed to clear packager cache with error: Cannot find module 'react-native/local-cli/cli.js'

Unable to resolve asset "./assets/adaptive-icon.png" from "android.adaptiveIcon.foregroundImage" in your app.json or app.config.js

Uncaught Error: Cannot find module '../../App'
    at webpackMissingModule (bundle.js:13:50)
    at ./node_modules/expo/AppEntry.js (bundle.js:13:134)
    at __webpack_require__ (bootstrap:22:1)
    at startup:6:1
    at startup:6:1
WebSocketClient.js:13 WebSocket connection to 'wss://legendary-space-meme-jj49779pp9w5hq467-19006.app.github.dev:19006/_expo/ws' failed: Error in connection establishment: net::ERR_CONNECTION_TIMED_OUT
WebSocketClient @ WebSocketClient.js:13
WebSocketClient.js:13 WebSocket connection to 'wss://legendary-space-meme-jj49779pp9w5hq467-19006.app.github.dev:19006/_expo/ws' failed: Error in connection establishment: net::ERR_CONNECTION_TIMED_OUT

The following packages were not updated. You should check the READMEs for those repositories to determine what version is compatible with your new set of packages:
@expo-google-fonts/inter, @expo-google-fonts/montserrat, @expo/webpack-config, @react-navigation/native, @react-navigation/stack, @supabase/supabase-js, expo-google-fonts, babel-plugin-module-resolver
✖ Failed to clear packager cache with error: Cannot find module 'react-native/local-cli/cli.js'
Require stack:
- /workspaces/luxe-pass/mobile-app/noop.js

Unable to resolve asset "./assets/adaptive-icon.png" from "android.adaptiveIcon.foregroundImage" in your app.json or app.config.js

{"id":"111ea0d6-24ad-4442-b181-f9c3a7f3f2d1","createdAt":"2025-02-07T06:01:19.883Z","runtimeVersion":"exposdk:52.0.0","launchAsset":{"key":"bundle","contentType":"application/javascript","url":"https://127.0.0.1:8081/node_modules/expo/AppEntry.bundle?platform=ios&dev=true&hot=false&transform.engine=hermes&transform.bytecode=1&transform.routerRoot=src%2Fapp&unstable_transformProfile=hermes-stable"},"assets":[],"metadata":{},"extra":{"eas":{},"expoClient":{"name":"luxepass","slug":"luxepass","version":"1.0.0","orientation":"portrait","icon":"./assets/icon.png","userInterfaceStyle":"light","splash":{"image":"./assets/splash.png","resizeMode":"contain","backgroundColor":"#ffffff","imageUrl":"https://127.0.0.1:8081/assets/./assets/splash.png"},"assetBundlePatterns":["**/*"],"ios":{"supportsTablet":true},"android":{"adaptiveIcon":{"foregroundImage":"./assets/adaptive-icon.png","backgroundColor":"#ffffff","foregroundImageUrl":"https://127.0.0.1:8081/assets/./assets/adaptive-icon.png"}},"web":{},"_internal":{"isDebug":false,"projectRoot":"/workspaces/luxe-pass/mobile-app","dynamicConfigPath":null,"staticConfigPath":"/workspaces/luxe-pass/mobile-app/app.json","packageJsonPath":"/workspaces/luxe-pass/mobile-app/package.json"},"sdkVersion":"52.0.0","platforms":["ios","android","web"],"iconUrl":"https://127.0.0.1:8081/assets/./assets/icon.png","hostUri":"127.0.0.1:8081"},"expoGo":{"debuggerHost":"127.0.0.1:8081","developer":{"tool":"expo-cli","projectRoot":"/workspaces/luxe-pass/mobile-app"},"packagerOpts":{"dev":true},"mainModuleName":"node_modules/expo/AppEntry","__flipperHack":"React Native packager is running"},"scopeKey":"@anonymous/luxepass-29826dc8-38a7-4caa-9b5f-c97a2784b632"}}
