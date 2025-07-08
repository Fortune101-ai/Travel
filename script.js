
const destinations = [
    { name: "Cape Town, Western Cape", type: "City", rating: 4.9, image: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", description: "The Mother City with Table Mountain, stunning beaches, and world-class wine regions." },
    { name: "Johannesburg, Gauteng", type: "City", rating: 4.6, image: "https://images.unsplash.com/photo-1577948000111-9c970dfe3743?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", description: "The City of Gold offering rich history, vibrant culture, and modern attractions." },
    { name: "Durban, KwaZulu-Natal", type: "City", rating: 4.7, image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", description: "Golden beaches, warm Indian Ocean waters, and rich cultural diversity." },
    { name: "Pretoria, Gauteng", type: "City", rating: 4.5, image: "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", description: "The Jacaranda City with beautiful purple blooms and historical significance." },
    { name: "Port Elizabeth, Eastern Cape", type: "City", rating: 4.4, image: "https://images.unsplash.com/photo-1678815346864-74b41d4e05cb?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", description: "The Friendly City with pristine beaches and excellent water sports." },
    { name: "Bloemfontein, Free State", type: "City", rating: 4.3, image: "https://images.unsplash.com/photo-1716897459543-1ad427075148?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", description: "The City of Roses with beautiful gardens and judicial capital charm." },
    { name: "Stellenbosch, Western Cape", type: "Town", rating: 4.8, image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", description: "Historic wine town surrounded by mountains and world-renowned vineyards." },
    { name: "Hermanus, Western Cape", type: "Town", rating: 4.7, image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", description: "Whale watching capital with dramatic coastal scenery and charming atmosphere." },
    { name: "Knysna, Western Cape", type: "Town", rating: 4.8, image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", description: "Garden Route gem with lagoons, forests, and the famous Knysna Heads." },
    { name: "Plettenberg Bay, Western Cape", type: "Town", rating: 4.6, image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", description: "Pristine beaches, marine life, and adventure activities in a stunning setting." }
];

const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');
const bookNowBtn = document.getElementById('book-now-btn');
const destinationsGrid = document.getElementById('destinations-grid');
const contactForm = document.getElementById('contact-form');
const newsletterForm = document.getElementById('newsletter-form');

if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });
}

if (searchInput && searchResults) {
    let searchTimeout;

    searchInput.addEventListener('input', (e) => {
        clearTimeout(searchTimeout);
        const query = e.target.value.trim();

        if (query.length === 0) {
            hideSearchResults();
            return;
        }

        searchTimeout = setTimeout(() => {
            performSearch(query);
        }, 300);
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-container')) {
            hideSearchResults();
        }
    });
}

function performSearch(query) {
    const filteredDestinations = destinations.filter(dest =>
        dest.name.toLowerCase().includes(query.toLowerCase()) ||
        dest.type.toLowerCase().includes(query.toLowerCase())
    );

    displaySearchResults(filteredDestinations);
}

function displaySearchResults(results) {
    if (results.length === 0) {
        searchResults.innerHTML = '<div class="search-result-item"><div class="result-info"><span class="result-name">No destinations found</span></div></div>';
    } else {
        searchResults.innerHTML = results.map(dest => `
            <div class="search-result-item" onclick="selectDestination('${dest.name}')">
                <div class="result-info">
                    <i class="fas fa-map-marker-alt" style="color: #2563eb; margin-right: 10px;"></i>
                    <div>
                        <div class="result-name">${dest.name}</div>
                        <div class="result-type">${dest.type}</div>
                    </div>
                </div>
                <div class="result-rating">
                    <i class="fas fa-star"></i>
                    <span>${dest.rating}</span>
                </div>
            </div>
        `).join('');
    }

    searchResults.style.display = 'block';
}

function selectDestination(destinationName) {
    if (searchInput) {
        searchInput.value = destinationName;
    }
    hideSearchResults();
}

function hideSearchResults() {
    if (searchResults) {
        searchResults.style.display = 'none';
    }
}

if (bookNowBtn) {
    bookNowBtn.addEventListener('click', () => {
        const selectedDestination = searchInput ? searchInput.value : '';
        if (selectedDestination) {
            alert(`Great choice! You've selected ${selectedDestination}. Our booking system would be integrated here to help you plan your perfect trip!`);
        } else {
            alert('Please select a destination first, then click Book Now to start planning your adventure!');
        }
    });
}

function loadDestinations() {
    if (!destinationsGrid) return;

    const destinationsHTML = destinations.slice(0, 6).map(dest => `
        <div class="destination-card">
            <img src="${dest.image}" alt="${dest.name}" class="destination-image" loading="lazy">
            <div class="destination-info">
                <h3 class="destination-name">${dest.name}</h3>
                <p class="destination-description">${dest.description}</p>
                <div class="destination-rating">
                    <i class="fas fa-star"></i>
                    <span>${dest.rating}</span>
                </div>
            </div>
        </div>
    `).join('');

    destinationsGrid.innerHTML = destinationsHTML;
}

const viewAllBtn = document.getElementById('view-all-destinations');
if (viewAllBtn) {
    viewAllBtn.addEventListener('click', () => {
        loadMoreDestinations();
    });
}

function loadMoreDestinations() {
    if (!destinationsGrid) return;
    
    const allDestinationsHTML = destinations.map(dest => `
        <div class="destination-card">
            <img src="${dest.image}" alt="${dest.name}" class="destination-image" loading="lazy">
            <div class="destination-info">
                <h3 class="destination-name">${dest.name}</h3>
                <p class="destination-description">${dest.description}</p>
                <div class="destination-rating">
                    <i class="fas fa-star"></i>
                    <span>${dest.rating}</span>
                </div>
            </div>
        </div>
    `).join('');
    
    destinationsGrid.innerHTML = allDestinationsHTML;
    
    if (viewAllBtn) {
        viewAllBtn.style.display = 'none';
    }
}

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(contactForm);
        const formObject = Object.fromEntries(formData);

        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.innerHTML = '<span class="loading"></span> Sending...';
        submitBtn.disabled = true;

        try {
            await new Promise(resolve => setTimeout(resolve, 2000));

            showMessage('Thank you for your message! We\'ll get back to you within 24 hours.', 'success');
            contactForm.reset();

        } catch (error) {
            showMessage('Sorry, there was an error sending your message. Please try again.', 'error');
        } finally {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }
    });
}

