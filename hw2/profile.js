// The page will load with hardcoded values for each field. The submit button will determine 
// which fields have changed and provide an alert to the user informing which fields are being updated. 
// When the alert closes the updated values are displayed, the input fields should all be cleared. 
// Be sure to validate the inputs (and perform password match) and alert the user of incorrect entries 
// before updating values on the screen.
// Style the profile page (you may include styles in the same file as for the main page).
window.onload = function() {
	var alertMsgs = {
			'phone' : '* Phone number format should look like : 123-123-1234\n',
			'email' : '* Email format should look like : name@example.com\n',
			'bday' : '* Only individuals 18 years of age or older on the day of registration are allowed to register\n',
			'password' : '* Passwords you enter are not equal\n'
	};
	function validateRe(re, value) {
		return (value.match(re) !== null);
	}
	function validateBday(date) {
		// Only individuals 18 years of age or older on the day of 
		// registration are allowed to register
		var eighteenYearsAgo = moment().subtract(18, 'years');
		var birthday = moment(date);

		if (!birthday.isValid()) {
		    return false;    
		}
		else if (eighteenYearsAgo.isAfter(birthday)) {
		    return true;    
		}
		else {
		    return false;
		}
	}
	function validatePassword(pw, pw_cf) {
		return pw === pw_cf;		
	}
	function isValidated(form) {
		// incase the argument is missing
		if (!form) {
			form = document.getElementById('userForm');
		}
		var alertMsg = 'something is wrong!';
		// validate by regular expression
		// 123-123-1234
		var phoneRe = /^\d{3}[-]\d{3}[-]\d{4}$/;
		var emailRe = /[^\s@]+@[^\s@]+\.[^\s@]+/;
		var zipcodeRe = /^\d{5}/;
		// perform validations
		var isPhoneValidated = validateRe(phoneRe, form.phone.value);
		var isEmailValidated = validateRe(emailRe, form.email.value);
		var isZipValidated = validateRe(zipcodeRe, form.zipcode.value);
		var isBdayValidated = validateBday(form.bday.value);
		var isPwValidated = validatePassword(form.password.value, form.password_confirmation.value);
		if (isEmailValidated && isPhoneValidated && isBdayValidated &&
			isZipValidated && isPwValidated) {
			return true;
		} else {
			window.alert(alertMsg);
			return false;
		}
	}
	// record the timestamp in millisecond when page is loaded
	function setDate() {
		document.getElementById('timestamp').value = Date.now();
	}
	setDate();
	function clearContent() {
		var allInputs = document.getElementsByTagName('input');
		allInputs.value = '';
	}
	var submitBtn = document.getElementById('submit');
	submitBtn.onclick = function () {
		var userForm = document.getElementById('userForm');
		console.log(userForm.getElementsByTagName('input'));
	}
}