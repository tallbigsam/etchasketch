let container = document.querySelector(".container");


for(let i=0; i < 256; i++) {
    let square = document.createElement("div")
    square.className = "square";
    container.appendChild(square);
    console.log("Appending ")
}

function changeColour(event) {
    event.fromElement.classList.add("entered");
}

let squares = document.querySelectorAll(".square");

squares.forEach(
    function(square) {
        square.addEventListener("mouseenter", changeColour);
    }
)