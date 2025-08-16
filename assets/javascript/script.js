
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
      <h6><strong>Verdict -</strong> <span style="font-size: 16px; font-weight: 500;">False</span></h6>
      <h6><strong>Source -</strong> <span style="font-size: 16px; font-weight: 500;"><a href="#">Example News</a></span></h6>
      <h6><strong>Checked on -</strong> <span style="font-size: 16px; font-weight: 500;">August 15, 2025</span></h6>
    `;
    article.appendChild(factCard);
    }
  }
});

// Example fetch request (replace YOUR_API_KEY with your actual key)
fetch('https://factchecktools.googleapis.com/v1alpha1/claims:search?query=climate&key=YOUR_API_KEY')
  .then(response => response.json())
  .then(data => console.log(data.claims));

