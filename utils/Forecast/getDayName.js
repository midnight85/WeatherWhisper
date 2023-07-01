function isTodayDate(dateString) {
  const inputDate = new Date(dateString);
  const currentDate = new Date();
  // Check if the input date's year, month, and day match with the current date.
  const isToday =
    inputDate.getFullYear() === currentDate.getFullYear() &&
    inputDate.getMonth() === currentDate.getMonth() &&
    inputDate.getDate() === currentDate.getDate();

  return isToday;
}

export function getDayName(dateString, len) {
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const inputDate = new Date(dateString);
  const currentDate = new Date();
  const dayName = days[inputDate.getDay()];
  const isToday =
    inputDate.getFullYear() === currentDate.getFullYear() &&
    inputDate.getMonth() === currentDate.getMonth() &&
    inputDate.getDate() === currentDate.getDate();
  if (isToday) {
    return 'Today';
  }
  if (len) {
    return dayName.slice(0, len);
  }
  return dayName;
}
