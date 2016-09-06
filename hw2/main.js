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

	function login() {
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

	function logout() {
		// change the text of button to login
		loginBtn.value = LOGIN;
		// reverse hiding done in login
		username.setAttribute('type', 'text');
		username.value = '';
		post.style.display = 'none';		
	}

}

var changeImage = function (imgId) {
	var randImgSrc = "http://placekitten.com/400/300?image=";
	// 16 kitten images in total
	var randInd = Math.floor(Math.random() * 16);
	document.getElementById(imgId).src = randImgSrc + randInd;
}
var randInterval = Math.floor(Math.random() * 4) + 1;
setInterval(changeImage, randInterval * 1000, "img01");