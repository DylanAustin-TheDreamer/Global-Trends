# Global-Trends

### Welcome to Global Trends — your beginner-friendly source for clear news and verified facts.

Here is the README file for the Global-trends Hackathon project by Jack Marsh, Daniel Carson, Dylan Austin and Valantyna.

#### We help you stay informed with short, easy-to-read updates and a simple tool to check whether headlines and viral claims are true. Whether you're new to online news, learning English, or just want reliable information, our site is designed to support your curiosity and critical thinking. Accessible on any device, anytime.

### Here are the key benefits of using your Life News & Fact-Checker platform: 

- Trustworthy Information: 
Users get short, clear news updates and fact-checked content, helping them avoid misinformation.
- Beginner-Friendly Design: 
The site uses simple language and layout, making it accessible to non-native speakers and new internet users.
- Critical Thinking Support: 
By checking claims and headlines, users learn to question sources and think more critically.
- Mobile Access: 
The responsive design lets users read and verify information on any device, anytime.
- Community Value: 
It empowers people to make informed decisions and share reliable content with others.

### Technologies we will be using are:

__Various API's we can choose  from__ 

__News__
- ✅ "NewsAPI"	- Fetch headlines from major sources -worldwide.
- ✅"GNews" - Search and filter news articles by topic or region
- ✅"Currents API" - Real-time news with categories and language filter.

__Fact-checking APIs__

- ✅ Google Fact Check Tools - Search claims and fact-checks from verified sources
- ✅PolitiFact RSS - Use RSS feeds to pull rated political claims

- GitHub Pages
- Copilot 

## User Stories
### 🧠 1. User Story: Political Awareness & Truth-Seeking
As a politically aware user, I want to compare multiple sources and see fact-checks with timestamps so that I can judge credibility and spot manipulation.

Tasks:

- Create a fact-check section with claim, verdict, and source link
- Add a timestamp to each fact-check
- Build a layout that shows multiple headlines side-by-side

Features to Implement:

- HTML structure for fact-check cards
- JavaScript to fetch and display data from a fact-check API
- CSS grid or flexbox for side-by-side comparison

### 📱 2. User Story: Mobile-Friendly Access
As a mobile user, I want the site to work well on my phone so that I can read and verify facts wherever I am.

Tasks:

- Use media queries to adjust layout for small screens
- Test buttons and text fields for touch usability
- Ensure images and cards resize properly

Features to Implement:

- Responsive CSS with @media rules
- Mobile-first layout using Flexbox or Grid
- Scalable font sizes and tap-friendly buttons

###🧾 3. User Story: Clear Language & Guidance
As a non-native speaker or beginner, I want simple instructions and clear language so that I can understand how to use the site and trust the content.

Tasks:

- Write a short intro and “How to Use” section
- Use plain English in all headlines and fact-checks
- Add tooltips or icons for extra help

Features to Implement:

- HTML sections for instructions and help
- CSS styling for readability (font size, spacing)
- JavaScript tooltips or collapsible help boxes

### ⚠️ 4. User Story: Misinformation Awareness
As a concerned citizen, I want to know when fake news is trending so that I can avoid sharing harmful content that could mislead others.

Tasks:

- Create a “Trending Claims” alert box
- Highlight claims flagged as false or misleading
- Add a share button for verified content

Features to Implement:

- JavaScript to fetch trending claims from an API
- CSS styling for alert boxes and badges (e.g. “False”, “Verified”)
- HTML buttons with navigator.share() or copy-to-clipboard



## How we check our News API Testing Checklist ✅ 

### 🔧 Functionality

- The API key is valid and securely stored (not exposed in public files).
- The site successfully fetches news articles using the News API.
- At least 5 headlines are displayed on page load.

Each article includes:
- Title
- Source name
-  Published date
-  Link to full article

### 🔍 Search & Filtering
- Users can enter a keyword and see relevant articles.
- Search results update without refreshing the page.
- Results are sorted by relevance or popularity.

### 📱 Responsive Design
- News cards display correctly on mobile, tablet, and desktop.
- Font sizes and images scale properly on smaller screens.
- Buttons and links are easy to tap on mobile.

### ⚠️ Error Handling
- A loading message or spinner appears while fetching articles.
- If the API fails, a clear error message is shown.
- If no results are found, a “No articles found” message appears.

### ♿ Accessibility & Usability
- All links open in a new tab and use target="_blank" with rel="noopener".
- Semantic HTML tags are used (e.g. <article>, <h2>, <a>).
- Each news card has readable contrast and clear layout.


  ## Fact-Check Functionality Testing Checklist:
  
🔧 Core Functionality
- Fact-check cards are visible on the page.
- Each card includes:
   - A clear claim or statement
   - A verdict (e.g. True, False, Misleading)
   - A source link that opens in a new tab
   - A timestamp showing when it was checked
- Multiple fact-check cards are displayed side-by-side or stacked responsively.
  
⚠️ Error Handling & Placeholder Content
- If no fact-check data is available, placeholder content is shown.
- If a source link is broken or missing, a fallback message appears.
- No layout issues occur when data is incomplete.






sfatdh wyj