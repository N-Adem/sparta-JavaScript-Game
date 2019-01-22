//========================| Game Environment Setup |=====================|
//----| Public variables for canvas funcrtions & game flow|----
let gameStart = true;
let sectionClear = false;
let gameEnd = false;
let canvas = document.getElementById('mCanvas');
let c = canvas.getContext('2d');
//let p = canvas.getContext('2d');
//===========| Creates the canvas background|==============|
function getCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
// =========|Creates the puddles and draws them on screen within an interval time frame|=============|
function puddleObj(w, h) {
    for (let i = 0; i < 4; i++) {
        let x = Math.random() * window.innerWidth;
        let y = Math.random() * window.innerHeight;
        c.fillStyle = "blue";
        c.fillRect(x, y, w, h);
    }
}
function draw() {
    c.clearRect(0, 0, canvas.width, canvas.height);
    puddleObj(100, 100);
}
//===============| Manages the game states |====================|
/*function gameFlow() {
    if (gameStart == true) {
        setInterval(draw, 2000);
    } else if (sectionClear == true) {
        c.clearRect(puddleObj);
        gameStart = true;
    }
}*/
//===========================| Player Object Setup |=====================|
class Player {
    constructor(context){
        this.context = context;
    }
    playerInit(){
        this.context.clearRect(0, 0, canvas.width, canvas.height);
        this.context.fillRect(600,300,100,100);
    }
}

//=======================| class declaration |==============|
//let player1 = new Player(c);
//===========================| Game Initialization |=====================|
//getCanvas();
//setInterval(draw, 2000);
//console.log(player1.playerInit);


