const myLibrary = [];

// Constructor function for creating new book objects
function Book(title, author, year, pages, read) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.pages = pages;
    this.read = read;
}

// Function to add a new book to the library array and display all books
function addBookToLibrary(title, author, year, pages, read) {
    const newBook = new Book(title, author, year, pages, read);
    myLibrary.push(newBook);
    displayBooks();
}

// Function to display all books on the page
function displayBooks() {
    const bookList = document.getElementById("bookList");
    bookList.innerHTML = "";

    myLibrary.forEach((book, index) => {
        const bookCard = document.createElement("div");
        bookCard.className = "book-card";
        bookCard.dataset.index = index;
        bookCard.innerHTML = `
        <h3>${book.title}</h3>
        <p><strong>Author:</strong> ${book.author}</p>
        <p><strong>Year:</strong> ${book.year}</p>
        <p><strong>Pages:</strong> ${book.pages}</p>
        <p><strong>Read:</strong> ${book.read ? "Yes" : "No"}</p>
        <button class="remove-button">Remove</button>
        <button class="toggle-read-button">${
            book.read ? "Mark as Unread" : "Mark as Read"
        }</button>
    `;
        bookList.appendChild(bookCard);
        console.log(bookCard);
        console.log(bookList);
        console.log(myLibrary);
    });
}
