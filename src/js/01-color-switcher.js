const refs = {
  startBtn: document.querySelector('[data-start]'),
  stopBtn: document.querySelector('[data-stop]'),
  body: document.body,
};

let intervalId = null;

refs.startBtn.addEventListener('click', onStartBtn);
refs.stopBtn.addEventListener('click', onStopBtn);

function onStartBtn() {
  refs.startBtn.disabled = true;
  intervalId = setInterval(() => {
    refs.body.style.backgroundColor = getRandomHexColor();
  }, 1500);
}

function onStopBtn() {
  refs.startBtn.disabled = false;
  clearInterval(intervalId);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
