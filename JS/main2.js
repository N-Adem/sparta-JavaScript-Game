console.log('registered');
let canvas = document.getElementById('myCanvas');
let context = canvas.getContext('2d');
//===================|  Class is for the canvas display  |===================|
class CanvasScreen {
    constructor(canvas, context) {
        this.canvas = canvas;
        this.context = context;
    }
    getCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
}
//===================|class is for the puddle spawn system|================|
let puddleArray = []; 
class Puddle {
    constructor(context, canvas,array) {
        this.context = context;
        this.canvas = canvas;
        this.array = array;
    }
    createPuddle() { 
        for(let i = 0; i < 4; i++){
            let x =  Math.random() * window.innerWidth;
            let y =  Math.random() * window.innerHeight;
            this.context.fillStyle ="blue";
            this.context.fillRect(x, y, 150, 75);
        }
    }
    drawPuddle() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.array.push(setInterval(this.createPuddle(),3000));
    }
}
//===================|   class if for the player object   |================|
class Player {
    constructor(context, canvas) {
        this.context = context;
        this.canvas = canvas;
    }
    createPlayer() {
        this.context.translate(canvas.width / 2, canvas.height / 2);
        this.context.fillStyle ="red";
        this.context.fillRect(150, 200, 150, 75);
    }
    drawPlayer() {
        this.createPlayer();
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}
//===================|             class init             |================|
let display = new CanvasScreen(canvas, context);
let puddle1 = new Puddle(context, canvas,puddleArray);
let player1 = new Player(context, canvas);
//===================|    Game obj management and init    |================|
display.getCanvas();
puddle1.createPuddle();
puddle1.drawPuddle();
player1.createPlayer();
player1.drawPlayer();
