const toggleButton = document.getElementById('dark-mode-toggle');
let darkMode = false;

toggleButton.addEventListener('click', () => {
    darkMode = !darkMode;
    document.body.classList.toggle('dark-mode', darkMode);
    toggleButton.name = darkMode ? 'sunny' : 'moon';
});
