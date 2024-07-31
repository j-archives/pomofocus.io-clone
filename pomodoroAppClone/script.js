const pomodoroBtn = document.getElementById("pomodoro-btn")
const shortBrBtn = document.getElementById("short-br-btn")
const longBrBtn = document.getElementById("long-br-btn")

const bodyEl = document.querySelector("body")
const contentWrapper = document.getElementById("content")

// let totalTimeInSeconds = 5 * 60;
// const timer = document.getElementById("timer")

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
    

    shortBrBtn.style.backgroundColor = "#C15C5C"
    shortBrBtn.style.transition = "background-color 0.5s ease"
    longBrBtn.style.backgroundColor = "#C15C5C"
    longBrBtn.style.transition = "background-color 0.5s ease"
    
    
})

shortBrBtn.addEventListener("click", () => {
    bodyEl.style.backgroundColor = "#38858A"
    bodyEl.style.transition = "background-color 0.5s ease"

    contentWrapper.style.backgroundColor = "#4C9196"
    contentWrapper.style.transition = "background-color 0.5s ease"

    shortBrBtn.style.backgroundColor = "#417B80"
    

    pomodoroBtn.style.backgroundColor = "#4C9196"
    pomodoroBtn.style.transition = "background-color 0.5s ease"
    longBrBtn.style.backgroundColor = "#4C9196"
    longBrBtn.style.transition = "background-color 0.5s ease"
    countdownTimer()

    
})

longBrBtn.addEventListener("click", () => {
    bodyEl.style.backgroundColor = "#397097"
    bodyEl.style.transition = "background-color 0.5s ease"

    contentWrapper.style.backgroundColor = "#4D7FA2"
    contentWrapper.style.transition = "background-color 0.5s ease"

    longBrBtn.style.backgroundColor = "#426C8A"
    

    pomodoroBtn.style.backgroundColor = "#4D7FA2"
    pomodoroBtn.style.transition = "background-color 0.5s ease"
    shortBrBtn.style.backgroundColor = "#4D7FA2"
    shortBrBtn.style.transition = "background-color 0.5s ease"
})

