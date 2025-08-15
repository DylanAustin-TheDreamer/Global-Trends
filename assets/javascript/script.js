<article class="fact-card">
  <h2>Claim: "Example claim"</h2>
  <p><strong>Verdict:</strong> False</p>
  <p><strong>Source:</strong> <a href="#">Example News</a></p>
  <p><strong>Checked on:</strong> August 15, 2025</p>
</article>


fetch('https://factchecktools.googleapis.com/v1alpha1/claims:search?query=climate&key=YOUR_API_KEY')
  .then(response => response.json())
  .then(data => console.log(data.claims));

