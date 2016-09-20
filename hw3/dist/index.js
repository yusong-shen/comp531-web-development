
window.onload = function() {
    var alertMsgs = {
        'rg_account_name' : 'Account name should contain only characters and digits',
        'rg_phone' : '* Phone number format should look like : 123-123-1234\n',
        'rg_email' : '* Email format should look like : name@example.com\n',
        'rg_zipcode' : '* Zipcode should be 5 digits like 77005\n'
    };
    var validatedREs = {
        'rg_account_name' : /^[a-zA-Z][a-zA-Z0-9]*$/,
        'rg_phone' : /^\d{3}[-]\d{3}[-]\d{4}$/,
        'rg_email' : /[^\s@]+@[^\s@]+\.[^\s@]+/,
        'rg_zipcode' : /^\d{5}/
    };
    var inputFields = ['rg_account_name', 'rg_phone', 'rg_email', 'rg_zipcode'];
    function validateRe(re, value) {
        return (value.match(re) !== null);
    }

    function clearContent() {
        var allInputs = document.getElementsByTagName('input');
        Array.prototype.forEach.call(allInputs, function(item) {
            if (item.type !== 'submit') {
                item.value = '';
            }
        });
    }

    var submitBtn = document.getElementById('rg_submit');

    // submitBtn.onclick = validateForm();
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
                var div = document.getElementsByClassName(item)[0];
                var alert = div.getElementsByClassName('alert')[0];
                alert.className += ' alert-danger';
                alert.innerText = alertMsgs[item];
                console.log(alertMsgs[item]);
                result = false;
            } else if (isValidated) {
                console.log(item + ' : true');
            }
        });
        console.log(result);
        // clear all the contents
        clearContent();
        return result;
    };


};