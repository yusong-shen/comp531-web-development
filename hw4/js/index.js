/**
 * Created by yusong on 10/4/16.
 * Thanks for W3Schools HTML5 Game Tutorial
 * http://www.w3schools.com/graphics/game_intro.asp
 */

// updated modulo function to deal with negative number
function modulo(n, m) {
    return ((n % m) + m) % m;
}

function startGame() {
    myGameArea.start();
}

var myScore;
var myHole;
var mySun;
var iceBear;
var grayFish;
var startButton;
var remainingTry;
var isHit = false;
var startPlay = false;
var startHit = false;

var myGameArea = {
    canvas : document.createElement('canvas'),
    start : function () {
        this.canvas.width = 600;
        this.canvas.height = 400;
        document.body.childNodes[1].appendChild(this.canvas);
        this.context = this.canvas.getContext("2d");
        this.floor = this.canvas.height - this.canvas.height / 5;

        this.reset();
    },

    draw_ground : function () {
    // Create the ground
        var grad = this.context.createLinearGradient(0, this.floor, 0, this.canvas.height);
        grad.addColorStop(0, "#64B5F6"); // blue 300
        grad.addColorStop(1, "#BBDEFB"); // blue 200
        this.context.fillStyle = grad;
        this.context.fillRect(0, this.floor, this.canvas.width, this.canvas.height);
    },

    clear : function () {
        // clear the canvas above floor
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },

    reset : function () {
        // clear the canvas
        this.clear();

        var sunX = 100;
        var sunY = 50;
        var radius = 30;

        // draw sun
        mySun = new GameComponent(radius, radius, "orange", sunX, sunY, "circle");
        mySun.speedX = 0.5;
        mySun.draw();

        // draw score board
        myScore = new GameComponent("25px", "Consolas", "black", 400, 40, "text");
        myScore.text = "Score: " + myScore.score;
        myScore.draw();

        // draw remaining try
        remainingTry = new GameComponent("25px", "Consolas", "black", 40, 40, "text");
        remainingTry.score = 5;
        remainingTry.text = "Remaining Tries: " + remainingTry.score;
        remainingTry.draw();

        this.draw_ground();

        // color : blue 100
        var holeX =  0.8 * this.canvas.width;
        myHole = new GameComponent(radius, radius / 2, "#BBDEFB", holeX, this.floor, "ellipse");

        // fish image size : 182 * 198
        var fishImg = new Image();
        var fishSize = 0.05 * this.canvas.width;
        var fishX = holeX - 0.5 * fishSize;
        var fishY = this.floor - fishSize;
        fishImg.onload = function () {
            grayFish = new GameComponent(fishSize, fishSize, "", fishX, fishY, "image", fishImg);
            grayFish.speedY = -4;
            grayFish.gravity = 0.1;
            grayFish.draw();
        };
        fishImg.src = "/img/gray-fish.png";


        // bear image size : 274 * 370
        var bearImg = new Image();
        var bearX = 0.85 * this.canvas.width;
        var bearWidth = 0.1 * this.canvas.width;
        var bearHeight = 1.5 * bearWidth;
        var bearY = this.floor - bearHeight;
        // have to wait for image loading
        bearImg.onload = function () {
            iceBear = new GameComponent(bearWidth, bearHeight, "", bearX, bearY, "image", bearImg);
            iceBear.draw();
        };
        bearImg.src = "/img/ice-bear.png";

        // draw the start button : 300 * 109
        var btnImg = new Image();
        var btnWidth = 150;
        var btnHeight = 53;
        btnImg.onload = function () {
            startButton = new GameComponent(btnWidth, btnHeight, "",
                0.5 * (myGameArea.canvas.width - btnWidth), 0.5 * (myGameArea.canvas.height - btnHeight),
                "image", btnImg);
            startButton.draw();
        };
        btnImg.src = "/img/play_button.png";
    }
};

var GameComponent = function(_width, _height, _color, _x, _y, _type, _image) {
    this.type = _type;
    this.score = 0;
    this.width = _width;
    this.height = _height;
    this.color = _color;
    this.speedX = 0;
    this.speedY = 0;
    this.x = _x;
    this.y = _y;
    this.gravity = 0;
    this.gravitySpeed = 0;
    this.image = _image;
};

