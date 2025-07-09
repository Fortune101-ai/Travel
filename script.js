const destinations = [
	{
		name: 'Cape Town, Western Cape',
		type: 'City',
		rating: 4.9,
		image:
			'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
		description:
			'The Mother City with Table Mountain, stunning beaches, and world-class wine regions.',
	},
	{
		name: 'Johannesburg, Gauteng',
		type: 'City',
		rating: 4.6,
		image:
			'https://images.unsplash.com/photo-1577948000111-9c970dfe3743?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
		description:
			'The City of Gold offering rich history, vibrant culture, and modern attractions.',
	},
	{
		name: 'Durban, KwaZulu-Natal',
		type: 'City',
		rating: 4.7,
		image:
			'https://images.unsplash.com/photo-1682065936841-6bb7f68207b7?q=80&w=964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		description:
			'Golden beaches, warm Indian Ocean waters, and rich cultural diversity.',
	},
	{
		name: 'Pretoria, Gauteng',
		type: 'City',
		rating: 4.5,
		image:
			'https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
		description:
			'The Jacaranda City with beautiful purple blooms and historical significance.',
	},
	{
		name: 'Port Elizabeth, Eastern Cape',
		type: 'City',
		rating: 4.4,
		image:
			'https://images.unsplash.com/photo-1600854985248-8efa369172ea?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		description:
			'The Friendly City with pristine beaches and excellent water sports.',
	},
	{
		name: 'Bloemfontein, Free State',
		type: 'City',
		rating: 4.3,
		image:
			'https://images.unsplash.com/photo-1670932804179-6c1e696f999d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8QmxvZW1mb250ZWluJTIwU291dGglMjBBZnJpY2F8ZW58MHx8MHx8fDI%3D',
		description:
			'The City of Roses with beautiful gardens and judicial capital charm.',
	},
	{
		name: 'Stellenbosch, Western Cape',
		type: 'Town',
		rating: 4.8,
		image:
			'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
		description:
			'Historic wine town surrounded by mountains and world-renowned vineyards.',
	},
	{
		name: 'Hermanus, Western Cape',
		type: 'Town',
		rating: 4.7,
		image:
			'https://images.unsplash.com/photo-1737272127292-15e78f6c9e56?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		description:
			'Whale watching capital with dramatic coastal scenery and charming atmosphere.',
	},
	{
		name: 'Knysna, Western Cape',
		type: 'Town',
		rating: 4.8,
		image:
			'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
		description:
			'Garden Route gem with lagoons, forests, and the famous Knysna Heads.',
	},
	{
		name: 'Plettenberg Bay, Western Cape',
		type: 'Town',
		rating: 4.6,
		image:
			'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
		description:
			'Pristine beaches, marine life, and adventure activities in a stunning setting.',
	},
	{
		name: 'Oudtshoorn, Western Cape',
		type: 'Town',
		rating: 4.5,
		image:
			'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
		description: 'Ostrich capital with Cango Caves and Klein Karoo landscapes.',
	},
	{
		name: 'Mossel Bay, Western Cape',
		type: 'Town',
		rating: 4.4,
		image:
			'https://images.unsplash.com/photo-1562651139-dd47aaf1f921?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		description:
			'Historic coastal town with beautiful beaches and maritime heritage.',
	},
];

let showingAllDestinations = false;
const initialDestinationCount = 6;

const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');
const bookNowBtn = document.getElementById('book-now-btn');
const destinationsGrid = document.getElementById('destinations-grid');
const viewAllBtn = document.getElementById('view-all-destinations');
const contactForm = document.getElementById('contact-form');
const newsletterForm = document.getElementById('newsletter-form');

document.addEventListener('DOMContentLoaded', () => {
	loadDestinations();
	initializeCounters();
	initializeFAQ();
});

