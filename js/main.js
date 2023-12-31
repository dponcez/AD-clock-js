const initApp = () => {
  
  let interval = 1000;
  let maxValue = 30;
  let halfValue = 12;
  let decimal = 10;
  let minValue = 6;
  const indices = [12,1,2,3,4,5,6,7,8,9,10,11];

  const selector = {
    clockContainer: document.querySelector('.clock')
  }

  const { clockContainer } = selector

  const colors = {
    hMarkerColor: "hsl(201, 19%, 71%)",
    mMarkerColor: "hsl(12, 93%, 67%)",
    sMarkerColor: "hsl(200, 53%, 22%)",
  };

  const { 
    hMarkerColor, 
    mMarkerColor, 
    sMarkerColor 
  } = colors;

  const dials = indices.map(index => (
    `<div class="dial absolute" style="--i: ${index}">
      <span class="absolute">${index}</span>
    </div>
    `
  ));

  clockContainer.innerHTML += `
    <!-- weekdays -->
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
      <div class="absolute hand hrs" style="--dial-color: ${hMarkerColor}; --sz: 7rem" data-hours-maker></div>
      <div class="absolute hand mins" style="--dial-color: ${mMarkerColor}; --sz: 8rem" data-minutes-maker></div>
      <div class="absolute hand secs" style="--dial-color: ${sMarkerColor}; --sz: 9rem" data-seconds-maker></div>
    </section>
    <!-- dials -->
    <section class="absolute dials" data-dials>
      ${ dials.join('') }
    </section>
    <!-- time format -->
    <section class="format--container absolute flexbox" data-format>
      <p class="digit color digit--hours" data-hours>00</p>
      <span class="separator color">:</span>
      <p class="digit color digit--minutes" data-minutes>00</p>
      <span class="separator color">:</span>
      <p class="digit color digit--seconds" data-seconds>00</p>
    </section>
  `;

  const handleRotate = (element, value) => {
    element.style.transform = `rotate(${value}deg)`
  }

  const timer = () => {

    const dataSelectors = {
      dataHoursMaker: document.querySelector("[data-hours-maker]"),
      dataMinutesMaker: document.querySelector("[data-minutes-maker]"),
      dataSecondsMaker: document.querySelector("[data-seconds-maker"),
      dataDay: document.querySelector('[data-day]'),
      dataDate: document.querySelector('[data-date]'),
      dataHours: document.querySelector('[data-hours]'),
      dataMinutes: document.querySelector('[data-minutes]'),
      dataSeconds: document.querySelector('[data-seconds]')
    };

    const {
      dataHoursMaker,
      dataMinutesMaker,
      dataSecondsMaker,
      dataDay,
      dataDate,
      dataHours,
      dataMinutes,
      dataSeconds
    } = dataSelectors;

    const weekdays = [
      'Sun',
      'Mon',
      'Tue',
      'Wed',
      'Thu',
      'Fri',
      'Sat'
    ];

    // Create date object constructor
    const CURRENT_DATE = new Date();

    // Get the current time for analog clock
    const HOURS = CURRENT_DATE.getHours() * maxValue;
    const MINUTES = CURRENT_DATE.getMinutes() * minValue;
    const SECONDS = CURRENT_DATE.getSeconds() * minValue;

    const CURRENT_TIME = HOURS + MINUTES / halfValue;

    // Get the current time for digital clock
    const HOUR = CURRENT_DATE.getHours();
    const MINS = CURRENT_DATE.getMinutes();
    const SECS = CURRENT_DATE.getSeconds();

    const ACTUAL_DAY = CURRENT_DATE.getDay();
    const DAY_MONTH = CURRENT_DATE.getDate();

    const getCurrentDay = weekdays[ACTUAL_DAY];

    const getCurrentHour = (HOUR > halfValue) ? (HOUR - halfValue) : HOUR
    const getCurrentMins = (MINS < decimal) ? '0' + MINS: MINS;
    const getCurrentSecs = (SECS < decimal) ? '0' + SECS : SECS;

    dataDay.innerHTML = getCurrentDay;
    dataDate.innerHTML = DAY_MONTH;
    dataHours.innerHTML = getCurrentHour;
    dataMinutes.innerHTML = getCurrentMins;
    dataSeconds.innerHTML = getCurrentSecs

    handleRotate(dataHoursMaker, CURRENT_TIME);
    handleRotate(dataMinutesMaker, MINUTES);
    handleRotate(dataSecondsMaker, SECONDS);
  }

  setInterval(timer, interval)

}

document.addEventListener('DOMContentLoaded', initApp);