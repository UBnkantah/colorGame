var numSquare = 6;
var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var displayColor = document.querySelector("#displayColor");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#resetButton");
var easyButton = document.querySelector("#easyButton");
var hardButton = document.querySelector("#hardButton");

displayColor.textContent = pickedColor;

easyButton.addEventListener("click", function(){
    easyButton.classList.add("selected");
    hardButton.classList.remove("selected");
    numSquare = 3;
    colors = generateRandomColors(numSquare);
    pickedColor = pickColor();
    displayColor.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.background = colors[i];
        } else{
            squares[i].style.background = "none";
        }
    }
});

hardButton.addEventListener("click", function(){
    hardButton.classList.add("selected");
    easyButton.classList.remove("selected");
    numSquare = 6;
    colors = generateRandomColors(numSquare);
    pickedColor = pickColor();
    displayColor.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
            squares[i].style.background = colors[i];
            squares[i].style.background = "block";
    }
});

resetButton.addEventListener("click", function(){
    //generate all new colors
    colors = generateRandomColors(6);
    //pick a new random color from arrays
    pickedColor = pickColor(); 
    //change displayColor to match pickedColor
    displayColor.textContent = pickedColor;
    // h1.style.background = "steelblue"
    //change colors of squares
    for(var i = 0; i < squares.length; i++){
        squares[i].style.background = colors[i];
    }
    h1.style.backgroundColor = "steelblue"
    messageDisplay.textContent = ""
    this.textContent = "New Colors "
})

for(var i = 0; i < squares.length; i++){
    squares[i].style.background = colors[i];
    //add clicked listener to squares
    squares[i].addEventListener("click", function(){
    //grab color of clicked square
        // alert(this.style.background);
        var clickedColor = this.style.background
        //compared colors to picked colors
        console.log(clickedColor, pickedColor);
        if(clickedColor === pickedColor){
            messageDisplay.textContent = "Correct";
            changeColors(clickedColor)
            h1.style.background = clickedColor;
            resetButton.textContent = "Play Again"
        }else{
            this.style.background = "gray";
            messageDisplay.textContent = "Try Again";
        }
    });
}

function changeColors(color){
    //loop through all squares
    for(var i = 0; i < squares.length; i++){
    //change colors to the picked colors
    squares[i].style.background = color;
    }
    
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    //make an array
    var arr = []
    //add num to random colors to array
    for(var i = 0; i < num; i++){
    //get random colors and push into the array
    arr.push(randomColors())
    }
    //return that array
    return arr; 
}

function randomColors(){
    //pick a "red" from 0 - 255
    var r = Math.floor(Math.random() * 256);
    //pick a "green" from 0 - 255
    var g = Math.floor(Math.random() * 256);
    //pick a "blue" from 0 - 255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
    
}