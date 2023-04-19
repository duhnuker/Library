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
    console.log(myLibrary);
}

function display() {

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

