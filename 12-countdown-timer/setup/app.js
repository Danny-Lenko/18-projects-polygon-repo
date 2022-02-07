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

const todayDate = new Date();
const todayDayOfMonth = todayDate.getDate();
const todayMonth = todayDate.getMonth();
const todayYear = todayDate.getFullYear();

let nextMonth = false;
let nextYear = false;

const findDaysInMonth = (month, year) => new Date(year, month, 0).getDate();
const totalDays = findDaysInMonth(todayMonth + 1, todayYear);

const getGiveawayDay = (today, days) => {
  if (today + 10 <= days) {
    return today + 10;
  } else {
    nextMonth = true;
    if (todayMonth == 11) {
      nextYear = true;
    }
    return today + 10 - days;
  }
}

/* ------------
Functionality to set giveaway date;
-------------- */ 

let giveWeekday = 'Monday';
let giveDate = 1;
let giveYear = 2022;

const getGiveawayMonth = () => {
let giveMonth = todayMonth;
  if (nextMonth) {
    giveMonth = todayMonth + 1;
    if (giveMonth > 11) {
      giveMonth = 0;
    }
  }
  return months[giveMonth];
}

const getGiveawayYear = () => {
  let giveYear = todayYear;
  if (nextYear) {
    giveYear = todayYear + 1;
  }
  return giveYear;
}
const giveAwayDay = getGiveawayDay(todayDayOfMonth, totalDays);
const giveAwayMonth = getGiveawayMonth();
const giveAwayYear = getGiveawayYear();
const giveAwayDate = new Date(`${giveAwayMonth} ${giveAwayDay}, ${giveAwayYear} 11:30:00`);
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

let dateInfo = giveAwayDate.toLocaleDateString('en-EN', options);
dateInfo = dateInfo.split(', ').join(' ').split(' ');

document.querySelector('.giveaway').innerHTML = `
  giveaway ends on ${dateInfo[0]}, ${dateInfo[2]} ${dateInfo[1]} ${dateInfo[3]}, 11:30am
`

/* end of giveaway setting functionality */

/* ----------
  set the countdown timer
------------ */

const timeToCountDown = giveAwayDate.getTime();
function countDownTime() {
  const now = new Date().getTime();
  const timeleft = timeToCountDown - now;

  const days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

  document.querySelector(".days").innerHTML = days;
  document.querySelector(".hours").innerHTML = hours;
  if (hours < 10) {
    document.querySelector(".hours").innerHTML = `0${hours}`;
  } 
  document.querySelector(".minutes").innerHTML = minutes;
  if (minutes < 10) {
    document.querySelector(".minutes").innerHTML = `0${minutes}`;
  }
  document.querySelector(".seconds").innerHTML = seconds;
  if (seconds < 10) {
    document.querySelector(".seconds").innerHTML = `0${seconds}`;
  }
}
let intervalID = setInterval(countDownTime, 1000);

