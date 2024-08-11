let myLibrary = [];

// Constructor function for creating new book objects
function Book(title, author, year, pages, read) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.pages = pages;
    this.read = read;
}

// Function to add a new book to the library array and display all books
function addBookToLibrary(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const year = document.getElementById('year').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').checked;
    const newBook = new Book(title, author, year, pages, read);
    myLibrary.push(newBook);
    displayBooks();
}

// Function to display all books on the page
function displayBooks() {
    const bookList = document.getElementById("bookList");
    bookList.innerHTML = ""; 
    // the line above clears all content displayed and then shows the content again for each book in the list
    myLibrary.forEach((book) => {
        const bookCard = document.createElement("div");
        bookCard.className = "book-card";
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
        console.log(myLibrary);
        const removeButtons = document.querySelectorAll('.remove-button');
        removeButtons.forEach(button => {
            button.addEventListener('click', () => {
                myLibrary.pop();
                displayBooks();
            });
        });
        console.log(myLibrary);
    });
}

const addBookButton = document.querySelector('#add-books');
addBookButton.addEventListener('click', addBookToLibrary);

const newBook = document.querySelector("#newBookButton");
newBook.addEventListener('click', () => {
    const bookForm = document.querySelector("#bookFormContainer");
    bookForm.classList.remove('hidden');
});

const cancelButton = document.querySelector("#cancelButton");
cancelButton.addEventListener('click', () => {
    const bookForm = document.querySelector("#bookFormContainer");
    bookForm.classList.add('hidden');
});

const clearButton = document.querySelector("#clear-button");
clearButton.addEventListener('click', () => {
    myLibrary = [];
    console.log(myLibrary);
    displayBooks();
});
