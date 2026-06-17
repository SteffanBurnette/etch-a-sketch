const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");
const modal = document.getElementById("modal");
const submitBtn = document.getElementById("submit_form");

//form variables
const username = document.getElementById("username");
const email = document.getElementById("email");
const usrNumber = document.getElementById("phone_number");

const address = document.getElementById("address");
const zipCode = document.getElementById("zip_code");
const city = document.getElementById("city");
const state = document.getElementById("state");

//radio element selected value
const gender = document.querySelector('input[name="gender"]:checked');
const age = document.querySelector('input[name="age"]:checked');


// Handles the opening and closing of the forms
openModal.addEventListener("click", ()=>{

    modal.showModal();
});

closeModal.addEventListener("click", ()=>{

    modal.close();
});

submitBtn.addEventListener("click", ()=>{
   
   
    const userInfo = {
        "Username": username.value,
        "Email": email.value,
        "Phone Number": usrNumber.value,
        "Address": address.value,
        "Zip Code": zipCode.value,
        "City": city.value,
        "State": state.value,
        "Gender": gender.value,
        "Age": age.value

    }

    console.log(userInfo);
    modal.close();
});