import './button.scss';

function button(text) {
  const template = `<button type="submit" class="button">${text}</button>`;
  const el = document.createElement('div');
  el.innerHTML = template;
  return el.firstElementChild;
}

export default button;