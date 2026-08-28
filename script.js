const myLibrary = [];

function Book(title, author, pages, read) {
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

const book1 = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);

console.log(book1);
s;
