const talkingCalendar = function(date) {
  let month = '';
  let day = '';
  
  if (date[5] + date[6] === '01') {
    month = 'January';
  } else if (date[5] + date[6] === '02') {
    month = 'February';
  } else if (date[5] + date[6] === '03') {
    month = 'March';
  } else if (date[5] + date[6] === '04') {
    month = 'April';
  } else if (date[5] + date[6] === '05') {
    month = 'May';
  } else if (date[5] + date[6] === '06') {
    month = 'June';
  } else if (date[5] + date[6] === '07') {
    month = 'July';
  } else if (date[5] + date[6] === '08') {
    month = 'August';
  } else if (date[5] + date[6] === '09') {
    month = 'Sepetember';
  } else if (date[5] + date[6] === '10') {
    month = 'October';
  } else if (date[5] + date[6] === '11') {
    month = 'November';
  } else if (date[5] + date[6] === '12') {
    month = 'December';
  }
  if (date[8] === '1') {
    if (date[9] === '1') {
      day = '11th';
    } else if (date[9] === '2') {
      day = '12th';
    } else if (date[9] === '3') {
      day = '13th';
    } else {
      day = date[8] + date[9] + 'th';
    }
  } else if (date[8] !== '1') { 
    if (date[9] === '1') {
      day = date[8] + '1st';
    } else if (date[9] === '2') {
      day = date[8] + '2nd';
    } else if (date[9] === '3') {
      day = date[8] + '3rd';
    } else {
    day = date[8] + date[9] + 'th';
  }
}
  if (day[0] === '0') {
    day = day.replace(0, '');
  }
  let message = `${month} ${day}, ${date[0]}${date[1]}${date[2]}${date[3]}`
  return message;
}


console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/09"));
console.log(talkingCalendar("1987/08/24"));