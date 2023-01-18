
let imgtag = document.createElement('img');
let slideshowEl = document.getElementById("Slide_container")
slideshowEl.append(imgtag)

let CurrentImg = 0;
// Use the following data for slideshow
var movieImages = [
  "https://www.themoviedb.org/t/p/w220_and_h330_face/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg",
  "https://images.indianexpress.com/2022/06/major-movie-review-1200.jpg",
  "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/2607/1062607-h-fa693eabb41d",
  "https://lumiere-a.akamaihd.net/v1/images/p_aladdin2019_17638_d53b09e6.jpeg",
  "https://igimages.gumlet.io/hindi/gallery/movies/tubelight/tubelight_poster.jpg?w=160&dpr=2.6"
]

slideshowFun(movieImages) //Calling The function to pass image Array

function slideshowFun(images) {
  imgtag.setAttribute("src", images[CurrentImg])
  if (CurrentImg === images.length - 1) {
    CurrentImg = 0
  } else {
    CurrentImg++
  }

}


window.addEventListener("load", function () {

  // add event-listeners;
  setInterval(slideshowFun, 2000, movieImages)

});