// update drawing
GameComponent.prototype.draw = function () {
    var ctx = myGameArea.context;
    if (this.type == "text") {
        ctx.font = this.width + " " + this.height;
        ctx.fillStyle = this.color;
        ctx.fillText(this.text, this.x, this.y);
    }
    else if (this.type == "ellipse") {
        ctx.beginPath();
        ctx.ellipse(this.x, this.y, this.width, this.height, 0, 0, 2 * Math.PI);
        ctx.fillStyle = this.color;
        ctx.fill();
    } else if (this.type == "circle") {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.width, 0, 2 * Math.PI, false);
        ctx.fillStyle = this.color;
        ctx.fill();
    } else if (this.type == "image") {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
};

// update position
GameComponent.prototype.updatePos = function () {
    this.gravitySpeed += this.gravity;
    this.x += this.speedX;
    // make sure component stay inside boundary
    this.x = modulo(this.x, myGameArea.canvas.width);
    this.y += this.speedY + this.gravitySpeed;
    this.y = modulo(this.y, myGameArea.canvas.height);
};

// detect if component hit the bottom
GameComponent.prototype.hitBottom = function () {
    return (this.y > myGameArea.floor - this.height);
};

GameComponent.prototype.hitElement = function (clickX, clickY) {
    return (clickX >= this.x && clickX <= this.x + this.width &&
        clickY >= this.y && clickY <= this.y + this.height);
};

GameComponent.prototype.isStop = function () {
    return (Math.abs(this.speedX) < 1e-6 && Math.abs(this.speedY) < 1e-6);
};

// main loop for the game
function updateGameArea() {
    if (!startPlay) {
        // draw score board
        myScore = new GameComponent("25px", "Consolas", "black", 400, 40, "text");
        myScore.text = "Score: " + myScore.score;
        myScore.draw();

        // draw remaining try
        remainingTry = new GameComponent("25px", "Consolas", "black", 40, 40, "text");
        remainingTry.score = 5;
        remainingTry.text = "Remaining Tries: " + remainingTry.score;
        remainingTry.draw();
    }
    else {

        // clear the canvas
        myGameArea.clear();
        myGameArea.draw_ground();

        // draw the hole
        myHole.draw();

        // draw the sun
        mySun.updatePos();
        mySun.draw();

        // update score
        myScore.text = "SCORE: " + myScore.score;
        myScore.draw();
        remainingTry.text = "Remaining Tries: " + remainingTry.score;
        remainingTry.draw();

        if (iceBear) {
            iceBear.draw();
        }

        if (grayFish) {
            grayFish.updatePos();
            grayFish.draw();
            // initial state, fish jump out from hole again and again
            if (!isHit) {
                if (grayFish.hitBottom()) {
                    grayFish.y = myGameArea.floor - grayFish.height;
                    grayFish.speedY = -4;
                    grayFish.gravitySpeed = 0;
                }
            }

            // hit the floor will reduce momentum
            if (grayFish.hitBottom()) {
                grayFish.y = myGameArea.floor - grayFish.height;
                grayFish.speedY *= 0.5;
                grayFish.gravitySpeed = 0;
                grayFish.speedX *= 0.5;
                if (grayFish.isStop()) {
                    // console.log("stop!");
                    grayFish.speedX = 0;
                    grayFish.speedY = 0;
                }
            }
        }
    }
    // callback
    window.requestAnimationFrame(updateGameArea);
}

var updateGameEvent = function (clickX, clickY) {
    if (!startPlay ) {
        // TODO
        if (startButton.hitElement(clickX, clickY)) {
            console.log("hit start button!");
            startPlay = true;
        }
    } else {
        remainingTry.score -= 1;
        if (remainingTry.score < 0) {
            startPlay = false;
            myGameArea.reset();
            return;
        }
        if (grayFish.hitElement(clickX, clickY)) {
            console.log("hit fish!");
            // if fish is flying, player can't hit fish anymore
            if (!startHit) {
                isHit = true;
                grayFish.speedX = -5;
            }
        }
    }
};

window.onload = function () {
    startGame();

    // get the coordinates of a mouse click inside canvas
    // reference : http://stackoverflow.com/a/18053642/2943842
    myGameArea.canvas.addEventListener('click', function (event) {
        var rect = myGameArea.canvas.getBoundingClientRect();
        var x = event.clientX - rect.left;
        var y = event.clientY - rect.top;
        console.log("x: " + x + ", y : " + y);
        updateGameEvent(x, y);
    });

    updateGameArea();


};