let startTime_clock = 0;
let isRunning_clock = false;
let interval_clock = null;
let elapsedBeforePause_clock = 0;

const display_clock = document.getElementById("display_clock");
const display_island = document.getElementById("display_island");
const mainBtn_clock = document.getElementById("mainBtn_clock");
const startStopBtn_clock = document.getElementById("startStopBtn_clock");
const resetBtn_clock = document.getElementById("resetBtn_clock");
const app_clock = document.getElementById("app_clock");

function updateTime_clock() {
  const now_clock = Date.now();
  const elapsed_clock = now_clock - startTime_clock + elapsedBeforePause_clock;
  const minutes_clock = Math.floor(elapsed_clock / 60000);
  const seconds_clock = Math.floor((elapsed_clock % 60000) / 1000);
  const milliseconds_clock = Math.floor((elapsed_clock % 1000) / 10);
  display_clock.textContent = `${pad_clock(minutes_clock)}:${pad_clock(
    seconds_clock
  )}.${pad_clock(milliseconds_clock)}`;
  display_island.textContent = `${pad_clock(minutes_clock)}:${pad_clock(
    seconds_clock
  )}`;
}

function pad_clock(num) {
  return num.toString().padStart(2, "0");
}

mainBtn_clock.addEventListener("click", () => {
  updateActionsMap();
  app_clock.classList.add("show-split_clock");
  startTime_clock = Date.now();
  interval_clock = setInterval(updateTime_clock, 10);
  isRunning_clock = true;
  elapsedBeforePause_clock = 0;
  startStopBtn_clock.textContent = "Stop";
  document.getElementById("toggleBtn").textContent = "pause";
  updateActionsMap();
});

startStopBtn_clock.addEventListener("click", () => {
  stop_start_clock();
});

resetBtn_clock.addEventListener("click", () => {
  reset_clock();
});

function stop_start_clock() {
  if (isRunning_clock) {
    clearInterval(interval_clock);
    elapsedBeforePause_clock += Date.now() - startTime_clock;
    isRunning_clock = false;
    startStopBtn_clock.textContent = "Start";
    document.getElementById("toggleBtn").textContent = "play_arrow";
  } else {
    startTime_clock = Date.now();
    interval_clock = setInterval(updateTime_clock, 10);
    isRunning_clock = true;
    startStopBtn_clock.textContent = "Stop";
    document.getElementById("toggleBtn").textContent = "pause";
  }
  updateActionsMap();
}

function reset_clock() {
  clearInterval(interval_clock);
  isRunning_clock = false;
  elapsedBeforePause_clock = 0;
  startTime_clock = 0;
  display_clock.textContent = "00:00.00";
  display_island.textContent = "00:00";
  startStopBtn_clock.textContent = "Stop";
  app_clock.classList.remove("show-split_clock");
  document.getElementById("toggleBtn").textContent = "play_arrow";
  updateActionsMap();
}
