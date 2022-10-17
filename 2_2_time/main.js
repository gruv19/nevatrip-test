import './normalize.css';
import './style.scss';

import directionSelect from './components/direction-select';
import timeBackSelect from './components/time-back-select'
import timeForwardSelect from './components/time-forward-select';
import inputNum from './components/input-num';
import button from './components/button';
import resultBlockTemplate from './components/result-block'

import { timeSum, prepareTime, updateTimeSelect } from './utils';

const directionBlock = document.querySelector('.direction');
const timeForwardBlock = document.querySelector('.time-forward');
const timeBackBlock = document.querySelector('.time-back');
const inputBlock = document.querySelector('.tickets');
const buttonBlock = document.querySelector('.complete');
const resultBlock = document.querySelector('.result');

const form = document.querySelector('.main__form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  let direction = '';
  let time = '50 минут';
  let cost = 700;
  switch (state.direction) {
    case 'forward':
      direction = 'из A в B';
      break;
    case 'back':
      direction = 'из B в A';
      break;
    case 'both':
      direction = 'из A в B и обратно в А';
      time = '1 час 40 минут';
      cost = 1200;
      break;
    default:
      break;
  }
  const sum = +state.ticketCount * cost;

  let timeForward = '';
  if (state.timeForward) {
    timeForward = prepareTime(state.timeForward);
  } 

  let timeBack = '';
  if (state.timeBack) {
    timeBack = prepareTime(state.timeBack);
  }

  resultBlock.innerHTML = resultBlockTemplate({
    count: state.ticketCount, 
    direction, 
    sum, 
    time, 
    timeForward, 
    timeBack,
  });
});

window.timeSum = timeSum;

let state = {
  direction: '',
  timeForward: '',
  timeBack: '',
  ticketCount: 0,
};

window.state = state;

const directionSelectElement = directionSelect();
directionSelectElement.addEventListener('change', (event) => {
  state.direction = event.target.value;
  showTimeSelect(state.direction);
});

const timeForwardSelectElement = timeForwardSelect();
timeForwardSelectElement.addEventListener('change', (event) => {
  state.timeForward = event.target.value;
  showInput(state.direction, state.timeForward, state.timeBack);
  if (state.direction === 'both') {
    updateTimeSelect(state.timeForward, timeBackSelectElement, 'back');
  }
});

const timeBackSelectElement = timeBackSelect();
timeBackSelectElement.addEventListener('change', (event) => {
  state.timeBack = event.target.value;
  showInput(state.direction, state.timeForward, state.timeBack);
  if (state.direction === 'both') {
    updateTimeSelect(state.timeBack, timeForwardSelectElement, 'forward');
  }
});

const inputNumElement = inputNum();
inputNumElement.addEventListener('input', (event) => {
  state.ticketCount = event.target.value;
  showButton(state.ticketCount);
});

const buttonElement = button('Посчитать');
directionBlock.append(directionSelectElement);


function showTimeSelect(direction) {
  clearButtonBlock();
  clearTimeBlock();
  clearResultBlock();
  switch (direction) {
    case 'forward':
      timeForwardBlock.innerHTML = `<h2 class="subtitle">Выбери время из А в В</h2>`;
      timeForwardBlock.append(timeForwardSelectElement);
      break;
    case 'back':
      timeBackBlock.innerHTML = `<h2 class="subtitle">Выбери время из В в А</h2>`;
      timeBackBlock.append(timeBackSelectElement);
      break;
    case 'both':
      timeForwardBlock.innerHTML = `<h2 class="subtitle">Выбери время из А в В</h2>`;
      timeForwardBlock.append(timeForwardSelectElement);
      timeBackBlock.innerHTML = `<h2 class="subtitle">Выбери время из В в А</h2>`;
      timeBackBlock.append(timeBackSelectElement);
      break;
    default:
      break;
  }
}

function clearTimeBlock() {
  clearInputBlock();
  timeForwardBlock.innerHTML = '';
  timeBackBlock.innerHTML = '';
  timeForwardSelectElement.value = '';
  timeBackSelectElement.value = '';
  state.timeForward = '';
  state.timeBack = '';
}

function showInput(direction, timeForward, timeBack) {
  clearResultBlock();
  if (direction === 'forward') {
    if (timeForward) {
      inputBlock.innerHTML = `<h2 class="subtitle">Укажи количество билетов</h2>`
      inputBlock.append(inputNumElement)
    }
  }
  if (direction === 'back') {
    if (timeBack) {
      inputBlock.innerHTML = `<h2 class="subtitle">Укажи количество билетов</h2>`
      inputBlock.append(inputNumElement)
    }
  }
  if (direction === 'both') {
    if (timeForward && timeBack) {
      inputBlock.innerHTML = `<h2 class="subtitle">Укажи количество билетов</h2>`
      inputBlock.append(inputNumElement)
    }
  }
}

function clearInputBlock() {
  inputBlock.innerHTML = '';
  inputNumElement.value = 0;
  state.ticketCost = 0;
}

function showButton(cost) {
  clearResultBlock();
  cost > 0 ? buttonBlock.append(buttonElement) : clearButtonBlock();
}

function clearButtonBlock() {
  buttonBlock.innerHTML = '';
}

function clearResultBlock() {
  resultBlock.innerHTML = '';
}