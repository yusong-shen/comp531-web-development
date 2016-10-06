/**
 * Created by yusong on 10/5/16.
 */
var myScore;
var myHole;
var mySun;
var iceBear;
var grayFish;
var goldFish;
var blueFish;
var fishPool = {};
var curFish;
var startButton;
var remainingTry;
const defaultTries = 10;

var myGameArea = {
    canvas : document.createElement('canvas'),
    start : function () {
        this.canvas.width = 1024;
        this.canvas.height = 614;
        document.body.children[1].appendChild(this.canvas);

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
        myScore = new GameComponent("25px", "Consolas", "black", 0.7 * this.canvas.width, 40, "text");
        myScore.score = 0;

        // draw remaining try
        remainingTry = new GameComponent("25px", "Consolas", "black", 0.05 * this.canvas.width, 40, "text");
        remainingTry.score = defaultTries;

        this.drawScoreboard(myScore.score, remainingTry.score);

        this.drawGround();

        // color : blue 100
        var holeX =  0.8 * this.canvas.width;
        myHole = new GameComponent(radius, radius / 2, "#BBDEFB", holeX, this.floor, "ellipse");
        myHole.draw();

        var rand = Math.random();

        // default grey fish
        // fish image size : 182 * 198
        var fishImg = new Image();
        var fishSize = 0.05 * this.canvas.width;
        var fishX = holeX - 0.5 * fishSize;
        var fishY = this.floor - fishSize;
        fishImg.onload = function () {
            grayFish = new GameComponent(fishSize, fishSize, "green", fishX, fishY, "image", fishImg);
            grayFish.defaultSpeedX = -5;
            grayFish.defaultSpeedY = -4;
            grayFish.speedY = grayFish.defaultSpeedY;
            grayFish.gravity = 0.1;
            fishPool['grayFish'] = grayFish;
            if (rand < 0.6) {
                grayFish.draw();
                curFish = grayFish;
            }
        };
        fishImg.src = "/img/GreenFish.png";

        // load other fish
        var goldFishImg = new Image();
        goldFishImg.onload = function () {
            goldFish = new GameComponent(fishSize, fishSize, "orange", fishX, fishY, "image", goldFishImg);
            goldFish.defaultSpeedX = -10;
            goldFish.defaultSpeedY = -6;
            goldFish.speedY = goldFish.defaultSpeedY;
            goldFish.gravity = 0.2;
            fishPool['goldFish'] = goldFish;
            if (rand >= 0.6 && rand < 0.8) {
                goldFish.draw();
                curFish = goldFish;
            }
        };
        goldFishImg.src = "/img/OrangeFish.png";

        var blueFishImg = new Image();
        blueFishImg.onload = function () {
            blueFish = new GameComponent(fishSize, fishSize, "blue", fishX, fishY, "image", blueFishImg);
            blueFish.defaultSpeedX = -8;
            blueFish.defaultSpeedY = -5;
            blueFish.speedY = blueFish.defaultSpeedY;
            blueFish.gravity = 0.15;
            fishPool['blueFish'] = blueFish;
            if (rand >= 0.8) {
                blueFish.draw();
                curFish = blueFish;
            }
        };
        blueFishImg.src = "/img/BlueFish.png";


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
        
        this.chooseFish();
        curFish.x = myHole.x - 0.5 * grayFish.width;
        curFish.y = this.floor - grayFish.width;
        curFish.draw();

        iceBear.draw();

        if (gameOver) {
            startButton.draw();
        }
    },

    chooseFish : function () {
        var randNum = Math.random();
        console.log('random number is ' + randNum);
        if (randNum < 0.6) {
            console.log('choose grayFish');
            curFish = grayFish;
            curFish.gravity = 0.1;
        } else if (randNum > 0.8) {
            console.log('choose blueFish');
            curFish = blueFish;
            curFish.gravity = 0.1;
        } else {
            console.log('choose goldFish');
            curFish = goldFish;
            curFish.gravity = 0.2;
        }
        curFish.speedY = curFish.defaultSpeedY;
    }
};