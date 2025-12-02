
// Compartilhar galeria
document.addEventListener('DOMContentLoaded', function() {
	var shareBtn = document.querySelector('header button');
	if (shareBtn) {
		shareBtn.addEventListener('click', function() {
			if (navigator.share) {
				navigator.share({
					title: 'Galeria - Passeios Monte Verde',
					text: 'Confira nossa galeria de fotos!',
					url: window.location.href
				}).catch(err => console.log('Erro ao compartilhar:', err));
			} else {
				alert('Compartilhar galeria!');
			}
		});
	}

	// Voltar para index
	var backIcon = document.querySelector('header .material-symbols-outlined');
	if (backIcon) {
		backIcon.style.cursor = 'pointer';
		backIcon.title = 'Voltar';
		backIcon.addEventListener('click', function() {
			window.location.href = '../index.html';
		});
	}

	// Lightbox simples ao clicar nas imagens
	const galleryItems = document.querySelectorAll('.gallery-item');
	galleryItems.forEach((item, index) => {
		item.addEventListener('click', function() {
			const img = this.querySelector('img');
			const lightbox = document.createElement('div');
			lightbox.className = 'fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 cursor-pointer';
			lightbox.style.animation = 'fadeIn 0.3s ease-out';
			
			const lightboxImg = document.createElement('img');
			lightboxImg.src = img.src;
			lightboxImg.className = 'max-w-full max-h-full object-contain rounded-lg shadow-2xl';
			lightboxImg.style.animation = 'scaleIn 0.4s ease-out';
			
			const closeBtn = document.createElement('button');
			closeBtn.innerHTML = '✕';
			closeBtn.className = 'absolute top-8 right-8 text-white text-4xl font-bold hover:scale-110 transition-transform';
			
			lightbox.appendChild(lightboxImg);
			lightbox.appendChild(closeBtn);
			document.body.appendChild(lightbox);
			
			lightbox.addEventListener('click', () => {
				lightbox.style.animation = 'fadeOut 0.3s ease-out';
				setTimeout(() => lightbox.remove(), 300);
			});
		});
	});

	// Animações de entrada ao scroll
	const observerOptions = {
		threshold: 0.1,
		rootMargin: '0px 0px -50px 0px'
	};

	const observer = new IntersectionObserver((entries) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.style.opacity = '1';
				entry.target.style.transform = 'scale(1)';
			}
		});
	}, observerOptions);

	document.querySelectorAll('.gallery-item').forEach(item => {
		item.style.opacity = '0';
		item.style.transform = 'scale(0.9)';
		item.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
		observer.observe(item);
	});
});

// Adicionar keyframes CSS dinamicamente
const style = document.createElement('style');
style.textContent = `
	@keyframes fadeIn {
		from { opacity: 0; }
		to { opacity: 1; }
	}
	@keyframes fadeOut {
		from { opacity: 1; }
		to { opacity: 0; }
	}
	@keyframes scaleIn {
		from { transform: scale(0.8); opacity: 0; }
		to { transform: scale(1); opacity: 1; }
	}
`;
document.head.appendChild(style);
