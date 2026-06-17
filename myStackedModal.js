const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");
const modal = document.getElementById("modal");
const submitBtn = document.getElementById("submitBtn");


// Handles the opening and closing of the forms
openModal.addEventListener("click", ()=>{

    modal.showModal();
});

closeModal.addEventListener("click", ()=>{

    modal.close();
});