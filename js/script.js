const grocerices = document.getElementsByClassName("groceries")[0];
const eraser = document.getElementById("eraser");
const allIteam = document.getElementById("allIteam");
const userInput = document.getElementById("userInput")

eraser.addEventListener("click", function() {
    allIteam.innerHTML = '';
})

userInput.addEventListener("keydown", function(event) {
    if (event.key == Enter)
        addIteam();
})

function addIteam() {
    var h2 = document.createElement('h2');
    h2.innerHTML = "- " + userInput.value;

    h2.addEventListener("click", function() {
        h2.style.textDecoration = "line-through";

        allIteam.insertAdjacentElement("beforeend", h2);


    })
}