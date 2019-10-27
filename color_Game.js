var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDsiplay = document.getElementById("colorDsiplay");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
    //mode buttons event listener
    setUpModeButtons();
    setUpSquares();
    reset();

}

function setUpSquares() {
    for (var i = 0; i < squares.length; i++) {
        //click listeners to squares
        squares[i].addEventListener("click", function () {
            //grab color of clicked square
            var clickedColor = this.style.backgroundColor;
            //compare color to pickedColor
            if (clickedColor === pickedColor) {
                message.textContent = "Correct!";
                changeColors(clickedColor);
                h1.style.backgroundColor = pickedColor;
                resetButton.textContent = "Play Again?";
            } else {
                this.style.backgroundColor = "#232323";
                message.textContent = "Try Again!";
            }

        })
    }
}
function setUpModeButtons() {
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function () {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
            this.classList.add("selected");
            // if (this.textContent === "EASY") {
            //     numSquares = 3;
            // } else {
            //     numSquares = 6;
            // }
            reset();
            //figure how many squares to show
            //pick new colors
            //pick a new picked color
            //update page to reflect changes
        })
    }
}
function reset() {
    //generate all new colors
    colors = generateRandomColors(numSquares);
    //pick a new random color from array
    pickedColor = pickColor();
    //change color display to match picked color
    colorDsiplay.textContent = pickedColor;
    message.textContent = "";
    resetButton.textContent = "New Colors..."
    //change colors on the squares
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "steelblue";

}

// easyButton.addEventListener("click", function () {
//     easyButton.classList.add("selected");
//     hardButton.classList.remove("selected");
//     numSquares = 3;
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDsiplay.textContent = pickedColor;
//     for (var i = 0; i < squares.length; i++) {
//         if (colors[i]) {
//             squares[i].style.backgroundColor = colors[i];
//         } else {
//             squares[i].style.display = "none";
//         }
//     }
// });

// hardButton.addEventListener("click", function () {
//     hardButton.classList.add("selected");
//     easyButton.classList.remove("selected");
//     numSquares = 6;
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDsiplay.textContent = pickedColor;
//     for (var i = 0; i < squares.length; i++) {
//         squares[i].style.backgroundColor = colors[i];

//         squares[i].style.display = "block";

//     }
// });

resetButton.addEventListener("click", function () {
    reset();
});


function changeColors(color) {
    //loop through all the squares
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
    //change each color to match given color
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(number) {
    //make an array
    var arr = [];
    //add num of random colors to array, it will be repeated num times
    for (var i = 0; i < number; i++) {
        //get random color
        arr.push(randomColor());
        //push into array
    }
    //return array
    return arr;
}

function randomColor() {
    //pick a red from 0 to 255
    var red = Math.floor(Math.random() * 256);
    //pick a green from 0 to 255
    var green = Math.floor(Math.random() * 256);
    //pick a blue from 0 to 255
    var blue = Math.floor(Math.random() * 256);
    return "rgb(" + red + ", " + green + ", " + blue + ")";
}