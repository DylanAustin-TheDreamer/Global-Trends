# Global-Trends

## Welcome to Global Trends

Global Trends is your beginner-friendly source for clear news and verified facts. This project was developed as part of a hackathon initiative to combat misinformation and promote media literacy in the digital age.

We help users stay informed with short, easy-to-read updates and a simple tool to check whether headlines and viral claims are true. Whether you're new to online news, learning English, or just want reliable information, our site is designed to support your curiosity and critical thinking. Accessible on any device, anytime.

**Purpose:** A real-time news and fact-checking platform designed to empower users with verified information and combat misinformation through clear, accessible content display.

**Target Audience:** Politically aware citizens, non-native speakers, mobile users, and misinformation-conscious individuals seeking reliable news verification.

**Mission:** We help users stay informed with short, easy-to-read updates and simple tools to verify headlines and viral claims, supporting critical thinking and reliable information sharing.

---

## Key Benefits

- **Trustworthy Information**: Short, clear news updates and fact-checked content to avoid misinformation.
- **Beginner-Friendly Design**: Simple language and layout for non-native speakers and new internet users.
- **Critical Thinking Support**: Tools to question sources and think critically.
- **Mobile Access**: Responsive design for any device, anytime.
- **Community Value**: Empowers informed decisions and sharing of reliable content.

---

## Technologies

### Frontend
- **HTML5**: Semantic structure for accessibility.
- **CSS Grid/Flexbox**: Responsive layouts for all devices.
- **JavaScript (Vanilla)**: Dynamic content manipulation and interactivity.
- **Mobile-First Design**: Ensures usability across all screen sizes.

### APIs
- **NewsAPI**: Fetches headlines from major sources worldwide.
- **Google Fact Check Tools**: Searches claims and fact-checks from verified sources.

### Images & Media
- **Responsive Image Optimization**: Ensures fast loading and scalability.
- **SVG Icons**: Scalable graphics for modern interfaces.
- **WebP Format Support**: Optimized images for modern browsers.

### Development Tools
- **Git**: Version control with branch-based workflow.
- **GitHub**: Collaborative development and deployment via GitHub Pages.
- **VS Code**: Primary development environment with GitHub Copilot for AI-assisted coding.

### Key Design Decisions
- **Static Site Approach**: Pure HTML/CSS/JS for fast loading and easy deployment.
- **State Management**: Simple DOM manipulation with event-driven card lifecycle management.
- **Modular Design**: Separate components for cards, alerts, and filters, enabling easy maintenance.
- **Accessibility-First**: Semantic HTML and ARIA roles implemented from the initial development phase.

---

## User Stories

### 🧠 Political Awareness & Truth-Seeking
As a politically aware user, I want to compare multiple sources and see fact-checks with timestamps so that I can judge credibility and spot manipulation.

**Tasks**
- Create a fact-check section with claim, verdict, and source link.
- Add a timestamp to each fact-check.
- Build a layout that shows multiple headlines side-by-side.

**Features to Implement**
- HTML structure for fact-check cards.
- JavaScript to fetch and display data from a fact-check API.
- CSS grid or flexbox for side-by-side comparison.

---

### 📱 Mobile-Friendly Access
As a mobile user, I want the site to work well on my phone so that I can read and verify facts wherever I am.

**Tasks**
- Use media queries to adjust layout for small screens.
- Test buttons and text fields for touch usability.
- Ensure images and cards resize properly.

**Features to Implement**
- Responsive CSS with @media rules.
- Mobile-first layout using Flexbox or Grid.
- Scalable font sizes and tap-friendly buttons.

---

### 🧾 Clear Language & Guidance
As a non-native speaker or beginner, I want simple instructions and clear language so that I can understand how to use the site and trust the content.

**Tasks**
- Write a short intro and “How to Use” section.
- Use plain English in all headlines and fact-checks.
- Add tooltips or icons for extra help.

**Features to Implement**
- HTML sections for instructions and help.
- CSS styling for readability (font size, spacing).
- JavaScript tooltips or collapsible help boxes.

---

### ⚠️ Misinformation Awareness
As a concerned citizen, I want to know when fake news is trending so that I can avoid sharing harmful content that could mislead others.

**Tasks**
- Create a “Trending Claims” alert box.
- Highlight claims flagged as false or misleading.
- Add a share button for verified content.

**Features to Implement**
- JavaScript to fetch trending claims from an API.
- CSS styling for alert boxes and badges (e.g., “False”, “Verified”).
- HTML buttons with navigator.share() or copy-to-clipboard.

---

### 🔍 Search & Filtering
As a user, I want to search for specific claims or topics so I can find relevant information quickly.

