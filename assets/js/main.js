/*=============== SHOW MENU ===============*/
const showMenu = (navId, toggleId) => {
  const nav = document.getElementById(navId),
    toggle = document.getElementById(toggleId);
  toggle.addEventListener("click", () => {
    nav.classList.toggle("show-menu");
  });
};

showMenu("nav-menu", "nav-toggle");

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== ADD SHADOW HEADER ===============*/
const shadowHeader = () => {
  const header = document.getElementById("header");
  // Add the .scroll-header class if the bottom scroll of the viewport is greater than 50
  this.scrollY >= 50
    ? header.classList.add("shadow-header")
    : header.classList.remove("shadow-header");
};
window.addEventListener("scroll", shadowHeader);

/*=============== SWIPER REVIEWS ===============*/
const swiperReviews = new Swiper(".reviews__swiper", {
  loop: true,
  spaceBetween: 16,
  grabCursor: true,
  speed: 600,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // autoplay: {
  //   delay: 3000,
  //   disableOnInteraction: false,
  // },
});

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
   // Add the .scroll-header class if the bottom scroll of the viewport is greater than 350
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						     : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

// Link the ID of each section (section id="home") to each link (a href="#home") 
// and activate the link with the class .active-link
const scrollActive = () => {
   // We get the position by scrolling down
   const scrollY = window.scrollY

   sections.forEach(section => {
      const id = section.id, // id of each section
            top = section.offsetTop - 50, // Distance from the top edge
            height = section.offsetHeight, // Element height
            link = document.querySelector('.nav__menu a[href*=' + id + ']') // id nav link

      if(!link) return

      link.classList.toggle('active-link', scrollY > top && scrollY <= top + height)
   })
}
window.addEventListener('scroll', scrollActive)
/*=============== DARK LIGHT THEME ===============*/

/*=============== SCROLL REVEAL ANIMATION ===============*/
