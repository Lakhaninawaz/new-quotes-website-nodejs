const quotes = document.getElementById("quotes")
const author = document.getElementById("author")
const newQ = document.getElementById("newQ")
const tweetMe = document.getElementById("tweetMe")

let realdata = "";
let quotesdata = "";


const getNewQuotes = () => {
    let rnum = Math.floor(Math.random() * 17);
    quotesdata = realdata[rnum];
    quotes.innerText = `${quotesdata.text}`;
    quotesdata.author == null ? (author.innerText = "unKnown") : (author.innerText = `by ${quotesdata.author}`);
    // console.log(rnum);
    // author.innerText = `${quotesdata.author}`;
}

const getQuotes = async () => {
    const api = "https://type.fit/api/quotes";
    try {
        let data = await fetch(api);
        realdata = await data.json();
        getNewQuotes();
        // console.log(realdata.length);
        // console.log(realdata[10].author);
    } catch (error) {
        throw error;
    }
};

const tweetNow = () => {
    let tweetpost = `https://twitter.com/intent/tweet?text=${quotesdata.text} ${quotesdata.author}`;
    window.open(tweetpost);
}

tweetMe.addEventListener("click", tweetNow);
newQ.addEventListener("click", getNewQuotes);
getQuotes();
