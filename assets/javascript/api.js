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



  // Val: OpenWeather 
  // API key ec7c301c0742903143627a2e2a68544a

  document.getElementById('get-weather').addEventListener('click', () => {
  const output = document.getElementById('weather-output');
  output.textContent = 'Fetching location...';

  if (!navigator.geolocation) {
    output.textContent = 'Geolocation is not supported by your browser.';
    return;
  }

  navigator.geolocation.getCurrentPosition(success, error);

  function success(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const apiKey = 'ec7c301c0742903143627a2e2a68544a'; 
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        const temp = data.main.temp;
        const description = data.weather[0].description;
        output.textContent = `It’s ${temp}°C with ${description}.`;
      })
      .catch(() => {
        output.textContent = 'Unable to retrieve weather data.';
      });
  }

  function error() {
    output.textContent = 'Unable to retrieve your location.';
  }
});

