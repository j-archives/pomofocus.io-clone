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

function timerCondition() {
    if (pomodoroOn) {
        totalTimeInSeconds = 25 * 60;
        updateTimer()
    }
    else if (shortBreakOn) {
        totalTimeInSeconds = 5 * 60;
        updateTimer()
    }
    else if (longBreakOn) {
        totalTimeInSeconds = 15 * 60;
        updateTimer()
    }
    else {
        totalTimeInSeconds = 0;
    }
}


startBtn.addEventListener("click", () => {
    startBtnClicked = true
    if (startBtn.textContent === "START") {
        startBtn.textContent = "PAUSE"
        console.log("Start button was clicked")
        timerCondition()
    }
    else {
        startBtn.textContent = "START"
        console.log("Pause button was clicked")
        
    }
    
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
    // timerCondition()
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
    // timerCondition()

    
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
    // timerCondition()
})


