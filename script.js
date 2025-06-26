//buttons used to move
buttonStart = document.querySelector(".startButton")
advance = document.querySelector("#advance")
end = document.querySelector("#end")

//different div pages being used
action = document.querySelector(".action")
open = document.querySelector(".open")
first = document.querySelector(".first")

//start of the program to move

buttonStart.addEventListener("click", function() {
    action.style.display = "grid"
    action.style.justifyContent = "center"
    action.style.textAlign = "center"
    open.style.display = "none"
})

advance.addEventListener("click", function() {
    first.style.display = "block"
    action.style.display = "none"
})
//first page variables and buttons usable

msgError = document.querySelector("#errorMsg")