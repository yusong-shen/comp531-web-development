window.onload = function() {
	var LOGIN = "Login";
	var LOGOUT = "LogOut";
	
	var username = document.getElementById("username");
	var loginBtn = document.getElementById("login");
	var post = document.getElementById("post");
	
	loginBtn.value = LOGIN;

	loginBtn.onclick = function() {
		if (loginBtn.value == LOGIN) {
			login();
		} else {
			logout();
		}
	}

	var login = function () {
		if (!username.value) {
			window.alert("Please enter a username");
		} else {
			console.log('login was clicked');
			// change the text of the login button to logout
			loginBtn.value = LOGOUT;
			// hide the input field
			username.setAttribute('type', 'hidden');
			// make the post div visible
			post.style.display = 'block';

		}
	}

	var logout = function () {
		// change the text of button to login
		loginBtn.value = LOGIN;
		// reverse hiding done in login
		username.setAttribute('type', 'text');
		username.value = '';
		post.style.display = 'none';		
	}

	var isStopped = false;
	var stop = function () {
		isStopped = true;
	}
	var start = function () {
		isStopped = false;
	}


	var changeImage = function (imgId) {
		if (!isStopped) {
			var randImgSrc = "http://placekitten.com/400/300?image=";
			// 16 kitten images in total
			var randInd = Math.floor(Math.random() * 16);
			document.getElementById(imgId).src = randImgSrc + randInd;
		}
	}
	// start dynamic image change
	var randInterval = Math.floor(Math.random() * 4) + 1;
	setInterval(changeImage, randInterval * 1000, "img01");

	// setup the stop and start button
	var stopBtn01 = document.getElementById("stopBtn01");
	stopBtn01.value = "Stop";
	stopBtn01.onclick = function () {
		console.log("stop button 01 is clicked!");
		if (isStopped) {
			start();
			stopBtn01.value = "Start";
		} else {
			stop();
			stopBtn01.value = "Stop";		
		}
	}



}


