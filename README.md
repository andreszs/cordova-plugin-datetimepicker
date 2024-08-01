![npm](https://img.shields.io/npm/dt/cordova-plugin-datetimepicker) ![npm](https://img.shields.io/npm/v/cordova-plugin-datetimepicker) ![GitHub package.json version](https://img.shields.io/github/package-json/v/alex-pl/cordova-plugin-datetimepicker?color=FF6D00&label=master&logo=github) ![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/alex-pl/cordova-plugin-datetimepicker) ![GitHub top language](https://img.shields.io/github/languages/top/alex-pl/cordova-plugin-datetimepicker) ![GitHub last commit](https://img.shields.io/github/last-commit/alex-pl/cordova-plugin-datetimepicker)

# Platforms

- Android
- Browser

## Installation

```sh
cordova plugins add cordova-plugin-datetimepicker
```

## Usage

```js
var options = {
    type: 'date',         // 'date' or 'time', required
    date: new Date(),     // date or timestamp, default: current date
    minDate: new Date(),  // date or timestamp
    maxDate: new Date()   // date or timestamp
};
cordova.plugins.DateTimePicker.pick(options, function (timestamp) {
    window.alert(timestamp);
});
```

## Screenshots

The following screenshots were made on a device with Android 6.0. The plugin uses the default styles of the device it's running on.

<img src="https://alex-pl.github.io/cordova-plugin-datetimepicker/images/screenshot_date.png" alt="Date Picker" width="200px">   <img src="https://alex-pl.github.io/cordova-plugin-datetimepicker/images/screenshot_time.png" alt="Time Picker" width="200px">

## Changelog

#### v2.0.0

- Added the browser platform (for date selection only)
- Plugin methods moved from `window` to `cordova.plugins`.
