


	const navToggle = document.querySelector(".nav-toggle");
	const nav = document.querySelector(".nav");

	navToggle.addEventListener("click", () => {
	  nav.classList.toggle("nav--visible");
	});




document.addEventListener("DOMContentLoaded", function() {
  var heroImg = document.querySelector('.hero-img');
  
  window.addEventListener('scroll', function() {
    var scrollPos = window.scrollY;
    
    // Parallax effect
    heroImg.style.transform = 'translateY(' + scrollPos * 0.4 + 'px)';
    
    // Darken background color of hero-img only
    var darkenAmount = Math.pow(scrollPos / (heroImg.clientHeight / 2), 2); // Adjust the exponent to control the speed of darkening
    
    var darkColor = 'rgba(0, 0, 0, ' + Math.min(darkenAmount, 3) + ')'; // Adjust the 0.8 to control the maximum darkness
    
    heroImg.style.backgroundColor = darkColor;
  });
});





//slider

