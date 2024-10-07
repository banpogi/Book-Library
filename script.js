console.log("Hey");

const addBtn = document.getElementById("add-btn");
const dialogue =document.getElementById("bookDialogue");
const cancel = document.querySelector(".cancel-btn")

addBtn.addEventListener("click", () => {
    dialogue.showModal();
})

cancel.addEventListener("click", (e) => {
    e.preventDefault();
    dialogue.close();
})