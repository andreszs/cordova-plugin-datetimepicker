var PLUGIN_NAME = 'DateTimePicker';

function showDatePicker(options, callback) {
    var options = args[0] || {};
    
    // Translucent background div
    var dialogBg = document.createElement('div');
    dialogBg.id = 'date-picker-bg';
    dialogBg.style.backgroundColor = '#00000088';
    dialogBg.style.position = 'fixed';
    dialogBg.style.top = '0';
    dialogBg.style.bottom = '0';
    dialogBg.style.left = '0';
    dialogBg.style.right = '0';
    dialogBg.style.zIndex = '9998';
    document.body.appendChild(dialogBg);

    // Foreground div for the modal
    var dialogFg = document.createElement('div');
    dialogFg.id = 'date-picker-fg';
    dialogFg.style.backgroundColor = '#424242';
    dialogFg.style.boxShadow = 'rgba(0,0,0,0.5) 0px 4px 24px';
    dialogFg.style.borderRadius = '3px';
    dialogFg.style.marginLeft = 'auto';
    dialogFg.style.marginRight = 'auto';
    dialogFg.style.padding = '1.5em';
    dialogFg.style.position = 'relative';
    dialogFg.style.top = '50%';
    dialogFg.style.transform = 'translateY(-50%)';
    dialogFg.style.textAlign = 'center';
    dialogFg.style.width = '70%';
    dialogFg.style.zIndex = '9999';
    dialogBg.appendChild(dialogFg);

    // Input element for date picking
    var input = document.createElement('input');
    input.type = options.type === 'time' ? 'time' : 'date';
    
    var today = new Date();
    var date = options.date ? new Date(options.date) : today;
    var valueString = date.toISOString().slice(0, options.type === 'time' ? 16 : 10);
    input.value = valueString;

    if (options.minDate) {
        var minDate = new Date(options.minDate);
        input.min = minDate.toISOString().slice(0, 10);
    }

    if (options.maxDate) {
        var maxDate = new Date(options.maxDate);
        input.max = maxDate.toISOString().slice(0, 10);
    }

    input.style.width = '100%';
    input.style.padding = '0.5em';
    input.style.marginBottom = '1em';
    dialogFg.appendChild(input);

    // OK button to confirm the selection
    var okButton = document.createElement('button');
    okButton.textContent = 'OK';
	okButton.style.marginTop = '0.5em';
	okButton.style.marginLeft = '0.5em';
	okButton.style.marginRight = '0.5em';
    okButton.style.padding = '0.5em 1em';
    okButton.style.border = 'none';
    okButton.style.borderRadius = '3px';

    okButton.addEventListener('click', function () {
        var selectedDate = new Date(input.value);
        document.body.removeChild(dialogBg);
        successCallback(selectedDate.getTime()); // Return the timestamp
    });

    // Cancel button to dismiss the dialog
    var cancelButton = document.createElement('button');
    cancelButton.textContent = 'Cancel';
    cancelButton.style.padding = '0.5em 1em';
	cancelButton.style.marginTop = '0.5em';
	cancelButton.style.marginLeft = '0.5em';
	cancelButton.style.marginRight = '0.5em';
    cancelButton.style.border = 'none';
    cancelButton.style.borderRadius = '3px';

    cancelButton.addEventListener('click', function () {
        document.body.removeChild(dialogBg);
        errorCallback('User cancelled the date selection');
    });

    dialogFg.appendChild(okButton);
    dialogFg.appendChild(cancelButton);
}

var DateTimePicker = {
    pick: function (options, callback) {
        showDatePicker(options, callback);
    }
};

module.exports = DateTimePicker;

require('cordova/exec/proxy').add(PLUGIN_NAME, DateTimePicker);
