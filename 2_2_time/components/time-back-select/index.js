import select from '../select';
import './time-back-select.scss';

import { prepareTime } from '../../utils';

const schedule = [ '18:30', '18:45', '19:00', '19:15', '19:35', '21:50', '21:55' ];

function generateOptions(schedule) {
  return schedule.map(time => {
    return { value: `${time}(из B в A)`, text: `${prepareTime(time)}(из B в A)` }
  });
}

function timeBackSelect() {
  const selectData = { 
    name: 'time-back', 
    label: 'Выбери время выезда из B в A', 
    options: generateOptions(schedule),
  };
  return select(selectData);
}

export default timeBackSelect;