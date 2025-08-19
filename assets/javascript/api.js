// Example fetch request (replace YOUR_API_KEY with your actual key)
fetch('https://factchecktools.googleapis.com/v1alpha1/claims:search?query=climate&key=YOUR_API_KEY')
  .then(response => response.json())
  .then(data => console.log(data.claims));

  //API KEY FOR LATER

  //API_KEY=aa741301d76d449caf7c3db1fc865a2b
  //PORT=3000