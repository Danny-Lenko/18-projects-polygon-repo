"use strict"

window.onload = () => {
   document.querySelector('#btn').addEventListener('click', controller.manageHeroBtnClicks);
}

let view = {

   setBackground(color) {
      document.getElementsByTagName('main')[0].style['background-color'] = color;
   },

   setColorName(color) {
      document.querySelector('.color').innerHTML = color;
   }

};

let controller = {
   hex: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"],

   manageHeroBtnClicks() {
      let hexValues = '#'

      for (let i = 0; i < 6; i++) {
         hexValues += controller.hex[Math.floor(Math.random() * 15)];
      }
      view.setBackground(hexValues);
      view.setColorName(hexValues);
   }

};
