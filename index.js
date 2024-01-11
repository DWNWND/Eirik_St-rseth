// //https://alvarotrigo.com/blog/css-animations-scroll/

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

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
  }
  if (currentScrollPos > 60 && prevScrollPos < currentScrollPos) {
    // user has scrolled down
    // document.querySelector(".nav").classList.remove("show");
    document.getElementById("checkbox").checked = false;
    document.querySelector("nav").classList.add("hide");
  }

  if (prevScrollPos < currentScrollPos) {
    // user has scrolled down
    // document.querySelector(".nav").classList.remove("show");
    document.querySelector(".banner-desktop").classList.add("hide");
  }
  // update previous scroll position
  prevScrollPos = currentScrollPos;
});
