// Toggle display of search, cart, login, and navbar
let searchForm = document.querySelector('.search-form');
let shoppingCart = document.querySelector('.shopping-cart');
let loginForm = document.querySelector('.login-form');
let navbar = document.querySelector('.navbar');
let products = document.querySelectorAll(".product-info");
let searchBox = document.querySelector("#search-box");



// Convert NodeList to an array and extract text content of the first child
// products = Array.from(products).map(e => e.children[0].textContent);

document.addEventListener("DOMContentLoaded", () => {
  const products = document.querySelectorAll(".product-info");
  const searchBox = document.querySelector("#search-box");

  searchBox.addEventListener("input", (e) => {
    e.preventDefault()
    const searchTerm = searchBox.value.toLowerCase().trim();

    products.forEach((product) => {
      const productName = product.querySelector("h3").textContent.toLowerCase();
      if (productName.includes(searchTerm)) {
        product.parentElement.style.display = "block"; // Show matching product card
      } else {
        product.parentElement.style.display = "none"; // Hide non-matching product card
      }
    });
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const cartContainer = document.querySelector(".shopping-cart");
  const cartItemsContainer = document.createElement("div");
  cartItemsContainer.classList.add("cart-items");
  cartContainer.insertBefore(cartItemsContainer, cartContainer.querySelector(".total"));
  
  const totalElement = document.querySelector(".total");
  const checkoutButton = document.querySelector(".checkout-btn");
  const message = document.createElement("div");
  message.style.fontSize = "20px";
  message.style.fontWeight = "bold";
  message.style.color = "green";
  message.style.marginTop = "10px";
  message.style.display = "none";
  cartContainer.appendChild(message);
  
  let cart = [];

  function updateCart() {
      cartItemsContainer.innerHTML = "";
      let totalPrice = 0;
      
      cart.forEach((item, index) => {
          const box = document.createElement("div");
          box.classList.add("box");
          
          box.innerHTML = `
              <i class="fas fa-trash" data-index="${index}"></i>
              <img src="${item.image}" alt="${item.name}" />
              <div class="content">
                  <h3>${item.name}</h3>
                  <span class="price">$${item.price}/-</span>
                  <span class="quantity">Qty: ${item.quantity}</span>
              </div>
          `;
          
          totalPrice += item.price * item.quantity;
          cartItemsContainer.appendChild(box);
      });
      
      totalElement.textContent = `Total: $${totalPrice.toFixed(2)}/-`;
  }

  document.querySelectorAll(".product-card .btn").forEach(button => {
      button.addEventListener("click", function (event) {
          event.preventDefault();
          const productCard = this.closest(".product-card");
          const name = productCard.querySelector("h3").textContent;
          const price = parseFloat(productCard.querySelector(".price").textContent.split("-")[0].trim().replace("$", ""));
          const image = productCard.querySelector("img").src;
          
          const existingItem = cart.find(item => item.name === name);
          
          if (existingItem) {
              existingItem.quantity += 1;
          } else {
              cart.push({ name, price, image, quantity: 1 });
          }
          updateCart();
      });
  });

  cartContainer.addEventListener("click", function (event) {
      if (event.target.classList.contains("fa-trash")) {
          const index = event.target.dataset.index;
          cart.splice(index, 1);
          updateCart();
      }
  });

  checkoutButton.addEventListener("click", function (event) {
      event.preventDefault();
      if (cart.length === 0) {
          alert("Please add something to your cart before checking out.");
      } else {
          message.textContent = "Thank you!";
          message.style.display = "block";
          cart = [];
          updateCart();
          setTimeout(() => {
              message.style.display = "none";
          }, 3000);
      }
  });
});


  



// Add event listeners to "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
addToCartButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    const productCard = e.target.closest('.product-card');
    const productName = productCard.querySelector('h3').textContent;
    const productPrice = parseFloat(productCard.querySelector('.price').textContent.replace('$', ''));
    const product = { name: productName, price: productPrice };
    addToCart(product);
  });
});



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
