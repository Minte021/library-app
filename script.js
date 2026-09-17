const myLibrary = [];

function Book(title, author, pages, read) {
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
}

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, false);

addBookToLibrary("Clean Code", "Robert C. Martin", 464, true);
addBookToLibrary("Good Morning Holy Spirit", "Pastor Benny Hinn", 90, true);
console.log(myLibrary);

const libraryContainer = document.querySelector("#library-container");

function displayBooks() {
  libraryContainer.innerHTML = "";
  myLibrary.forEach((book) => {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");
    bookCard.dataset.id = book.id;

    const title = document.createElement("h2");
    title.textContent = book.title;

    const author = document.createElement("p");
    author.textContent = `Author: ${book.author}`;

    const pages = document.createElement("p");
    pages.textContent = `Pages: ${book.pages}`;

    const status = document.createElement("p");
    status.textContent = book.read ? "Status: Read" : "Status: Not Read";

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", function () {
      const bookId = bookCard.dataset.id;
      const bookIndex = myLibrary.findIndex(function (book) {
        return book.id === bookId;
      });

      myLibrary.splice(bookIndex, 1);

      displayBooks();
    });

    const toggleButton = document.createElement("button");
    toggleButton.textContent = "Toggle Read";

    bookCard.appendChild(title);
    bookCard.appendChild(author);
    bookCard.appendChild(pages);
    bookCard.appendChild(status);
    bookCard.appendChild(toggleButton);
    bookCard.appendChild(removeButton);

    libraryContainer.appendChild(bookCard);
  });
}

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

  addBookToLibrary(title, author, pages, read);
  displayBooks();
  bookForm.reset();
  bookDialog.close();
});
