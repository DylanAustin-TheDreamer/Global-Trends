
// Merge all DOMContentLoaded logic into one event listener
document.addEventListener('DOMContentLoaded', function() {
  // Fact card logic
  const mainContainer = document.querySelector('.fact');
  let containers = Array.from(document.querySelectorAll('.fact'));
  if (mainContainer) {
    for(let article of containers) {
      const factCard = document.createElement('article');
      factCard.className = 'fact-card';
      factCard.innerHTML = `
      <h2>Claim: <span style="font-size: 20px; font-weight: 500;">(Since last checked)</span></h2>
      <h6 id="verdict"><strong>Verdict -</strong> <span style="font-size: 16px; font-weight: 500;">False</span></h6>
      <h6 id="source"><strong>Source -</strong> <span style="font-size: 16px; font-weight: 500;"><a href="#">Example News</a></span></h6>
      <h6 id="checked-on"><strong>Checked on -</strong> <span style="font-size: 16px; font-weight: 500;">August 15, 2025</span></h6>
    `;
      article.appendChild(factCard);
    }
  }

  // Navbar burger toggle
  const navbarToggler = document.querySelector('.navbar-toggler');
  let dropdownToggle = document.querySelector('#dropdown-toggle');
  if (navbarToggler && dropdownToggle) {
    navbarToggler.addEventListener('click', () => {
      dropdownToggle.style.display = dropdownToggle.style.display === 'block' ? 'none' : 'block';
    });
  }

  // Slideshow logic
  let currentSlide = 0;
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
      if (dots[i]) dots[i].classList.toggle('active', i === index);
    });
    currentSlide = index;
  }

  window.changeSlide = function(n) {
    let newIndex = currentSlide + n;
    if (newIndex < 0) newIndex = slides.length - 1;
    if (newIndex >= slides.length) newIndex = 0;
    showSlide(newIndex);
  };

  window.currentSlideSet = function(n) {
    showSlide(n - 1);
  };

  // Initialize
  showSlide(0);

  // Automatic slideshow with delay (7 seconds = 7000 milliseconds)
  const SLIDE_DELAY = 7000; // milliseconds
  if (slides.length > 1) {
    setInterval(() => {
      let nextIndex = (currentSlide + 1) % slides.length;
      showSlide(nextIndex);
    }, SLIDE_DELAY);
  }
});


// here is for keyboard navigation - for accessbility

document.addEventListener('keydown', function(e) {
  // Only trigger if not typing in an input, textarea, or contenteditable
  if (
    document.activeElement.tagName === 'INPUT' ||
    document.activeElement.tagName === 'TEXTAREA' ||
    document.activeElement.isContentEditable
  ) {
    return;
  }
  // Press "A" to go to articles
  if (e.key.toLowerCase() === 'a') {
    const articlesSection = document.getElementById('articles');
    if (articlesSection) {
      articlesSection.scrollIntoView({ behavior: 'smooth' });
      articlesSection.focus();
    }
  }
  // Press "W" to go to weather
  if (e.key.toLowerCase() === 'w') {
    const weatherSection = document.getElementById('weather');
    if (weatherSection) {
      weatherSection.scrollIntoView({ behavior: 'smooth' });
      weatherSection.focus();
    }
  }
});