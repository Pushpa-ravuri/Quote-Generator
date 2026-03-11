const quotes = [
{ text: "The best way to get started is to quit talking and begin doing.", author: "Walt Disney" },
{ text: "Success is not in what you have, but who you are.", author: "Bo Bennett" },
{ text: "Dream big and dare to fail.", author: "Norman Vaughan" },
{ text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
{ text: "Do something today that your future self will thank you for.", author: "Unknown" },
{ text: "Hard work beats talent when talent doesn't work hard.", author: "Tim Notke" },
{ text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
{ text: "The future depends on what you do today.", author: "Mahatma Gandhi" },
{ text: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau" },
{ text: "Your limitation—it's only your imagination.", author: "Unknown" },
{ text: "Push yourself, because no one else is going to do it for you.", author: "Unknown" },
{ text: "Great things never come from comfort zones.", author: "Unknown" },
{ text: "Stay focused and never give up.", author: "Unknown" },
{ text: "The harder you work for something, the greater you'll feel when you achieve it.", author: "Unknown" },
{ text: "Don’t stop when you’re tired. Stop when you’re done.", author: "Marilyn Monroe" },
{ text: "Little things make big days.", author: "Unknown" },
{ text: "It always seems impossible until it’s done.", author: "Nelson Mandela" },
{ text: "Quality is not an act, it is a habit.", author: "Aristotle" },
{ text: "Action is the foundational key to all success.", author: "Pablo Picasso" },
{ text: "Opportunities don't happen. You create them.", author: "Chris Grosser" },
{ text: "Success is walking from failure to failure with no loss of enthusiasm.", author: "Winston Churchill" },
{ text: "The secret of getting ahead is getting started.", author: "Mark Twain" },
{ text: "Everything you can imagine is real.", author: "Pablo Picasso" },
{ text: "Turn your wounds into wisdom.", author: "Oprah Winfrey" }
];

const btn = document.getElementById("btn");
const quote = document.getElementById("quote");
const author = document.getElementById("author");
const card = document.getElementById("quoteCard");

btn.addEventListener("click", () => {

    card.classList.add("flip");

    setTimeout(() => {

        const random = Math.floor(Math.random() * quotes.length);

        quote.textContent = `"${quotes[random].text}"`;
        author.textContent = "- " + quotes[random].author;

        card.classList.remove("flip");

    }, 400);

});