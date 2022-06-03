import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  btnStart: document.querySelector('button[data-start]'),
  days: document.querySelector('.value[data-days]'),
  hours: document.querySelector('.value[data-hours]'),
  minutes: document.querySelector('.value[data-minutes]'),
  seconds: document.querySelector('.value[data-seconds]'),
};
const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      const datePicked = selectedDates[0].getTime();
      const dateNow = (new Date).getTime();

      if (dateNow > datePicked) {
        onBtnStartDisable();
        Notify.warning("Please choose a date in the future");
      } else {
        onBtnStartRemoveDisable();
      }
    },
  };
const datePicker = flatpickr('#datetime-picker', options);

onBtnStartDisable();

refs.btnStart.addEventListener('click', onBtnClickHandler);

function onBtnStartDisable() {
  refs.btnStart.setAttribute('disabled', true);
};

function onBtnStartRemoveDisable() {
  refs.btnStart.removeAttribute('disabled');
};

function onBtnClickHandler() {
  onBtnStartDisable();
  Notify.success('Timer is started! Have a good day :)');
  const timerId = setInterval(() => {
    const datePicked = datePicker.selectedDates[0].getTime();
    const dateNow = (new Date).getTime();
    const timeLeft = datePicked - dateNow;
    const timeLeftNow = convertMs(timeLeft);

    refs.days.textContent = addLeadingZero(timeLeftNow.days);
    refs.hours.textContent = addLeadingZero(timeLeftNow.hours);
    refs.minutes.textContent = addLeadingZero(timeLeftNow.minutes);
    refs.seconds.textContent = addLeadingZero(timeLeftNow.seconds);

    if (timeLeft < 1000) {
      stopInterval();
    };
  }, 1000);

  function stopInterval() {
    clearInterval(timerId);
    Notify.info('The countdown has ended. To start the timer you need to reload the page!');
  };
};

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
};

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
};