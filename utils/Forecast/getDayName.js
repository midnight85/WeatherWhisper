export function getDayName(dateString) {
  const inputDate = new Date(dateString);
  const currentDate = new Date();
  const isToday =
    inputDate.getFullYear() === currentDate.getFullYear() &&
    inputDate.getMonth() === currentDate.getMonth() &&
    inputDate.getDate() === currentDate.getDate();
  if (isToday) {
    return 'Today';
  }
  return inputDate.toDateString().split(' ')[0];
}
