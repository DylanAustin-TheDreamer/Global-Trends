
// Example: Dynamically add a fact card to the page
document.addEventListener('DOMContentLoaded', function() {

  //here Dylan has changed class to .fact - so we have more control over where a fact will be placed
  const mainContainer = document.querySelector('.fact');

  //Dylan added an array
  let containers = Array.from(document.querySelectorAll('.fact'));
  if (mainContainer) {

    //dylan added a for loop to detect main elements and inject append fact card to them
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
});


  // here is for toggling the nav bar burger
  const navbarToggler = document.querySelector('.navbar-toggler');
  let dropdownToggle = document.querySelector('#dropdown-toggle');

  navbarToggler.addEventListener('click', () => {
    //Here we are using style.display - either block or none. The id #dropdown-toggle has 
    //display: none; in the CSS, so it will show when clicked.
    //the code is handling display none when clicked again.
    dropdownToggle.style.display = dropdownToggle.style.display === 'block' ? 'none' : 'block';
  });


  //

  document.addEventListener('DOMContentLoaded', function() {
  let currentSlide = 0;
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
      dots[i].classList.toggle('active', i === index);
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
});