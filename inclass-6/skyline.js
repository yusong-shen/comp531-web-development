'use strict'

var modulo = function (x, y) {
    return ((x % y) + y) % y;
};

var createApp = function (canvas) {
    var c = canvas.getContext("2d");
    var floor = canvas.height / 2;
    var carWidth = 70;
    var carHeight = 30;
    var carX = canvas.width - carWidth;
    var carY = floor - carHeight;
    var dx = 0.1 * canvas.width;
    var sunX = 100;
    var sunY = 50;

    // Create the ground
    var grad = c.createLinearGradient(0, floor, 0, canvas.height);
    grad.addColorStop(0, "green");
    grad.addColorStop(1, "black");
    c.fillStyle = grad;
    c.fillRect(0, floor, canvas.width, canvas.height);

    // common size for windows
    var windowSpacing = 2, floorSpacing = 3;
    var windowHeight = 5, windowWidth = 3;

    // colors of buildings
    var blgColors = ['red', 'blue', 'gray', 'orange'];

    //build a building
    var build = function () {
        var x0 = Math.random() * canvas.width;
        var blgWidth = (windowWidth + windowSpacing) * Math.floor(Math.random() * 10);
        var blgHeight = Math.random() * canvas.height / 2;
        // clear the canvas above floor
        c.clearRect(0, 0, canvas.width, canvas.height / 2);

        // draw the sun
        var radius = 30;
        c.beginPath();
        c.arc(sunX, sunY, radius, 0, 2 * Math.PI, false);
        sunX = modulo(sunX + dx, canvas.width);
        c.fillStyle = "orange";
        c.fill();

        // draw the building
        c.fillStyle = blgColors[Math.floor(Math.random() * blgColors.length)];
        c.fillRect(x0, floor - blgHeight, blgWidth, blgHeight);
        c.fillStyle = "yellow";
        var light = true;
        for (var y = floor - floorSpacing; y > floor - blgHeight; y -= floorSpacing + windowHeight) {
            for (var x = windowSpacing; x < blgWidth - windowWidth; x += windowSpacing + windowWidth) {
                // not all lines in each building
                if (light) {
                    c.fillRect(x0 + x, y - windowHeight, windowWidth, windowHeight);
                    light = false;
                } else {
                    light = true;
                }
            }
        }

        // draw the car
        var carImg = new Image();
        carImg.src = "cartoon-cars.png";
        c.drawImage(carImg, carX, carY, carWidth, carHeight);
        carX = modulo(carX - dx, canvas.width);
    };

    return {
        build: build
    }
};

window.onload = function () {
    var app = createApp(document.querySelector("canvas"));
    document.getElementById("build").onclick = app.build;
    setInterval(app.build, 500);
};


