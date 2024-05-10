function generateBook(event) {
  event.preventDefault();

  new Typewriter("#book-result", {
    strings: "One Day by David Nicholls",
    autoStart: true,
    cursor: null,
    delay: 40,
  });
}

let bookFormElement = document.querySelector("#book-generator-form");
bookFormElement.addEventListener("submit", generateBook);
