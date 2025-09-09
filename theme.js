function updateIcon() {
	const themeIcon = document.getElementById('themeIcon')
	if (document.body.classList.contains('dark-mode')) {
		// Dark mode: show moon icon
		themeIcon.classList.remove('fa-sun')
		themeIcon.classList.add('fa-moon')
	} else {
		// Light mode: show sun icon
		themeIcon.classList.remove('fa-moon')
		themeIcon.classList.add('fa-sun')
	}
}

function loadTheme() {
	const savedTheme = localStorage.getItem('theme')
	if (savedTheme) {
		// Use the saved user preference.
		if (savedTheme === 'dark') {
			document.body.classList.add('dark-mode')
		}
	} else {
		// No saved preference; detect OS preference.
		if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
			document.body.classList.add('dark-mode')
		}
	}
	updateIcon()
}

function toggleTheme() {
	document.body.classList.toggle('dark-mode')
	if (document.body.classList.contains('dark-mode')) {
		localStorage.setItem('theme', 'dark')
	} else {
		localStorage.setItem('theme', 'light')
	}
	updateIcon()
}

// Load the theme on page load.
loadTheme()

document.addEventListener('DOMContentLoaded', () => {
	const toggleBtn = document.getElementById('themeToggle')
	if (toggleBtn) {
		toggleBtn.addEventListener('click', toggleTheme)
	}
})
