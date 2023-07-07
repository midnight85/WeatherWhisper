export function convert12HourTo24Hour(time12 = '') {
  // Separate the time components (hours, minutes, and AM/PM indicator)
  const timeComponents = time12.split(' ');
  const time = timeComponents[0];
  const meridiem = timeComponents[1];
  // Separate the hours and minutes
  const [hour, minutes] = time.split(':');
  // Convert the hours to a number
  let hour24 = parseInt(hour, 10);
  // Adjust the hour value if necessary
  if (meridiem === 'PM' && hour24 !== 12) {
    hour24 += 12;
  } else if (meridiem === 'AM' && hour24 === 12) {
    hour24 = 0;
  }
  // Format the hour and minutes as two-digit strings
  const formattedHour = hour24.toString().padStart(2, '0');
  const formattedMinutes = minutes.padStart(2, '0');
  // Return the converted time in 24-hour format
  return `${formattedHour}:${formattedMinutes}`;
}
