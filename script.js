const quotes = [
    {
        text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        author: "Winston Churchill"
    },
    {
        text: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    },
    {
        text: "Don't watch the clock; do what it does. Keep going.",
        author: "Sam Levenson"
    },
    {
        text: "Your time is limited, so don’t waste it living someone else’s life.",
        author: "Steve Jobs"
    }
];
const btn = document.getElementById("btn");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");

btn.addEventListener("click", function() {

    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];

    quoteText.textContent = `"${randomQuote.text}"`;
    authorText.textContent = `- ${randomQuote.author}`;

});
