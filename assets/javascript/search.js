// Function to update the article content with selected search result
function updateArticleContent(article) {
    // Update the article title (news-title)
    const newsTitle = document.getElementById('news-title');
    if (newsTitle) {
        newsTitle.textContent = article.source?.name || "Breaking News";
    }

    // Update the article subtitle (news-subtitle)  
    const newsSubtitle = document.getElementById('news-subtitle');
    if (newsSubtitle) {
        newsSubtitle.textContent = article.title || "No title available";
    }

    // Update the article main content (news-main)
    const newsMain = document.getElementById('news-main');
    if (newsMain) {
        newsMain.value = article.description || article.content || 'Click here to read the full article: ' + article.url || 'No content available';
    }

    // Scroll to the article section
    const articleSection = document.getElementById('articles');
    if (articleSection) {
        articleSection.scrollIntoView({ behavior: 'smooth' });
    }

    console.log('Article content updated with:', article);
}

// Function to fetch and display search results dynamically
async function fetchSearchResults(query) {
    const searchResultsContainer = document.getElementById('search-results');
    const searchInput = document.querySelector('input[placeholder="Search"]');
    
    console.log('Starting search for:', query);
    console.log('Search container found:', !!searchResultsContainer);
    console.log('Search input found:', !!searchInput);
    
    searchResultsContainer.innerHTML = ''; // Clear previous results

    if (query.length < 2) {
        searchResultsContainer.style.display = 'none';
        return; // Hide results if query is too short
    }

    // Position and size the results container to match search bar
    if (searchInput) {
        const inputRect = searchInput.getBoundingClientRect();
        const containerRect = searchInput.offsetParent.getBoundingClientRect();
        
        searchResultsContainer.style.position = 'absolute';
        searchResultsContainer.style.top = (searchInput.offsetTop + searchInput.offsetHeight + 5) + 'px';
        searchResultsContainer.style.left = searchInput.offsetLeft + 'px';
        searchResultsContainer.style.width = searchInput.offsetWidth + 'px';
        searchResultsContainer.style.zIndex = '1050';
        console.log('Positioning set:', {
            top: searchResultsContainer.style.top,
            left: searchResultsContainer.style.left,
            width: searchResultsContainer.style.width
        });
    }

    // Show loading indicator
    const loadingDiv = document.createElement('div');
    loadingDiv.className = 'alert alert-info mb-0';
    loadingDiv.textContent = 'Searching...';
    loadingDiv.style.fontSize = '14px';
    loadingDiv.style.padding = '8px 12px';
    searchResultsContainer.appendChild(loadingDiv);
    searchResultsContainer.style.display = 'block';
    console.log('Loading indicator shown');

    // Use a simpler API approach - try multiple sources
    const apiKey = '2fc6e388cd16c58e7ee1d222b9ed381c';
    
    // Try different API endpoints
    const urls = [
        `https://gnews.io/api/v4/search?q=${encodeURIComponent(query)}&lang=en&max=8&token=${apiKey}`,
        `https://gnews.io/api/v4/top-headlines?lang=en&max=8&token=${apiKey}&q=${encodeURIComponent(query)}`,
        `https://gnews.io/api/v4/search?q=${encodeURIComponent(query)}&token=${apiKey}`
    ];

    let dataFound = false;
    let articles = [];

    for (let i = 0; i < urls.length && !dataFound; i++) {
        try {
            console.log(`Trying API URL ${i + 1}:`, urls[i]);
            
            const response = await fetch(urls[i], {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                },
            });
            
            console.log('Response status:', response.status);
            console.log('Response ok:', response.ok);
            
            if (!response.ok) {
                const errorText = await response.text();
                console.log('Error response:', errorText);
                continue; // Try next URL
            }
            
            const data = await response.json();
            console.log('API Response received:', data);
            console.log('Articles found:', data.articles?.length || 0);

            if (data.articles && data.articles.length > 0) {
                articles = data.articles;
                dataFound = true;
                console.log('Data found! Articles:', articles.length);
                break;
            } else {
                console.log('No articles in response for URL', i + 1);
            }
        } catch (error) {
            console.error(`Error with API URL ${i + 1}:`, error);
            continue; // Try next URL
        }
    }

    // Clear loading indicator
    searchResultsContainer.innerHTML = '';
    console.log('Loading cleared, dataFound:', dataFound);

    if (dataFound && articles.length > 0) {
        console.log('Creating list with', articles.length, 'articles');
        
        // Create a simple list container
        const listContainer = document.createElement('ul');
        listContainer.className = 'list-group';
        listContainer.style.maxHeight = '350px';
        listContainer.style.overflowY = 'auto';
        listContainer.style.border = '1px solid #dee2e6';
        listContainer.style.borderRadius = '0.375rem';
        listContainer.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        listContainer.style.backgroundColor = 'white';

        articles.slice(0, 6).forEach((article, index) => {
            console.log(`Creating list item ${index + 1}:`, article.title);
            
            const listItem = document.createElement('li');
            listItem.className = 'list-group-item d-flex align-items-center py-2 border-0';
            listItem.style.cursor = 'pointer';
            listItem.style.borderBottom = index < articles.slice(0, 6).length - 1 ? '1px solid #f1f1f1' : 'none';

            // Create image element (with fallback)
            const thumbnail = document.createElement('img');
            thumbnail.src = article.image || 'https://via.placeholder.com/50x35/e9ecef/6c757d?text=News';
            thumbnail.alt = 'Article Thumbnail';
            thumbnail.className = 'me-3 rounded';
            thumbnail.style.width = '50px';
            thumbnail.style.height = '35px';
            thumbnail.style.objectFit = 'cover';
            thumbnail.style.flexShrink = '0';

            // Create title element
            const titleDiv = document.createElement('div');
            titleDiv.className = 'flex-grow-1';
            
            const title = document.createElement('div');
            title.textContent = article.title || 'No title';
            title.className = 'fw-normal';
            title.style.fontSize = '13px';
            title.style.lineHeight = '1.3';
            title.style.color = '#333';
            title.style.display = '-webkit-box';
            title.style.webkitLineClamp = '2';
            title.style.webkitBoxOrient = 'vertical';
            title.style.overflow = 'hidden';
            
            const source = document.createElement('small');
            source.textContent = article.source?.name || 'Unknown Source';
            source.className = 'text-muted';
            source.style.fontSize = '11px';
            
            titleDiv.appendChild(title);
            titleDiv.appendChild(source);

            // Add hover effect
            listItem.addEventListener('mouseenter', () => {
                listItem.style.backgroundColor = '#f8f9fa';
            });
            listItem.addEventListener('mouseleave', () => {
                listItem.style.backgroundColor = '';
            });

            // Add click event to update article content
            listItem.addEventListener('click', () => {
                console.log('List item clicked:', article.title);
                updateArticleContent(article);
                searchResultsContainer.style.display = 'none';
            });

            listItem.appendChild(thumbnail);
            listItem.appendChild(titleDiv);
            listContainer.appendChild(listItem);
        });

        searchResultsContainer.appendChild(listContainer);
        searchResultsContainer.style.display = 'block';
        console.log('List container added and displayed');
    } else {
        console.log('No data found, showing no results message');
        // Show no results message
        const noResults = document.createElement('div');
        noResults.className = 'alert alert-warning mb-0';
        noResults.style.fontSize = '14px';
        noResults.style.padding = '12px';
        noResults.style.border = '1px solid #dee2e6';
        noResults.style.borderRadius = '0.375rem';
        noResults.style.backgroundColor = 'white';
        noResults.innerHTML = `No articles found for "<strong>${query}</strong>".<br><small class="text-muted">Try: "politics", "technology", "sports", "business", or "breaking news"</small>`;
        searchResultsContainer.appendChild(noResults);
        searchResultsContainer.style.display = 'block';
    }
}

