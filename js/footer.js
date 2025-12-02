
// Newsletter: feedback ao enviar
document.addEventListener('DOMContentLoaded', function() {
	var form = document.querySelector('form');
	if (form) {
		form.addEventListener('submit', function(e) {
			e.preventDefault();
			alert('Obrigado por se inscrever!');
		});
	}
});
