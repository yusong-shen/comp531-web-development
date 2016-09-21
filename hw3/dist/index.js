
window.onload = function() {
    var alertMsgs = {
        'rg_account_name' : 'Account name should contain only characters and digits',
        'rg_phone' : '* Phone number format should look like : 123-123-1234',
        'rg_email' : '* Email format should look like : name@example.com',
        'rg_zipcode' : '* Zipcode should be 5 digits like 77005',
        'rg_pwd' : '* Passwords you enter are not equal',
        'rg_dob' : "* Only individuals 18 years of age or older on the day of registration are allowed to register"
    };
    var validatedREs = {
        'rg_account_name' : /^[a-zA-Z][a-zA-Z0-9]*$/,
        'rg_phone' : /^\d{3}[-]\d{3}[-]\d{4}$/,
        'rg_email' : /[^\s@]+@[^\s@]+\.[^\s@]+/,
        'rg_zipcode' : /^\d{5}/
    };
    var inputFields = ['rg_account_name', 'rg_phone', 'rg_email', 'rg_zipcode'];
    var validateRe = function (re, value) {
        return (value.match(re) !== null);
    };
    var validateBday = function (date) {
        // Only individuals 18 years of age or older on the day of
        // registration are allowed to register
        var eighteenYearsAgo = moment().subtract(18, "years");
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
    };
    var validatePassword = function (pw, pw_cf) {
        return pw === pw_cf;
    };
    var clearContent = function () {
        var allInputs = document.getElementsByTagName('input');
        Array.prototype.forEach.call(allInputs, function(item) {
            if (item.type !== 'submit') {
                item.value = '';
            }
        });
    };

    var createAlert = function (elemendId) {
        var div = document.getElementsByClassName(elemendId)[0];
        var alert = div.getElementsByClassName('alert')[0];
        alert.className += ' alert-danger';
        alert.innerText = alertMsgs[elemendId];
    };

    var submitBtn = document.getElementById('rg_submit');

    submitBtn.onclick = function () {
        var result = true;
        inputFields.forEach(function(item) {
            var newElement = document.getElementById(item);
            var newVal = newElement.value;
            var isValidated = true;
            // check if that field needed to be validated
            if (validatedREs[item]) {
                isValidated = validateRe(validatedREs[item], newVal);
            }
            if (!isValidated) {
                createAlert(item);
                result = false;
            }
        });
        // validate birthday
        var bday = document.getElementById('rg_dob');
        if (!validateBday(bday)) {
            createAlert('rg_dob');
            result = false;
        }

        // validate password
        var pwVal = document.getElementById('rg_pwd').value;
        var pwConfirmVal = document.getElementById('rg_cf_pwd').value;
        if (!validatePassword(pwVal, pwConfirmVal)) {
            createAlert('rg_pwd');
            result = false;
        }
        // clear all the contents
        clearContent();
        return result;
    };


};