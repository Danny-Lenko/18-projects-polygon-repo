// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels


const linksContainer = document.querySelector('.links-container');

// ********** set date ************

const date = document.querySelector('#date');
date.innerHTML = new Date().getFullYear();

// ********** close links ************


document.querySelector('.nav-toggle').addEventListener('click', () => {
   const links = document.querySelector('.links');
   const linksContainerHeight = linksContainer.getBoundingClientRect().height;
   const linksHeight = links.getBoundingClientRect().height;

   if (linksContainerHeight === 0) {
      linksContainer.style.height = `${linksHeight}px`;
   } else {
      linksContainer.style.height = 0;
   }
})

// ********** fixed navbar & arrow anchor ************

function fixAndUnfixNavbar() {
   const navEl = document.querySelector('#nav');
   if (window.pageYOffset > 50) {
      navEl.classList.add('fixed-nav');
   } else if (window.pageYOffset < 50) {
      navEl.classList.remove('fixed-nav');
   }
}
window.addEventListener('scroll', fixAndUnfixNavbar);

function enableAndDisableArrow() {
   const topLink = document.querySelector('.top-link');
   if (window.pageYOffset > 550) {
      topLink.classList.add('show-link');
   } else if (window.pageYOffset < 550) {
      topLink.classList.remove('show-link');
   }
}
window.addEventListener('scroll', enableAndDisableArrow);


// ********** smooth scroll ************
document.querySelectorAll('.scroll-link').forEach( link => {
   link.addEventListener('click', (e) => {
      e.preventDefault();

      const name = e.currentTarget.getAttribute("href").slice(1);
      const section = document.getElementById(name);
      const sectionPosition = section.offsetTop;
      const navbar = document.querySelector('#nav');
      const navbarHeight = navbar.getBoundingClientRect().height;
      const linksContainerHeight = linksContainer.getBoundingClientRect().height;
      let position = sectionPosition - navbarHeight;

      if (!navbar.classList.contains('fixed-nav')) {
         position = position - navbarHeight;
      }
      if (navbarHeight > 100) {
         position += linksContainerHeight;
      }

      window.scrollTo({
         left: 0,
         top: position
      })

      linksContainer.style.height = 0;
   })
})

// select links

