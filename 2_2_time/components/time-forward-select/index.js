import select from '../select';

import { prepareTime } from '../../utils';

const schedule = [ '18:00', '18:30', '18:45', '19:00', '19:15', '21:00' ];

function generateOptions(schedule) {
  return schedule.map(time => {
    return { value: `${time}(из A в B)`, text: `${prepareTime(time)}(из A в B)` }
  });
}

function timeForwardSelect() {
  const selectData = { 
    name: 'time-forward', 
    label: 'Выбери время выезда из A в B', 
    options: generateOptions(schedule),
    // options: [ 
    //   { value: '18:00(из A в B)', text: '18:00(из A в B)' },  
    //   { value: '18:30(из A в B)', text: '18:30(из A в B)' },  
    //   { value: '18:45(из A в B)', text: '18:45(из A в B)' },  
    //   { value: '19:00(из A в B)', text: '19:00(из A в B)' },  
    //   { value: '19:15(из A в B)', text: '19:15(из A в B)' },  
    //   { value: '21:00(из A в B)', text: '21:00(из A в B)' },  
    // ],
  };
  return select(selectData);
}

export default timeForwardSelect;