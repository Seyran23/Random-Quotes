const authorSpan = document.querySelector(".author_span");
const quoteSpan = document.querySelector(".quote_span");
const button = document.querySelector(".btn");

const quotesObj = {
  "Audrey Hepburn":
    "Nothing is impossible.The word itself says 'I'm possible!' ",

  "Franklin D. Roosevelt":
    "The only Limit to our realization of tomorrow will be our doubts of today.",

  "Albert Einstein":
    "If you want to live a happy life, tie it to a goal, not to people or things.",

  "Steve Jobs": "The only way to do great work is to love what you do.",

  "Winston Churchill":
    "Success is stumbling from failure to failure with no loss of enthusiasm.",

  "Walt Disney":
    "All our dreams can come true, if we have the courage to pursue them.",

  "Michael Jordan":
    "I've missed more than 9,000 shots in my career. I've lost almost 300 games. 26 times I've been trusted to take the game winning shot and missed. I've failed over and over and over again in my life, and that is why I succeed.",

  "Michele Ruiz":
    "If people are doubting how far you can go, go so far that you can't hear them anymore.",

  "Mary Kay Ash":
    "Don't limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve.",

  "Mark Twain": "The secret of getting ahead is getting started.",
};

let i = 0;
function quoteChange() {
  let keys = Object.keys(quotesObj);
  if (i < keys.length) {
    let author = keys[i];
    let quote = quotesObj[author];

    authorSpan.innerHTML = author;
    quoteSpan.innerHTML = quote;
    i++;
  } else {
    i = 0;
  }
}

button.addEventListener("click", quoteChange);
