var currentSlide = 1;

whichSlide(currentSlide);

function changeSlide(n) {
  whichSlide(currentSlide += n);
  console.log(n);
}

function select(n) {
  currentSlide = n;
  document.querySelector('#slideshow').style.display = "block";
  document.querySelector('#amadeus').classList.add("filter");
  whichSlide(currentSlide);
  console.log(currentSlide);

}

function whichSlide(n) {
  var i;
  var m;
  var item = document.querySelectorAll(".item");

  if (n > item.length) {currentSlide = 1}
  if (n < 1) {currentSlide = item.length}
  for (i = 0; i < item.length; i++) {
    item[i].style.display = "none";
  }
  item[currentSlide-1].style.display = "block";

  console.log(currentSlide-1);

}

function closeSlideshow() {
    document.querySelector('#slideshow').style.display = "none";
    document.querySelector('#amadeus').classList.remove("filter");
}

document.onkeydown = function(e) {
  switch (e.keyCode) {
    case 37:
      changeSlide(-1);
      break;
    case 39:
      changeSlide(+1);
      break;
    case 27:
      closeSlideshow();
  }
}
