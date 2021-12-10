/*function myFunction() {
    var x = document.getElementById("container");
    if (x.className === "container") {
      x.className += " responsive";
    } else {
      x.className = "container";
    }
}*/
$('.clicker').click(function () {
    $('body').toggleClass('overlay');
  });
  var slideIndex = 1;
  showSlides(slideIndex);
  
  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
  }
  
  //$('.app1').css({'background-size':'0 0, 27em'});//to hide photo1.png
  //$('.app1').css({'background-size':'17em, 0 0'});//to hide photo2.png
  