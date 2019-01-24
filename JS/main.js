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
            context.clearRect(0, 0, canvas.innerWidth, canvas.innerHeight);
        }
    }
    //======================| Player Object|========================
    let dx = 1;
    let dy = 1;
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
        document.addEventListener('keydown', function () {
            if (event.key === "w") {
                console.log("player y -pos" + player1.y);
                player1.y -= dy;
            }
            if (event.key === "s") {
                console.log("player y +pos" + player1.y);
                player1.y += dy;
            }
            if (event.key === "a") {
                console.log("player x -pos" + player1.x);
                player1.x -= dx;
            }
            if (event.key === "d") {
                player1.x += dx;
                console.log("player x +pos" + player1.x);
            };
        });
    }
    update();
    //=========================| Spawn Puddle|===============================
   let score = 1;
   let newScore =0;
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
                context.fillText(newScore, 10,80);
            }
        }
    }
    function printScore(){

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
// f- init ()
// f- update (draw())
// f - animate