**Acceptance Criteria**
- Search bar accepts input and returns matching results.
- Results highlight matching keywords.
- Optional autocomplete or recent searches.
- Works on desktop and mobile.

**Tasks**
- Build search bar component.
- Add JS logic to filter or fetch results.
- Highlight matches in result text.
- Implement autocomplete (optional).

---

### 🖼️ Detailed Claim View
As a user, I want to click on a claim and view full details so I can understand the context and verification process.

**Acceptance Criteria**
- Detail page shows full claim, verdict, source, and timestamp.
- Related claims are listed below.
- Share button and permalink are available.
- Navigation back to main feed is clear.

**Tasks**
- Build claim detail page or modal.
- Add related claims section.
- Implement share and permalink logic.
- Add breadcrumb or back button.

---

### 👓 Accessibility & Readability
As a visually sensitive user, I want clear contrast and readable fonts so I can comfortably consume content.

**Acceptance Criteria**
- Font sizes and spacing support readability.
- ARIA labels and semantic tags are present.
- Hamburger menu or simple navigation bar is available.

**Tasks**
- Style fonts and spacing for readability.
- Add ARIA labels and semantic tags.
- Implement navigation bar.

---

## Development Decisions

This section documents key decisions made during the development process:

- **Design Choices**: Rationale behind layout, color schemes, and typography.
- **Feature Prioritization**: Why certain features were implemented first.
- **Technical Challenges**: Issues encountered and how they were resolved.
- **User Feedback**: How user testing influenced design and functionality.

After deciding that our website would deliver trending world news and fact-check this information for trustability, we:

1. Designed wireframes and selected a color palette to enhance accessibility and user experience.
2. Created boilerplate code and conceptual designs using VS Code.
3. Implemented features such as:
   - **Truth-seeking Cards**: Dynamic fact cards with verified claims, verdict badges, source links, and timestamps.
   - **Mobile-first Responsive Layout**: CSS Grid/Flexbox with touch-friendly interface across all devices.
   - **Accessibility-first Design**: Semantic HTML, ARIA roles, keyboard navigation, and WCAG compliance.
   - **Interactive JavaScript Components**: Dynamic content generation and user interface management.
   - **Responsive Image System**: Optimized images that scale across all device sizes.
   - **Modular CSS Architecture**: Organized stylesheets for maintainable design system.

---

## Testing Checklists

### News API Testing Checklist ✅

#### 🔧 Functionality
- The API key is valid and securely stored (not exposed in public files).
- The site successfully fetches news articles using the News API.
- At least 5 headlines are displayed on page load.

Each article includes:
- Title
- Source name
- Published date
- Link to full article

#### 🔍 Search & Filtering
- Users can enter a keyword and see relevant articles.
- Search results update without refreshing the page.
- Results are sorted by relevance or popularity.

#### 📱 Responsive Design
- News cards display correctly on mobile, tablet, and desktop.
- Font sizes and images scale properly on smaller screens.
- Buttons and links are easy to tap on mobile.

#### ⚠️ Error Handling
- A loading message or spinner appears while fetching articles.
- If the API fails, a clear error message is shown.
- If no results are found, a “No articles found” message appears.

#### ♿ Accessibility & Usability
- All links open in a new tab and use target="_blank" with rel="noopener".
- Semantic HTML tags are used (e.g., `<article>`, `<h2>`, `<a>`).
- Each news card has readable contrast and clear layout.

---

### Fact-Check Functionality Testing Checklist

#### 🔧 Core Functionality
- Fact-check cards are visible on the page.
- Each card includes:
  - A clear claim or statement.
  - A verdict (e.g., True, False, Misleading).
  - A source link that opens in a new tab.
  - A timestamp showing when it was checked.
- Multiple fact-check cards are displayed side-by-side or stacked responsively.

#### ⚠️ Error Handling & Placeholder Content
- If no fact-check data is available, placeholder content is shown.
- If a source link is broken or missing, a fallback message appears.
- No layout issues occur when data is incomplete.

---

## Credits & Acknowledgments

### Team Members
- **Dylan Austin** - [Contribution details to be added]
- **Jakey Marsh** - [Contribution details to be added]
- **Daniel Carson** - [Contribution details to be added]
- **Valantyna** - [Contribution details to be added]

### Design Resources
- **Google Fonts**: Typography and font resources.
- **Web Accessibility Guidelines**: WCAG compliance resources.

### Development Tools
- **GitHub Copilot**: AI-assisted development.
- **VS Code**: Primary development environment.
- **GitHub Pages**: Deployment platform.
- **Browser DevTools**: Testing and debugging. 