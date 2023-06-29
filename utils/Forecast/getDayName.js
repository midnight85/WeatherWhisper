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
  const d = new Date(dateString);
  const dayName = days[d.getDay()];
  if (len) {
    return dayName.slice(0, len);
  }
  return dayName;
}
