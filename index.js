// //https://alvarotrigo.com/blog/css-animations-scroll/

function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  var opacity = document.querySelectorAll(".opacity")

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    // var elementVisible = 150; juster dette tallet for når det skal reveales
    var elementVisible = -50;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
  for (var i = 0; i < opacity.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = opacity[i].getBoundingClientRect().top;
    // var elementVisible = 150; juster dette tallet for når det skal reveales
    var elementVisible = -50;
    if (elementTop < windowHeight - elementVisible) {
      opacity[i].classList.add("visible");
    } else {
      opacity[i].classList.remove("visible");
    }
  }
}

window.addEventListener("scroll", reveal);

// To check the scroll position on page load
reveal();

// keep track of previous scroll position
let prevScrollPos = window.pageYOffset;

console.log(prevScrollPos);

window.addEventListener("scroll", function () {
  // current scroll position
  const currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    // user has scrolled up
    // document.querySelector(".nav").classList.add("show");
    document.querySelector("nav").classList.remove("hide");
    document.querySelector(".banner-desktop").classList.remove("hide");
    document.getElementById("checkbox").checked = false;
    document.querySelector("nav").classList.add("background-color");
  }
  if (currentScrollPos > 60 && prevScrollPos < currentScrollPos) {
    // user has scrolled down
    // document.querySelector(".nav").classList.remove("show");
    document.getElementById("checkbox").checked = false;
    document.querySelector("nav").classList.add("hide");
  }

  if (currentScrollPos < 60 || prevScrollPos < currentScrollPos) {
    document.querySelector("nav").classList.remove("background-color"); 
  }

  if (prevScrollPos < currentScrollPos) {
    // user has scrolled down
    // document.querySelector(".nav").classList.remove("show");
    document.querySelector(".banner-desktop").classList.add("hide");
  }
  // update previous scroll position
  prevScrollPos = currentScrollPos;
});


// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  $('html, body').animate({scrollTop:0}, '300');
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

mybutton.addEventListener("click", topFunction)