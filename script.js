let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.toggleRead = function() {
    this.read = !this.read;
}

function toggleRead(index) {
    myLibrary[index].toggleRead();
    display();
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
            <p class="book-card-child">"${book.title}"</p>
            <p class="book-card-child">${book.author}</p>
            <p class="book-card-child">${book.pages} Pages</p>
            <p class="book-card-child">${book.read ? "Read" : "Not Read Yet "}
            <button class="toggleRead-btn" onclick="toggleRead(${i})">Toggle</button>
            </p>
            <button class="removeBtn" onclick="removeBook(${i})">Remove</button>
        </div>
        `;
        LibraryBook.appendChild(bookItem);
    }
}

function removeBook(index) {
    //use splice to remove item from array
    myLibrary.splice(index, 1);
    display();
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

