/**
 * Created by yusong on 10/4/16.
 * Thanks for W3Schools HTML5 Game Tutorial
 * http://www.w3schools.com/graphics/game_intro.asp
 */

var myScore;
var myHole;
var mySun;
var iceBear;
var grayFish;
var startButton;
var remainingTry;


const defaultTries = 5;

var isHit = false;
var startPlay = false;
var startHit = false;

// updated modulo function to deal with negative number
function modulo(n, m) {
    return ((n % m) + m) % m;
}

function startGame() {
    myGameArea.start();
}

var myGameArea = {
    canvas : document.createElement('canvas'),
    start : function () {
        this.canvas.width = 1000;
        this.canvas.height = 600;
        document.body.childNodes[1].appendChild(this.canvas);
        this.context = this.canvas.getContext("2d");
        this.floor = this.canvas.height - this.canvas.height / 5;

        this.init();
    },

    // initialize all GameComponents
    init : function () {
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
        myScore.score = 0;

        // draw remaining try
        remainingTry = new GameComponent("25px", "Consolas", "black", 40, 40, "text");
        remainingTry.score = defaultTries;

        this.drawScoreboard(myScore.score, remainingTry.score);

        this.drawGround();

        // color : blue 100
        var holeX =  0.8 * this.canvas.width;
        myHole = new GameComponent(radius, radius / 2, "#BBDEFB", holeX, this.floor, "ellipse");
        myHole.draw();

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

    },

    drawGround : function () {
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

    drawScoreboard : function (score, tries) {
        // draw score board
        myScore.text = "Score: " + score;
        myScore.draw();

        // draw remaining try
        remainingTry.text = "Remaining Tries: " + tries;
        remainingTry.draw();
    },

    reset : function (score, tries, gameOver) {
        // clear the canvas
        this.clear();

        if (gameOver) {
            mySun.x = 100;
            mySun.Y = 50;
        }
        mySun.speedX = 0.5;
        mySun.draw();

        myScore.score = score;
        remainingTry.score = tries;

        this.drawScoreboard(myScore.score, remainingTry.score);
        this.drawGround();

        myHole.draw();

        grayFish.x = myHole.x - 0.5 * grayFish.width;;
        grayFish.y = this.floor - grayFish.width;
        grayFish.speedY = -4;
        grayFish.gravity = 0.1;
        grayFish.draw();

        iceBear.draw();

        if (gameOver) {
            startButton.draw();
        }
    }
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
        myGameArea.drawGround();

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
                    if (isHit){
                        // setTimeout(myGameArea.reset, 1000, myScore.score, remainingTry.score, false);
                        myScore.score += Math.round(myHole.x - grayFish.x);
                        myGameArea.reset(myScore.score, remainingTry.score, false);
                        isHit = false;
                    }
                }
            }
        }
    }
    // callback
    window.requestAnimationFrame(updateGameArea);
}

var updateGameEvent = function (clickX, clickY) {
    if (!startPlay ) {
        if (startButton.hitElement(clickX, clickY)) {
            console.log("hit start button!");
            startPlay = true;
        }
    } else {
        // Game over!
        remainingTry.score -= 1;
        if (remainingTry.score < 0) {
            startPlay = false;
            window.alert('Game over! Your score is ' + myScore.score + ' .');
            myGameArea.init();
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