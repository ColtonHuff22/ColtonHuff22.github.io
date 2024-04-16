const btn =document.querySelector("#js-new-quote") ;
btn.addEventListener('click', getQuote) ;



const answerText = document.querySelector("#js-answer-test")
const endpoint = "	https://api.imgflip.com/get_memes";

let answer = '' ;
function random() {
    return Math.floor(Math.random() * (99 - 0 + 1));
  }

async function getQuote() {
    // console.log("test") ;
    try {
        const response = await fetch(endpoint) ;
        if (!response.ok) {
            throw Error(response.statusText)
        }
        const json = await response.json() ;
        const i = random() ;
        console.log(json) ;
        console.log(json['data']['memes'][i]['url']) ;
        console.log(json[4]) ;
        show_image(json['data']['memes'][i]['url'],json['data']['memes'][i]['width'],json['data']['memes'][i]['height'],json['data']['memes'][i]['name']) ;
//        console.log(json['answer']) ;
//        answer = json['answer'] ;
       // console.log(json['url']) ;

    }
    catch(err) {
        console.log(err) ;
        alert('Failed to fetch new meme') ;
    }
}

function show_image(src, width, height,alt) {
    // Create a new image element
    let img = document.createElement("img");

    // Set the source, width, 
    // height, and alt attributes
    img.src = src;
    img.width = width ;
    img.height = height;
    img.alt = alt;

    // Append the image element
    // to the body of the document
    //const quoteText = document.querySelector('#js-quote-text') ;
    //const ansText = document.querySelector('#js-answer-text') ;
    //quoteText.textContent = img ;
    //document.body.appendChild(img);
    const container = document.getElementById("image-container");
    container.appendChild(img);
}
// const container = document.getElementById("image-container");
// container.removeChild() ;

// function displayQuote(quote) {
//   const quoteText = document.querySelector('#js-quote-text') ;
//    const answerText=document.querySelector('#js-answer-text') ;
//    quoteText.imageContent = quote ;
//    answerText.textContent = '' ;
//}

function getAnswer() {
    //console.log(212) ;
    const answerText=document.querySelector('#js-answer-text') ;
    answerText.textContent = answer ;
}

//getQuote();

//const answerText = document.querySelector("#js-answer-test")

//function displayAnswer(ans) {
  //const textContent = document.querySelector('#js-answer-text') ;
//}