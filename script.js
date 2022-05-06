//-------------------------BUTTONS------------------------
let startBtn = document.getElementById('startBtn');
let stopBtn = document.getElementById('stopBtn');
let resumeBtn = document.getElementById('resumeBtn');
let resetBtn = document.getElementById('resetBtn');

//-----------------------BUTTONS STATUS--------------------
resumeBtn.disabled = true;
resumeBtn.style.backgroundColor = 'rgb(115, 154, 185)';
stopBtn.disabled = true;
stopBtn.style.backgroundColor = 'rgb(115, 154, 185)';
resetBtn.disabled = true;
resetBtn.style.backgroundColor = 'rgb(115, 154, 185)';

//---------------------------EVENT LISTENERS----------------
startBtn.addEventListener('click', startTime);
stopBtn.addEventListener('click', stopTime);
resumeBtn.addEventListener('click', resumeTime);
resetBtn.addEventListener('click', resetTime);

//-----------------------------UNITS--------------------------
var interval = '';
let hours = '00';
let minutes = '00';
let seconds = '00';

//-------------------------START TIMER-------------------------
function startTime() {
  let timeDiv = document.getElementById('timeDiv');
  if (interval === '') {
    interval = setInterval(() => {
      if (seconds < 59) {
        seconds = parseInt(seconds) + 1;
        if (seconds < 10) {
          seconds = `0${seconds}`;
        }
      } else {
        seconds = '00';
        if (minutes < 59) {
          minutes = parseInt(minutes) + 1;
          if (minutes < 10) {
            minutes = `0${minutes}`;
          }
        } else {
          minutes = '00';
          if (hours < 59) {
            hours = parseInt(hours) + 1;
            if (hours < 10) {
              hours = `0${hours}`;
            }
          }
        }
      }
      timeDiv.innerHTML = `<h1>${hours}:${minutes}:${seconds}</h1>`;
    }, 1000);
  }
  startBtn.disabled = true;
  startBtn.style.backgroundColor = 'rgb(115, 154, 185)';
  stopBtn.disabled = false;
  stopBtn.style.backgroundColor = 'rgb(30, 109, 173)';
  resetBtn.disabled = false;
  resetBtn.style.backgroundColor = 'rgb(30, 109, 173)';
}

//----------------------------STOP TIMER--------------------------------
function stopTime() {
  let timeDiv = document.getElementById('timeDiv');
  clearInterval(interval);
  interval = '';
  stopBtn.disabled = true;
  stopBtn.style.backgroundColor = 'rgb(115, 154, 185)';
  resumeBtn.disabled = false;
  resumeBtn.style.backgroundColor = 'rgb(30, 109, 173)';
  resetBtn.disabled = false;
  resetBtn.style.backgroundColor = 'rgb(30, 109, 173)';
}

//-----------------------------RESUME TIMER------------------------------
function resumeTime() {
  let timeDiv = document.getElementById('timeDiv');
  if (interval === '') {
    interval = setInterval(() => {
      if (seconds < 59) {
        seconds = parseInt(seconds) + 1;
        if (seconds < 10) {
          seconds = `0${seconds}`;
        }
      } else {
        seconds = '00';
        if (minutes < 59) {
          minutes = parseInt(minutes) + 1;
          if (minutes < 10) {
            minutes = `0${minutes}`;
          }
        } else {
          minutes = '00';
          if (hours < 59) {
            hours = parseInt(hours) + 1;
            if (hours < 10) {
              hours = `0${hours}`;
            }
          }
        }
      }
      timeDiv.innerHTML = `<h1>${hours}:${minutes}:${seconds}</h1>`;
    }, 1000);
  }
  resumeBtn.disabled = true;
  resumeBtn.style.backgroundColor = 'rgb(115, 154, 185)';
  stopBtn.disabled = false;
  stopBtn.style.backgroundColor = 'rgb(30, 109, 173)';
  resetBtn.disabled = false;
  resetBtn.style.backgroundColor = 'rgb(30, 109, 173)';
}

//---------------------------------RESET TIMER---------------------------
function resetTime() {
  clearInterval(interval);
  interval = '';
  let timeDiv = document.getElementById('timeDiv');
  hours = '00';
  minutes = '00';
  seconds = '00';
  timeDiv.innerHTML = `<h1>${hours}:${minutes}:${seconds}</h1>`;
  resetBtn.disabled = true;
  resetBtn.style.backgroundColor = 'rgb(115, 154, 185)';
  startBtn.disabled = false;
  startBtn.style.backgroundColor = 'rgb(30, 109, 173)';
  stopBtn.disabled = true;
  stopBtn.style.backgroundColor = 'rgb(115, 154, 185)';
  resumeBtn.disabled = true;
  resumeBtn.style.backgroundColor = 'rgb(115, 154, 185)';
}
