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

const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const pagesInput = document.querySelector("#pages");
const readInput = document.querySelector("#read");

const titleError = document.querySelector("#title-error");
function validateTitle() {
  if (titleInput.value.trim() === "") {
    titleError.textContent = "Title cannot be empty.";
  } else {
    titleInput.setCustomValidity("");
    titleError.textContent = "";
  }
}

const pageError = document.querySelector("#pages-error");
function validatePage() {
  if(pagesInput.value < 0) {
    pageError.textContent = "Page canot be negative.";
  } else {
    pagesInput.setCustomValidity("");
    pageError.textContent = "";
  }
}
titleInput.addEventListener("input", validateTitle);
pagesInput.addEventListener("input", validatePage);

bookForm.addEventListener("submit", function (event) {
  event.preventDefault();
  

  validateTitle();
  validatePage();
  
  if (!bookForm.reportValidity()) {
    return;
  }

  const title = titleInput.value.trim();
  const author = authorInput.value.trim();
  const pages = Number(pagesInput.value);
  const read = readInput.checked;

  library.addBookToLibrary(title, author, pages, read);

  displayBooks(library);
  bookForm.reset();
  bookDialog.close();
});
