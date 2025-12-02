
// Menu responsivo: abre/fecha menu ao clicar no botão

document.addEventListener('DOMContentLoaded', function() {
	var menuBtn = document.querySelector('header button');
	if (menuBtn) {
		// Cria menu hamburguer dropdown
		var menuDropdown = document.createElement('div');
		menuDropdown.setAttribute('role', 'menu');
		menuDropdown.setAttribute('aria-label', 'Menu de navegação');
		menuDropdown.style.position = 'absolute';
		menuDropdown.style.top = '60px';
		menuDropdown.style.right = '16px';
		menuDropdown.style.background = '#fff';
		menuDropdown.style.border = '2px solid #2bee79';
		menuDropdown.style.borderRadius = '12px';
		menuDropdown.style.boxShadow = '0 4px 16px rgba(46,190,121,0.18)';
		menuDropdown.style.display = 'none';
		menuDropdown.style.zIndex = '1000';
		menuDropdown.style.minWidth = '180px';
		menuDropdown.style.animation = 'fadeInMenu 0.3s';
		menuDropdown.innerHTML = `
			<a href="pages/galeria.html" style="display:block;padding:14px 28px;color:#111;text-decoration:none;font-weight:bold;">Galeria</a>
			<a href="pages/section.html" style="display:block;padding:14px 28px;color:#111;text-decoration:none;font-weight:bold;">História</a>
			<a href="pages/section1.html" style="display:block;padding:14px 28px;color:#111;text-decoration:none;font-weight:bold;">Passeios</a>
			<a href="pages/section2.html" style="display:block;padding:14px 28px;color:#111;text-decoration:none;font-weight:bold;">Contato</a>
		`;
		document.body.appendChild(menuDropdown);

		// Animação CSS
		var style = document.createElement('style');
		style.innerHTML = `@keyframes fadeInMenu { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } }`;
		document.head.appendChild(style);

		menuBtn.addEventListener('click', function(e) {
			e.stopPropagation();
			menuDropdown.style.display = menuDropdown.style.display === 'none' ? 'block' : 'none';
		});

		// Fecha menu ao clicar fora ou ao clicar em link
		document.addEventListener('click', function(e) {
			if (menuDropdown.style.display === 'block' && !menuDropdown.contains(e.target) && e.target !== menuBtn) {
				menuDropdown.style.display = 'none';
			}
		});
		menuDropdown.querySelectorAll('a').forEach(function(link) {
			link.addEventListener('click', function() {
				menuDropdown.style.display = 'none';
			});
		});
		// Acessibilidade: fecha com ESC
		document.addEventListener('keydown', function(e) {
			if (e.key === 'Escape') menuDropdown.style.display = 'none';
		});
	}
});
