# Standard README.md File

![Design preview for the Space tourism website coding challenge](./assets/preview.jpg)

## Welcome! 👋
## Table of contents

- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- CSS utility classes


### What I learned

## 02 - Counter

1) An ability to save a classList in a variable

```js
document.querySelectorAll('.btn').forEach(btn => {
   btn.addEventListener('click', (e) => {
      const classList = e.target.classList;
      console.log(classList);
   })
})
```

## 03 - Reviews

1) Load initial item

```js
window.addEventListener("DOMContentLoaded", function () {
   // yada yada
});
```

## 04 - Navbar

1) basic setup for mobile navbar

```css
.links {
  height: 0;
  overflow: hidden;
  transition: var(--transition);
}
.show-links {
  height: 10rem;
}
/* ! Important thing here is to use "height: auto" for bigger sreen */
@media screen and (min-width: 800px) {

  .links {
    height: auto;
    display: flex;
  }

}
```

```js
document.querySelector('.nav-toggle').addEventListener('click', () => {
   const links = document.querySelector('.links');
   links.classList.toggle('show-links');
})
```

## 08 - menu

1) the way to get the, for example, "data-id" property of a DOM element

```js
const category = e.currentTarget.dataset.id;
```

## 10 - scroll

1) How I get the current year

```js
const date = document.querySelector('#date');
date.innerHTML = new Date().getFullYear();
```

2) how to render links dynamically on click event
!! make notice element.style.height must be a string type !!
!! and also there will be a need to specify the 'height: auto;' property of the links-container in a widescreen mode with the !important !!

```js
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

```



### Continued development

* CSS grid;

*Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

### Useful resources

- [pageYOffSet](https://stackoverflow.com/a/28144651/16906724) - The answer helped me track the scroll event.

- [Git + GitHub](https://www.youtube.com/watch?v=RGOj5yH7evk) - the basic git commands (Youtube).
- [The Markdown Guide](https://www.markdownguide.org/) - for more help with writing markdown (Article).

## Author

- Github - [DannyLenk](https://github.com/DannyLenk)
- Frontend Mentor - [@DannyLenk](https://www.frontendmentor.io/profile/DannyLenk)
- Facebook - [Valerii Danylenko](https://www.facebook.com/valerii.danylenko)
- LinkedIn - [Valerii Danylenko](https://www.linkedin.com/in/valerii-danylenko-74379212b)
- insta - [valeriidanylenko](https://www.instagram.com/valeriidanylenko/?hl=ru)

## Acknowledgments

Thank you, Kevin Powell. Hats off to you and your clear English.