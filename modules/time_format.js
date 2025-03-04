import { selector } from "../fns/custom_functions.js";

const CURRENT_DATE = new Date();
let interval = 1000;

export const weekInfoTemplate = `
  <div class="weeks absolute flexbox">
    <div class="info--container flexbox">
      <p class="info color" data-day>Sat</p>
    </div>
    <div class="digit--container flexbox">
      <p class="date color" data-date>0</p>
    </div>
    <div class="date--container flexbox">
      <p class="month color" data-month>february</p>
    </div>
  </div>
`;

export const currentTimeFormat = () => {
  const htmlRefs = {
    dataDay: selector('[data-day]'),
    dataDate: selector('[data-date]'),
    dataMonth: selector('[data-month]')
  }
  
  const { dataDay, dataDate, dataMonth } = htmlRefs;
  const WEEKS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const CURRENT_WEEK = WEEKS[CURRENT_DATE.getDay()];
  const CURRENT_DAY = CURRENT_DATE.getDate();
  const CURRENT_MONTH = MONTHS[CURRENT_DATE.getMonth()];
  
  dataDay.textContent = CURRENT_WEEK;
  dataDate.textContent = CURRENT_DAY;
  dataMonth.textContent = CURRENT_MONTH;
}

export const formatInfoTemplate = `
  <p class="digit color digit--hours" data-hours>00</p>
  <span class="separator color">:</span>
  <p class="digit color digit--minutes" data-minutes>00</p>
  <span class="separator color">:</span>
  <p class="digit color digit--seconds" data-seconds>00</p>
`

export const displayDigitalClock = () => {
  const updateCurrentTime = () => {
    const CURRENT_TIME = new Date();

    const htmlRefs = {
      dataHours: selector('[data-hours]'),
      dataMinutes: selector('[data-minutes]'),
      dataSeconds: selector('[data-seconds]')
    }
  
    const { dataHours, dataMinutes, dataSeconds } = htmlRefs;

    const HOURS = CURRENT_TIME.getHours();
    const MINUTES = CURRENT_TIME.getMinutes();
    const SECONDS = CURRENT_TIME.getSeconds();

    const GET_CURRENT_HOUR = (HOURS < 10) ? `0${(HOURS - 12)}` : HOURS;
    const GET_CURRENT_MINS = (MINUTES < 10) ? `0${MINUTES}` : MINUTES;
    const GET_CURRENT_SECS = (SECONDS < 10) ? `0${SECONDS}` : SECONDS;
  
    dataHours.textContent = GET_CURRENT_HOUR;
    dataMinutes.textContent = GET_CURRENT_MINS;
    dataSeconds.textContent = GET_CURRENT_SECS;
  }

  setInterval(updateCurrentTime, interval)
}