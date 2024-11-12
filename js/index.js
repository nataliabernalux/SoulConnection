

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