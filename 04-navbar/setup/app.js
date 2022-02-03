"use strict"

document.querySelector('.nav-toggle').addEventListener('click', () => {
   const links = document.querySelector('.links');
   links.classList.toggle('show-links');
})
