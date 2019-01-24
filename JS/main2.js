document.addEventListener("DOMContentLoaded", function () {
    console.log('Project intialized');
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
    let xPos = 100;
    let yPos = 400;
    class Object {
        constructor(context, canvas, array, color) {
            this.context = context;
            this.canvas = canvas;
            this.array = array;
            this.color = color;
        }
        createPuddle() {
            for (let i = 0; i < 4; i++) {
                let x = Math.random() * window.innerWidth;
                let y = Math.random() * window.innerHeight;
                this.context.fillStyle = this.color;
                this.context.fillRect(x, y, 150, 150);
            }
        }
        createPlayer() {
            this.context.beginPath();
            this.context.arc(xPos, yPos, 50, 0, 2 * Math.PI);
            this.context.strokeStyle = 'yellow';
            this.context.stroke();
        }
        drawPuddle() {
            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.array.push(this.createPuddle());
        }
        
        
    }
    // ======================================
    document.addEventListener("keydown", function (e) {
        let key_press = String.fromCharCode(event.keyCode);
        if (key_press === "W") {
            console.log("Up key has been pressed");
            player1.x +=2;
        }
        if (event.key === "s") {
            console.log("Down key has been pressed");
        }
        if (event.key === "a") {
            console.log("Left key has been pressed");
        }
        if (event.key === "d") {
            console.log("Right key has been pressed");
        }
    })
    //===================|             class init             |================|
    let display = new CanvasScreen(canvas, context);
    let puddle1 = new Object(context, canvas, puddleArray, "lightBlue");
    let player1 = new Object(context, canvas, null, null);
    //===================|    Game obj management and init    |================|
    display.getCanvas();
    puddle1.createPuddle();
    player1.createPlayer();
})// ========================================================| End of the Document Event listener |================================================================