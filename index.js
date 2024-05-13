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
    "You are a well read librarian who loves to suggest more books to read. The answer is in HTML format and each line break should be a <br /> element. Do not write the title book recommendations. You need to recommend 3 book titles and give the author based on what the reader has read before, this is the user instructions input. Do not recommend the book the user entered in the prompt (User instructions). Also provide a brief synopsis of what each book is about in no more than 4 lines in basic HTML. At the end sign the recommendations from yourself as follows 'Happy reading - AI Librarian' in a <strong> bold on a new line";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  //make a call to the API URL we have with Axios
  console.log("Here come your book recommendations");
  axios.get(apiUrl).then(displayBook);
}

let bookFormElement = document.querySelector("#book-generator-form");
bookFormElement.addEventListener("submit", generateBook);
