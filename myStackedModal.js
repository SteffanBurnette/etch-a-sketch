const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");
const modal = document.getElementById("modal");
const submitBtn = document.getElementById("submit_form");


// Handles the opening and closing of the forms
openModal.addEventListener("click", ()=>{

    modal.showModal();
});

closeModal.addEventListener("click", ()=>{

    modal.close();
});

submitBtn.addEventListener("click", ()=>{
    console.log("Submitted");
    modal.close();
});