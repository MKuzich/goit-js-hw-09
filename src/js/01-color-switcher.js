const refs = {
    body: document.querySelector('body'),
    btnStart: document.querySelector('button[data-start]'),
    btnStop: document.querySelector('button[data-stop]')
}
let intervalId = null;

refs.btnStart.addEventListener('click', onStartHandler);
refs.btnStop.addEventListener('click', onStopHandler);

function onStartHandler(e) {
    if (e.target.classList.contains('is-active')) {
        return;
    }
    e.target.classList.add('is-active');
    intervalId = setInterval(onBodyColorChange, 1000);
}

function onStopHandler() {
    refs.btnStart.classList.remove('is-active');
    clearInterval(intervalId);
}

function onBodyColorChange() {
    refs.body.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}