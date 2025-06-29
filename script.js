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

moveThird = document.querySelector("#third-move")

moveThird.addEventListener("click", function() {
    studyCase.style.display = "none"
    meAbout.style.display = "block"
})

// color check part

green = document.querySelector("#green")
purple = document.querySelector("#purple")
blue = document.querySelector("#blue")
greenCheck = false
purpleCheck = false
blueCheck = false

green.addEventListener("click", function() {
    greenCheck = true
    alert("You got the color green")
    console.log(greenCheck)
})
purple.addEventListener("click", function() {
    purpleCheck = true
    alert("You got the color purple")
    console.log(purpleCheck)
})
blue.addEventListener("click", function() {
    blueCheck = true
    alert("You got the color blue")
    console.log(blueCheck)
})
// code running at the end to display the video

videos = document.querySelector("#videos")
imgFinal = document.querySelector ("#final-img")
colorCheck =  false


function sleep(ms){
    return new Promise(resolve => setTimeout(resolve,ms))
}

async function checkColors() {
    while (colorCheck === false){
        if(greenCheck === true && purpleCheck === true && blueCheck === true){
            colorCheck = true
            break
            }
        console.log("not all colors are collected yet")
        await sleep(10000)
        }
    console.log("all colors are collected")
}

checkColors()

//Learned this from https://www.geeksforgeeks.org/javascript/how-to-wait-n-seconds-in-javascript/ and https://softwareshorts.com/how-to-make-a-loop-wait-in-javascript/
//example im using

// function sleep(ms){
//     return new Promise(resolve => setTimeout(resolve,ms));
// }

// async function wait() {
//     console.log("start")
//     await sleep(10000)
//     console.log("end")    
// }
// wait()