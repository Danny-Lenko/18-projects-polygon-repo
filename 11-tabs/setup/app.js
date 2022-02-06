"use strict"

const tabBtns = document.querySelectorAll('.tab-btn');
tabBtns.forEach( btn => {
   btn.addEventListener('click', () => {
      const btnName = btn.dataset.id;
      const contentBoxes = document.querySelectorAll('.content');
      
      tabBtns.forEach( btn => {
         btn.classList.remove('active');
      })
      btn.classList.add('active');

      contentBoxes.forEach( box => {
         const exactBox = document.getElementById(btnName);
         box.classList.remove('active');
         exactBox.classList.add('active');
      })
   })
})