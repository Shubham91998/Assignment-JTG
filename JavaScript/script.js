
// Navbar color effect
const items = document.querySelectorAll(".nav-links li");

    items.forEach(function (item) {

      item.addEventListener("click", function () {

        items.forEach(function (nav) {
          nav.classList.remove("active");
        });

        this.classList.add("active");

      });

    });


    // feedback slider 
    const track = document.querySelector(".slider-track");

    const dots = document.querySelectorAll(".dot");

    let index = 0;

    function moveSlider() {

      const cardWidth = document.querySelector(".recommend-card").offsetWidth + 30;

      track.style.transform = `translateX(-${index * cardWidth}px)`;

      dots.forEach(dot => {
        dot.classList.remove("active-dot");
      });

      dots[index].classList.add("active-dot");

    }

    dots.forEach((dot, i) => {

      dot.addEventListener("click", () => {

        index = i;

        moveSlider();

      });

    });


// for toggle menu
document.addEventListener("DOMContentLoaded", () => {

  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

});