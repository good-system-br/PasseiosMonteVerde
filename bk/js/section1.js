

// Exemplo: ação em botão e voltar
document.addEventListener('DOMContentLoaded', function() {
	var btn = document.querySelector('header button');
	if (btn) {
		btn.addEventListener('click', function() {
			alert('Ação da seção 1!');
		});
	}
	// Voltar para index
	var backIcon = document.querySelector('.material-symbols-outlined');
	if (backIcon) {
		backIcon.style.cursor = 'pointer';
		backIcon.title = 'Voltar';
		backIcon.addEventListener('click', function() {
			window.location.href = '../index.html';
		});
	}
});
