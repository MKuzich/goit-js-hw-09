import { Notify } from 'notiflix/build/notiflix-notify-aio';

const submitForm = document.querySelector('.form');

submitForm.addEventListener('submit', onBtnClickHandler);

function onBtnClickHandler() {
  event.preventDefault();

  const {elements: {delay, step, amount}} = event.currentTarget;

  if (delay.value < 0 || step.value < 0) {
    Notify.info('First delay and Delay step cannot be less zero! Please change it!');
    return;
  }

  for (let i = 1; i <= amount.value; i += 1) {
    const dalayInFunc = Number(delay.value) + (i - 1) * Number(step.value);
    setTimeout(() => {
      createPromise(i, dalayInFunc)
      .then(({ position, delay }) => {
        onResolve(position, delay);
      })
      .catch(({ position, delay }) => {
        onReject(position, delay);
      });
    }, dalayInFunc);
  };

  event.currentTarget.reset()
};

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    if (shouldResolve) {
      resolve({ position, delay });
    } else {
      reject({ position, delay });
    };
  });
}

function onResolve(position, delay) {
  return Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
};

function onReject(position, delay) {
  return Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
};
