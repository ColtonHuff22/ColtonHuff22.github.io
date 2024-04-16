const btn =document.querySelector("#js-new-quote") ;
btn.addEventListener('click', getQuote) ;

const btn2 =document.querySelector("#js-tweet") ;
btn2.addEventListener('click',getAnswer) ;

const answerText = document.querySelector("#js-answer-test")
const endpoint = "	https://api.imgflip.com/get_memes";

let answer = '' ;

async function getQuote() {
    // console.log("test") ;
    try {
        const response = await fetch(endpoint) ;
        if (!response.ok) {
            throw Error(response.statusText)
        }
        const json = await response.json() ;
        console.log(json) ;
        console.log(json['data']['memes'][0]) ;
        console.log(json[4]) ;
        show_image(json['url'],json['width'],json['height'],json['name']) ;
//        console.log(json['answer']) ;
//        answer = json['answer'] ;
        console.log(json['url']) ;

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
    img.width = width;
    img.height = height;
    img.alt = alt;

    // Append the image element
    // to the body of the document
    document.body.appendChild(img);
}


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