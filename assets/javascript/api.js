// Example fetch request (replace YOUR_API_KEY with your actual key)

fetch('https://gnews.io/api/v4/search?q=politics&token=55304aed27cb98d5cbe761bd9f45da26')
  .then(response => response.json())
  .then(data => {
    const article = data.articles && data.articles[0];
    if (article) {
      document.getElementById('news-title').textContent = article.source.name || "Trendy News";
      document.getElementById('news-subtitle').textContent = article.title;
      document.getElementById('news-main').value = article.description || 'No main text available';
    }
  })
  .catch(error => console.error('Error:', error));

    

  //API KEY FOR LATER

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
    if (!output) {
      console.warn("Weather output element not found.");
      return;
    }

    if (!navigator.geolocation) {
      output.textContent = 'Geolocation is not supported by your browser.';
      return;
    }

    output.textContent = 'Fetching weather...';

    const success = (position) => {
      const { latitude: lat, longitude: lon } = position.coords;
      const currentUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${WEATHER_API_KEY}`;
      const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${WEATHER_API_KEY}`;

      Promise.all([fetch(currentUrl), fetch(forecastUrl)])
        .then(responses => Promise.all(responses.map(r => {
          if (!r.ok) throw new Error(`Weather API request failed: ${r.statusText}`);
          return r.json();
        })))
        .then(([currentData, forecastData]) => {
          renderWeather(currentData, forecastData, output);
        })
        .catch(err => {
          console.error("Weather fetch failed:", err);
          output.textContent = 'Could not fetch weather data.';
        });
    };

    const error = (err) => {
      console.error(`Geolocation error (${err.code}): ${err.message}`);
      output.textContent = 'Unable to retrieve your location.';
    };

    navigator.geolocation.getCurrentPosition(success, error);
  }

  function renderWeather(currentData, forecastData, container) {
    const location = currentData.name;
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    const getDayData = (offset) => {
        const targetDate = new Date();
        targetDate.setDate(targetDate.getDate() + offset);
        const targetDateString = targetDate.toISOString().split('T')[0];

        // For forecast, find the item closest to noon
        const dayForecast = forecastData.list.find(item => 
            item.dt_txt.startsWith(targetDateString) && new Date(item.dt_txt).getHours() >= 12
        ) || forecastData.list.find(item => item.dt_txt.startsWith(targetDateString)); // fallback to first available

        if (offset === 0) { // Today's data from current weather
            return {
                day: 'Today',
                temp: Math.round(currentData.main.temp),
                icon: currentData.weather[0].icon,
                feelsLike: Math.round(currentData.main.feels_like),
                windSpeed: Math.round(currentData.wind?.speed || 0),
                windDirection: currentData.wind?.deg || 0,
            };
        }
        
        if (dayForecast) {
            return {
                day: dayNames[new Date(dayForecast.dt_txt).getDay()],
                temp: Math.round(dayForecast.main.temp),
                icon: dayForecast.weather[0].icon,
                feelsLike: Math.round(dayForecast.main.feels_like),
                windSpeed: Math.round(dayForecast.wind?.speed || 0),
                windDirection: dayForecast.wind?.deg || 0,
            };
        }
        return null;
    };

    const todayData = getDayData(0);
    const tomorrowData = getDayData(1);
    const dayAfterData = getDayData(2);

    const createRow = (data) => {
        if (!data) return '';
        return `
            <tr>
                <td style="padding: 12px 20px; font-weight: 600;">${data.day}</td>
                <td style="padding: 12px 20px; text-align: center;">
                    <img src="https://openweathermap.org/img/wn/${data.icon}.png" alt="${data.day} weather" style="width: 50px; height: 50px;">
                </td>
                <td style="padding: 12px 20px; font-size: 18px; font-weight: bold;">${data.temp}°C</td>
                <td class="wind-column" style="padding: 12px 20px; text-align: center;">
                    <i class="fas fa-location-arrow" style="transform: rotate(${data.windDirection}deg); color: #000000; margin-right: 5px;"></i>
                    ${data.windSpeed} m/s
                </td>
                <td class="feels-like-column" style="padding: 12px 20px; font-size: 16px;">Feels ${data.feelsLike}°C</td>
            </tr>
        `;
    };

    container.innerHTML = `
        <div style="text-align: center;">
            <div style="margin-bottom: 15px;">
                <i class="fas fa-map-marker-alt" style="color: #dc3545; margin-right: 8px; font-size: 20px;"></i>
                <span style="font-size: 28px; font-weight: 600;">${location}</span>
            </div>
            <table class="weather-table" style="margin: 0 auto; border-collapse: collapse; border-radius: 8px; overflow: hidden;">
                <tbody>
                    ${createRow(todayData)}
                    ${createRow(tomorrowData)}
                    ${createRow(dayAfterData)}
                </tbody>
            </table>
        </div>
    `;
  }
  // --- Initializations ---
  const weatherButton = document.getElementById('get-weather');
  if (weatherButton) {
    weatherButton.addEventListener('click', fetchAndDisplayWeather);
  }

  fetchGNews();
  fetchTrendingFalseClaims();


  // --- Val: Trending False Claims ---
  function renderTrendingFalseCard(claims) {
    const container = document.getElementById("trending-false-card");
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
    fetch(`https://factchecktools.googleapis.com/v1alpha1/claims:search?query=trending&key=${FACTCHECK_API_KEY}`)
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

