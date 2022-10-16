import './normalize.css';
import './style.scss';

document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');
  const timewidth = window.innerWidth < 1024 ? 70 : 77;
  const timeHeight = window.innerWidth < 1024 ? 37 : 35;
  
  cards.forEach((card) => {
    const schedule = card.querySelector('.card__list-schedule');
    const times = card.querySelectorAll('.card__list-time');

    const timesInRow = Math.floor(schedule.clientWidth / timewidth);
    if (times.length > timesInRow) {
      schedule.style.height = `${timeHeight}px`;
      schedule.style.overflow = 'hidden';
      const moreBtn = createMoreButton();
      const timesArray = Array.from(times);
      timesArray.splice(timesInRow - 1, 0, moreBtn);
      schedule.innerHTML = '';
      schedule.append(...timesArray);
    } 
  });
});

function createMoreButton() {
  const moreBtn = document.createElement('button');
  moreBtn.classList.add('card__list-button');
  moreBtn.textContent = 'ещё...';
  moreBtn.addEventListener('click', (e) => {
    e.preventDefault();
    e.target.parentElement.style.height = 'unset';
    e.target.parentElement.style.overflow = 'visible';
    e.target.remove();
  });
  return moreBtn;
}
