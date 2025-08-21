// Example fetch request (replace YOUR_API_KEY with your actual key)

//api and url to paste in fetch for newsapi.org -- https://newsapi.org/v2/top-headlines?country=us&apiKey=aa741301d76d449caf7c3db1fc865a2b
fetch('https://gnews.io/api/v4/search?q=politics&token=2fc6e388cd16c58e7ee1d222b9ed381c')
  .then(response => response.json())
  .then(data => {
    const article = data.articles && data.articles[1];
    if (article && article.source && article.title) {
      document.getElementById('news-title').textContent = article.source.name || "Trendy News";
      document.getElementById('news-subtitle').textContent = article.title;
      document.getElementById('news-main').value = article.description || 'No main text available';
    }
    else{
      document.getElementById('news-title').textContent = "No source available at this time.";
      document.getElementById('news-subtitle').textContent = "No title available at this time.";
      document.getElementById('news-main').value = 'No main text available at this time';

      //for fact cards
      document.getElementById('source').innerHTML = "<strong>Source: </strong>" + "No source available at this time.";
      document.getElementById('checked-on').innerHTML = "<strong>Checked on: </strong>" + new Date().toLocaleDateString();
      document.getElementById('verdict').innerHTML = "<strong>Verdict: </strong>Unknown Source";
    }

    //----- This section below is for the fact card API
  let source = document.getElementById('source').innerHTML = "<strong>Source: </strong>" + `<a href="${article.source.url}" target="_blank">${article.source.name}</a>` || "unknown";
  document.getElementById('checked-on').innerHTML = "<strong>Checked on: </strong>" + new Date().toLocaleDateString();

  trueOrFalse();
  //Here is a function to determine the verdict based on whether there is a source for the article
  function trueOrFalse() {

      if (article.source.name == false) {
        document.getElementById('verdict').innerHTML = "<strong>Verdict: </strong>Unknown Source";
      } else {
        document.getElementById('verdict').innerHTML = "<strong>Verdict: </strong>Known Source" + '<img src="https://img.icons8.com/?size=100&id=15427&format=png&color=000000" alt="Verified checkmark icon" style="width: 35px; height: auto; padding-left: 10px;">';
      }

    }

  })
  .catch(error => console.error('Error:', error));

    

  //API KEY FOR LATER
  //Jakes API = 2fc6e388cd16c58e7ee1d222b9ed381c
  //Gnews URL for roll out - https://gnews.io/api/v4/search?q=politics&token=55304aed27cb98d5cbe761bd9f45da26
  //API_KEY=55304aed27cb98d5cbe761bd9f45da26  for Gnews - current one in use
  //API_KEY=aa741301d76d449caf7c3db1fc865a2b  for newsapi.org
  //API_KEY=4d98c12ac047854b3b29580bd299b99f  for mediastack
  //PORT=3000

  // Replace with your actual API endpoint



  // Val: OpenWeather 
  // API key ec7c301c0742903143627a2e2a68544a

  // Function to fetch and display weather
  function fetchAndDisplayWeather() {
    const output = document.getElementById('weather-output');
    
    if (!navigator.geolocation) {
      output.textContent = 'Geolocation not supported';
      return;
    }

    navigator.geolocation.getCurrentPosition(success, error);

    function success(position) {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      const apiKey = 'ec7c301c0742903143627a2e2a68544a'; 
      
      // Fetch current weather for location name
      const currentUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
      // Fetch 5-day forecast (we'll use first 3 days)
      const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

      Promise.all([fetch(currentUrl), fetch(forecastUrl)])
        .then(responses => Promise.all(responses.map(r => r.json())))
        .then(([currentData, forecastData]) => {
          const location = currentData.name;
          
          // Get today's data
          const todayTemp = Math.round(currentData.main.temp);
          const todayIcon = currentData.weather[0].icon;
          const todayFeelsLike = Math.round(currentData.main.feels_like);
          const todayWindSpeed = Math.round(currentData.wind?.speed || 0);
          const todayWindDirection = currentData.wind?.deg || 0;
          
          // Get tomorrow's data (forecast at noon)
          const tomorrowData = forecastData.list.find(item => {
            const date = new Date(item.dt * 1000);
            const tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            return date.getDate() === tomorrow.getDate() && date.getHours() === 12;
          }) || forecastData.list[8]; // fallback to 8th item (24 hours later)
          
          const tomorrowTemp = Math.round(tomorrowData.main.temp);
          const tomorrowIcon = tomorrowData.weather[0].icon;
          const tomorrowFeelsLike = Math.round(tomorrowData.main.feels_like);
          const tomorrowWindSpeed = Math.round(tomorrowData.wind?.speed || 0);
          const tomorrowWindDirection = tomorrowData.wind?.deg || 0;
          
          // Get day after tomorrow's data
          const dayAfterData = forecastData.list.find(item => {
            const date = new Date(item.dt * 1000);
            const dayAfter = new Date();
            dayAfter.setDate(dayAfter.getDate() + 2);
            return date.getDate() === dayAfter.getDate() && date.getHours() === 12;
          }) || forecastData.list[16]; // fallback to 16th item (48 hours later)
          
          const dayAfterTemp = Math.round(dayAfterData.main.temp);
          const dayAfterIcon = dayAfterData.weather[0].icon;
          const dayAfterFeelsLike = Math.round(dayAfterData.main.feels_like);
          const dayAfterWindSpeed = Math.round(dayAfterData.wind?.speed || 0);
          const dayAfterWindDirection = dayAfterData.wind?.deg || 0;
          
          // Get day names
          const today = new Date();
          const tomorrow = new Date(today);
          tomorrow.setDate(today.getDate() + 1);
          const dayAfter = new Date(today);
          dayAfter.setDate(today.getDate() + 2);
          
          const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
          
          // Get weather descriptions for alt text
          const todayDescription = currentData.weather[0].description;
          const tomorrowDescription = tomorrowData.weather[0].description;
          const dayAfterDescription = dayAfterData.weather[0].description;
          
          // Display location above table and 3-day forecast in table
          output.innerHTML = `
            <style>
              @media (max-width: 768px) {
                .feels-like-column {
                  display: none !important;
                }
              }
              @media (max-width: 480px) {
                .wind-column, .feels-like-column {
                  display: none !important;
                }
                .weather-table td {
                  padding: 8px 12px !important;
                  font-size: 14px !important;
                }
                .weather-table img {
                  width: 40px !important;
                  height: 40px !important;
                }
              }
            </style>
            <div style="text-align: center;">
              <div style="margin-bottom: 15px;">
                <i class="fas fa-map-marker-alt" style="color: #dc3545; margin-right: 8px; font-size: 20px;"></i>
                <span style="font-size: 28px; font-weight: 600;">${location}</span>
              </div>
              <table class="weather-table" style="margin: 0 auto; border-collapse: collapse; border-radius: 8px; overflow: hidden;">
                <tr>
                  <td style="padding: 12px 20px; font-weight: 600; border-bottom: 1px solid #dee2e6;">Today</td>
                  <td style="padding: 12px 20px; text-align: center; border-bottom: 1px solid #dee2e6;">
                    <img src="https://openweathermap.org/img/wn/${todayIcon}.png" alt="Today's weather: ${todayDescription}" style="width: 50px; height: 50px;">
                  </td>
                  <td style="padding: 12px 20px; font-size: 18px; font-weight: bold; border-bottom: 1px solid #dee2e6;">${todayTemp}°C</td>
                  <td class="wind-column" style="padding: 12px 20px; text-align: center; border-bottom: 1px solid #dee2e6;">
                    <i class="fas fa-location-arrow" style="transform: rotate(${todayWindDirection}deg); color: #000000; margin-right: 5px;"></i>
                    ${todayWindSpeed} m/s
                  </td>
                  <td class="feels-like-column" style="padding: 12px 20px; font-size: 16px; border-bottom: 1px solid #dee2e6;">Feels ${todayFeelsLike}°C</td>
                </tr>
                <tr>
                  <td style="padding: 12px 20px; font-weight: 600; border-bottom: 1px solid #dee2e6;">${dayNames[tomorrow.getDay()]}</td>
                  <td style="padding: 12px 20px; text-align: center; border-bottom: 1px solid #dee2e6;">
                    <img src="https://openweathermap.org/img/wn/${tomorrowIcon}.png" alt="Tomorrow's weather: ${tomorrowDescription}" style="width: 50px; height: 50px;">
                  </td>
                  <td style="padding: 12px 20px; font-size: 18px; font-weight: bold; border-bottom: 1px solid #dee2e6;">${tomorrowTemp}°C</td>
                  <td class="wind-column" style="padding: 12px 20px; text-align: center; border-bottom: 1px solid #dee2e6;">
                    <i class="fas fa-location-arrow" style="transform: rotate(${tomorrowWindDirection}deg); color: #000000; margin-right: 5px;"></i>
                    ${tomorrowWindSpeed} m/s
                  </td>
                  <td class="feels-like-column" style="padding: 12px 20px; font-size: 16px; border-bottom: 1px solid #dee2e6;">Feels ${tomorrowFeelsLike}°C</td>
                </tr>
                <tr>
                  <td style="padding: 12px 20px; font-weight: 600;">${dayNames[dayAfter.getDay()]}</td>
                  <td style="padding: 12px 20px; text-align: center;">
                    <img src="https://openweathermap.org/img/wn/${dayAfterIcon}.png" alt="Day after tomorrow's weather: ${dayAfterDescription}" style="width: 50px; height: 50px;">
                  </td>
                  <td style="padding: 12px 20px; font-size: 18px; font-weight: bold;">${dayAfterTemp}°C</td>
                  <td class="wind-column" style="padding: 12px 20px; text-align: center;">
                    <i class="fas fa-location-arrow" style="transform: rotate(${dayAfterWindDirection}deg); color: #000000; margin-right: 5px;"></i>
                    ${dayAfterWindSpeed} m/s
                  </td>
                  <td class="feels-like-column" style="padding: 12px 20px; font-size: 16px;">Feels ${dayAfterFeelsLike}°C</td>
                </tr>
              </table>
            </div>
          `;
        })
        .catch(() => {
          output.textContent = 'Weather data unavailable';
        });
    }

    function error() {
      output.textContent = 'Location unavailable';
    }
  }


  // Only fetch weather when button is clicked
  document.getElementById('get-weather').addEventListener('click', fetchAndDisplayWeather);

  fetchTrendingFalseClaims();

  //const FACTCHECK_API_KEY = "AIzaSyBU1AxPTZa_inuo5BjhGI-og9yP2ER6dBU";

  // --- Val: Trending False Claims ---
  function renderTrendingFalseCard(claims) {
    let container = document.querySelector(".trending-false-card");
    if (!container) {
        console.warn("Trending false card container not found.");
        return;
    }
    container.innerHTML = "";

    if (!claims || claims.length === 0) {
      container.innerHTML = "<p>No trending false claims found. Stay curious and cautious.</p>";
      return;
    }

    const latest = claims[0];
    const review = latest.claimReview && latest.claimReview[0];
    if (!review) {
        container.innerHTML = "<p>Claim found, but no review available.</p>";
        return;
    }

    const card = document.createElement("div");
    card.className = "false-fact-card";
    card.innerHTML = `
      <h3>🚨 Trending False Claim</h3>
      <p><strong>Claim:</strong> ${latest.text}</p>
      <p><strong>Verdict:</strong> ${review.text}</p>
      <p><strong>Source:</strong> <a href="${review.url}" target="_blank" rel="noopener noreferrer">${review.publisher.name}</a></p>
      <p><em>Published:</em> ${new Date(review.reviewDate).toLocaleDateString()}</p>
    `;
    container.appendChild(card);
  }

  function fetchTrendingFalseClaims() {
    fetch(`https://factchecktools.googleapis.com/v1alpha1/claims:search?query=trending&key=AIzaSyBU1AxPTZa_inuo5BjhGI-og9yP2ER6dBU`)
      .then(response => {
        if (!response.ok) throw new Error(`Fact Check API error: ${response.statusText}`);
        return response.json();
      })
      .then(data => {
        renderTrendingFalseCard(data.claims || []);
      })
      .catch(err => {
        console.error("Fact Check API fetch error:", err);
        renderTrendingFalseCard([]);
      });
  }

