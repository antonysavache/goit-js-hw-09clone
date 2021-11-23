import flatpickr from 'flatpickr';
// Дополнительный импорт стилей
import 'flatpickr/dist/flatpickr.min.css';
let dateInput = document.querySelector('#datetime-picker');
let btnMain = document.querySelector('[data-start]');
btnMain.disabled = true;
let timeDiff = 0;

document.querySelectorAll('.field').forEach(element => {
  element.classList.add('krasota');
});

let time = {
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

let timeBeauty = {
  days: document.querySelector('.js-1'),
  hours: document.querySelector('.js-2'),
  minutes: document.querySelector('.js-3'),
  seconds: document.querySelector('.js-4'),
};

function addLeadingZero(value) {
  value = value.toString(10);
  if (value.length < 3) {
    value = value.padStart(2, '0');
  }
  return value;
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  let days = Math.floor(ms / day);
  // Remaining hours
  let hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  let minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  let seconds = Math.floor((((ms % day) % hour) % minute) / second);

  days = addLeadingZero(days);
  time.days.textContent = days;

  hours = addLeadingZero(hours);
  time.hours.textContent = hours;

  minutes = addLeadingZero(minutes);
  time.minutes.textContent = minutes;

  seconds = addLeadingZero(seconds);
  time.seconds.textContent = seconds;
}

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    let selectedDate = selectedDates[0];
    let currentDate = new Date();
    if (currentDate.getTime() > selectedDate.getTime()) {
      window.alert('Please choose a date in the future');
    }
    btnMain.disabled = false;
    function difFunc(e) {
      currentDate = new Date();

      if (selectedDate.getTime() > currentDate.getTime()){
        timeDiff = selectedDate.getTime() - currentDate.getTime();
        convertMs(timeDiff);
        timeBeauty.days.classList.toggle('aaa');
        timeBeauty.hours.classList.toggle('aaa');
        timeBeauty.minutes.classList.toggle('aaa');
        timeBeauty.seconds.classList.toggle('aaa');
        return
      }



    }
    function fStart(e) {
      let intId = setInterval(difFunc, 1000);
    }
    btnMain.addEventListener('click', fStart);
    console.log(typeof time.hours.textContent);
  },
};

flatpickr(dateInput, options);
