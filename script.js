console.log("Hey");
const myLibrary = [];


const addBtn = document.getElementById("add-btn");
const dialogue =document.getElementById("bookDialogue");
const cancel = document.querySelector(".cancel-btn")
const confirm = document.getElementById("confirm")
const bookContainer = document.querySelector(".book-items")

addBtn.addEventListener("click", () => {
    dialogue.showModal();
})

cancel.addEventListener("click", (e) => {
    e.preventDefault();
    dialogue.close();
})

function Book(title, author, pages, isRead) {
    
    this.title = title;
    this.author = author;
    this.pages= pages;
    this.isRead = isRead;
}


confirm.addEventListener("click", (e) => {
    e.preventDefault()

    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const isRead = document.getElementById("isRead").value;

    const newBook = new Book(title, author, pages, isRead);

    myLibrary.push(newBook);
    console.log(myLibrary);
    dialogue.close();
    displayBooks(newBook);

})


function displayBooks(book){

    const card = document.createElement("div")
    card.classList.add("card");

    const title = document.createElement("p");
    title.textContent =`Title : ${ book.title}`;
    
    const author = document.createElement("p");
    author.textContent = `Author : ${book.author}`;

    const pages = document.createElement("p");
    pages.textContent = `Pages : ${book.pages}`;

    const isRead = document.createElement("p");
    isRead.textContent = `Done Reading? :${book.isRead}`;

    card.appendChild(title)
    card.appendChild(author)

    card.appendChild(pages)

    card.appendChild(isRead)

    bookContainer.appendChild(card);


}