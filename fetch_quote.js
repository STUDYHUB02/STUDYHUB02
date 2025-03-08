const axios = require("axios");
const fs = require("fs");

async function fetchQuote() {
    try {
        const response = await axios.get("https://api.quotable.io/random");
        const quote = response.data.content + " — " + response.data.author;
        fs.writeFileSync("QUOTE.md", `> "${quote}"`);
    } catch (error) {
        console.error("Error fetching quote:", error);
    }
}

fetchQuote();