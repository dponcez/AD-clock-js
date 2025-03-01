import { selector } from "../fns/custom_functions.js";

const CURRENT_DATE = new Date();

export const weekInfoTemplate = `
  <div class="weeks absolute flexbox" data-weeks>
    <div class="info--container absolute flexbox">
      <p class="info color" data-day>Sat</p>
    </div>
  </div>
  <div class="digit--container absolute flexbox" data-digit>
    <p class="date color" data-date>0</p>
  </div>
`;

export const currentTimeFormat = () => {
  const htmlRefs = {
    dataDay: selector('[data-day]'),
    dataDate: selector('[data-date]')
  }
  
  const { dataDay, dataDate } = htmlRefs;
  const WEEKS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const CURRENT_WEEK = WEEKS[CURRENT_DATE.getDay()];
  const CURRENT_DAY = CURRENT_DATE.getDate();
  
  dataDay.textContent = CURRENT_WEEK;
  dataDate.textContent = CURRENT_DAY;
}

// export const data_format = () => {}