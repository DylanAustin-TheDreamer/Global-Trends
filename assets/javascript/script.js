
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

