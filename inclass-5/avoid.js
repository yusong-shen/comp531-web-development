window.onload = function () {
	var btn = document.getElementById('btnClk');
	btn.addEventListener('mouseover', function( event ) {
		var xPos = Math.floor(Math.random() * 1000 + 100);
		var yPos = Math.floor(Math.random() * 500 + 100);
		event.target.style.top = yPos + 'px';
		event.target.style.left = xPos + 'px';
	}, false);
}