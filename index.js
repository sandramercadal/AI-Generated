function displayBook(response) {
  //response.data.answer will have the answer (book title) in it
  new Typewriter("#book-result", {
    strings: response.data.answer,
    autoStart: true,
    cursor: null,
    delay: 1,
  });
}

function generateBook(event) {
  //console.log("processed");
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "b88b1f146af7a33abtdd4oddc5070ff6";
  let prompt = `User instructions: Generate 3 book recommendations based on ${instructionsInput.value}`;
  let context =
    "Give me 3 book recommendations based on the booked entered in the prompt. Do not recommend the book the user entered in the prompt. Do not use the words title, book recommendations or book recommendation. The answer should be in html format. Use the ordered list tag to list the books. The brief synopsis of what each book is like should be 4 lines or less in basic HTML. Use the break line html tag to separate the title from the sinopsis. Do not use the paragraph tag. At the end add a break line html element <br /> and sign the recommendations from yourself as follows 'Happy reading - AI Librarian' in strong html element.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let bookResultElement = document.querySelector("#book-result");
  bookResultElement.classList.remove("hidden");
  bookResultElement.innerHTML = `<div class="generating">📚 Here come your book recommendations based on ${instructionsInput.value}</div>`;

  //make a call to the API URL we have with Axios
  console.log("Here come your book recommendations");
  axios.get(apiUrl).then(displayBook);
}

let bookFormElement = document.querySelector("#book-generator-form");
bookFormElement.addEventListener("submit", generateBook);
