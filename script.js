const quoteContainer = document.getElementById('quote-generator');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
//const loader = document.getElementById('loader');
let apiQuotes = [];

//showloading

//function loading() {
//loader.hidden = false;
//quoteContainer.hidden = true;
//}

// hiddenloading
//function complete() {
//quoteContainer.hidden = false;
// loader.hidden = true;
//}
//show new quote
function newQuote() {
    //loading();
    //     // pick a random quote from apiquote
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    //replace null author
    if (!quote.author) {
        authorText.textContent = 'Unknown';
    } else {
        authorText.textContent = quote.author;
    }
    // check quote lenght to determine styling
    if (quote.text.lenght > 120) {
        quoteText.classList.add('long-quote');
    } else {
        quoteText.classList.remove('long-quote');
    }

    //hideloader set quote
    quoteText.textContent = quote.text;
    complete();

    quoteText.textContent = quote.text;
}

async function getQuotes() {
    //loading();
    const apiurl = 'https://type.fit/api/quotes';
    try {
        const response = await fetch(apiurl);
        apiQuotes = await response.json();
        newQuote();

    } catch (error) {

    }
    //     //catch error
}

//tweet quote
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}

//event listener
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);
getQuotes();