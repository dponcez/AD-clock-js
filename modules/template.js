import { selector, handleRotate } from "../fns/custom_functions.js";
import { weekInfoTemplate } from "./time_format.js";

export const handleClock = () => {
  let interval = 1000;
  let maxValue = 30;
  let halfValue = 12;
  let minValue = 6;
  const indices = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  const template = selector('.clock');
  const colors = {
    hourIndicatorColor: "hsl(201, 19%, 71%)",
    minuteIndicatorColor: "hsl(12, 93%, 67%)",
    secondIndicatorColor: "hsl(200, 53%, 22%)",
  };

  const { hourIndicatorColor, minuteIndicatorColor, secondIndicatorColor } = colors;

  const dials = indices.map(index => (
    `<div class="dial absolute" style="--i: ${index}">
      <span class="absolute">${index}</span>
    </div>`
  ));

  template.innerHTML = `
    <section class="weeks--container">
      ${weekInfoTemplate}
    </section>
    <section class="hands absolute flexbox" data-hands>
      <div class="absolute hand hrs" style="--dial-color: ${hourIndicatorColor}; --sz: 7rem" data-hours-marker></div>
      <div class="absolute hand mins" style="--dial-color: ${minuteIndicatorColor}; --sz: 8rem" data-minutes-marker></div>
      <div class="absolute hand secs" style="--dial-color: ${secondIndicatorColor}; --sz: 9rem" data-seconds-marker></div>
    </section>
    <section class="absolute dials" data-dials>
      ${dials.join("")}
    </section>
  `;

  const timer = () => {
    const dialPointers = {
      hourIndicator: selector('[data-hours-marker]'),
      minutesIndicator: selector('[data-minutes-marker]'),
      secondsIndicator: selector('[data-seconds-marker]')
    }

    const { hourIndicator, minutesIndicator, secondsIndicator } = dialPointers;

    const CURRENT_DATE = new Date();

    const HOURS = CURRENT_DATE.getHours() * maxValue;
    const MINUTES = CURRENT_DATE.getMinutes() * minValue; 
    const SECONDS = CURRENT_DATE.getSeconds() * minValue;

    const CURRENT_TIME = HOURS + MINUTES / halfValue;

    handleRotate(hourIndicator, CURRENT_TIME);
    handleRotate(minutesIndicator, MINUTES);
    handleRotate(secondsIndicator, SECONDS);
  }

  setInterval(timer, interval)
}