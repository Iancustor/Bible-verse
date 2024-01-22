// const API = "https://api.quotable.io/random";
const API = "https://labs.bible.org/api/?passage=random&type=json";
async function generateQuote(API) {
  try {
    const response = await fetch(API);
    const data = await response.json();
    // console.log(data[0]);
    const quote = data[0].text;
    const book = data[0].bookname;
    const chapter = data[0].chapter;
    const verse = data[0].verse;
    // console.log(quote);
    // quoteContainer.textContent = ``;
    quoteContainer.textContent = quote;
    bookCon.textContent = book;
    chapterCon.textContent = chapter;
    verseCon.textContent = verse;
  } catch (err) {
    console.log(err);
  }
}
setInterval(() => {
  generateQuote(API);
}, 201000);
generateQuote(API);
const quoteContainer = document.getElementById("quote");
// console.log(quoteContainer);
const bookCon = document.getElementById("book");
const chapterCon = document.getElementById("chapter");
const verseCon = document.getElementById("verse");
const nextBtn = document.getElementById("nextBtn");
// console.log(nextBtn);

nextBtn.addEventListener("click", function nextQuote() {
  generateQuote(API);
});

const copyBtn = document.getElementById("copyBtn");
// console.log(copyBtn);
copyBtn.addEventListener("click", function copyingQuote() {
  const copyQuote = quoteContainer.textContent;
  navigator.clipboard
    .writeText(copyQuote)
    .then((result) => {
      showMessage();
    })
    .catch((err) => {
      console.log(err);
    });
  // console.log("copy btn clicked ");
});

const message = document.querySelector(".message");
// console.log(message);
function showMessage() {
  message.classList.add("showMessage");
  setTimeout(() => {
    message.classList.remove("showMessage");
  }, 3000);
}
