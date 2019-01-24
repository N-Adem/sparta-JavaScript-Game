document.addEventListener("DOMContentLoaded", function () {
    console.log("game Init");
    //========================| Game Environment Setup |=====================|
    //----| Public variables for canvas funcrtions & game flow|----
    let canvas = document.querySelector('canvas');
    let context = canvas.getContext('2d');
    let img = document.getElementById('imageWater');
    let pScore = document.getElementById('pscore');
    //==================| Creates the canvas background|==============|
    canvas.width = window.innerWidth / 1.5;
    canvas.height = window.innerHeight;
    //=====================| Puddle Spawn |=======================
    function GenPuddle(xpos, ypos, width, height) {
        this.xpos = xpos;
        this.ypos = ypos;
        context.fillStyle = "blue";
        //context.drawImage(img, 10, 10);
        context.fillRect(xpos, ypos, width, height);
        function draw() {
            context.clearRect(0, 0, innerWidth, innerHeight);
        }
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

    function update() {
        requestAnimationFrame(update);
        context.clearRect(0, 0, canvas.innerWidth, canvas.innerHeight);
    }
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
            isLeft =false;
            isRight = false;
        }
        if (event.key === "s") {
            console.log("player y +pos" + player1.y);
            isUp = false;
            isDown = true;
            isLeft =false;
            isRight = false;
        }
        if (event.key === "a") {
            console.log("player x -pos" + player1.x);
            isUp = false;
            isDown = false;
            isLeft =true;
            isRight = false;
        }
        if (event.key === "d") {
            console.log("player x +pos" + player1.x);
            isUp = false;
            isDown = false;
            isLeft =false;
            isRight = true;
        };
    });
    // update();
    var x = 20;
    var y = 20;
    function play() {
        requestAnimationFrame(play);
        context.clearRect(0, 0, context.innerWidth, context.innerHeight);

        context.beginPath();
        context.arc(x, y, 30, 0, Math.PI * 2, false);
        context.strokeStyle = "blue";
        context.stroke();

        if (isUp === true) {
            y-=1;
        }
        if (isDown === true) {
            y+=1;
        }
        if (isLeft === true) {
            x-=1;
        }
        if (isRight === true) {
            x+=1;
        }

    }

play();
    //=========================| Spawn Puddle|===============================
    let score = 1;
    let newScore = 0;
    console.log("score is = ", newScore);
    function SpawnPuddle(player) {
        let swamp = [];
        for (let i = 0; i < 4; i++) {
            let x = Math.random() * window.innerWidth;
            let y = Math.random() * window.innerHeight;
            let puddle3 = new GenPuddle(x, y, 100, 100);

            swamp.push(puddle3);
            if (checkDistance(player1.x, player1.y, puddle3.xpos, puddle3.ypos) <= 200) {
                console.log("---there has been a collision");
                console.log("p x is =", player1.x, "p y is =", player1.y);
                console.log("puddle position x is =", puddle3.xpos, "puddle pos y is =", puddle3.ypos);
                //----------| Point system |----------
                newScore += score;
                console.log("new score is =", newScore);
                // document.getElementById('pscore').innerHTML = parseInt(newScore);
                context.fillStyle = "red";
                context.font = "80px Arial";
                context.fillText(newScore, 10, 80);
            }
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
    SpawnPuddle(player1);
})//======= | END OF DOM EVENT LISTENER
//----------| Code notes for the character movement |-------------
// f- init ()
// f- update (draw())
// f - animate