"use strict"

import {reviews} from './app.js';
let counter = 0;

document.querySelectorAll('.fas').forEach(btn => {
   btn.addEventListener('click', (e) => {
      const classList = e.target.classList;
      counter = (classList.contains('fa-chevron-right')) ? counter + 1 : counter - 1;
      counter = (counter < 0) ? reviews.length - 1 :
         (counter >= reviews.length) ? 0 : counter;
      renderPersonInfo();
   })
})

document.querySelector('.random-btn').addEventListener('click', () => {
   counter = Math.floor(Math.random() * reviews.length);
   renderPersonInfo();
})

const renderPersonInfo = () => {
   document.querySelector('#person-img').src = reviews[counter].img;
   document.querySelector('#author').innerHTML = reviews[counter].name;
   document.querySelector('#job').innerHTML = reviews[counter].job;
   document.querySelector('#info').innerHTML = reviews[counter].text;
}
renderPersonInfo();