
// We're still defining these
// functions globally here

function resetPage() {
	location.search = "";
}

function clickMe(element) {
	var box = document.getElementById("clickMeBox");
	
	// horrible overloading of a function
	if (element && element.id == "clickMeBox") {
		changeResponse("You "
			+ (box.checked ? "" : "un")
			+ "checked the box");
		return true; // allow default
	}

	changeResponse("You need to check the box");
	return box.checked; // default is conditional 
}

function changeResponse(msg) {
	var e = document.getElementById("response");
	e.innerHTML = msg;
}

function appendResponse(msg) {
	var e = document.getElementById("response");
	e.innerHTML = e.innerHTML + "<br/>" + msg;
	var nlines = (e.innerHTML.match(/br/g) || []).length
	if (nlines > 5) {
		var idx = e.innerHTML.indexOf('br')
		e.innerHTML = e.innerHTML.substring(idx + 3)
	}
}

window.onload = function() {
	var q = location.search.replace("?q=","");
	if (q) {
		changeResponse("You clicked the link with the box checked");
	}

	// add event handler for pressMe button
	document.getElementById("pressMe").onclick = function() {
		changeResponse("You pressed the button!")
	}

	// add level 2 handlers
	var l2p = document.getElementById("level2p")
	
	var l2pResponse = function(e) {
		// e.srcElement == this		
		changeResponse("You clicked the text " + ii + " times.<br/>"
			+ " The text is " + (this.innerHTML.length) 
			+ " characters long");
	};
	var l2pColorFn = function() {
		l2p.style.color = textColors[ii++ % textColors.length];
	};
	var l2pBgColorFn = function() {
		l2p.style['background-color'] = textColors[ii % textColors.length];
	};
	
	// these variables are hoisted!
	var ii = 1; 
	var textColors = ['red', 'blue', 'green'];

	l2p.addEventListener("click", l2pResponse, false);
	l2p.addEventListener("click", l2pColorFn, false);
	l2p.addEventListener("click", l2pBgColorFn, false);
	l2p.removeEventListener('click', l2pBgColorFn)

	// add event handlers to list items
	var clickLi = function(e) {
		if (e.cancelable)
			e.cancelBubble = !document.getElementById("allowBubble").checked
		this.style.color = textColors[ii++ % textColors.length]
		appendResponse("This list item was clicked: " + this.innerHTML)
	}
	var listItems = document.getElementById("myListItems").children;
	// I want Array.forEach, but this is a HTMLCollection not an Array
	Array.prototype.forEach.call(listItems, function(li) { 
		li.onclick = clickLi;
	})
	
	// add handler to the parent div too
	var divList = document.getElementById("myList")
	divList.addEventListener("click", function(e) {
		var innerMsg = "Bubble up to div.  Target=" 
				+ e.srcElement.tagName
				+ " " + (e.srcElement.tagName == "LI" ?
					e.srcElement.innerHTML : "")
		
		appendResponse( (this == e.srcElement) 
			? "The div was clicked." : innerMsg);
	}, false);
	// the parent is now also triggered.
	// note that srcElement still refers to the correct
	// source, but this does not.
	divList.addEventListener("click", function(e) {
		appendResponse("Div capture click event")
	}, true)

	// Button to fire events for us on demand
	var fireBtn = document.getElementById("fireEvent")
	fireBtn.updateText = function() { 
		fireBtn.innerHTML = "Fire event to item " + (1+itemToFire);
	}
	var itemToFire = 0;
	fireBtn.updateText();
	fireBtn.onclick = function() {
		var ev = new Event("click", {"bubbles": true, "cancelable": false})
		listItems[itemToFire].dispatchEvent(ev)
		itemToFire = (itemToFire+1) % listItems.length
		fireBtn.updateText(); 
	}

	// key events
	var keymsg = function(e) {
		if (e.keyCode)
			appendResponse('KeyCode: ' + e.keyCode + ' -> ' + String.fromCharCode(e.keyCode))
		if (e.charCode) {
			appendResponse('CharCode: ' + e.charCode + ' -> ' + String.fromCharCode(e.charCode))
			if (e.charCode == 100) {
				console.log('you got it!', e.charCode)
				e.preventDefault()
			}
		}
	}
	document.getElementById("keydown").onkeydown = keymsg
	document.getElementById("keypress").onkeypress = keymsg

	// save some memory: add handlers only to the outer div
	// className for the property?
	var box = document.getElementById("box")
	box.onmouseover = function(e) {
		appendResponse('mouseover ' + e.target.className)
		Array.prototype.forEach.call(e.target.children, function(el) { 
			el.style.visibility = 'visible';	
		})
	}
	box.onmouseout = function(e) {
		appendResponse(indent + 'mouseout ' + e.target.className)
		Array.prototype.forEach.call(e.target.children, function(el) { 
			if (e.relatedTarget != el && 
				el.className.indexOf("hideable") >= 0)
			{
				el.style.visibility = 'hidden';	
			}
		})
	}
	box.onmousedown = function(e) {
		appendResponse('mouse button ' + e.button + ' on ' + e.target.className)
	}
	var indent = ''
	for (var ii=0; ii < 35; ++ii) indent += '&nbsp;'

	// move the box
	var moveBox = document.getElementById("moveTheBox")
	var dirs = ['left', 'right', 'none']
	var dirii = 0;
	moveBox.innerHTML = "Float box: " + dirs[dirii]
	var theBox = document.getElementsByClassName("blueBox")[0]
	moveBox.onclick = function(e) {
		theBox.style['min-width'] = '25%'
		theBox.style.cssFloat = dirs[dirii]
		dirii = (dirii + 1) % dirs.length
		moveBox.innerHTML = "Float box: " + dirs[dirii]
	}

	console.log('theBox.style.cssText', theBox.style.cssText)
	console.log('theBox.style', theBox.style)
	console.log('computedStyle(theBox)', window.getComputedStyle(theBox))
}