if (navToggle && navMenu) {
	navToggle.addEventListener('click', () => {
		navMenu.classList.toggle('active');
		navToggle.classList.toggle('active');
	});

	document.querySelectorAll('.nav-link').forEach((link) => {
		link.addEventListener('click', () => {
			navMenu.classList.remove('active');
			navToggle.classList.remove('active');
		});
	});
}

function loadDestinations() {
	if (!destinationsGrid) return;

	const destinationsToShow = showingAllDestinations
		? destinations
		: destinations.slice(0, initialDestinationCount);

	destinationsGrid.innerHTML = '';

	destinationsToShow.forEach((destination) => {
		const destinationCard = document.createElement('div');
		destinationCard.classList.add('destination-card');
		destinationCard.innerHTML = `
            <img src="${destination.image}" alt="${
			destination.name
		}" class="destination-image" loading="lazy">
            <div class="destination-info">
                <h3 class="destination-name">${destination.name}</h3>
                <p class="destination-description">${
																	destination.description
																}</p>
                <div class="destination-rating">
                    ${generateStars(destination.rating)}
                    <span>${destination.rating}/5</span>
                </div>
            </div>
        `;
		destinationsGrid.appendChild(destinationCard);
	});
}

function generateStars(rating) {
	const fullStars = Math.floor(rating);
	const hasHalfStar = rating % 1 !== 0;
	let starsHTML = '';

	for (let i = 0; i < fullStars; i++) {
		starsHTML += '<i class="fas fa-star"></i>';
	}

	if (hasHalfStar) {
		starsHTML += '<i class="fas fa-star-half-alt"></i>';
	}

	const emptyStars = 5 - Math.ceil(rating);
	for (let i = 0; i < emptyStars; i++) {
		starsHTML += '<i class="far fa-star"></i>';
	}

	return starsHTML;
}

if (viewAllBtn) {
	viewAllBtn.addEventListener('click', () => {
		showingAllDestinations = !showingAllDestinations;
		loadDestinations();

		if (showingAllDestinations) {
			viewAllBtn.textContent = 'Show Less';
			viewAllBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
		} else {
			viewAllBtn.textContent = 'View All Destinations';

			document
				.querySelector('.destinations')
				.scrollIntoView({ behavior: 'smooth' });
		}
	});
}

if (searchInput && searchResults) {
	let searchTimeout;

	const hideSearchResults = () => {
		searchResults.style.display = 'none';
	};

	const performSearch = (query) => {
		const filteredDestinations = destinations.filter(
			(destination) =>
				destination.name.toLowerCase().includes(query.toLowerCase()) ||
				destination.description.toLowerCase().includes(query.toLowerCase()) ||
				destination.type.toLowerCase().includes(query.toLowerCase())
		);

		searchResults.innerHTML = '';

		if (filteredDestinations.length > 0) {
			searchResults.style.display = 'block';
			filteredDestinations.slice(0, 5).forEach((destination) => {
				const resultItem = document.createElement('div');
				resultItem.classList.add('search-result-item');
				resultItem.innerHTML = `
                    <div class="result-info">
                        <div class="result-name">${destination.name}</div>
                        <div class="result-type">${destination.type}</div>
                    </div>
                    <div class="result-rating">
                        <i class="fas fa-star"></i>
                        <span>${destination.rating}</span>
                    </div>
                `;

				resultItem.addEventListener('click', () => {
					searchInput.value = destination.name;
					hideSearchResults();
				});

				searchResults.appendChild(resultItem);
			});
		} else {
			searchResults.style.display = 'block';
			searchResults.innerHTML =
				'<div class="search-result-item"><div class="result-info"><div class="result-name">No destinations found</div></div></div>';
		}
	};

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
		if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
			hideSearchResults();
		}
	});
}

