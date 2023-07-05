export function getNearestHourData(localtime, hour) {
  // Convert localtime string to Date object
  const localDateTime = new Date(localtime);
  // Calculate the difference between localDateTime and each time in the hour array
  const timeDifferences = hour.map(item => {
    const itemDateTime = new Date(item.time);
    return Math.abs(localDateTime - itemDateTime);
  });
  // Find the index of the minimum difference
  const minDifferenceIndex = timeDifferences.indexOf(
    Math.min(...timeDifferences),
  );
  // Return the nearest date object
  return hour[minDifferenceIndex];
}
