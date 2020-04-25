const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const secondHand = document.querySelector('.second-hand');

const setDate = () => {
  const now = new Date();

  const hours = now.getHours();
  const hoursDegree = ((hours / 12) * 360) + 90;

  const minutes = now.getMinutes();
  const minutesDegree = ((minutes / 60) * 360) + 90;

  const seconds = now.getSeconds();
  const secondsDegree = ((seconds / 60) * 360) + 90;

  const moveHand = (hand, deg) => {
    hand.style.transform = `rotate(${deg}deg)`;
  }

  moveHand(hourHand, hoursDegree);
  moveHand(minuteHand, minutesDegree);
  moveHand(secondHand, secondsDegree);
}

setInterval(setDate, 1000);