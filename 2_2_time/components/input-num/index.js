import './input-num.scss';

function inputNum() {
  const template = `<input name="tickets" type="number" placeholder="Введи количество билетов..." class="input-num" min="0">`;
  const el = document.createElement('div');
  el.innerHTML = template;
  return el.firstElementChild;
}

export default inputNum;