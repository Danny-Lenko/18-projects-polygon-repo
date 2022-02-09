"use strict"

const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');
const slides = document.querySelectorAll('.slide');
let index = 0;

nextBtn.addEventListener('click', () => {
   index -= 100;
   if (index < -300) {
      index = 0;
   }
   slides.forEach(slide => {
      slide.style.transform = `translateX(${index}%)`;
   })
})

prevBtn.addEventListener('click', () => {
   index += 100;
   if (index > 0) {
      index = -300;
   }
   slides.forEach(slide => {
      slide.style.transform = `translateX(${index}%)`;
   })
})


// nextBtn.addEventListener('click', () => {
//    index -= 100;
//    slides.forEach(slide => {
//       slide.style.transform = `translateX(${index}%)`;
//    })
// })

// prevBtn.addEventListener('click', () => {
//    index += 100; 
//    slides.forEach(slide => {
//       slide.style.transform = `translateX(${index}%)`;
//    })
// })