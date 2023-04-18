let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    document.querySelector('#title').value;
    document.querySelector('#author').value;
    document.querySelector('#pages').value;
    document.querySelector('#read').checked;
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

let newBookBtn = document.querySelector('#newBook-btn');
newBookBtn.addEventListener("click", function() {
    let newBookForm = document.querySelector('#newBook-Form');
    newBookForm.style.display = "block";
})

let cancelBtn = document.querySelector('#cancel-btn');
cancelBtn.addEventListener('click', function() {
    cancelBtn.style.display = "none";
})


//submit button changed to add book to library instead of default back end send.//
document.querySelector('newBook-Form').addEventListener('submit', function() {
    event.preventDefault();
    addBookToLibrary();
})