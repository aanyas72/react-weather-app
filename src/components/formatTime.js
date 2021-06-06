//formats the time from 24hr to standard
const formatTime = (time) => {
  const hour = parseInt(time.substring(0, 2));
  let newTime;
  if (hour > 12) {
    newTime = hour - 12;
    newTime.toString();
    newTime = newTime + time.substring(2, 5) + " PM";
  } else if (hour === 12) {
    newTime = hour + time.substring(2, 5) + " PM";
  } else if (hour === 0) {
    newTime = 12;
    newTime.toString();
    newTime = newTime + time.substring(2, 5) + " AM";
  } else {
    newTime = hour + time.substring(2, 5) + " AM";
  }
  return newTime;
};

export default formatTime;
