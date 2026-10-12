export function displayBooks(library) {
  const libraryContainer = document.querySelector("#library-container");
  libraryContainer.innerHTML = "";

  library.books.forEach((book) => {
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
      library.removeBook(book);
      displayBooks(library);
    });

    const toggleButton = document.createElement("button");
    toggleButton.textContent = "Toggle Read";
    toggleButton.addEventListener("click", function () {
      book.toggleRead();
      displayBooks(library);
    });

    bookCard.appendChild(title);
    bookCard.appendChild(author);
    bookCard.appendChild(pages);
    bookCard.appendChild(status);
    bookCard.appendChild(toggleButton);
    bookCard.appendChild(removeButton);

    libraryContainer.appendChild(bookCard);
  });
}