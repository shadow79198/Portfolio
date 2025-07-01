//nav bar move
moveFirst = document.querySelector("#first-move")
moveSecond = document.querySelector("#second-move") 
moveThird = document.querySelector("#third-move")

moveFirst.addEventListener("click", function() {
    studyCase.style.display = "none"
    meAbout.style.display = "none"
    first.style.display = "block"
})
moveSecond.addEventListener("click", function() {
    first.style.display = "none"
    meAbout.style.display = "none"
    studyCase.style.display = "block"
}) 
moveThird.addEventListener("click", function() {
    studyCase.style.display = "none"
    first.style.display = "none"
    meAbout.style.display = "block"
})

//buttons used to move
buttonStart = document.querySelector(".startButton")

//different div pages being used
open = document.querySelector(".open")
first = document.querySelector(".first")
studyCase = document.querySelector(".case-study")
meAbout = document.querySelector(".about-me")
navegation = document.querySelector(".navegation")

//start of the program to move

buttonStart.addEventListener("click", function() {
    alert("Access Denied. Entering as guest")
    open.style.display = "none"
    first.style.display = "block"
    navegation.style.display = "block"
})
//first page variables and buttons usable

msgError = document.querySelector("#errorMsg")
avaliableNot =  document.querySelector(".not-avaliable")

avaliableNot.addEventListener("click", function() {
    alert("It seems that the video is not working properly, it must be because of the missing colors in the image, in the whole webpage the creator has left some colors for you to find them, in the end you will be able to see what each color means. Here is a gift for you, the color green")
    greenCheck = true
    console.log(greenCheck)
})

// case study page

oneTextProject = document.querySelector("#project-one-text")
oneButtonProject = document.querySelector("#project-one-button")
twoTextProject = document.querySelector("#project-two-text")
twoButtonProject = document.querySelector("#project-two-button")
threeTextProject = document.querySelector("#project-three-text")
threeButtonProject = document.querySelector("#project-three-button")
fourTextProject = document.querySelector("#project-four-text")
fourButtonProject = document.querySelector("#project-four-button")

oneButtonProject.addEventListener("click", function() {
    oneTextProject.style.display = "block"
    oneButtonProject.innerHTML = "<a href ='https://shadow79198.github.io/int-u4-project-23-24-starter-code/'>Start Program </a>"
})

twoButtonProject.addEventListener("click", function() {
    twoTextProject.style.display = "block"
    twoButtonProject.innerHTML = "<a href ='https://github.com/shadow79198/AP-CSP'>Start Program </a>"
})

threeButtonProject.addEventListener("click", function() {
    threeTextProject.style.display = "block"
    threeButtonProject.innerHTML = "<a href ='https://shadow79198.github.io/int-u2-project-starter-code-3/'>Start Program </a>"
})

fourButtonProject.addEventListener("click", function() {
    fourTextProject.style.display = "block"
    fourButtonProject.innerHTML = "<a href ='https://replit.com/@shadow79198/Trivia-Code'>Start Program </a>"
})

//SQL part

givenColor = document.querySelector("#color-given")
RunSQL = document.querySelector("#SQL-run")
colorSQL = document.querySelector("#SQL-color")
meaningSQL = document.querySelector("#SQL-meaning")

RunSQL.addEventListener("click", function() {
    check = givenColor.value
    if(check === "green" && greenCheck === true){
        colorSQL.innerHTML = "green|"
        meaningSQL.innerHTML = "I chose green because it has been my favorite colors for multiple years, its always associated with nature but for me its also of peace, internal peace to be more specific. Sometimes I just like something because it has green on it, is just that important for me"
    }else if (check === "green" && greenCheck === false){
        alert("I don't know how you know this is a color but go find it")
    }else if (check === "purple" && purpleCheck === true){
        colorSQL.innerHTML = "purple|"
        meaningSQL.innerHTML = "Purple is the favorite color of one of my friends, and honestly its also becoming mine. When I see color it reminds me of past wounds, more specific of bruises, but like those wounds it is that memory that makes you stand up and fight again"
    }else if (check == "purple" && purpleCheck === false){
        alert("I don't know how you know this is a color but go find it")
    }else if (check === "blue" && blueCheck === true){
        colorSQL.innerHTML = "blue|"
        meaningSQL.innerHTML = "Reason why I chose blue it was because it reminds me of two things. First is my favorite artist, Ado, I usually hear one of her songs everyday because is just that good for me. Second reason why is because it reminds me of being free, of not worrying about what others would say about what you like or who you are, etc."
    }else if (check === "blue" && blueCheck === false){
        alert("I don't know how you know this is a color but go find it")
    }else{
        alert("This isn't one of the missing colors")
    }
})



// color check part

purple = document.querySelector("#purple")
blue = document.querySelector("#blue")
greenCheck = false
purpleCheck = false
blueCheck = false

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
leftButton = document.querySelector("#button-left")
rightButton = document.querySelector("#button-right")

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
    leftButton.style.display = "block"
    rightButton.style.display = "block"
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

// different clips to display
const show = ["videos/funny.mp4", "videos/combo.mp4", "videos/bully.mp4"]
pos = 0
clips = document.querySelector("#clips")

rightButton.addEventListener("click", function() {
    pos++
    if(pos>2){
        pos = 0
    }
    clips.src = show[pos]
    videos.load()
    console.log(pos)
    console.log(show[pos])
})
leftButton.addEventListener("click", function() {
    pos--
    if(pos<0){
        pos = 2
    }
    clips.src = show[pos]
    videos.load()
    console.log(pos)
    console.log(show[pos])
})