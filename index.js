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

  const jumpFix = (hand, deg) => {
    // console.log(hand, deg);

    if (deg >= 440) {
      hand.style.transition = `none`;

      if (deg >= 0) {
        hand.style.transition = `all 0.05s`;
        hand.style.transitionTimingFunction = `cubic-bezier(0.1, 2.7, 0.58, 1)`;
      }
    }
  }

  jumpFix(hourHand, hoursDegree)
  hourHand.style.transform = `rotate(${hoursDegree}deg)`;

  jumpFix(minuteHand, minutesDegree);
  minuteHand.style.transform = `rotate(${minutesDegree}deg)`;

  jumpFix(secondHand, secondsDegree);
  secondHand.style.transform = `rotate(${secondsDegree}deg)`;
  
  // console.log(hours, minutes, seconds);
  // console.log(now.getUTCDate())
}

setInterval(setDate, 1000);