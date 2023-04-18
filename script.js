let myLibrary = [];

function Book() {

}

function addBookToLibrary() {

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