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

oneTextProject = document.querySelector("#project-one-text")
oneButtonProject = document.querySelector("#project-one-button")
twoTextProject = document.querySelector("#project-two-text")
twoButtonProject = document.querySelector("#project-two-button")
threeTextProject = document.querySelector("#project-three-text")
threeButtonProject = document.querySelector("#project-three-button")
fourTextProject = document.querySelector("#project-four-text")
fourButtonProject = document.querySelector("#project-four-button")

oneButtonProject.addEventListener("mouseover", function() {
    oneTextProject.style.display = "block"
})

twoButtonProject.addEventListener("mouseover", function() {
    twoTextProject.style.display = "block"
})

threeButtonProject.addEventListener("mouseover", function() {
    threeTextProject.style.display = "block"
})

fourButtonProject.addEventListener("mouseover", function() {
    fourTextProject.style.display = "block"
})


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

videos = document.querySelector(".videos")
imgFinal = document.querySelector("#final-img")
hideLast = document.querySelector(".last-hide")
colorCheck =  false

imgFinal.addEventListener("click", function() {
    alert("You haven't got all colors, try finding them")
})

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
        await sleep(2000)
        }
    console.log("all colors are collected")
    imgFinal.style.display = "none"
    videos.style.display = "block"
    hideLast.style.display = "block"
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