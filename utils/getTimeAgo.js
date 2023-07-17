export function getTimeAgo(time) {
  const currentTime = Date.now();
  const timeDiff = currentTime - time;

  const minutes = Math.floor(timeDiff / (1000 * 60));
  const hours = Math.floor(minutes / 60);

  if (hours > 0) {
    const hourLabel = hours === 1 ? 'hour' : 'hours';
    return `${hours} ${hourLabel} ago`;
  } else {
    const minuteLabel = minutes === 1 ? 'minute' : 'minutes';
    return `${minutes} ${minuteLabel} ago`;
  }
}
