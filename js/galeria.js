

// Compartilhar galeria
document.addEventListener('DOMContentLoaded', function() {
	var shareBtn = document.querySelector('header button');
	if (shareBtn) {
		shareBtn.addEventListener('click', function() {
			alert('Compartilhar galeria!');
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
});
