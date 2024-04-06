document.addEventListener("DOMContentLoaded", () => {
    const author = document.querySelector(".quote-author");
    const tags = document.querySelector(".quote-tags");
    const quote = document.querySelector(".quote-random");
    const newQuoteBtn = document.querySelector(".quote-new");
    const copyQuoteBtn = document.querySelector(".quote-copy");
    const apiLink = "https://api.quotable.io/random";

    const randomQuote = async () => {
        try {
            
            const response = await fetch("https://goquotes-api.herokuapp.com/api/v1/random?count=1", {mode: "no-cors"});
            const jsondata = await response.json();
            console.log(jsondata);

        } catch(error) {
            console.log("Something gone wrong: ", error);
        }
    }


    newQuoteBtn.addEventListener("click", randomQuote);
});