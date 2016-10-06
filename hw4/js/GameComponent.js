/**
 * Created by yusong on 10/5/16.
 */

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
