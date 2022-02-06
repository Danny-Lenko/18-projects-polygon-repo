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

      contentBoxes.forEach(box => {
         if (box.classList.contains('active')) {
            box.classList.remove('active');
         }
         if (btnName === box.id) {
            box.classList.add('active');
         }
      })
   })
})