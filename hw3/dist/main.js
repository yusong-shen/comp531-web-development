window.onload = function() {
	var cancelBtn = document.getElementById('cancelBtn');
	var textArea = document.getElementById('post');
	cancelBtn.onclick = function () {
		textArea.value = '';
		textArea.innerText = '';
	};

	var updateBtn = document.getElementById('updateBtn');
	var statusArea = document.getElementById('user-status');
	updateBtn.onclick = function () {
		var input = document.getElementById('input-status');
		statusArea.innerText = input.value;
		input.value = ''
	}
};