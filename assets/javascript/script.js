
// Example: Dynamically add a fact card to the page
document.addEventListener('DOMContentLoaded', function() {
  const mainContainer = document.querySelector('main .container');
  if (mainContainer) {
    const factCard = document.createElement('article');
    factCard.className = 'fact-card';
    factCard.innerHTML = `
      <h2>Claim: "Example claim"</h2>
      <p><strong>Verdict:</strong> False</p>
      <p><strong>Source:</strong> <a href="#">Example News</a></p>
      <p><strong>Checked on:</strong> August 15, 2025</p>
    `;
    mainContainer.appendChild(factCard);
  }
});

// Example fetch request (replace YOUR_API_KEY with your actual key)
fetch('https://factchecktools.googleapis.com/v1alpha1/claims:search?query=climate&key=YOUR_API_KEY')
  .then(response => response.json())
  .then(data => console.log(data.claims));

// Slideshow functionality
let slideIndex = 0;
document.addEventListener('DOMContentLoaded', function() {
  showSlides(slideIndex);

  // Attach event listeners if needed (for dynamic cases)
  window.changeSlide = function(n) {
    showSlides(slideIndex += n);
  }
  window.currentSlideSet = function(n) {
    showSlides(slideIndex = n - 1);
  }
});

function showSlides(n) {
  const slides = document.getElementsByClassName("slide");
  const dots = document.getElementsByClassName("dot");
  if (n >= slides.length) slideIndex = 0;
  if (n < 0) slideIndex = slides.length - 1;
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    slides[i].classList.remove("active");
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }
  slides[slideIndex].style.display = "block";
  slides[slideIndex].classList.add("active");
  dots[slideIndex].classList.add("active");
}

