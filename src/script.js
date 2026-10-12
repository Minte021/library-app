import { Library } from "./library.js";
import { displayBooks } from "./UI.js";

const library = new Library();



library.addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, false);

library.addBookToLibrary("Clean Code", "Robert C. Martin", 464, true);
library.addBookToLibrary("Good Morning Holy Spirit", "Pastor Benny Hinn", 90, true);
console.log(library.books);


const newBookButton = document.querySelector("#new-book-btn");
const bookDialog = document.querySelector("#book-dialog");
const bookForm = document.querySelector("#book-form");
const cancelButton = document.querySelector("#cancel-btn");

newBookButton.addEventListener("click", function () {
  bookDialog.showModal();
});

cancelButton.addEventListener("click", function () {
  bookDialog.close();
});

bookForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const pages = Number(document.querySelector("#pages").value);
  const read = document.querySelector("#read").checked;

  library.addBookToLibrary(title, author, pages, read);
  displayBooks(library);
  bookForm.reset();
  bookDialog.close();
});

displayBooks(library);