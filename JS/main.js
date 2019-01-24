document.addEventListener("DOMContentLoaded", function () {
    console.log("game Init");
    //========================| Game Environment Setup |=====================|
    //----| Public variables for canvas funcrtions & game flow|----
    let canvas = document.querySelector('canvas');
    let context = canvas.getContext('2d');
    let img = document.getElementById('imageWater');
    let pScore = document.getElementById('pscore');
    //==================| Creates the canvas background|==============|
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    //=====================| Puddle Spawn |=======================
    function GenPuddle(xpos, ypos, width, height) {
        this.xpos = xpos;
        this.ypos = ypos;
        context.fillStyle = "blue";
        //context.drawImage(img, 10, 10);
        context.fillRect(xpos, ypos, width, height);
    }
    //======================| Player Object|========================
    var dx = 1;
    var dy = 1;
    function Obj(x, y, w, h) {
        this.x = x;
        this.y = y;
        context.fillStyle = "green";
        context.fillRect(x, y, w, h);
    }
    let player1 = new Obj(100, 200, 50, 50);
    //=========================================================================================================================================================================

    var isLeft = false;
    var isRight = false;
    var isUp = false;
    var isDown = false;

    document.addEventListener('keydown', function () {
        if (event.key === "w") {
            console.log("player y -pos" + player1.y);
            isUp = true;
            isDown = false;
            isLeft = false;
            isRight = false;
        }
        if (event.key === "s") {
            console.log("player y +pos" + player1.y);
            isUp = false;
            isDown = true;
            isLeft = false;
            isRight = false;
        }
        if (event.key === "a") {
            console.log("player x -pos" + player1.x);
            isUp = false;
            isDown = false;
            isLeft = true;
            isRight = false;
        }
        if (event.key === "d") {
            console.log("player x +pos" + player1.x);
            isUp = false;
            isDown = false;
            isLeft = false;
            isRight = true;
        };
    });

    var xp = 70;
    var yp = 70;
    //====================| variables for the pawns |================================================================================================
    let x1 = Math.random() * window.innerWidth;
    let y1 = Math.random() * window.innerHeight;
    let x2 = Math.random() * window.innerWidth;
    let y2 = Math.random() * window.innerHeight;
    let x3 = Math.random() * window.innerWidth;
    let y3 = Math.random() * window.innerHeight;
    let x4 = Math.random() * window.innerWidth;
    let y4 = Math.random() * window.innerHeight;
    function Bucket(posx, posy) {
        this.posx = posx;
        this.posy = posy;
        context.beginPath();
        context.arc(xp, yp, 30, 0, Math.PI * 2, false);
        context.strokeStyle = "yellow";
        context.lineWidth = 40;
        context.stroke();
    }
    var score = 1;
    var newScore = 0;
    var isAction1 = true;
    var isAction2 = true;
    var isAction3 = true;
    var isAction4 = true;
    var isNext = true;
    function init() {
        //let player1 = new Obj(100, 200, 50, 50);

        let buck = new Bucket(xp, yp);
        if (isAction1 === true) {
            let puddle1 = new GenPuddle(x1, y1, 100, 100);
            if (checkDistance(buck.posx, buck.posy, puddle1.xpos, puddle1.ypos) <= 70) {
                console.log("---there has been a collision");
                //----------| Point system |----------
                newScore += score;
                console.log("new score is =", newScore);
                isAction1 = false;
                //document.getElementById('pscore').innerHTML = parseInt(newScore);
            }
        }
        if (isAction2 === true) {
            let puddle2 = new GenPuddle(x2, y2, 100, 100);
            if (checkDistance(buck.posx, buck.posy, puddle2.xpos, puddle2.ypos) <= 70) {
                console.log("---there has been a collision");
                //----------| Point system |----------
                newScore += score;
                console.log("new score is =", newScore);
                isAction2 = false;
                //document.getElementById('pscore').innerHTML = parseInt(newScore);
            }
        }
        //-----------------------------------------------------
        if (isAction3 === true) {
            let puddle3 = new GenPuddle(x3, y3, 100, 100);
            //console.log("score is = ", newScore);
            if (checkDistance(buck.posx, buck.posy, puddle3.xpos, puddle3.ypos) <= 70) {
                console.log("---there has been a collision");
                //----------| Point system |----------
                newScore += score;
                console.log("new score is =", newScore);
                isAction3 = false;
                //document.getElementById('pscore').innerHTML = parseInt(newScore);
            }
        }
        if (isAction4 === true) {
            let puddle4 = new GenPuddle(x4, y4, 100, 100);
            if (checkDistance(buck.posx, buck.posy, puddle4.xpos, puddle4.ypos) <= 70) {
                console.log("---there has been a collision");
                //----------| Point system |----------
                newScore += score;
                console.log("new score is =", newScore);
                isAction4 = false;
                //document.getElementById('pscore').innerHTML = parseInt(newScore);
            }
        }
        //---------------------------------------------------------------------------------
        context.fillStyle = "red";
        context.font = "80px Arial";
        context.fillText(newScore, 10, 80);

        //isAction3 = true;
    }
    function animate() {
        requestAnimationFrame(animate);
        context.clearRect(0, 0, innerWidth, innerHeight);
        //--------------------------------------------------------------------------------
        if (isNext === true) {
            init();
        }
        //------------------------------------------------------------------------------

        if (isUp === true) {
            yp -= 15;
        }
        if (isDown === true) {
            yp += 15;
        }
        if (isLeft === true) {
            xp -= 15;
        }
        if (isRight === true) {
            xp += 15;
        }
    }

    animate();
    //=========================| Spawn Puddle|=========================================================================================================================================

    //console.log("score is = ", newScore);
    function SpawnPuddle(buck) {
        let swamp = [];

        let x = Math.random() * window.innerWidth;
        let y = Math.random() * window.innerHeight;
        let puddle3 = new GenPuddle(x, y, 100, 100);
        swamp.push(player1);
        if (checkDistance(player1.x, player1.y, puddle3.xpos, puddle3.ypos) <= 200) {
            console.log("---there has been a collision");
            //console.log("p x is =", buck.x, "p y is =", player1.y);
            console.log("puddle position x is =", puddle3.xpos, "puddle pos y is =", puddle3.ypos);
            //----------| Point system |----------
            newScore += score;
            console.log("new score is =", newScore);
            //document.getElementById('pscore').innerHTML = parseInt(newScore);
            context.fillStyle = "red";
            context.font = "80px Arial";
            context.fillText(newScore, 10, 80);
        }

    }
    //==================| Check Distance |=======================================|
    function checkDistance(x1, y1, x2, y2) {
        let xDist = x1 - x2;
        let yDist = y1 - y2;
        return Math.sqrt(Math.pow(xDist, 2)
            + Math.pow(yDist, 2));
    }
    //============================| Calling function|=============
    // SpawnPuddle(player1);
})//======= | END OF DOM EVENT LISTENER
//----------| Code notes for the character movement |-------------
// f- init ()
// f- update (draw())
// f - animate