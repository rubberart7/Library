let myLibrary = [];

// Constructor function for creating new book objects
class Book {
    constructor(title, author, year, pages, read) {
        this.title = title;
        this.author = author;
        this.year = year;
        this.pages = pages;
        this.read = read;
    }
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
    myLibrary.forEach((book, index) => {
        // the index parameter is already the index of the object in the array
        const bookCard = document.createElement("div");
        bookCard.className = "book-card";
        bookCard.innerHTML = `
        <h3>${book.title}</h3>
        <p><strong>Author:</strong> ${book.author}</p>
        <p><strong>Year:</strong> ${book.year}</p>
        <p><strong>Pages:</strong> ${book.pages}</p>
        <p id="read-message"><strong>Read:</strong> ${book.read ? "Yes" : "No"}</p>
        <button class="remove-button" data-index="${index}">Remove</button>
        <button class="toggle-read-button">${
            book.read ? "Mark as Unread" : "Mark as Read"
        }</button>
        `;
        bookList.appendChild(bookCard);
        console.log(myLibrary);
        // need to use index parameter to assign index to specific books and access the index
        //using dataaset.index
    });
}

document.getElementById("bookList").addEventListener('click', (event) => {
    // need event parameter to do things like event.target
    if (event.target.classList.contains('remove-button')) {
        const index = parseInt(event.target.dataset.index, 10);
        // target refers to element that triggered the event,
        //dataset.index refers to the index of the dataset value
        myLibrary.splice(index, 1);
        displayBooks();
    }

    if (event.target.classList.contains('toggle-read-button')) {
        const index = parseInt(event.target.previousElementSibling.dataset.index, 10);
        // previous sibling is remove button and its used to get the index
        // using the index allows you to change the correct book to toggle the read status
        myLibrary[index].read = !myLibrary[index].read;
        displayBooks();
    }
});

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
    displayBooks();
});
