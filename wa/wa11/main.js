const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const file = ['images/Img1.jpg', 'images/Img2.webp', 'images/Img3.jpg', 'images/Img4.jpg', 'images/Img5.jpg']
/* Declaring the alternative text for each image file */
const altText = ['Mountain with Geometry','Top of Snowy Peak','Autumn Mountain Range','Hanging Lake','Mountain Lake Oasis']
/* Looping through images */
for(let i=0; i< file.length; i++){
const newImage = document.createElement('img');
newImage.setAttribute('src', file[i]);
newImage.setAttribute('alt', altText[i]);
thumbBar.appendChild(newImage);
newImage.addEventListener('click', () => {
    displayedImage.src=newImage.src ;
})
}
/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () =>{
    if(btn.getAttribute('class') ==="Dark") {
        btn.setAttribute("class", "Light");
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    }
    else {
        btn.setAttribute('class', "Dark");
        btn.textContent = "Darken";
        overlay.style.backgroundColor = 'rgba(255,255,255,0.5)';
    }
})