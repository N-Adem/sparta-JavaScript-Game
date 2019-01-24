document.addEventListener("DOMContentLoaded", function () {
    //========================| Game Environment Setup |=====================|
    //----| Public variables for canvas funcrtions & game flow|----
    let canvas = document.querySelector('canvas');
    let context = canvas.getContext('2d');
    //==================| Creates the canvas background|==============|
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    //=====================| Puddle Spawn |=======================
    function GenPuddle(xpos, ypos, width, height) {
        this.xpos = xpos;
        this.ypos = ypos;
        context.fillStyle = "blue";
        context.fillRect(xpos, ypos, width, height);
        function draw() {
            context.clearRect(0, 0, canvas.innerWidth, canvas.innerHeight);
        }
    }
    //======================| Player Object|========================
    function Obj(x, y, w, h) {
        this.x = x;
        this.y = y;
        context.fillStyle = "green";
        context.fillRect(x, y, w, h);
        function animate() {
            requestAnimationFrame(animate);
            context.clearRect(0, 0, canvas.innerWidth, canvas.innerHeight);
            let player1 = new Obj(x,y,50,50);
            document.addEventListener('keydown', function () {
                if (event.key === "w") {
                    console.log("player y -pos" + player1.y);
                    player1.y -= 1;
                }
                if (event.key === "s") {
                    console.log("player y +pos" + player1.y);
                    player1.y += 1;
                }
                if (event.key === "a") {
                    console.log("player x -pos" + player1.x);
                    player1.x -= 1;
                }
                if (event.key === "d") {
                    player1.x += 1;
                    console.log("player x +pos" + player1.x);
                }
            })
        }
    }
    //=========================| Spawn Puddle|===============================
    function SpawnPuddle() {
        let swamp = [];
        for (let i = 0; i < 4; i++) {
            let x = Math.random() * window.innerWidth;
            let y = Math.random() * window.innerHeight;
            let puddle3 = new GenPuddle(x, y, 100, 100);
            swamp.push(puddle3);
        }
    }
    //==========================================================================
    
    
    //===========================================================================================

    // =======================| Player create |=============================
    /*
        let xPos = 100;
        let mXpos = 1;
        let yPos = 100;
        let radius = 30;
        function animate() {
            requestAnimationFrame(animate);
            // c.clearRect(0, 0, innerWidth, innerHeight);
            c.beginPath();
            c.arc(xPos, yPos, radius, 0, 2 * Math.PI);
            c.strokeStyle = 'yellow';
            c.fillStyle = "red";
            c.stroke();
            document.addEventListener('keydown', function () {
                if (event.key === "w") {
                    console.log("Up key has been pressed");
                    yPos -= mXpos;
                }
                if (event.key === "s") {
                    console.log("Down key has been pressed");
                    yPos += mXpos;
                }
                if (event.key === "a") {
                    console.log("Left key has been pressed");
                    xPos -= mXpos;
                }
                if (event.key === "d") {
                    console.log("Right key has been pressed");
                    xPos += mXpos;
                }
            })
    
        }*/
    //==================| Check Distance |===================|
    function checkDistance(x1, y1, x2, y2) {
        let xDist = x1 - x2;
        let yDist = y1 - y2;
        return Math.sqrt(Math.pow(xDist, 2)
            + Math.pow(yDist, 2));
    }
    //============================| Calling function|=============
    let player1 = new Obj(100, 100, 50, 50);
    SpawnPuddle();
  
    //console.log(checkDistance(player1.xpos, player1.ypos, puddle3.xpos, puddle3.ypos));

})//======= | END OF DOM EVENT LISTENER
// f- init ()
// f- update (draw())
// f - animate