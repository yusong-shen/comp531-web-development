/**
 * Created by yusong on 10/4/16.
 */

function modulo(x, y) {
    return ((x % y) + y) % y;
}

function startGame() {
    myGameArea.start();
}

var myGameArea = {
    canvas : document.createElement('canvas'),
    start : function () {
        this.canvas.width = 600;
        this.canvas.height = 400;
        document.body.childNodes[1].appendChild(this.canvas);
        this.context = this.canvas.getContext("2d");
        this.floor = this.canvas.height - this.canvas.height / 5;
        this.dx = 2;
        this.sunX = 100;
        this.sunY = 50;
        this.radius = 30;
        var c = this.context;

        // draw sun
        c.beginPath();
        c.arc(this.sunX, this.sunY, this.radius, 0, 2 * Math.PI, false);
        c.fillStyle = "orange";
        c.fill();

        this.draw_ground();
        // color : blue 100
        this.holeX = 0.8 * this.canvas.width;
        var holeX =  this.holeX;
        this.draw_hole(30, "#BBDEFB", holeX, this.floor);

        // fish image size : 182 * 198
        this.fishImg = new Image();
        var fishImg = this.fishImg;
        this.fishSize = 0.05 * this.canvas.width;
        var fishSize = this.fishSize;
        this.fishX = holeX - 0.5 * fishSize;
        var fishX = this.fishX;
        this.fishY = this.floor - fishSize;
        var fishY = this.fishY;
        this.fishImg.onload = function () {
            c.drawImage(fishImg, fishX, fishY, fishSize, fishSize);
        };
        this.fishImg.src = "/img/gray-fish.png";

        // bear image size : 274 * 370
        this.bearImg = new Image();
        var bearImg = this.bearImg;
        this.bearX = 0.85 * this.canvas.width;
        var bearX = this.bearX;
        this.bearWidth = 0.1 * this.canvas.width;
        var bearWidth = this.bearWidth;
        this.bearHeight = 1.5 * bearWidth;
        var bearHeight = this.bearHeight;
        this.bearY = this.floor - bearHeight;
        var bearY = this.bearY;
        // have to wait for image loading
        this.bearImg.onload = function () {
            c.drawImage(bearImg, bearX, bearY, bearWidth, bearHeight);
        };
        this.bearImg.src = "/img/ice-bear.png";

    },

    draw_ground : function () {
    // Create the ground
        var grad = this.context.createLinearGradient(0, this.floor, 0, this.canvas.height);
        grad.addColorStop(0, "#64B5F6"); // blue 300
        grad.addColorStop(1, "#BBDEFB"); // blue 200
        this.context.fillStyle = grad;
        this.context.fillRect(0, this.floor, this.canvas.width, this.canvas.height);
    },

    draw_hole : function (radius, color, x, y) {
        this.context.beginPath();
        // c.arc(x, y, radius, 0, 2 * Math.PI, false);
        this.context.ellipse(x, y, radius, radius / 2, 0, 0, 2 * Math.PI);

        this.context.fillStyle = color;
        this.context.fill();
    },
    clear : function () {
        // clear the canvas above floor
        this.cotext.clearRect(0, 0, this.canvas.width, this.floor);
    }
};

function draw() {
    var canvas = myGameArea.canvas;
    var ctx = myGameArea.context;
    var floor = myGameArea.floor;
    // clear the canvas above floor
    // myGameArea.clear();
    ctx.clearRect(0, 0, canvas.width, floor);

    // color : blue 100
    var holeX = myGameArea.holeX;
    myGameArea.draw_hole(30, "#BBDEFB", holeX, floor);

    // draw the sun
    var radius = 30;
    ctx.beginPath();
    ctx.arc(myGameArea.sunX, myGameArea.sunY, radius, 0, 2 * Math.PI, false);
    myGameArea.sunX = modulo(myGameArea.sunX + myGameArea.dx, canvas.width);
    ctx.fillStyle = "orange";
    ctx.fill();


    var bearX = myGameArea.bearX;
    var bearWidth = myGameArea.bearWidth;
    var bearHeight = myGameArea.bearHeight;
    var bearY = myGameArea.bearY;
    ctx.drawImage(myGameArea.bearImg, bearX, bearY, bearWidth, bearHeight);


    var fishSize = myGameArea.fishSize;
    var fishY = myGameArea.fishY;
    ctx.drawImage(myGameArea.fishImg, myGameArea.fishX, fishY, fishSize, fishSize);
    myGameArea.fishX = modulo(myGameArea.fishX - 2* myGameArea.dx, canvas.width);

    window.requestAnimationFrame(draw);
}

window.onload = function () {
    startGame();
    draw();
};