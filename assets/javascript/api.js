// Example fetch request (replace YOUR_API_KEY with your actual key)

fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=aa741301d76d449caf7c3db1fc865a2b')
  .then(response => response.json())
  .then(data => {
    // Example: display the first article
    const article = data.articles[2];
    document.getElementById('news-title').textContent = article.source.name;
    document.getElementById('news-subtitle').textContent = article.title;
    
    const mainText = article.content || article.description || 'No main text available';
    document.getElementById('news-main').value = mainText;
  })
  .catch(error => console.error('Error:', error));

    

  //API KEY FOR LATER

  //API_KEY=aa741301d76d449caf7c3db1fc865a2b
  //PORT=3000

  // Replace with your actual API endpoint
