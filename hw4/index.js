'use strict';

function modulo(x, y) {
    return ((x % y) + y) % y;
};

function init() {
    var canvas = document.createElement('canvas');
    canvas.width = 600;
    canvas.height = 400;
    document.body.childNodes[1].appendChild(canvas);

    return canvas;
}

function main() {
    var now = Date.now();

    // update();
    // render();

    window.requestAnimationFrame(main);
}

var createApp = function (canvas) {
    // canvas : 600 * 400
    var c = canvas.getContext("2d");
    var floor = canvas.height - canvas.height / 5;
    var dx = 2;
    var sunX = 100;
    var sunY = 50;

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

    // fish image size : 182 * 198
    var fishImg = new Image();
    // bear image size : 274 * 370
    var bearImg = new Image();
    var holeX = 0.8 * canvas.width;
    var bearX = 0.85 * canvas.width;
    var bearWidth = 0.1 * canvas.width;
    var bearHeight = 1.5 * bearWidth;
    var bearY = floor - bearHeight;
    // c.drawImage(bearImg, bearX, bearY, bearWidth, bearHeight);
    // have to wait for image loading
    bearImg.onload = function () {
        c.drawImage(bearImg, bearX, bearY, bearWidth, bearHeight);
    };
    bearImg.src = "/img/ice-bear.png";


    var fishSize = 0.5 * bearWidth;
    var fishX = holeX - 0.5 * fishSize;
    var fishY = floor - fishSize;
    // c.drawImage(fishImg, fishX, fishY, fishSize, fishSize);

    fishImg.onload = function () {
        c.drawImage(fishImg, fishX, fishY, fishSize, fishSize);
    };
    fishImg.src = "/img/gray-fish.png";


    var draw = function () {
        // clear the canvas above floor
        c.clearRect(0, 0, canvas.width, floor);

        // color : blue 100
        var holeX = 0.8 * canvas.width;
        draw_hole(30, "#BBDEFB", holeX, floor);

        // draw the sun
        var radius = 30;
        c.beginPath();
        c.arc(sunX, sunY, radius, 0, 2 * Math.PI, false);
        sunX = modulo(sunX + dx, canvas.width);
        c.fillStyle = "orange";
        c.fill();



        bearX = 0.85 * canvas.width;
        bearWidth = 0.1 * canvas.width;
        bearHeight = 1.5 * bearWidth;
        bearY = floor - bearHeight;
        c.drawImage(bearImg, bearX, bearY, bearWidth, bearHeight);
        // have to wait for image loading
        // bearImg.onload = function () {
        //     c.drawImage(bearImg, bearX, bearY, bearWidth, bearHeight);
        // };
        // bearImg.src = "/img/ice-bear.png";


        fishSize = 0.5 * bearWidth;
        fishX = modulo(fishX - 2* dx, canvas.width);
        fishY = floor - fishSize;
        c.drawImage(fishImg, fishX, fishY, fishSize, fishSize);

        // fishImg.onload = function () {
        //     c.drawImage(fishImg, fishX, fishY, fishSize, fishSize);
        // };
        // fishImg.src = "/img/gray-fish.png";

        // window.requestAnimationFrame(draw);
    };

    return {
        draw: draw
    }    
};

window.onload = function () {
    var canvas = init();
    var app = createApp(canvas);
    // app.draw();
    var frame_rate = 1000 / 30;
    setInterval(app.draw, frame_rate);
};
