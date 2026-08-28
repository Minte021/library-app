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
  myLibrary.forEach((book) => {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");
    bookCard.textContent = `
    Title: ${book.title}
    Author: ${book.author}
    pages: ${book.pages}
    `;

    libraryContainer.appendChild(bookCard);
  });
}

displayBooks();
