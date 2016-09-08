// The page will load with hardcoded values for each field. The submit button will determine 
// which fields have changed and provide an alert to the user informing which fields are being updated. 
// When the alert closes the updated values are displayed, the input fields should all be cleared. 
// Be sure to validate the inputs (and perform password match) and alert the user of incorrect entries 
// before updating values on the screen.
// Style the profile page (you may include styles in the same file as for the main page).
window.onload = function() {
	var alertMsgs = {
		'displayName' : '',
		'phone' : '* Phone number format should look like : 123-123-1234\n',
		'email' : '* Email format should look like : name@example.com\n',
		'password' : '* Passwords you enter are not equal\n',
		'zipcode' : '* Zipcode should be 5 digits like 77005\n'
	};
	var validatedREs = {
		'phone' : /^\d{3}[-]\d{3}[-]\d{4}$/,
		'email' : /[^\s@]+@[^\s@]+\.[^\s@]+/,
		'zipcode' : /^\d{5}/
	}
	var inputFields = ['displayName', 'phone', 'email', 'zipcode'];
	var displayFields = ['currentDisplayName', 'currentPhone', 'currentEmail', 'currentZipcode'];
	function validateRe(re, value) {
		return (value.match(re) !== null);
	}
	function validatePassword(pw, pw_cf) {
		return pw === pw_cf;		
	}
	function clearContent() {
		var allInputs = document.getElementsByTagName('input');
		Array.prototype.forEach.call(allInputs, function(item) {
			if (item.type !== 'submit') {
				item.value = '';
			}
		});
	}
	// return the string indicating sucessfully updated
	function updatedMsg(field, oldVal, newVal) {
		return '* ' + field + ' is updated from ' + oldVal + ' to ' + newVal;
	}
	function updateField(field, oldElement, newElement) {
		// assume oldElement is span, newElement is input
		var oldVal = oldElement.innerText;
		var newVal = newElement.value;
		window.alert(updatedMsg(field, oldVal, newVal));
		oldElement.innerText = newVal;
	}
	var submitBtn = document.getElementById('submit');
	submitBtn.onclick = function () {
		inputFields.forEach(function(item, index) {
			var oldElement = document.getElementById(displayFields[index]);
			var newElement = document.getElementById(item);
			var oldVal = oldElement.innerText;
			var newVal = newElement.value;
			var isValidated = true;
			// check if that field needed to be validated
			if (validatedREs[item]) {
				isValidated = validateRe(validatedREs[item], newVal);
			}
			if (newVal && !isValidated) {
				window.alert(alertMsgs[item]);				
			} else if (newVal && oldVal !== newVal) {
				updateField(item, oldElement, newElement);
			}
		});

		// clear all the contents
		clearContent();
	}
}