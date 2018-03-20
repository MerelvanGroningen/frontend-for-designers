var images = document.querySelectorAll('.slide');
var currentSlide = 0;

function nextSlide() {
  // images[currentSlide].style.display = "none";
  images[currentSlide].classList.remove('show');
  currentSlide++;
  if (currentSlide >= images.length) {
    currentSlide = 0;
  }
  // console.log(currentSlide);
  // images[currentSlide].style.display = "block";
  images[currentSlide].classList.add('show');
}

//fuctie uitvoeren voor de eerste slide
nextSlide()

function previousSlide() {
  // images[currentSlide].style.display = "none";
  images[currentSlide].classList.remove('show');
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = images.length - 1;
  }
  // console.log(currentSlide);
  // images[currentSlide].style.display = "block";
  images[currentSlide].classList.add('show');
}

var nextButton = document.querySelector('.arrowRight')
nextButton.addEventListener('click', function(){
  nextSlide();
});

var previousButton = document.querySelector('.arrowLeft')
previousButton.addEventListener('click', function(){
  previousSlide();
});


document.onkeydown = function() {
    switch (window.event.keyCode) {
        case 37:
        previousSlide();
         break;
        case 39:
        nextSlide();
         break;
    }
};
