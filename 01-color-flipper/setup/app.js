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
   colors: ["green", "red", "rgba(133,122,200)", "#f15025"],

   manageHeroBtnClicks() {
      const color = controller.colors[Math.floor(Math.random() * controller.colors.length)];
      view.setBackground(color);
      view.setColorName(color);
   }
   
};

