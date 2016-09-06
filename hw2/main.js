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