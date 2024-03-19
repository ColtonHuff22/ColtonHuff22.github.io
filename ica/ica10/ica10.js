
const heading = document.querySelector("h1") ;

const button1=document.getElementsByClassName("button1") ;
button1.addEventListener('click',changeText) ;

const button2=document.getElementById("button2") ;
button2.addEventListener('click',changeItem) ;


function changeText() {
   // alert('test successful') ;
   const name= prompt('What do you Sko?') ;
   // button.textContent= `Player 1 = ${name}` ;
    heading.textContent= `Sko ${name}` ;
}
function changeItem() {
    
}