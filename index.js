const hourHand = document.querySelector('#hour_hand');
const minuteHand = document.querySelector('#min_hand');
const secondHand = document.querySelector('#sec_hand');

const setDate = () => {
  const now = new Date();

  const hours = now.getHours();
  const hoursDegrees = ((hours / 60) * 360) + 90;

  const minutes = now.getMinutes();
  const minutesDegrees = ((minutes / 60) * 360) + 90;

  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;

  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  
  // console.log(hours, minutes, seconds);
  // console.log(now.getUTCDate())
}

setInterval(setDate, 1000);