const mainContainer = document.getElementById("container");
const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");
const modal = document.getElementById("modal");
const usrGrid = document.getElementById("usrInput");
//dynamically create a 16 x 16 grid layout
// use flexbox to handle spacing and layout structure
//thoughs
// create a loop that dynamically appends a row of 16 divs per column per iteration
// run said loop 16 time

function createGrid(userGridAmount = 16){

    for(let i = 0; i < userGridAmount; i++){

    const divLst = document.createElement("div");
    divLst.classList.add("divList");

    for(let i = 0; i < userGridAmount; i++){
        const newDiv = document.createElement("div");
        newDiv.classList.add("innerContent");

        //Event listeners that dynamically change the background color
        newDiv.addEventListener("mouseenter", () =>{
            newDiv.style.backgroundColor = "black";
        })

        newDiv.addEventListener("mouseleave", () =>{
            newDiv.style.backgroundColor = "blue";
        })

        divLst.appendChild(newDiv);

        
    }

    mainContainer.appendChild(divLst);
    

}

}


openModal.addEventListener("click", ()=>{
    modal.showModal();
});

closeModal.addEventListener("click", ()=>{
    if(usrGrid.value){
        mainContainer.replaceChildren();
        createGrid(usrGrid.value)
        console.log(usrGrid.value);
    }
    modal.close();
});

/*
usrGrid.addEventListener("input", (event)=>{
    userGridAmount = usrGrid.value;
    modal.close();

})
*/

createGrid();

