'use strict';

var createApp = function (canvas) {
    // canvas : 600 * 400
    var c = canvas.getContext("2d");
    var floor = canvas.height - canvas.height / 5;


    var draw_ground = function (floor) {
        // Create the ground
        var grad = c.createLinearGradient(0, floor, 0, canvas.height);
        grad.addColorStop(0, "#64B5F6"); // blue 300
        grad.addColorStop(1, "#BBDEFB"); // blue 200
        c.fillStyle = grad;
        c.fillRect(0, floor, canvas.width, canvas.height);
    };

    draw_ground(floor);
    
    var draw_hole = function (radius, color, x, y) {
        c.beginPath();
        // c.arc(x, y, radius, 0, 2 * Math.PI, false);
        c.ellipse(x, y, radius, radius / 2, 0 * Math.PI/180, 0, 2 * Math.PI);

        c.fillStyle = color;
        c.fill();
    };
    // color : blue 100
    var holeX = 0.7 * canvas.width;
    draw_hole(30, "#BBDEFB", holeX, floor);

    // bear image size : 274 * 370
    var bearImg = new Image();
    bearImg.src = "/img/ice-bear.png";
    var bearX = 0.75 * canvas.width;
    var bearWidth = 0.1 * canvas.width;
    var bearHeight = 1.5 * bearWidth;
    var bearY = floor - bearHeight;
    // have to wait for image loading
    bearImg.onload = function () {
        c.drawImage(bearImg, bearX, bearY, bearWidth, bearHeight);
    };

    // fish image size : 182 * 198
    var fishImg = new Image();
    fishImg.src = "/img/gray-fish.png";
    var fishSize = 0.5 * bearWidth;
    fishImg.onload = function () {
        c.drawImage(fishImg, holeX - 0.5 * fishSize, floor - fishSize, fishSize, fishSize);
    };

};

window.onload = function () {
    var app = createApp(document.querySelector("canvas"));

};
