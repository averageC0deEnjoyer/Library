//cannot take input using element.textContent, have to use element.value !!!!


addBookButton = document.querySelector('.add-book-button');
libraryBody = document.getElementsByTagName("body");
overlay = document.querySelector('.overlay')
modal = document.querySelector('.modals');
submitBookButton = document.querySelector('.submit');
mainBody = document.querySelector('.main-body');

addBookButton.addEventListener('click', (e) => {
    modal.classList.add('active');
    overlay.classList.add('active');
    console.log(e);
})


window.addEventListener('click', (e) => {
    element = e.target;
    if(element.classList.contains('overlay')) {
        modal.classList.remove('active');
        overlay.classList.remove('active');
    }
})

submitBookButton.addEventListener('click', (e) => {
    element = e.target
    e.preventDefault();
    inputBookTitle = document.querySelector('.modals .book-title');
    inputBookAuthor = document.querySelector('.modals .book-author');
    inputBookPages = document.querySelector('.modals .book-pages');
    inputRead = document.querySelector('.modals .read');
    if(inputBookTitle.value == "" || inputBookAuthor.value == "" || inputBookPages.value == "") {return};
    addBookToLibrary(inputBookTitle.value, inputBookAuthor.value, inputBookPages.value, inputRead.value);
    document.querySelector('form').reset();
    if(element.classList.contains('submit')) {
        modal.classList.remove('active');
        overlay.classList.remove('active');
    }
    const projectContainer = document.createElement('div');
    const newTitle = document.createElement('div');
    const newAuthor = document.createElement('div');
    const newPage = document.createElement('div');
    const read = document.createElement('div');

    projectContainer.classList.add('books');
    newTitle.classList.add('title');
    newAuthor.classList.add('author');
    newPage.classList.add('page');
    read.classList.add('read');

    newTitle.textContent = inputBookTitle.value;
    newAuthor.textContent = inputBookAuthor.value;
    newPage.textContent = inputBookPages.value;
    read.textContent = inputRead.value;


    projectContainer.appendChild(newTitle);
    projectContainer.appendChild(newAuthor);
    projectContainer.appendChild(newPage);
    projectContainer.appendChild(read);

    mainBody.appendChild(projectContainer);

    console.log(mainBody);
})






const myLibrary = [];


function addBookToLibrary(title, author, pages, read) {
    class Book {
        constructor(title, author, pages, read) {
            this.title = title;
            this.author = author;
            this.pages = pages;
            this.read = read;
        }
    }
    let bookNew = new Book(title, author, pages, read);
    myLibrary.push(bookNew);
}





function Book() {

}