//1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}
//2 
let storyText= "Hot damn it was 94 fahrenheit outside, so :insertx: went for a long run. When they got to :inserty:, they spinned around in circles like a wolf about to sit down, then :insertz:. Bob is blind as a bat and saw absolutely nothing, but even he could feel :insertx: since he did weigh 300 pounds, and it was a blistering outside." ;
let insertX = ["Ralphie","Chip","Fredrick the third"] ;
let insertY = ["Folsom Field","That One Place","your moms house"] ;
let insertZ = ["took a massive nap","walked down into a pit of dispair","decided to start running and didn't stop"] ;


//3 EVENT LISTENER AND PARTIAL FUNCTION DEFINITION
randomize.addEventListener('click', result);

function result() {
    let newStory = storyText ;
    let xItem=randomValueFromArray(insertX) ;
    let yItem=randomValueFromArray(insertY) ;
    let zItem=randomValueFromArray(insertZ) ;

    newStory = newStory.replaceAll(':insertx:',xItem) ;
    newStory = newStory.replaceAll(':inserty:',yItem) ;
    newStory = newStory.replaceAll(':insertz:',zItem) ;

    if(customName.value !== '') {
        const name = customName.value;
        newStory=newStory.replaceAll("Bob", name) ;
    }

    if(document.getElementById("uk").checked) {
        const weight = Math.round(300/14) + ' stones';
        const temperature =  Math.round((94-32) * 5/9) + ' celsius';
        newStory = newStory.replaceAll('300 pounds', weight) ;
        newStory = newStory.replaceAll('94 fahrenheit', temperature) ;
    }

    story.textContent = newStory ;
    story.style.visibility = 'visible';
}