import { Book } from "./book.js";

export class Library {
    constructor() {
        this.books = [];
    }

addBookToLibrary(title, author, pages, read) {
  const book = new Book(title, author, pages, read);
  this.books.push(book);
}

removeBook(book) {
    this.books = this.books.filter((item) => item !== book);
}
}
