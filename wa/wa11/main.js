const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const file = ['images/pic1.jpg', 'images/pic2', 'images/pic3', 'images/pic4']
/* Declaring the alternative text for each image file */
const altText = ['cool','shit','shiz','sko']
/* Looping through images */

let imgscr = file[btn] ;
let imgalt = altText[btn] ;


const newImage = document.createElement('img');
newImage.setAttribute('src', imgscr);
newImage.setAttribute('alt', imgalt);
thumbBar.appendChild(newImage);

/* Wiring up the Darken/Lighten button */
