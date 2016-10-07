/**
 * Created by yusong on 10/4/16.
 *
 * This file includes main game logic
 *
 * Thanks for W3Schools HTML5 Game Tutorial
 * http://www.w3schools.com/graphics/game_intro.asp
 */


var isHit = false;
var startPlay = false;
var numHitting = 0;
var isClick = false;
var hitGold = false;
var hitBlue = false;

function startGame() {
    myGameArea.start();
}

function updateAfterAHit() {
    var tempScore = Math.round(myHole.x - curFish.x);
    if (curFish.color === "orange") {
        // console.log('Double score!');
        hitGold = true;
        tempScore *= 2;
    }
    if (curFish.color === "blue") {
        // console.log('Get another change!');
        hitBlue = true;
        remainingTry.score += 1;
    }
    myScore.score += tempScore;
    myGameArea.reset(myScore.score, remainingTry.score, false);
    isHit = false;
}

function updateAfterGameover() {
    var gameMsg = 'Game over! Hit the fish ' + numHitting + ' times.\n';
    if (numHitting >= 0.5 * defaultTries) {
        gameMsg += 'Good catcher bear! Got bonus score 500.\n';
        myScore.score += 500;
    } else if (numHitting >= 0.9 * defaultTries) {
        gameMsg += 'Excellent catcher bear! Got bonus score 1000.\n';
        myScore.score += 1000;
    }
    gameMsg += 'Your score is ' + myScore.score + ' .';
    window.alert(gameMsg);
    myGameArea.init();
    // reset the number of hitting
    numHitting = 0;
}

// main loop for the game
function updateGameArea() {
    if (startPlay) {
        // clear the canvas
        myGameArea.clear();
        myGameArea.drawGround();

        // draw the hole
        myHole.draw();

        // draw the sun
        mySun.updatePos();
        mySun.draw();

        // update score
        myScore.text = "Score: " + myScore.score;
        myScore.draw();

        remainingTry.text = "Remaining Tries: " + remainingTry.score;
        if (hitGold) {
            remainingTry.text += '\n Double this score!';
            setTimeout(function () {
                hitGold = false;
            }, 1000)

        } else if (hitBlue) {
            remainingTry.text += '\n Get another chance!';
            setTimeout(function () {
                hitBlue = false;
            }, 1000)
        }
        remainingTry.draw();

        iceBear.draw();

        curFish.updatePos();
        curFish.draw();

        // click fire animation
        if (isClick) {
            fire.draw();
            setTimeout(function () {
                isClick = false;
            }, 300);
        }

        if (curFish.hitBottom()) {
            curFish.y = myGameArea.floor - grayFish.height;
            // initial state, fish jump out from hole again and again
            if (!isHit) {
                curFish.speedY = curFish.defaultSpeedY;
                curFish.gravitySpeed = 0;
            }

            // fish is flying
            // hit the floor will reduce momentum
            else {
                curFish.y = myGameArea.floor - grayFish.height;
                curFish.speedY *= 0.5;
                curFish.gravitySpeed = 0;
                curFish.speedX *= 0.5;
                if (curFish.isStop()) {
                    // console.log("stop!");
                    curFish.speedX = 0;
                    curFish.speedY = 0;
                    updateAfterAHit();
                    isHit = false;
                }
            }
        }



    }
    // callback
    window.requestAnimationFrame(updateGameArea);
}

 function updateAfterClick(clickX, clickY) {
    if (!startPlay ) {
        if (startButton.hitElement(clickX, clickY)) {
            startPlay = true;
        }
    } else {
        // Game over!
        if (remainingTry.score <= 0) {
            updateAfterGameover();
            startPlay = false;
            return;
        }
        if (!isHit) {
            remainingTry.score -= 1;
            if (curFish.hitElement(clickX, clickY)) {
                if (numHitting < defaultTries) {
                    numHitting += 1;
                }
                // console.log("number of hitting : " + numHitting);
                // fish is not yet hit, give it a initial x speed
                isHit = true;
                curFish.speedX = curFish.defaultSpeedX;
            }
        }
    }
};

window.onload = function () {
    startGame();

    // get the coordinates of a mouse click inside canvas
    // reference : http://stackoverflow.com/a/18053642/2943842
    myGameArea.canvas.addEventListener('click', function (event) {
        isClick = true;
        var rect = myGameArea.canvas.getBoundingClientRect();
        var x = event.clientX - rect.left;
        var y = event.clientY - rect.top;
        // console.log("x: " + x + ", y : " + y);
        fire.x = x;
        fire.y = y;
        updateAfterClick(x, y);
    });

    updateGameArea();


};