/**
 * Created by yusong on 10/4/16.
 * Thanks for W3Schools HTML5 Game Tutorial
 * http://www.w3schools.com/graphics/game_intro.asp
 */


var isHit = false;
var startPlay = false;
var startHit = false;


function startGame() {
    myGameArea.start();
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
        remainingTry.draw();

        if (iceBear) {
            iceBear.draw();
        }

        if (curFish) {
            curFish.updatePos();
            curFish.draw();
            // initial state, fish jump out from hole again and again
            if (!isHit) {
                if (curFish.hitBottom()) {
                    curFish.y = myGameArea.floor - grayFish.height;
                    curFish.speedY = curFish.defaultSpeedY;
                    curFish.gravitySpeed = 0;
                }
            }

            // hit the floor will reduce momentum
            if (curFish.hitBottom()) {
                curFish.y = myGameArea.floor - grayFish.height;
                curFish.speedY *= 0.5;
                curFish.gravitySpeed = 0;
                curFish.speedX *= 0.5;
                if (curFish.isStop()) {
                    // console.log("stop!");
                    curFish.speedX = 0;
                    curFish.speedY = 0;
                    if (isHit){
                        // setTimeout(myGameArea.reset, 1000, myScore.score, remainingTry.score, false);
                        var tempScore = Math.round(myHole.x - curFish.x);
                        if (curFish.color === "orange") {
                            console.log('Double score!');
                            tempScore *= 2;
                        }
                        if (curFish.color === "blue") {
                            console.log('Get another change!');
                            remainingTry.score += 1;
                        }
                        myScore.score += tempScore;
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
        if (curFish.hitElement(clickX, clickY)) {
            console.log("hit fish!");
            // if fish is flying, player can't hit fish anymore
            if (!startHit) {
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
        var rect = myGameArea.canvas.getBoundingClientRect();
        var x = event.clientX - rect.left;
        var y = event.clientY - rect.top;
        console.log("x: " + x + ", y : " + y);
        updateGameEvent(x, y);
    });

    updateGameArea();


};