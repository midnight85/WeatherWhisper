export function getTodayFromForecast(currentDate, forecastDayList) {
  return forecastDayList.find(item => item.date === currentDate.split(' ')[0]);
}
