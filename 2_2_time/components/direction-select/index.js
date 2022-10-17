import select from '../select';

function directionSelect() {
  const selectData = { 
    name: 'route', 
    label: 'Выбери направление', 
    options: [ 
      { value: 'forward', text: 'из A в B' },  
      { value: 'back', text: 'из B в A' },  
      { value: 'both', text: 'из A в B и обратно в А' },  
    ],
  };
  return select(selectData);
}

export default directionSelect;