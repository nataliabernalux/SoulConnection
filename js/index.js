

//nav toggle
	const navToggle = document.querySelector(".nav-toggle");
	const nav = document.querySelector(".nav");

	navToggle.addEventListener("click", () => {
	  nav.classList.toggle("nav--visible");
	});


//hero parallax scrolling effect

document.addEventListener("DOMContentLoaded", function() {
  var heroImg = document.querySelector('.hero-img');
  var overlay = document.querySelector('.overlay');
  
  // Function to update parallax and darkening effects
  function updateEffects() {
    var scrollPos = window.scrollY;
    
    // Parallax effect
    heroImg.style.transform = 'translateY(' + scrollPos * 0.4 + 'px)';
    
    // Darken overlay color
    var darkenAmount = Math.pow(scrollPos / (heroImg.clientHeight / 2), 2);
    var darkColor = 'rgba(0, 0, 0, ' + Math.min(darkenAmount, 0.4) + ')';
    overlay.style.backgroundColor = darkColor;
  }
  
  // Initialize on page load
  updateEffects();
  
  // Update on scroll
  window.addEventListener('scroll', updateEffects);
});



// h1 animation, main title

document.addEventListener("DOMContentLoaded", () => {
  const heroTitle = document.querySelector(".hero__text h1");

  const observer = new IntersectionObserver(
      ([entry]) => {
          if (entry.isIntersecting) {
              heroTitle.style.animation = "typing 1.5s steps(40, end) forwards";
          }
      },
      { threshold: 0.5 }
  );

  observer.observe(document.querySelector(".hero"));
});

//card scroll animation

// Function to check if an element is in the viewport
function isElementInView(el) {
  const rect = el.getBoundingClientRect();
  return rect.top >= 0 && rect.bottom <= window.innerHeight;
}

// Add the 'visible' class to the card elements when they come into view
function animateOnScroll() {
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    if (isElementInView(card)) {
      card.classList.add('visible'); // Trigger the animation when card is in view
    }
  });
}

// Listen for scroll events
window.addEventListener('scroll', animateOnScroll);

// Initialize animation on page load (in case some cards are already in view)
document.addEventListener('DOMContentLoaded', animateOnScroll);






//testimonials swiper

const swiper = new Swiper('.js-testimonials-slider', {
  grabCursor: true,
  spaceBetween: 30, // Adjust this value if needed
  slidesPerView: 1, // Default number of slides
  loop: true, // Infinite scrolling
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true, // Pauses autoplay on hover
  },
  pagination: {
    el: '.js-testimonials-pagination',
    clickable: true,
  },
  breakpoints: {
    767: {
      slidesPerView: 2, // For medium screens
    },
    1024: {
      slidesPerView: 2, // Ensure full 2 slides
      spaceBetween: 40, // Reduce space to fit better
    },
  },
});

