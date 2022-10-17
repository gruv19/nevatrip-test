import './result-block.scss';
import { timeSum, getGenitive } from '../../utils';

function resultBlockTemplate(data) {
  const { count, direction, sum, time, timeForward, timeBack } = data;
  console.log(timeBack);
  const template = `
    <h2 class="subtitle">Результат</h2>
    <p class="result__text">Вы выбрали <strong>${ getGenitive(count, { one: 'билет', twoToFour: 'билета', moreThanFive: 'билетов' }) }</strong> по маршруту <strong>${direction}</strong> стоимостью <strong>${sum}</strong></p>
    <p class="result__text">Это путешествие займет у вас <strong>${time}</strong>.</p>
    ${ timeForward ? `<p class="result__text">Теплоход отправляется из точки А в <strong>${timeForward}</strong> и прибывает в точку В в <strong>${timeSum(timeForward, 0, 50)}</strong></p>` : ''}
    ${ timeBack ? `<p class="result__text">Теплоход отправляется из точки B в <strong>${timeBack}</strong> и прибывает в точку А в <strong>${timeSum(timeBack, 0, 50)}</strong></p>` : ''}   
  `;
  return template;
}

export default resultBlockTemplate;