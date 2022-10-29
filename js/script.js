const groceries = document.getElementsByClassName("groceries")[0];
const eraser = document.getElementById("eraser");
const allItems = document.getElementById("allIteam");
const userInput = document.getElementById("userInput");

eraser.addEventListener("click", function() {
    allItems.innerHTML = "";
})

userInput.addEventListener("keydown", function(event) {
    if (event.key == "Enter")
        addIteam();
})

function addIteam() {
    var h2 = document.createElement("h2");
    h2.innerHTML = "- " + userInput.value;

    h2.addEventListener("click", function() {
        h2.style.textDecoration = "line-through";
    })

    allItems.insertAdjacentElement("beforeend", h2);

    userInput.value = "";
}