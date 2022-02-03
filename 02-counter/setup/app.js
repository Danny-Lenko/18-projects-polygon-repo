"use strict";

let counter = 0;

document.querySelectorAll('.btn').forEach(btn => {
   btn.addEventListener('click', (e) => {
      const classList = e.target.classList;
      const valueField = document.querySelector('#value');
      const myCounters = document.querySelector('#myCounters');


      counter = (classList.contains('increase')) ? counter + 1 :
         (classList.contains('decrease')) ? counter - 1 :
         (classList.contains('reset')) ? 0 : 
         counter;

      if (classList.contains('saveBtn')) {
         myCounters.innerHTML += (!myCounters.innerHTML) ? counter : ', ' + counter;
      }

      valueField.innerHTML = counter;
      valueField.style.color = (counter > 0) ? 'green' : (counter < 0) ? 'red' : 'inherit';

     })
})