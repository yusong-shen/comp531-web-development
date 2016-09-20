window.onload = function() {
	var cancelBtn = document.getElementById('cancelBtn');
	var textArea = document.getElementById('post');
	cancelBtn.onclick = function () {
		textArea.value = '';
		textArea.innerText = '';
	};
};