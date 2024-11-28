const quotes = [
    {quote: "Life is short,but one smile can make it better.", author:"Ibrahim El-Feki"},
    {quote: "Success doesnt come by chance,it comes with hard work.", author:"Ahmed Zewail"},
    {quote: "The mind is like a parachute,it works best when open.", author:"Thomas Dewar"},
    {quote:"Those who don't progress, regree.", author:"Naguib Mahfouz"},
    {quote:"One cannot achieve success without taking responsibility.", author:"John Wooden"},
    {quote:"If you want something you have never had, you must do something you have never done.",author:"Albert Einstein"},
    {quote:"If you want to be happy ,remember to pursue what you love.",author:"Anonymous"},
    {quote:"Time is life,so don't waste it on unimportant things.",author:"Steve Jobs"},
    {quote:"Self-confidence is the first step toward success.",author:"Anonymous"},
    {quote:"Failure is not the end,it's a new beginning.",author:"Thomas Edison"},
    
];

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    document.getElementById("quoteText").innerHTML =`"${randomQuote.quote}"`;
    document.getElementById("quoteAuthor").innerHTML =`-${randomQuote.author}"`;
}



