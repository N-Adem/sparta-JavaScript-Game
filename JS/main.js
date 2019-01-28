document.addEventListener("DOMContentLoaded", function () {
    console.log("game Init");
    //========================| Game Environment Setup |=====================|
    //----| Public variables for canvas funcrtions & game flow|----
    let canvas = document.querySelector('canvas');
    let context = canvas.getContext('2d');
    let img = document.getElementById('imageWater');
    let pScore = document.getElementById('pscore');
    var s = document.createElement('audio');
    let playIm =  new Image();
    playIm.src= "img/water.jpg";
    //var sound = document.getElementById("myAudio");
   
    //==================| Creates the canvas background|==============|
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

   // let sound = new Audio ("./audio/rain-sound.mp3").play();
   // sound.play();    //=====================| Puddle Spawn |=======================
    function GenPuddle(xpos, ypos, width, height) {
        this.xpos = xpos;
        this.ypos = ypos;
        context.fillStyle = "lightBlue";
       // context.drawImage(playIm, 10, 10);
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
    let x5 = Math.random() * window.innerWidth;
    let y5 = Math.random() * window.innerHeight;
    let x6 = Math.random() * window.innerWidth;
    let y6 = Math.random() * window.innerHeight;
    function Bucket(posx, posy) {
        this.posx = posx;
        this.posy = posy;
        context.beginPath();
        context.arc(xp, yp, 30, 0, Math.PI * 2, false);
        context.strokeStyle = "lightYellow";
        context.lineWidth = 40;
        context.stroke();
    }
    var score = 1;
    var newScore = 0;
    var isAction1 = true;
    var isAction2 = true;
    var isAction3 = true;
    var isAction4 = true;
    var isAction5 = false;
    var isAction6 = false;
    var isOne = true;
    var isTwo = false;

    function init() {
        //let player1 = new Obj(100, 200, 50, 50);

        let buck = new Bucket(xp, yp);
        if (isAction1 === true) {
            let puddle1 = new GenPuddle(x1, y1, 100, 100, "blue");
            if (checkDistance(buck.posx, buck.posy, puddle1.xpos, puddle1.ypos) <= 70) {
              //  console.log("---there has been a collision");
                //----------| Point system |----------
                newScore += score;
             //   console.log("new score is =", newScore);
                isAction1 = false;
                //document.getElementById('pscore').innerHTML = parseInt(newScore);
            }
        }
        if (isAction2 === true) {
            let puddle2 = new GenPuddle(x2, y2, 100, 100,"red");
            if (checkDistance(buck.posx, buck.posy, puddle2.xpos, puddle2.ypos) <= 70) {
              //  console.log("---there has been a collision");
                //----------| Point system |----------
                newScore += score;
              //  console.log("new score is =", newScore);
                isAction2 = false;
                //document.getElementById('pscore').innerHTML = parseInt(newScore);
            }
        }
        //-----------------------------------------------------
        if (isAction3 === true) {
            let puddle3 = new GenPuddle(x3, y3, 100, 100);
            //console.log("score is = ", newScore);
            if (checkDistance(buck.posx, buck.posy, puddle3.xpos, puddle3.ypos) <= 70) {
              //  console.log("---there has been a collision");
                //----------| Point system |----------
                newScore += score;
               // console.log("new score is =", newScore);
                isAction3 = false;
                //document.getElementById('pscore').innerHTML = parseInt(newScore);
            }
        }
        if (isAction4 === true) {
            let puddle4 = new GenPuddle(x4, y4, 100, 100);
            if (checkDistance(buck.posx, buck.posy, puddle4.xpos, puddle4.ypos) <= 70) {
                //console.log("---there has been a collision");
                //----------| Point system |----------
                newScore += score;
                //console.log("new score is =", newScore);
                isAction4 = false;
                //document.getElementById('pscore').innerHTML = parseInt(newScore);
            }
        }
          //===========| Is Action 5 & 6 |===================
          if(isAction1 && isAction3 === false)
          {
              isAction5 = true;
              isAction3 = true;
          }
          if(isAction2 && isAction4 === false)
          {
              isAction6 = true;
             isAction2 = true;
          }
        //=====================================================================
        if (isAction5 === true) {
            let puddle5 = new GenPuddle(x5, y5, 100, 100);
            if (checkDistance(buck.posx, buck.posy, puddle5.xpos, puddle5.ypos) <= 70) {
                //console.log("---there has been a collision");
                //----------| Point system |----------
                newScore += score;
                //console.log("new score is =", newScore);
                isAction5 = false;
                isAction1 = true;
                isAction3 = true;
                //document.getElementById('pscore').innerHTML = parseInt(newScore);
            }
        }
        if (isAction6 === true) {
            let puddle6 = new GenPuddle(x6, y6, 100, 100);
            if (checkDistance(buck.posx, buck.posy, puddle6.xpos, puddle6.ypos) <= 70) {
                //console.log("---there has been a collision");
                //----------| Point system |----------
                newScore += score;
                //console.log("new score is =", newScore);
                isAction6 = false;
                isAction2 = true;
                isAction4 = true;
                //document.getElementById('pscore').innerHTML = parseInt(newScore);
            }
        }

        if(newScore >= 4)
        {
            isAction1 = true;
        }

        if(newScore >= 30)
        {
            isAction3 = true;
            isAction2 = true;
        }
        
        if(newScore >= 70)
        {
            isAction4 = true;
            isAction5 = true;
        }
        if(newScore >= 100){
            context.fillStyle = "lightBlue";
            context.font = "60px Arial";
            context.fillText(" Game Over ", 100, 300);
        }        
        //---------------------------------------------------------------------------------
        context.fillStyle = "red";
        context.font = "80px Arial";
        context.fillText(newScore, 10, 80);    
        //isAction3 = true;
    }
    let su = new Audio ("../audio/rain-sound.mp3").play();
        //sound.play();
    function animate() {
        requestAnimationFrame(animate);
        context.clearRect(0, 0, innerWidth, innerHeight);      
        //sound.autoplay = true;
        //sound.play();
        //--------------------------------------------------------------------------------
        if (isOne === true) {
            init(); 
            isTwo = true;
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