
console.log("Hello game world"); 
//var c = canvas.getContext('2d');

let canvas = document.querySelector('canvas');
function getCanvas(){
    canvas.width = window.innerWidth; 
    canvas.height = window.innerHeight;
}
function createObj(x,y,w,h){
    let c = canvas.getContext('2d');
    c.fillRect(x,y,w,h);
}

function uniKeyCode(event) {
    let key = event.uniKeyCode;
    document.getElementsByTagName('input').innerHTML = "The Unicode KEY code is: " + key;
    console.log(key);
}

getCanvas();
 createObj(100,100,100,100);
 createObj(300,200,100,100);
 uniKeyCode();