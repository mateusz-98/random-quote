document.addEventListener("DOMContentLoaded", () => {
    const author = document.querySelector(".quote-author");
    const tags = document.querySelector(".quote-tags");
    const quote = document.querySelector(".quote-random");
    const newQuoteBtn = document.querySelector(".quote-new");
    const copyQuoteBtn = document.querySelector(".quote-copy");
    const quoteModal = document.querySelector(".modal");

    const getData = async () => {
        const apiLink = "https://api.api-ninjas.com/v1/quotes";
        const apiKey = "2jbFSsCIhlX/+HrbNxa2oA==4Bn7JdsTz2An3vP4";
        const apiOptions = {
            method: "GET",
            headers: {
                "X-Api-Key": apiKey,
                "Content-type": "application/json",
            },
        }

        try {
            
            const response = await fetch(apiLink, apiOptions);
            
            if(!response.ok) throw new Error(response.statusText);

            const jsondata = await response.json();

            randomQuote(jsondata);

            console.log(jsondata);

        } catch(err) {
            
            author.textContent = "-";
            tags.textContent = "-";
            quote.textContent = "Something went wrong. Try later or refresh the page.";

            console.log("Something went wrong: ", err);
        }

    }

    const randomQuote = (data) => {
        author.textContent = data[0].author;
        tags.innerHTML = `<p class="quote-tag">${data[0].category}</p>`;
        quote.textContent = `“${data[0].quote}”`;
    }

    const copyQuote = async () => {
        try {
            await navigator.clipboard.writeText(quote.textContent);
            
            quoteModal.classList.add("show");

            setTimeout(() => {
                quoteModal.classList.remove("show");
            }, 4000);


        } catch(err) {
            console.log("You can't copy quoute: ", err);
        }
    }

    newQuoteBtn.addEventListener("click", getData);
    copyQuoteBtn.addEventListener("click", copyQuote);
});