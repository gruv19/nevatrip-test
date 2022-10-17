function timeSum(time, sumHours, sumMintes) {
  const timeArr = time.split(':').map(item => +item);
  let addHour = 0;
  timeArr[1] = timeArr[1] + sumMintes;
  if (timeArr[1] > 59) {
    timeArr[1] = timeArr[1] % 60;
    addHour = 1;
  }
  timeArr[0] = (timeArr[0] + sumHours + addHour) % 24;
  return timeArr.map(item => item <= 9 ? `0${item}` : item).join(':');
}

function timDiff(time, diffHours, diffMintes) {
  const timeArr = time.split(':').map(item => +item);
  let addHour = 0;
  timeArr[1] = timeArr[1] - diffMintes;
  console.log(timeArr[1]);
  if (timeArr[1] < 0) {
    timeArr[1] = timeArr[1] + 60;
    addHour = 1;
  }
  timeArr[0] = (timeArr[0] - diffHours - addHour);
  timeArr[0] = timeArr[0] < 0 ? timeArr[0] + 24 : timeArr[0];
  return timeArr.map(item => item <= 9 ? `0${item}` : item).join(':');
}

window.timDiff = timDiff;

function prepareTime(time) {
  const timeDiff = new Date().getHours() - new Date().getUTCHours() - 3;
  let preparedTime = time.replace(/(\d\d?:\d\d).+/, '$1').split(':').map(item => +item);
  preparedTime[0] = (preparedTime[0] + timeDiff) % 24;
  preparedTime = preparedTime.map(item => item <= 9 ? `0${item}` : item).join(':');
  return preparedTime;
}

function updateTimeSelect(startTime, selectElement, direction) {
  if (startTime === '') return;
  let time = startTime.replace(/(\d\d?:\d\d).+/, '$1');
  time = direction === 'forward' ? timDiff(time, 0, 50) : timeSum(time, 0, 50);
  time = time.split(':').map(item => +item);
  selectElement.childNodes.forEach(option => {
    option.disabled = false;
    if (option.nodeName !== 'OPTION') {
      return;
    }
    const t = option.value.replace(/(\d\d?:\d\d).+/, '$1').split(':').map(item => +item);
    const hourCheck = direction === 'forward' ? (t[0] > time[0]) : (t[0] < time[0]);
    const hourMinutes = direction === 'forward' ? (t[0] === time[0] && t[1] >= time[1]) : (t[0] === time[0] && t[1] <= time[1]);
    if (hourCheck) {
      option.disabled = true;
    }
    if (hourMinutes) {
      option.disabled = true;
    }
    if (option.disabled && option.selected) {
      selectElement.value = '';
    }
  });
}

function getGenitive(count, genitiveObject) {
  let result = `${count} ${genitiveObject.moreThanFive}`;
  if (count === 0) {
    result = `${count} ${genitiveObject.moreThanFive}`;
  } else if (count % 100 < 5 || count % 100 > 20) {
    result = count % 10 === 1 ? `${count} ${genitiveObject.one}` : `${count} ${genitiveObject.twoToFour}`;
  }
  return result;
}

export {
  timeSum,
  prepareTime,
  updateTimeSelect,
  getGenitive
};