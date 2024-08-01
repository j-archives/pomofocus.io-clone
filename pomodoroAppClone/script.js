const pomodoroBtn = document.getElementById("pomodoro-btn")
const shortBrBtn = document.getElementById("short-br-btn")
const longBrBtn = document.getElementById("long-br-btn")

const bodyEl = document.querySelector("body")
const contentWrapper = document.getElementById("content")


const timer = document.getElementById("timer")
const hrEl = document.getElementById("hr-el")
const startBtn = document.getElementById("start")

const pomoIdentifier = document.getElementById("pomo-identifier")
const taskBtn = document.getElementById("task-btn")

let startBtnClicked = false
let pomodoroOn = true
let shortBreakOn = false
let longBreakOn = false

let isPaused = true
let totalTimeInSeconds = 0
let time

function updateTimer() {
    totalTimeInSeconds = timer.textContent.split(":")[0] * 60 + timer.textContent.split(":")[1] * 1
    if (!isPaused) {
        time = setInterval(() => {
            totalTimeInSeconds--
            let minutes = Math.floor(totalTimeInSeconds / 60)
            let seconds = totalTimeInSeconds % 60
            timer.innerHTML = `${minutes}:${seconds}`    
    
            if (totalTimeInSeconds <= 0) {
                clearInterval(time)
                timerCondition() 
                let minutes = Math.floor(totalTimeInSeconds / 60)
                let seconds = totalTimeInSeconds % 60
                timer.innerHTML = `${minutes}:${seconds}`
            }
        }, 1000)
    }
    else {
        clearInterval(time)
    }
}

function timerCondition() {
    if (pomodoroOn) {
        totalTimeInSeconds = 25 * 60;
        
    }
    else if (shortBreakOn) {
        totalTimeInSeconds = 5 * 60;
        
    }
    else if (longBreakOn) {
        
        totalTimeInSeconds = 15 * 60;
    }
    else {
        totalTimeInSeconds = 0;
    }

    // totalTimeInSeconds = timer.textContent.split(":")[0] * 60 + timer.textContent.split(":")[1] * 1
    // updateTimer()
}

function startButtonChecker() {
    if (startBtnClicked) {
        if (startBtn.textContent === "START") {
            startBtn.textContent = "PAUSE"
            console.log("Start button was clicked")
            isPaused = false
            
        }
        else {
            startBtn.textContent = "START"
            console.log("Pause button was clicked")
            isPaused = true
            
            
        }
    }
    else {
        startBtn.textContent = "START"
        console.log("Start button was not clicked")
    }
    updateTimer()
    // console.log("Start button Checker called")
}


startBtn.addEventListener("click", () => {
    startBtnClicked = true
    startButtonChecker()
    
})

pomodoroBtn.addEventListener("click", () => {
    bodyEl.style.backgroundColor = "#BA4949"
    bodyEl.style.transition = "background-color 0.5s ease"

    contentWrapper.style.backgroundColor = "#C15C5C"
    contentWrapper.style.transition = "background-color 0.5s ease"

    pomodoroBtn.style.backgroundColor = "#A44E4E"
    hrEl.style.border = "1px solid #A44E4E"
    startBtn.style.color = "#BA4949"
    

    shortBrBtn.style.backgroundColor = "#C15C5C"
    shortBrBtn.style.transition = "background-color 0.5s ease"
    longBrBtn.style.backgroundColor = "#C15C5C"
    longBrBtn.style.transition = "background-color 0.5s ease"

    timer.textContent = "25:00"

    pomoIdentifier.textContent = "Time to focus!"

    taskBtn.style.backgroundColor = "#AB4343"
    taskBtn.style.transition = "background-color 0.5s ease"
    taskBtn.style.border = "2px dashed #C57A7A"
    taskBtn.style.color = "#C57A7A"
    
    pomodoroOn = true
    shortBreakOn = false
    longBreakOn = false
    
    startBtnClicked = false
    clearInterval(time)
    console.log("cleared interval")
    isPaused = true
    startButtonChecker()
    updateTimer()

})



shortBrBtn.addEventListener("click", () => {
    bodyEl.style.backgroundColor = "#38858A"
    bodyEl.style.transition = "background-color 0.5s ease"

    contentWrapper.style.backgroundColor = "#4C9196"
    contentWrapper.style.transition = "background-color 0.5s ease"

    shortBrBtn.style.backgroundColor = "#417B80"
    hrEl.style.border = "1px solid #417B80"
    startBtn.style.color = "#38858A"
    
    

    pomodoroBtn.style.backgroundColor = "#4C9196"
    pomodoroBtn.style.transition = "background-color 0.5s ease"
    longBrBtn.style.backgroundColor = "#4C9196"
    longBrBtn.style.transition = "background-color 0.5s ease"
    
    timer.textContent = "5:00"

    pomoIdentifier.textContent = "Time for a break!"

    taskBtn.style.backgroundColor = "#337A7F"
    taskBtn.style.transition = "background-color 0.5s ease"
    taskBtn.style.border = "2px dashed #75A6A9"
    taskBtn.style.color = "#75A6A9"

    pomodoroOn = false
    shortBreakOn = true
    longBreakOn = false
    
    startBtnClicked = false
    clearInterval(time)
    console.log("cleared interval")
    isPaused = true
    startButtonChecker()
    updateTimer()

    
})

longBrBtn.addEventListener("click", () => {
    bodyEl.style.backgroundColor = "#397097"
    bodyEl.style.transition = "background-color 0.5s ease"

    contentWrapper.style.backgroundColor = "#4D7FA2"
    contentWrapper.style.transition = "background-color 0.5s ease"

    longBrBtn.style.backgroundColor = "#426C8A"
    hrEl.style.border = "1px solid #426C8A"
    startBtn.style.color = "#397097"
    
    

    pomodoroBtn.style.backgroundColor = "#4D7FA2"
    pomodoroBtn.style.transition = "background-color 0.5s ease"
    shortBrBtn.style.backgroundColor = "#4D7FA2"
    shortBrBtn.style.transition = "background-color 0.5s ease"

    timer.textContent = "15:00"

    pomoIdentifier.textContent = "Time for a break!"

    taskBtn.style.backgroundColor = "#34678B"
    taskBtn.style.transition = "background-color 0.5s ease"
    taskBtn.style.border = "2px dashed #7699B1"
    taskBtn.style.color = "#7699B1"

    
    
    pomodoroOn = false
    shortBreakOn = false
    longBreakOn = true
    
    startBtnClicked = false
    clearInterval(time)
    console.log("cleared interval")
    isPaused = true
    startButtonChecker()
    updateTimer()
})