// Debounce function to limit API calls
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Event listener for the search bar with debouncing
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('input[placeholder="Search"]') || document.getElementById('search-bar');
    const searchResultsContainer = document.getElementById('search-results');
    
    if (searchInput && searchResultsContainer) {
        // Set up the search results container
        const parentContainer = searchInput.closest('.container-fluid') || searchInput.closest('.navbar') || searchInput.parentElement;
        if (parentContainer) {
            parentContainer.style.position = 'relative';
        }
        
        const debouncedSearch = debounce((query) => {
            if (query.trim().length >= 2) {
                fetchSearchResults(query.trim());
            } else {
                searchResultsContainer.style.display = 'none';
            }
        }, 400);

        // Update positioning on window resize
        window.addEventListener('resize', () => {
            if (searchResultsContainer.style.display === 'block') {
                const query = searchInput.value.trim();
                if (query.length >= 2) {
                    // Re-trigger search to update positioning
                    setTimeout(() => fetchSearchResults(query), 100);
                }
            }
        });

        searchInput.addEventListener('input', (event) => {
            const query = event.target.value;
            debouncedSearch(query);
        });

        // Show results when input is focused and has content
        searchInput.addEventListener('focus', (event) => {
            const query = event.target.value.trim();
            if (query.length >= 2) {
                debouncedSearch(query);
            }
        });

        // Hide results when clicking outside
        document.addEventListener('click', (event) => {
            if (!searchInput.contains(event.target) && 
                !searchResultsContainer.contains(event.target)) {
                searchResultsContainer.style.display = 'none';
            }
        });

        // Prevent form submission and trigger search instead
        const searchForm = searchInput.closest('form');
        if (searchForm) {
            searchForm.addEventListener('submit', (event) => {
                event.preventDefault();
                const query = searchInput.value.trim();
                if (query.length >= 2) {
                    fetchSearchResults(query);
                }
            });
        }

        // Handle escape key to close results
        searchInput.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
                searchResultsContainer.style.display = 'none';
                searchInput.blur();
            }
        });
        
    } else {
        console.error('Search elements not found. Looking for:', {
            searchInput: !!searchInput,
            searchResultsContainer: !!searchResultsContainer
        });
    }
});
