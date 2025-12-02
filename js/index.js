// Scroll Animations
document.addEventListener('DOMContentLoaded', function() {
	// Intersection Observer para animações ao scroll
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

	// Observar elementos com animação
	document.querySelectorAll('.card-hover, .fade-in, .fade-in-delay-1, .fade-in-delay-2').forEach(el => {
		el.style.opacity = '0';
		el.style.transform = 'translateY(30px)';
		el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
		observer.observe(el);
	});

	// Parallax effect no hero
	const hero = document.querySelector('section[style*="background-image"]');
	if (hero) {
		window.addEventListener('scroll', () => {
			const scrolled = window.pageYOffset;
			const parallax = scrolled * 0.5;
			hero.style.backgroundPositionY = parallax + 'px';
		});
	}

	// Smooth scroll para âncoras
	document.querySelectorAll('a[href^="#"]').forEach(anchor => {
		anchor.addEventListener('click', function(e) {
			const href = this.getAttribute('href');
			if (href !== '#' && document.querySelector(href)) {
				e.preventDefault();
				document.querySelector(href).scrollIntoView({
					behavior: 'smooth',
					block: 'start'
				});
			}
		});
	});

	// Lazy loading para imagens
	const imgObserver = new IntersectionObserver((entries) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				const img = entry.target;
				img.src = img.dataset.src || img.src;
				img.classList.add('loaded');
				imgObserver.unobserve(img);
			}
		});
	});

	document.querySelectorAll('img').forEach(img => {
		imgObserver.observe(img);
	});

	// Adicionar efeito ripple nos botões
	document.querySelectorAll('button, a[href*="agendar"]').forEach(button => {
		button.addEventListener('click', function(e) {
			const ripple = document.createElement('span');
			const rect = this.getBoundingClientRect();
			const size = Math.max(rect.width, rect.height);
			const x = e.clientX - rect.left - size / 2;
			const y = e.clientY - rect.top - size / 2;

			ripple.style.width = ripple.style.height = size + 'px';
			ripple.style.left = x + 'px';
			ripple.style.top = y + 'px';
			ripple.classList.add('ripple');

			this.appendChild(ripple);

			setTimeout(() => ripple.remove(), 600);
		});
	});

	// Header transparente ao scroll
	const header = document.querySelector('header');
	if (header) {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 50) {
				header.style.background = 'linear-gradient(135deg, rgba(34,139,34,0.95) 0%, rgba(26,107,26,0.95) 100%)';
				header.style.backdropFilter = 'blur(10px)';
			} else {
				header.style.background = 'linear-gradient(135deg, #228B22 0%, #1a6b1a 100%)';
				header.style.backdropFilter = 'none';
			}
		});
	}
});
