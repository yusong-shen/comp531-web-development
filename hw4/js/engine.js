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