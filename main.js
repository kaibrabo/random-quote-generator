let textBox = document.getElementById('text');
let authorBox = document.getElementById('author');
let newQuote = document.getElementById('new-quote');

// inital first quote
getQuote();

newQuote.addEventListener('click', getQuote);

async function getQuote() {
    let response;
    await fetch('https://api.quotable.io/random')
        .then(res => res.json())
        .then(data => response = data);

    textBox.innerHTML = `"${response.content}"`;
    authorBox.innerHTML = `- ${response.author}`;
}

