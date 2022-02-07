const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

/* ---------
setting 10 days ahead approach
---------- */

const todayDate = new Date();
const todayDay = todayDate.getDate();
const todayMonth = todayDate.getMonth();
const todayYear = todayDate.getFullYear();
const deadLine = new Date(todayYear, todayMonth, todayDay + 10, 11, 30, 00);

/* ------------
setting giveaway date;
-------------- */

const date = deadLine.getDate();
const month = months[deadLine.getMonth()];
const year = deadLine.getFullYear();
const weekday = weekdays[deadLine.getDay()];
const hours = deadLine.getHours();
const minutes = deadLine.getMinutes();
const seconds = deadLine.getSeconds();

document.querySelector('.giveaway').innerHTML = `
  giveaway ends on ${weekday}, ${date} ${month} ${year}, ${hours}:${minutes}am
`

/* ----------
setting the countdown timer
------------ */

const timeToCountDown = deadLine.getTime();
function countDownTime() {
  const counterEl = document.querySelector('.deadline');
  const timeContainers = document.querySelectorAll('.deadline-format h4');

  const now = new Date().getTime();
  const timeleft = timeToCountDown - now;

  const days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
  const valuesToDeadline = [days, hours, minutes, seconds];

  const checkFormat = values => values = (values < 10) ? `0${values}` : values;

  timeContainers.forEach((item, index) => {
    item.innerHTML = checkFormat(valuesToDeadline[index]);
  })

  if (timeleft < 0) {
    clearInterval(intervalID);
    counterEl.innerHTML = `<h4 class="expired">Sorry, this giveaway has expired<h4>`
  }
}
let intervalID = setInterval(countDownTime, 1000);

