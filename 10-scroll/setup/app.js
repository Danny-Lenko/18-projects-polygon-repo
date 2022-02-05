// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************

const date = document.querySelector('#date');
date.innerHTML = new Date().getFullYear();

// ********** close links ************

const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

document.querySelector('.nav-toggle').addEventListener('click', () => {
   const linksContainerHeight = linksContainer.getBoundingClientRect().height;
   const linksHeight = links.getBoundingClientRect().height;

   console.log('hello')
   if (linksContainerHeight === 0) {
      linksContainer.style.height = `${linksHeight}px`;
   } else {
      linksContainer.style.height = 0;
   }
})

// ********** fixed navbar ************

function fixAndUnfixNavbar() {
   const navEl = document.querySelector('#nav');
   if (window.pageYOffset > 50) {
      navEl.classList.add('fixed-nav');
   } else if (window.pageYOffset < 50) {
      navEl.classList.remove('fixed-nav');
   }
}
window.addEventListener('scroll', fixAndUnfixNavbar);

// ********** smooth scroll ************


// select links

function enableAndDisableArrow() {
   const topLink = document.querySelector('.top-link');
   if (window.pageYOffset > 550) {
      topLink.classList.add('show-link');
   } else if (window.pageYOffset < 550) {
      topLink.classList.remove('show-link');
   }
}

window.addEventListener('scroll', enableAndDisableArrow);
