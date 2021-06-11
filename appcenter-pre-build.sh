#!/usr/bin/env bash
# Creates an .env from ENV variables for use with react-native-config

# VERSION_CODE=$((VERSION_CODE_SHIFT + APPCENTER_BUILD_ID))
# plutil -replace CFBundleVersion -string "$VERSION_CODE"
# $APPCENTER_SOURCE_DIRECTORY/ios/smartCityMobileApp/Info.plist

# MANIFEST_PATH="$APPCENTER_SOURCE_DIRECTORY/PATH_TO_YOUR_ANDROID_PROJECT/app/src/main/AndroidManifest.xml"
# VERSION_CODE=$((VERSION_CODE_SHIFT + APPCENTER_BUILD_ID))
# sed -i "" 's/android:versionCode="[^"]*"/android:versionCode="'$VERSION_CODE'"/' $MANIFEST_PATH

# ENV_WHITELIST=${ENV_WHITELIST:-"^RN_"}
# printf "Creating an .env file with the following whitelist:\n"
# printf "%s\n" $ENV_WHITELIST
# set | egrep -e $ENV_WHITELIST | sed 's/^RN_//g' > .env
# printf "\n.env created with contents:\n\n"
# cat .env

rm react-native.config.js
cp .app_center_react-native.config.js react-native.config.js

ENV_WHITELIST=${ENV_WHITELIST:-"^RN_"}
printf "Creating an .env file with the following whitelist:\n"
printf "%s\n" $ENV_WHITELIST
set | egrep -e $ENV_WHITELIST | sed 's/^RN_//g' > .env
set | egrep -e $ENV_WHITELIST | sed 's/^RN_//g' > .env.staging
set | egrep -e $ENV_WHITELIST | sed 's/^RN_//g' > .env.dev
printf "\n.env created with contents:\n\n"
cat .env