function initializeCounters() {
	const counters = document.querySelectorAll('.stat-number');

	const animateCounter = (counter) => {
		const target = parseInt(counter.getAttribute('data-target'));
		const increment = target / 100;
		let current = 0;

		const updateCounter = () => {
			if (current < target) {
				current += increment;
				counter.textContent = Math.floor(current).toLocaleString();
				requestAnimationFrame(updateCounter);
			} else {
				counter.textContent = target.toLocaleString();
			}
		};

		updateCounter();
	};

	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				const counter = entry.target;
				animateCounter(counter);
				observer.unobserve(counter);
			}
		});
	});

	counters.forEach((counter) => {
		observer.observe(counter);
	});
}

function initializeFAQ() {
	const faqItems = document.querySelectorAll('.faq-item');

	faqItems.forEach((item) => {
		const question = item.querySelector('.faq-question');
		const answer = item.querySelector('.faq-answer');
		const toggle = item.querySelector('.faq-toggle i');

		question.addEventListener('click', () => {
			const isOpen = answer.style.display === 'block';

			faqItems.forEach((otherItem) => {
				const otherAnswer = otherItem.querySelector('.faq-answer');
				const otherToggle = otherItem.querySelector('.faq-toggle i');
				otherAnswer.style.display = 'none';
				otherToggle.classList.remove('fa-minus');
				otherToggle.classList.add('fa-plus');
			});

			if (!isOpen) {
				answer.style.display = 'block';
				toggle.classList.remove('fa-plus');
				toggle.classList.add('fa-minus');
			}
		});
	});
}

if (bookNowBtn) {
	bookNowBtn.addEventListener('click', () => {
		const contactSection = document.querySelector('.contact');
		if (contactSection) {
			contactSection.scrollIntoView({ behavior: 'smooth' });
		} else {
			window.location.href = 'contact.html';
		}
	});
}

if (contactForm) {
	contactForm.addEventListener('submit', async (e) => {
		e.preventDefault();

		const submitBtn = contactForm.querySelector('button[type="submit"]');
		const originalText = submitBtn.textContent;

		submitBtn.innerHTML = '<span class="loading"></span> Sending...';
		submitBtn.disabled = true;

		setTimeout(() => {
			const successMessage = document.createElement('div');
			successMessage.classList.add('success-message');
			successMessage.textContent =
				"Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.";

			contactForm.insertBefore(successMessage, contactForm.firstChild);

			contactForm.reset();

			submitBtn.textContent = originalText;
			submitBtn.disabled = false;

			setTimeout(() => {
				successMessage.remove();
			}, 5000);
		}, 2000);
	});
}

if (newsletterForm) {
	newsletterForm.addEventListener('submit', async (e) => {
		e.preventDefault();

		const submitBtn = newsletterForm.querySelector('button[type="submit"]');
		const emailInput = newsletterForm.querySelector('input[type="email"]');
		const originalText = submitBtn.textContent;

		submitBtn.innerHTML = '<span class="loading"></span> Subscribing...';
		submitBtn.disabled = true;

		setTimeout(() => {
			const successMessage = document.createElement('div');
			successMessage.classList.add('success-message');
			successMessage.textContent =
				'Successfully subscribed! Welcome to TravBloom newsletter.';

			newsletterForm.insertBefore(successMessage, newsletterForm.firstChild);

			emailInput.value = '';

			submitBtn.textContent = originalText;
			submitBtn.disabled = false;

			setTimeout(() => {
				successMessage.remove();
			}, 5000);
		}, 1500);
	});
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
	anchor.addEventListener('click', function (e) {
		e.preventDefault();
		const target = document.querySelector(this.getAttribute('href'));
		if (target) {
			target.scrollIntoView({
				behavior: 'smooth',
				block: 'start',
			});
		}
	});
});

window.addEventListener('scroll', () => {
	const navbar = document.querySelector('.navbar');
	if (window.scrollY > 100) {
		navbar.style.background = 'rgba(255, 255, 255, 0.98)';
		navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
	} else {
		navbar.style.background = 'rgba(255, 255, 255, 0.95)';
		navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
	}
});
