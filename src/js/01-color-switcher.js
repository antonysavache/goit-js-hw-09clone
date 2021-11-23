let btnStart = document.querySelector('[data-start]')
let btnStop = document.querySelector('[data-stop]')
let timerId = null;

btnStop.disabled = true;

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

function startFunc() {
    timerId = setInterval(colorPartyFunc,1000)
    btnStart.disabled = true
    btnStop.disabled = false
}

function stopFunc () {
    clearInterval(timerId)
    btnStart.disabled =  false
    btnStop.disabled = true
}

function colorPartyFunc() {
    document.querySelector('body').style.backgroundColor = getRandomHexColor();
}

btnStart.addEventListener('click', startFunc)
btnStop.addEventListener('click', stopFunc)
