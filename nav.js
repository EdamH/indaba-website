const navbarMenu = document.getElementById("menu");
const burgerMenu = document.getElementById("burger");
const headerMenu = document.getElementById("header");

// Open Close Navbar Menu on Click Burger
if (burgerMenu && navbarMenu) {
   burgerMenu.addEventListener("click", () => {
      burgerMenu.classList.toggle("is-active");
      navbarMenu.classList.toggle("is-active");
   });
}

// Close Navbar Menu on Click Menu Links
document.querySelectorAll(".menu-link").forEach((link) => {
   link.addEventListener("click", () => {
      burgerMenu.classList.remove("is-active");
      navbarMenu.classList.remove("is-active");
   });
});

// Change Header Background on Scrolling
// window.addEventListener("scroll", () => {
//    if (this.scrollY >= 85) {
//       headerMenu.classList.add("on-scroll");
//    } else {
//       headerMenu.classList.remove("on-scroll");
//    }
// });





if (!navbarMenu.classList.contains('is-active')) {
   var header = document.querySelector('.header');

   ScrollTrigger.create({
      start: 'top -50',
      end: 99999,
      markers: false,
      toggleClass: { className: 'jwpnavbar--scrolled', targets: '.header' }
   });

   ScrollTrigger.create({
      start: 'top -300',
      end: 99999,
      toggleClass: { className: 'jwpnavbar--up', targets: '.header' },
      onUpdate: ({ direction }) => {
         if (direction == -1) {
            header.classList.remove('jwpnavbar--up');
         } else {
            header.classList.add('jwpnavbar--up');
         }
      }
   });

   gsap.to('.header', {
      color: '#fff',
      scrollTrigger: {
         trigger: '.header',
         start: 'top -150',
         scrub: true
      }
   });
}