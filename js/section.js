

// Exemplo: botão de navegação e voltar
document.addEventListener('DOMContentLoaded', function() {
	var navBtn = document.querySelector('header button');
	if (navBtn) {
		navBtn.addEventListener('click', function() {
			alert('Navegar para outra seção!');
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
