var startGame = false;
var isFiring = false;

var enemyX = 100, enemyY = 0;
var x = 400, y = 400;
var bulletX = x + 25, bulletY = y - 10;
var canvas = document.getElementById('myCanvas');
ctx = canvas.getContext('2d');

var enemyAlive = true;
var userAlive = true;
var bulletAlive = true;

$(document).ready(function ($) {

    $('#btnCheck').on('click', function () {
        startGame = true;
    });

    $('body').on('keypress', function (e) {
        var actualKeyCode = e.keyCode;               // Get the Unicode value
        var actualCharacter = String.fromCharCode(actualKeyCode);

        if (actualCharacter === "w") {
            y -= 10;
            if (isFiring === false) {
                bulletY = bulletY - 10;
            }
        }
        else if (actualCharacter === "a") {
            if (x - 10 >= 0) {
                x -= 10;
                if (isFiring === false) {
                    bulletX = bulletX - 10;
                }
            }
        }
        else if (actualCharacter === "s") {
            y += 10;
            if (isFiring === false) {
                bulletY = bulletY + 10;
            }
        }
        else if (actualCharacter === "d") {
            x += 10;
            if (isFiring === false) {
                bulletX = bulletX + 10;
            }
        }

        else if (actualKeyCode === 32) {
            setInterval(fire, 5);
            isFiring = true;
        }

        //draw();

    })
});

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (userAlive) {
        ctx.fillRect(x, y, 50, 50);
    }
    if (enemyAlive) {
        ctx.fillRect(enemyX, enemyY, 20, 20);
    }
    if (bulletAlive) {
        ctx.fillRect(bulletX, bulletY, 5, 5);
    }
}

function fallingEnemy() {

    if (startGame) {
        enemyY += 10;
    }
    //  draw();
}

function fire() {
    if (isFiring) {
        bulletY -= 1;
        if (checkCollision(bulletX, bulletY, 5, 5, enemyX, enemyY, 15, 15)) {
            ctx.clearRect(enemyX, enemyY, 20, 20);
            enemyAlive = false;
            bulletAlive = false;
            draw();
        }
    }

}

setInterval(fallingEnemy, 1000);
setInterval(draw, 1000 / 60);

// This performs simple rectangular collision detection

function checkCollision(x1, y1, h1, w1, x2, y2, h2, w2) {

    if (x1 < x2 + w2 && x1 + w1 > x2 && y1 < y2 + h2 && y1 + h1 > y2) {
        return true;
    }
    else {
        return false;
    }
}


/*
 var canvas = document.getElementById('myCanvas'),
   ctx = canvas.getContext('2d'),
   rect = {},
   drag = false;

function init() {
 canvas.addEventListener('mousedown', mouseDown, false);
 canvas.addEventListener('mouseup', mouseUp, false);
 canvas.addEventListener('mousemove', mouseMove, false);
}

function mouseDown(e) {
 rect.startX = e.pageX - this.offsetLeft;
 rect.startY = e.pageY - this.offsetTop;
 drag = true;
}

function mouseUp() {
   drag = false;
   ctx.clearRect(0,0,canvas.width,canvas.height);
   if(!drag)
   {
       console.log(rect.w);
       ctx.fillRect(rect.startX, rect.startY, rect.w, rect.h);
   }
}
function mouseMove(e) {
 if (drag) {
   rect.w = (e.pageX - this.offsetLeft) - rect.startX;
   rect.h = (e.pageY - this.offsetTop) - rect.startY ;
   ctx.clearRect(0,0,canvas.width,canvas.height);
   draw();
 }
}

function draw() {
   ctx.setLineDash([6]);
   ctx.strokeRect(rect.startX, rect.startY, rect.w, rect.h);
}

init();
*/