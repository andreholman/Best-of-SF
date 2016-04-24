var myVar;
function load() {
    var loadTime = 455;
    myVar = setTimeout(showPage, loadTime);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("logo").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}

var slideIndex = 1;
showSlides(slideIndex);

function slides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length} ;
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].classList.add("active");
}