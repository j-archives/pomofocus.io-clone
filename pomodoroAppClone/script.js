const pomodoroBtn = document.getElementById("pomodoro-btn")
const shortBrBtn = document.getElementById("short-br-btn")
const longBrBtn = document.getElementById("long-br-btn")

const bodyEl = document.querySelector("body")
const contentWrapper = document.getElementById("content")

// let totalTimeInSeconds = 5 * 60;
const timer = document.getElementById("timer")
const hrEl = document.getElementById("hr-el")
const startBtn = document.getElementById("start")

const pomoIdentifier = document.getElementById("pomo-identifier")
const taskBtn = document.getElementById("task-btn")

// function formatTime(seconds) {
//     const minutes = Math.floor(seconds / 60);
//     const remainingSeconds = seconds % 60;
//     return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
// }

// function updateTimer() {
//     if (totalTimeInSeconds <= 0) {
//         clearInterval(timerInterval);
//         timerElement.textContent = '00:00';
//         return;
//     }

//     timer.textContent = formatTime(totalTimeInSeconds);
//     totalTimeInSeconds -= 1;
// }

// const timerInterval = setInterval(updateTimer, 1000);

// function countdownTimer (){
//     setInterval(function () {
//         var d = new Date(); //get current time
//         var seconds = d.getMinutes() * 60 + d.getSeconds(); //convet current mm:ss to seconds for easier caculation, we don't care hours.
//         var fiveMin = 60 * 5; //five minutes is 300 seconds!
//         var timeleft = fiveMin - seconds % fiveMin; // let's say now is 01:30, then current seconds is 60+30 = 90. And 90%300 = 90, finally 300-90 = 210. That's the time left!
//         var result = parseInt(timeleft / 60) + ':' + timeleft % 60; //formart seconds back into mm:ss 
//         timer.innerHTML = result;
    
//     }, 1000)
// }

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

    
    
})

