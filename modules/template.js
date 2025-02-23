import { selector, handleRotate } from "../fns/custom_functions.js"

export const handleClock = () => {
  let interval = 1000;
  let maxValue = 30;
  let halfValue = 12;
  let minValue = 6;
  const indices = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  const htmlRef = {
    template: selector('.clock')
  }

  const colors = {
    hourMarkerColor: "hsl(201, 19%, 71%)",
    minuteMarkerColor: "hsl(12, 93%, 67%)",
    secondMarkerColor: "hsl(200, 53%, 22%)",
  };

  const { template } = htmlRef;
  const { hourMarkerColor, minuteMarkerColor, secondMarkerColor } = colors;

  const dials = indices.map(index => (
    `<div class="dial absolute" style="--i: ${index}">
      <span class="absolute">${index}</span>
    </div>`
  ))

  template.innerHTML = `
    <section class="weeks--container">
      <div class="weeks absolute flexbox" data-weeks>
        <div class="info--container absolute flexbox">
          <p class="info color" data-day>Sat</p>
        </div>
      </div>
      <div class="digit--container absolute flexbox" data-digit>
        <p class="date color" data-date>0</p>
      </div>
    </section>
    <!-- hands -->
    <section class="hands absolute flexbox" data-hands>
      <div class="absolute hand hrs" style="--dial-color: ${hourMarkerColor}; --sz: 7rem" data-hours-marker></div>
      <div class="absolute hand mins" style="--dial-color: ${minuteMarkerColor}; --sz: 8rem" data-minutes-marker></div>
      <div class="absolute hand secs" style="--dial-color: ${secondMarkerColor}; --sz: 9rem" data-seconds-marker></div>
    </section>
    <!-- dials -->
    <section class="absolute dials" data-dials>
      ${dials.join("")}
    </section>
  `;

  const timer = () => {
    const dialMarker = {
      hoursMarker: selector('[data-hours-marker]'),
      minutesMarker: selector('[data-minutes-marker]'),
      secondsMarker: selector('[data-seconds-marker]')
    }

    const { hoursMarker, minutesMarker, secondsMarker } = dialMarker;

    const CURRENT_DATE = new Date();

    const HOURS = CURRENT_DATE.getHours() * maxValue;
    const MINUTES = CURRENT_DATE.getMinutes() * minValue; 
    const SECONDS = CURRENT_DATE.getSeconds() * minValue;

    const CURRENT_TIME = HOURS + MINUTES / halfValue;

    handleRotate(hoursMarker, CURRENT_TIME);
    handleRotate(minutesMarker, MINUTES);
    handleRotate(secondsMarker, SECONDS);
  }

  setInterval(timer, interval)
}