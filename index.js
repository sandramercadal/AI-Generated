function displayBook(response) {
  //response.data.answer will have the answer in it
  new Typewriter("#book-result", {
    strings: response.data.answer,
    autoStart: true,
    cursor: null,
    delay: 45,
  });
}

function generateBook(event) {
  //console.log("processed");
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "b88b1f146af7a33abtdd4oddc5070ff6";
  let prompt = `User instructions: Generate 3 book recommendations based on ${instructionsInput.value}`;
  let context =
    "You are a well read librarian who loves to suggest more books to read. You need to recommend 3 book titles based on what the reader has read before this is the user instructions input. Please provide the title of the book and the author. Also a brief synopsis of what each book is about too in basic HTML. At the end on a new line underneath write 'Happy reading - AI Librarian' in bold";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  //make a call to the APi with Axios
  console.log("Here some your book recommendations");
  axios.get(apiUrl).then(displayBook);
}

let bookFormElement = document.querySelector("#book-generator-form");
bookFormElement.addEventListener("submit", generateBook);
