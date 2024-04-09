const btn =document.querySelector("#js-new-quote") ;
btn.addEventListener('click', getQuote) ;

const btn2 =document.querySelector("#js-tweet") ;
btn2.addEventListener('click',getAnswer) ;

const answerText = document.querySelector("#js-answer-test")
const endpoint = "https://trivia.cyberwisp.com/getrandomchristmasquestion";


let answer = '' ;
async function getQuote() {
    // console.log("test") ;
    try {
        const response = await fetch(endpoint) ;
        if (!response.ok) {
            throw Error(response.statusText)
        }
        const json = await response.json() ;
        console.log(json['question']) ;
        displayQuote(json['question']) ;
        console.log(json['answer']) ;
        answer = json['answer'] ;

    }
    catch(err) {
        console.log(err) ;
        alert('Failed to fetch new quote') ;
    }
}
function displayQuote(quote) {
    const quoteText = document.querySelector('#js-quote-text') ;
    const answerText=document.querySelector('#js-answer-text') ;
    quoteText.textContent = quote ;
    answerText.textContent = '' ;
}

function getAnswer() {
    //console.log(212) ;
    const answerText=document.querySelector('#js-answer-text') ;
    answerText.textContent = answer ;
}

getQuote();

//const answerText = document.querySelector("#js-answer-test")

//function displayAnswer(ans) {
  //const textContent = document.querySelector('#js-answer-text') ;
//}