if (newsletterForm) {
    newsletterForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const emailInput = document.getElementById('newsletter-email');
        const email = emailInput.value;
        const submitBtn = newsletterForm.querySelector('button[type="submit"]');
        
        const originalText = submitBtn.textContent;
        submitBtn.innerHTML = '<span class="loading"></span> Subscribing...';
        submitBtn.disabled = true;
        
        try {
            await new Promise(resolve => setTimeout(resolve, 1500));
  
            showMessage('Thank you for subscribing! You\'ll receive our latest travel deals and tips.', 'success');
            emailInput.value = '';
            
        } catch (error) {
            showMessage('Sorry, there was an error. Please try again.', 'error');
        } finally {
      
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }
    });
}

function showMessage(message, type) {
    const existingMessages = document.querySelectorAll('.success-message, .error-message');
    existingMessages.forEach(msg => msg.remove());

    const messageDiv = document.createElement('div');
    messageDiv.className = type === 'success' ? 'success-message' : 'error-message';
    messageDiv.textContent = message;

    if (newsletterForm && document.contains(newsletterForm)) {
        newsletterForm.parentNode.insertBefore(messageDiv, newsletterForm);
    } else if (contactForm && document.contains(contactForm)) {
        contactForm.parentNode.insertBefore(messageDiv, contactForm);
    }

    setTimeout(() => {
        if (messageDiv.parentNode) {
            messageDiv.remove();
        }
    }, 5000);
}

document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        const toggle = item.querySelector('.faq-toggle i');
        
        question.addEventListener('click', () => {
            const isOpen = answer.style.display === 'block';
            
            faqItems.forEach(otherItem => {
                const otherAnswer = otherItem.querySelector('.faq-answer');
                const otherToggle = otherItem.querySelector('.faq-toggle i');
                otherAnswer.style.display = 'none';
                otherToggle.className = 'fas fa-plus';
            });
          
            if (!isOpen) {
                answer.style.display = 'block';
                toggle.className = 'fas fa-minus';
            }
        });
    });
});

function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const increment = target / 100;
        let current = 0;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.floor(current).toLocaleString();
                setTimeout(updateCounter, 20);
            } else {
                counter.textContent = target.toLocaleString();
            }
        };
        
        updateCounter();
    });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        }
    }
});

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.addEventListener('DOMContentLoaded', () => {
    console.log('TravelElite website loaded successfully!');
    
    loadDestinations();


    const animateElements = document.querySelectorAll('.feature-card, .destination-card, .team-member, .value-card, .category-card, .testimonial-card');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });


    const statsSection = document.querySelector('.stats');
    if (statsSection) {
        statsObserver.observe(statsSection);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('error', function() {
            this.src = 'https://via.placeholder.com/400x300/e5e7eb/9ca3af?text=Image+Not+Available';
        });
    });
});

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

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

function addToFavorites(destination) {
    let favorites = JSON.parse(localStorage.getItem('travelelite_favorites') || '[]');
    if (!favorites.find(fav => fav.name === destination.name)) {
        favorites.push(destination);
        localStorage.setItem('travelelite_favorites', JSON.stringify(favorites));
        showMessage(`${destination.name} added to favorites!`, 'success');
    } else {
        showMessage(`${destination.name} is already in your favorites!`, 'error');
    }
}

function getFavorites() {
    return JSON.parse(localStorage.getItem('travelelite_favorites') || '[]');
}

function subscribeNewsletter(email) {
    console.log(`Newsletter subscription for: ${email}`);
    showMessage('Thank you for subscribing to our newsletter!', 'success');
}

const loadingCSS = `
.loading {
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 3px solid #f3f3f3;
    border-top: 3px solid #2563eb;
    border-radius: 50%;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

.success-message {
    background: #10b981;
    color: white;
    padding: 1rem;
    border-radius: 8px;
    margin-bottom: 1rem;
    text-align: center;
}

.error-message {
    background: #ef4444;
    color: white;
    padding: 1rem;
    border-radius: 8px;
    margin-bottom: 1rem;
    text-align: center;
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
`;


