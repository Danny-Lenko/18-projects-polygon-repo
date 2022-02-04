// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.

window.onload = () => {
   document.querySelector('.preloader').classList.add('hide-preloader');
   document.querySelector('.switch-btn').addEventListener('click', (e) => {
      let video = document.querySelector('.video-container');
      e.currentTarget.classList.toggle('slide');
      video = (e.currentTarget.classList.contains('slide')) ? video.pause() : video.play();
   })
}
