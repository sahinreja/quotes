const quotes = [
    {
        quote:'You have to write the book that wants to be written. And if the book will be too difficult for grown-ups, then you write it for children.',
        author:"--Madeleine L'Engle"
    },
    {
        quote:"If you don't have time to read, you don't have the time (or the tools) to write. Simple as that.",
        author:'--Stephen King'
    },
    {
        quote:"Substitute 'damn' every time you're inclined to write 'very;' your editor will delete it and the writing will be just as it should be.",
        author:"--Mark Twain"
    },
    {
        quote:"If there's a book that you want to read, but it hasn't been written yet, then you must write it.",
        author:"--Toni Morrison"
    },
    {
        quote:"Words can be like X-rays if you use them properly -- they'll go through anything. You read and you're pierced.",
        author:"--Aldous Huxley, Brave New World"
    }
]


function newQuote(){
    var randomNumber  = Math.floor(Math.random() * quotes.length);
    console.log(randomNumber);
    document.getElementById('content').innerHTML = quotes[randomNumber].quote;
    document.getElementById('author_name').innerHTML = quotes[randomNumber].author;
}