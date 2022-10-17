import './select.scss';

function select(data) {
  const { name, label, options } = data;
  const template = `
    <select name="${name}" class="select">
      <option class="select__option" value="" disabled selected>${label}</option>
      ${options.reduce((prev, curr) => {
          return prev += `<option class="select__option" value="${curr.value}">${curr.text}</option>`;
        }, '')}
    </select>
  `;
  const el = document.createElement('div');
  el.innerHTML = template;
  return el.firstElementChild;
}

export default select;