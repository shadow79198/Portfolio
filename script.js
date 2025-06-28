//buttons used to move
buttonStart = document.querySelector(".startButton")
advance = document.querySelector("#advance")
end = document.querySelector("#end")

//different div pages being used
action = document.querySelector(".action")
open = document.querySelector(".open")
first = document.querySelector(".first")
studyCase = document.querySelector(".case-study")
meAbout = document.querySelector(".about-me")

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
avaliableNot =  document.querySelector(".not-avaliable")
moveSecond = document.querySelector("#second-move")

avaliableNot.addEventListener("click", function() {
    msgError.style.display = "block"
})
moveSecond.addEventListener("click", function() {
    first.style.display = "none"
    studyCase.style.display = "block"
})

// case study page
// remember to add the buttons

moveThird = document.querySelector("#third-move")

moveThird.addEventListener("click", function() {
    studyCase.style.display = "none"
    meAbout.style.display = "block"
})