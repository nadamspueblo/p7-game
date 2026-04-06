console.log("Script started");


// Start the game
function start() {
    createSquare(50, "red");
    createSquare(80, "green");
    createSquare(90, "blue");
    createSquare(110, "orange");
    console.log(Math.random() * 1000);
}

// Creates a square
function createSquare(size, color) {
    // Create an element (div)
    let square = document.createElement("div");

    // Set some styles to make it a square
    square.style.background = color;
    square.style.width = size + "px";
    square.style.height = size + "px";
    square.style.position = "absolute";
    square.style.borderRadius = "16px";
    square.style.top = getRandomY() + "px";
    square.style.left = getRandomX() + "px";

    // Add it to the page
    document.body.appendChild(square);

    // Add click event
    square.addEventListener("click", handleClick);
}

// Generate a random x coordinate
function getRandomX() {
    let randX = Math.random() * window.innerWidth;
    return randX;
}

// Generate a random y coordinate
function getRandomY() {
    let randY = Math.random() * window.innerHeight;
    return randY;
}

// Handle the player clicking a square
function handleClick(event) {
    let square = event.target;
    console.log(square);
    // Make a size pattern i.e. increase by the same amount each 10, 20, 30, ...
}