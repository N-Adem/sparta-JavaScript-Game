//========================| Game Environment Setup |=====================|
let canvas = document.querySelector('canvas');
function getCanvas(){
    canvas.width = window.innerWidth; 
    canvas.height = window.innerHeight;
}
function createObj(x,y,w,h){
    let c = canvas.getContext('2d');
    c.fillRect(x,y,w,h);
}
//===========================| Player Object Setup |=====================|

//===========================| Game Initialization |=====================|
getCanvas();
createObj(100,100,100,100);
createObj(300,200,100,100);
 