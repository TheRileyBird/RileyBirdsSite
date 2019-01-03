//mobile nav toggle
let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');
let navLinks = document.getElementsByClassName('nav-links');

navBarToggle.addEventListener('click', function () {
    mainNav.classList.toggle('active');
});

// navBarToggle.addEventListener('click', function () {
//     mainNav.style.display = "block";
// });


mainNav.addEventListener('click', function () {
    mainNav.classList.toggle('active');
});


//slideshow
//
// var slideIndex = 0;
// carousel();
//
// function carousel() {
//   var i;
//   var x = document.getElementsByClassName("mySlides");
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > x.length) {slideIndex = 1}
//   x[slideIndex-1].style.display = "block";
//   setTimeout(carousel, 3500); // Change image every 2 seconds
// }
