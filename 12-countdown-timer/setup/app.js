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

const giveDayOfMonth = getGiveawayDay(todayDayOfMonth, totalDays);

let giveWeekday = 'Monday';
let giveMonth = 'January';
let giveDate = 1;
let giveYear = 2022;

let giveawayFullDate = new Date ()

// const getGiveawayFullDate = () => {
//   if 
// }

