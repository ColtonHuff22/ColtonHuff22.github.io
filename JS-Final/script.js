 
// recieve the button presses
const btnUp = document.querySelector("#volUp") ;
btnUp.addEventListener('click', up) ;
const btnDown = document.querySelector("#volDown") ;
btnDown.addEventListener('click', down) ;

var volume = document.querySelector("#vol") ;
//console.log(volume) ;
// initialize the vol
let vol=69 ;

// function to generate random number
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


function up() {
    console.log("up") ;
    if(vol < 90) {
        vol +=random(-1,9) ;
    }
    if(vol < 96) {
        vol +=random(0,3) ;
    }
    volume.innerHTML = vol ;
 //   volume.append(vol) ;
    console.log(vol) ;
    moveUp() ;
}

function down() {
    console.log("down") ;
    if(vol > 10) {
        vol -=random(-1,9) ;
    }
    if(vol > 4) {
        vol -=random(0,3) ;
    }
    volume.innerHTML = vol ;
    console.log(vol) ;
//    volume.replaceWith(vol) ;
    moveDown() ;
    
}
volume.append(vol) ;


function moveUp() {
    console.log("moveUp") ;
    let x = random(0,75) ;
    let y = random(0,75) ;
    btnUp.style.position = "absolute";
    btnUp.style.left = x + '%' ;
    btnUp.style.top = y + '%' ;
}

function moveDown() {
    console.log("moveDown") ;
    let x = random(0,75) ;
    let y = random(0,75) ;
    btnDown.style.position = "absolute";
    btnDown.style.left = x + '%' ;
    btnDown.style.top = y + '%' ;
}

function timeLoop() {
    moveUp() ;
    moveDown() ;
    console.log("moveTimer");
}

setInterval(function() {
    // code to be executed repeatedly
    timeLoop();
  }, 2000);