"use strict";

let counter = 0;

document.querySelector('.increase').addEventListener('click', () => {
   counter++;
   updateOutput();
});

document.querySelector('.decrease').addEventListener('click', () => {
   counter--;
   updateOutput();
})

document.querySelector('.reset').addEventListener('click', () => {
   counter = 0;
   updateOutput();
})

document.querySelector('.saveBtn').addEventListener('click', () => {
   const myCounters = document.querySelector('#myCounters');
   myCounters.innerHTML += (!myCounters.innerHTML) ? counter : ', ' + counter;
})

const updateOutput = () => {
   const valueField = document.querySelector('#value')
   valueField.innerHTML = counter;
   valueField.style.color = (counter > 0) ? 'green' : (counter < 0) ? 'red' : 'inherit';
}