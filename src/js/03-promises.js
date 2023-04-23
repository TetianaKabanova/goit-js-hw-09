import Notiflix from 'notiflix';

const form = document.querySelector('.form');

form.addEventListener('submit', event => {
  event.preventDefault();
  const delay = parseInt(form.elements.delay.value);
  const step = parseInt(form.elements.step.value);
  const amount = parseInt(form.elements.amount.value);

  if (delay <= 0 || step < 0 || amount < 0) {
    return Notiflix.Report.warning(
      'Упс...🤔',
      'Число повинно бути більшим за 0',
      'Спробуйте ще раз 😉'
    );
  }

  for (let i = 0; i < amount; i++) {
    createPromise(i, delay + step * i)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
  }
});

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        resolve({ position, delay });
      } else {
        // Reject
        reject({ position, delay });
      }
    }, delay);
  });
}
