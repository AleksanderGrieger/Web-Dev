let numSquares = 6
let colors = []
let pickedColor 

let squares = document.querySelectorAll(".square");
let colorDisplay = document.querySelector("#colorDisplay")
let messageDisplay = document.querySelector("#message")
let h1 = document.querySelector("h1")
let resetButton = document.querySelector("#reset")
let modeButtons = document.querySelectorAll(".mode")


init()

function init()
{
    setupModeButtons()
    setupSquares()
    reset()
}
    
function setupModeButtons()
{
    for (let i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected")
            modeButtons[1].classList.remove("selected")
            this.classList.add("selected")
            //this.textContent === "Easy" ? numSquares = 3: numSquares = 6
            if(this.textContent === "Easy"){
                numSquares = 3
            }
            else{
                numSquares = 6
            }
            reset()
        })
    }
}

function setupSquares()
{
    for (let i = 0; i < squares.length; i++)
    {
        squares[i].addEventListener("click",function(){
            let clickedColor = this.style.backgroundColor
            if(clickedColor === pickedColor)
            {
                messageDisplay.textContent = "Correct!"
                resetButton.textContent = "Play again?"
                changeColors(clickedColor)
                h1.style.backgroundColor = clickedColor
            }
            else
            {
                this.style.backgroundColor = "#232323"
                messageDisplay.textContent = "Try Again"
            }
        })
    }
}

function reset()
{
    colors = generateRandomColors(numSquares)
    pickedColor = pickColor()
    colorDisplay.textContent = pickedColor
    h1.style.backgroundColor = "steelblue"
    resetButton.textContent = "New Color"
    messageDisplay.textContent = ""
    for (let i = 0; i < squares.length; i++) {
        if(colors[i])
        {
            squares[i].style.display = "block"
            squares[i].style.backgroundColor = colors[i]
        }
        else
        {
            squares[i].style.display = "none"
        }
        
    } 
}


resetButton.addEventListener("click",function(){
    reset()
})


function changeColors(color)
{
   for (let i = 0; i < squares.length; i++) {
       squares[i].style.backgroundColor = color
   } 
}

function pickColor()
{
   let random = Math.floor(Math.random() * colors.length)
   return colors[random]
}

function generateRandomColors(num)
{
    let arr = []
    for (let i = 0; i < num; i++) {
       arr.push(randomColor()) 
    }
    return arr
}

function randomColor()
{
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)
    return "rgb(" + r + ", " + g + ", " + b + ")"
}