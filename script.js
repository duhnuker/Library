let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let pages = document.querySelector('#pages').value;
    let read = document.querySelector('#read').checked;
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    display();
}

function display() {
    let LibraryBook = document.querySelector('.myLibrary-container');
        //prevent duplication of books being displayed
        LibraryBook.innerHTML = "";
    for (i = 0; i < myLibrary.length; i++) {
        let book = myLibrary[i];
        let bookItem = document.createElement('div');
        bookItem.innerHTML = `
        <div class="book-card">
            <p class="book-title">${book.title}</p>
            <p class="book-author">${book.author}</p>
            <p class="book-pages">${book.pages}</p>
            <p class="book-read">${book.read}</p>
        </div>
        `;
        LibraryBook.appendChild(bookItem);
    }
}

let newBookBtn = document.querySelector('#newBook-btn');
    newBookBtn.addEventListener("click", function() {
    let newBookForm = document.querySelector('#newBook-Form');
    newBookForm.style.display = "block";
})


//submit button changed to add book to library instead of default back end send.
document.querySelector('#newBook-Form').addEventListener('submit', function(event) {
    event.preventDefault();
    addBookToLibrary();
})

//Cancel/Hide Form
    let cancelBtn = document.querySelector('#cancel-btn');
    cancelBtn.addEventListener('click', function() {
    let hideForm = document.querySelector('#newBook-Form');
    hideForm.style.display = "none";
})

