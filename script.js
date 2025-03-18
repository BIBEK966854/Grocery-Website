// Toggle display of search, cart, login, and navbar
let searchForm = document.querySelector('.search-form');
let shoppingCart = document.querySelector('.shopping-cart');
let loginForm = document.querySelector('.login-form');
let navbar = document.querySelector('.navbar');

document.querySelector('#search-btn').addEventListener('click', () => {
  searchForm.classList.toggle('active');
  shoppingCart.classList.remove('active');
  loginForm.classList.remove('active');
  navbar.classList.remove('active');
});

document.querySelector('#cart-btn').addEventListener('click', () => {
  shoppingCart.classList.toggle('active');
  searchForm.classList.remove('active');
  loginForm.classList.remove('active');
  navbar.classList.remove('active');
});

document.querySelector('#login-btn').addEventListener('click', () => {
  loginForm.classList.toggle('active');
  searchForm.classList.remove('active');
  shoppingCart.classList.remove('active');
  navbar.classList.remove('active');
});

document.querySelector('#menu-btn').addEventListener('click', () => {
  navbar.classList.toggle('active');
  searchForm.classList.remove('active');
  shoppingCart.classList.remove('active');
  loginForm.classList.remove('active');
});

window.addEventListener('scroll', () => {
  searchForm.classList.remove('active');
  shoppingCart.classList.remove('active');
  loginForm.classList.remove('active');
  navbar.classList.remove('active');
});

// Initialize Swiper for Products Slider
var productSwiper = new Swiper(".product-slider", {
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".product-slider .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".product-slider .swiper-button-next",
    prevEl: ".product-slider .swiper-button-prev",
  },
  breakpoints: {
    640: { slidesPerView: 2 },
    768: { slidesPerView: 3 },
    1024: { slidesPerView: 4 },
  },
});

// Initialize Swiper for Categories Slider
var categorySwiper = new Swiper(".category-slider", {
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".category-slider .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".category-slider .swiper-button-next",
    prevEl: ".category-slider .swiper-button-prev",
  },
  breakpoints: {
    640: { slidesPerView: 2 },
    768: { slidesPerView: 3 },
    1024: { slidesPerView: 4 },
  },
});

// Initialize Swiper for Review Slider
var reviewSwiper = new Swiper(".review-slider", {
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".review-slider .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".review-slider .swiper-button-next",
    prevEl: ".review-slider .swiper-button-prev",
  },
  breakpoints: {
    640: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  },
});

// Initialize Swiper for Blogs Slider
var blogsSwiper = new Swiper(".blogs-slider", {
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".blogs-slider .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".blogs-slider .swiper-button-next",
    prevEl: ".blogs-slider .swiper-button-prev",
  },
  breakpoints: {
    640: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  },
});

// Feature modal functionality for "Read More" buttons
let readMoreButtons = document.querySelectorAll('.feature-readmore');
let featureModal = document.getElementById('feature-modal');
let modalClose = document.querySelector('.modal-close');

readMoreButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    featureModal.style.display = 'block';
  });
});

modalClose.addEventListener('click', () => {
  featureModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === featureModal) {
    featureModal.style.display = 'none';
  }
});

// Change the "Login Now" button to green briefly when clicked
document.querySelector('.login-form input[type="submit"]').addEventListener('click', function(e) {
  e.preventDefault(); // Prevent form submission for demonstration
  this.classList.add('active-btn');
  setTimeout(() => {
    this.classList.remove('active-btn');
  }, 200);
});
