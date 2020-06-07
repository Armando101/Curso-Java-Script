const box = document.querySelector('.box');
const toggle = document.getElementById('toggle');

toggle.addEventListener('click', ()=> {
	if (toggle.textContent === 'Hide') {
		box.style.clipPath = 'polygon(0 0, 0 0, 0 0, 0 0)';
		box.style.opacity = '0';
		toggle.textContent = 'Show';
	} else {
		box.style.clipPath = '';
		box.style.opacity = '1';
		toggle.textContent = 'Hide';
	}
});
