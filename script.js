const secondHand = document.querySelector('.second-hand');
const minutesHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
  const now = new Date();

  // Calculate the degrees for the second hand
  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;

  secondHand.style.transition = (secondsDegrees === 90) ? 'none' : '';
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`; // Rotate the second hand

  // Calculate the degrees for the minute hand
  const minutes = now.getMinutes();
  const minutesDegrees = ((minutes / 60) * 360) + 90;

  minutesHand.style.transition = (minutesDegrees === 90) ? 'none' : '';
  minutesHand.style.transform = `rotate(${minutesDegrees}deg)`; // Rotate the minute hand

  // Calculate the degrees for the hour hand, considering both hours and minutes
  const hour = now.getHours();
  const minutesInHour = minutes / 60; // Convert minutes to a fraction of an hour
  const hourDegrees = ((hour + minutesInHour) / 12) * 360 + 90;

  hourHand.style.transition = (hourDegrees === 90) ? 'none' : '';
  hourHand.style.transform = `rotate(${hourDegrees}deg)`; // Rotate the hour hand
}

setInterval(setDate, 1000); // Update the clock every second
