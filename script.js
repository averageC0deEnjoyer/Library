// //cannot take input using element.textContent, have to use element.value !!!!

//how to add eventListener to a dynamically generated button(generated after all things loaded??) 1solution is using document and use contains method



addBookButton = document.querySelector('.add-book-button');
overlay = document.querySelector('.overlay');
modal = document.querySelector('.modals');

addBookButton.addEventListener('click', () => {
    modal.classList.add('active');
    overlay.classList.add('active');
})

window.addEventListener('click', (event) => {
    element = event.target;
    if(element.classList.contains('overlay')) {
        modal.classList.remove('active');
        overlay.classList.remove('active');
    }
})

submitBtn = document.querySelector('.submit');
submitBtn.addEventListener('click', (event)=> {
    let inputTitle = document.querySelector('.modals .book-title').value;
    let inputAuthor = document.querySelector('.modals .book-author').value;
    let inputPages = document.querySelector('.modals .book-pages').value;
    let inputRead = document.querySelector('.modals .read');
    let inputReadResult = "";
    let readBool = 0;
    if(inputRead.checked) {
        inputReadResult = `I've read`;
        readBool = 1;
    } else {
        inputReadResult = `I haven't read`;
        readBool = 0;
    }
    if(inputTitle == "" || inputAuthor == "" || inputPages == "" ){return;}
    event.preventDefault();
    addBookToLibrary(inputTitle, inputAuthor, inputPages, inputReadResult);
    showBookToLibrary(inputTitle, inputAuthor, inputPages, inputReadResult, readBool);
    modal.classList.remove('active');
    overlay.classList.remove('active');
});

//to remove element , using button that is dynamically generated
document.body.addEventListener( 'click', function(event){
    if(event.target.classList.contains('remove-button')){
        for(let i=0; i<myLibrary.length;i++){
            if(event.target.parentElement.firstElementChild.textContent === myLibrary[i].title){
                myLibrary.splice(i,1);
                event.target.parentElement.remove();
                console.log(myLibrary);
            }
        }
    };
});

document.body.addEventListener('click', function(event){
    if(event.target.classList.contains('read')){
        if(event.target.classList.contains('active')){
            event.target.classList.remove('active');
            event.target.textContent = `I haven't read`;
            for(let i=0; i<myLibrary.length;i++){
                if(event.target.parentElement.firstElementChild.textContent === myLibrary[i].title){
                    myLibrary[i].read = `I haven't read`;
                    console.log(myLibrary);
                }
            }
        } else {
            event.target.classList.add('active');
            event.target.textContent = `I've read`;
            for(let i=0; i<myLibrary.length;i++){
                if(event.target.parentElement.firstElementChild.textContent === myLibrary[i].title){
                    myLibrary[i].read = `I've read`;;
                    console.log(myLibrary);
                }
            }
        }
    }
})

let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
    const form = document.querySelector('form');
    book = new Book(title, author, pages, read);
    myLibrary.push(book);
    form.reset();
    console.log(myLibrary);
}

function showBookToLibrary(title, author, pages, read, readbool){
    let mainBody = document.querySelector('.main-body');
    let bookDesc = document.createElement('div');
    let bookDescContent = ""
    if(readbool == 1) {
        bookDescContent = `
        <div class="title">${title}</div>
        <div class="author">${author}</div>
        <div class="page">${pages}</div>
        <div class="read active">${read}</div>
        <button class="remove-button">remove</button>`
    } else {
        bookDescContent = `
        <div class="title">${title}</div>
        <div class="author">${author}</div>
        <div class="page">${pages}</div>
        <div class="read">${read}</div>
        <button class="remove-button">remove</button>`}
    bookDesc.innerHTML = bookDescContent;
    mainBody.append(bookDesc);
    bookDesc.classList.add('books')
}







//create a variation that push user input data to array, then from array data display the data in div.books