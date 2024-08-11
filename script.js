const myLibrary = [];

function Book(title, author, year, pages, read) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.pages = pages;
    this.read = read;
};

function addBookToLibrary(title, author, year, pages, read) {
    const newBook = new Book(title, author, year, pages, read);
    myLibrary.push(newBook);
    displayBooks();
};

function displayBooks() {
    const bookList = document.getElementById('bookList');
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
        <p><strong>Read:</strong> ${book.read ? 'Yes' : 'No'}</p>
        <!-- if book read is true then yes is returned otherwise no is returned as the text -->
        <button class="remove-button">Remove</button>
        <button class="toggle-read-button">${book.read ? 'Mark as Unread' : 'Mark as Read'}</button>
    `;
    bookList.appendChild(bookCard);
    });

    document.querySelectorAll(".remove-button").forEach(button => {
        button.addEventListener("click", handleRemoveBook);
    });
    document.querySelectorAll('.toggle-read-button').forEach(button => {
        button.addEventListener('click', handleToggleReadStatus);
    });
}

document.getElementById("bookform").addEventListener("submit", function() {
    const title = this.title.value;
    const author = this.author.value;
    const year = this.year.value;
    const pages = this.pages.value;
    const read = this.read.checked;

    addBookToLibrary(title, author, year, pages, read);
    this.reset();
    toggleFormVisibility();
    // method that restores a form element's default values

});

document.getElementById('newBookButton').addEventListener('click', function() {
    toggleFormVisibility();
});

document.getElementById('cancelButton').addEventListener('click', function() {
    toggleFormVisibility();
});

function toggleFormVisibility() {
    const formContainer = document.getElementById('bookFormContainer');
    formContainer.classList.toggle('hidden');
}

function handleRemoveBook(event) {
    const index = event.target.parentElement.dataset.index;
    myLibrary.splice(index, 1);
    displayBooks();
}

// Handle toggle read status
function handleToggleReadStatus(event) {
    const index = event.target.parentElement.dataset.index;
    myLibrary[index].read = !myLibrary[index].read;
    displayBooks();
}