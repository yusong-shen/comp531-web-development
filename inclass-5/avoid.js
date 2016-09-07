window.onload = function () {
	var btn = document.getElementById('btnClk');
	var runAway = true;
	var isWon = false;
	var xPos = 0;
	var yPos = 0;
	btn.addEventListener('mouseover', function( event ) {
		if (runAway) {
			xPos = Math.floor(Math.random() * 800 + 100);
			yPos = Math.floor(Math.random() * 600 + 200);
			event.target.style.top = yPos + 'px';
			event.target.style.left = xPos + 'px';
		}
	}, false);
	btn.onclick = function () {
		// show the game message
		var msgDiv = document.getElementById('msg');
		if (btn.innerText === 'Click Me!') {
			// make the msg div visible
			msgDiv.style.display = 'block';
			// Display msg around button's final postion
			msgDiv.style.top = (yPos - 50) + 'px';
			msgDiv.style.left = (xPos + 50) + 'px';
			// make sure button doesn't move
			runAway = false;
			// change the button text to "Play again"
			btn.innerText = 'Play Again';
		} else if (btn.innerText === 'Play Again') {
			msgDiv.style.display = 'none';
			runAway = true;
			btn.innerText = 'Click Me!';
		}

	}
	// key press doesn't work for shift
	window.addEventListener('keydown', function( event ) {
		if (event.shiftKey) {
			runAway = false;
		}
	}, false);
	window.addEventListener('keyup', function( event ) {
		if (!event.shiftKey && btn.innerText === 'Click Me!') {
			runAway = true;
		}
	}, false);	

}