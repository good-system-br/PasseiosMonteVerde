// ========================================
// Modern Mobile Menu Management
// ========================================
document.addEventListener('DOMContentLoaded', function() {
	const menuBtn = document.getElementById('menuBtn');
	const mobileMenu = document.getElementById('mobileMenu');
	const menuOverlay = document.getElementById('menuOverlay');
	const menuIcon = document.getElementById('menuIcon');

	// Toggle mobile menu
	function toggleMenu() {
		const isOpen = mobileMenu.classList.contains('hidden');
		
		if (isOpen) {
			// Open menu
			mobileMenu.classList.remove('hidden', '-translate-y-full');
			mobileMenu.classList.add('animate-in');
			menuOverlay.classList.remove('hidden');
			menuIcon.textContent = 'close';
			document.body.style.overflow = 'hidden';
		} else {
			// Close menu
			mobileMenu.classList.add('hidden');
			menuOverlay.classList.add('hidden');
			menuIcon.textContent = 'menu';
			document.body.style.overflow = 'auto';
		}
	}

	// Menu button click
	if (menuBtn) {
		menuBtn.addEventListener('click', toggleMenu);
	}

	// Close menu on overlay click
	if (menuOverlay) {
		menuOverlay.addEventListener('click', toggleMenu);
	}

	// Close menu on link click
	document.querySelectorAll('#mobileMenu a').forEach(link => {
		link.addEventListener('click', () => {
			setTimeout(toggleMenu, 300);
		});
	});

	// Close menu on Escape key
	document.addEventListener('keydown', (e) => {
		if (e.key === 'Escape' && !mobileMenu.classList.contains('hidden')) {
			toggleMenu();
		}
	});

	// ========================================
	// Scroll Animations with Intersection Observer
	// ========================================
	const observerOptions = {
		threshold: 0.1,
		rootMargin: '0px 0px -50px 0px'
	};

	const observer = new IntersectionObserver((entries) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add('fade-in');
				observer.unobserve(entry.target);
			}
		});
	}, observerOptions);

	// Observe animation targets
	document.querySelectorAll('.card-hover, [class*="fade-in"]').forEach(el => {
		observer.observe(el);
	});

	// ========================================
	// Smooth Scroll for Anchor Links
	// ========================================
	document.querySelectorAll('a[href^="#"]').forEach(anchor => {
		anchor.addEventListener('click', function(e) {
			const href = this.getAttribute('href');
			if (href !== '#' && document.querySelector(href)) {
				e.preventDefault();
				const target = document.querySelector(href);
				target.scrollIntoView({
					behavior: 'smooth',
					block: 'start'
				});
			}
		});
	});

	// ========================================
	// Parallax Effect on Hero Section
	// ========================================
	const hero = document.querySelector('section[style*="background-image"]');
	if (hero) {
		window.addEventListener('scroll', () => {
			const scrolled = window.pageYOffset;
			const parallax = scrolled * 0.5;
			hero.style.backgroundPosition = `center ${parallax}px`;
		}, { passive: true });
	}

	// ========================================
	// Lazy Loading for Images
	// ========================================
	if ('IntersectionObserver' in window) {
		const imageObserver = new IntersectionObserver((entries) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					const img = entry.target;
					const src = img.dataset.src || img.src;
					if (src) {
						img.src = src;
						img.classList.add('loaded');
						imageObserver.unobserve(img);
					}
				}
			});
		});

		document.querySelectorAll('img').forEach(img => {
			imageObserver.observe(img);
		});
	}

	// ========================================
	// Header Transparency on Scroll
	// ========================================
	const header = document.querySelector('header');
	if (header) {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 50) {
				header.classList.add('shadow-lg');
			} else {
				header.classList.remove('shadow-lg');
			}
		}, { passive: true });
	}

	// ========================================
	// Button Ripple Effect
	// ========================================
	document.querySelectorAll('button, a[class*="btn"], a[href*="agendar"]').forEach(button => {
		button.addEventListener('click', function(e) {
			// Only create ripple on direct clicks (not from keyboard)
			if (e.clientX === 0 && e.clientY === 0) return;

			const ripple = document.createElement('span');
			const rect = this.getBoundingClientRect();
			const size = Math.max(rect.width, rect.height);
			const x = e.clientX - rect.left - size / 2;
			const y = e.clientY - rect.top - size / 2;

			ripple.style.width = ripple.style.height = size + 'px';
			ripple.style.left = x + 'px';
			ripple.style.top = y + 'px';
			ripple.style.position = 'absolute';
			ripple.style.borderRadius = '50%';
			ripple.style.background = 'rgba(255, 255, 255, 0.6)';
			ripple.style.transform = 'scale(0)';
			ripple.style.animation = 'ripple 0.6s ease-out';

			this.style.position = 'relative';
			this.style.overflow = 'hidden';
			this.appendChild(ripple);

			setTimeout(() => ripple.remove(), 600);
		});
	});

	// ========================================
	// Performance Optimization
	// ========================================
	// Debounce scroll events for better performance
	let scrollTimeout;
	window.addEventListener('scroll', () => {
		if (scrollTimeout) clearTimeout(scrollTimeout);
		scrollTimeout = setTimeout(() => {
			// Scroll event handling
		}, 100);
	}, { passive: true });

	// Add ripple animation keyframe if not present
	if (!document.getElementById('ripple-style')) {
		const style = document.createElement('style');
		style.id = 'ripple-style';
		style.textContent = `
			@keyframes ripple {
				to {
					transform: scale(4);
					opacity: 0;
				}
			}
		`;
		document.head.appendChild(style);
	}
});
