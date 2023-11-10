const initApp = () => {
  
  let interval = 1000;
  let maxValue = 30;
  let halfValue = 12;
  let decimal = 10;
  let minValue = 6;
  const indices = [12,1,2,3,4,5,6,7,8,9,10,11];

  const selectors = {
    dataWeeks: document.querySelector('[data-weeks]'),
    dataDigit: document.querySelector('[data-digit]'),
    dataHands: document.querySelector('[data-hands]'),
    dataDials: document.querySelector('[data-dials]'),
    dataFormat: document.querySelector('[data-format]'),
  }

  const {
    dataWeeks,
    dataDigit,
    dataHands,
    dataDials,
    dataFormat
  } = selectors;

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

  dataWeeks.innerHTML += `
    <div class='info--container absolute'>
      <p class='info color' data-day>Sat</p>
    </div>
  `;

  dataDigit.innerHTML += `
    <p class='date color' data-date>0</p>
  `;

  dataHands.innerHTML += `
    <div class='absolute hand hrs' style='--dial-color: ${hMarkerColor}; --sz: 7rem' data-hours-maker></div>
    <div class='absolute hand mins' style='--dial-color: ${mMarkerColor}; --sz: 8rem' data-minutes-maker></div>
    <div class='absolute hand secs' style='--dial-color: ${sMarkerColor}; --sz: 9rem' data-seconds-maker></div>
  `;

  indices.map(index => {
    dataDials.innerHTML += `
      <div class='absolute dial' style='--i: ${index}'>
        <span class='absolute'>${index}</span>
      </div>
    `
  });

  dataFormat.innerHTML += `
    <p class="digit color digit--hours" data-hours>00</p>
    <span class="separator color">:</span>
    <p class="digit color digit--minutes" data-minutes>00</p>
    <span class="separator color">:</span>
    <p class="digit color digit--seconds" data-seconds>00</p>
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

    let getCurrentHour = '';

    const weekdays = [
      'Sun',
      'Mon',
      'Tue',
      'Wed',
      'Thu',
      'Fri',
      'Sat'
    ];

    const CURRENT_DATE = new Date();
    // Add to handleRotate function as a value
    const HOURS = CURRENT_DATE.getHours() * maxValue;
    const MINUTES = CURRENT_DATE.getMinutes() * minValue;
    const SECONDS = CURRENT_DATE.getSeconds() * minValue;

    const CURRENT_TIME = HOURS + MINUTES / halfValue;

    // get the current time 
    const HH = CURRENT_DATE.getHours();
    const MM = CURRENT_DATE.getMinutes();
    const SS = CURRENT_DATE.getSeconds();

    const ACTUAL_DAY = CURRENT_DATE.getDay();
    const DAY_MONTH = CURRENT_DATE.getDate();

    const getCurrentDay = weekdays[ACTUAL_DAY];

    if(HH > halfValue){
      getCurrentHour = HH - halfValue
    }

    const getMins = (MM < decimal) ? '0' + MM: MM;
    const getSecs = (SS < decimal) ? '0' + SS : SS;

    dataDay.innerHTML = getCurrentDay;
    dataDate.innerHTML = DAY_MONTH;
    dataHours.innerHTML = getCurrentHour;
    dataMinutes.innerHTML = getMins;
    dataSeconds.innerHTML = getSecs

    handleRotate(dataHoursMaker, CURRENT_TIME);
    handleRotate(dataMinutesMaker, MINUTES);
    handleRotate(dataSecondsMaker, SECONDS);
  }

  setInterval(timer, interval)

}

document.addEventListener('DOMContentLoaded', initApp);