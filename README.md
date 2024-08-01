
# Platforms

- Android
- Browser

## Installation

```sh
cordova plugins add https://github.com/andreszs/cordova-plugin-datetimepicker
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

## Fork changes

- Added the browser platform (for date selection only)
- Plugin methods moved from `window` to `cordova.plugins`.
