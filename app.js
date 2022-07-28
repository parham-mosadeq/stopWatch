const timer = document.getElementById('stopwatch');
const startBtn = document.getElementById('start');

// basic variables
let hr = 0;
let min = 0;
let sec = 0;
let stoptime = true;

// start timer and call timerCycle if stop is false
const startTimer = () => {
  if (stoptime == true) {
    stoptime = false;
    timerCycle();
  }
  startBtn.classList.add('deactive');
};

// stop timer if start is false

const stopTimer = () => {
  if (stoptime == false) {
    stoptime = true;
  }
  startBtn.classList.remove('deactive');
};

// clear all
const resetTimer = () => {
  timer.innerHTML = '00:00:00';
  stoptime = true;
  hr = 0;
  sec = 0;
  min = 0;
  startBtn.classList.remove('deactive');
};

// calculating ...
const timerCycle = () => {
  if (stoptime == false) {
    sec = parseInt(sec);
    min = parseInt(min);
    hr = parseInt(hr);

    sec = sec + 1;

    if (sec == 60) {
      min = min + 1;
      sec = 0;
    }
    if (min == 60) {
      hr = hr + 1;
      min = 0;
      sec = 0;
    }

    if (sec < 10 || sec == 0) {
      sec = '0' + sec;
    }
    if (min < 10 || min == 0) {
      min = '0' + min;
    }
    if (hr < 10 || hr == 0) {
      hr = '0' + hr;
    }

    timer.innerHTML = hr + ':' + min + ':' + sec;

    setTimeout(() => {
      timerCycle();
    }, 1000);
  }
};
