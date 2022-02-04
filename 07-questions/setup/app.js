"use strict"

document.querySelectorAll('.question-btn').forEach((btn, index) => {
   btn.addEventListener('click', (e) => {
      const articles = document.querySelectorAll('.question');
      // const minusIcons = document.querySelectorAll('.minus-icon')

      articles.forEach(article => {
         if (article !== articles[index]) {
            article.classList.remove('show-text');
         }
      })

      articles[index].classList.toggle('show-text');
   })
})