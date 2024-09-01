// JavaScript untuk toggle dark mode dan light mode
const toggleButton = document.getElementById('toggle-mode');
const darkModeButton = document.getElementById('toggle-dark-mode');

toggleButton.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        toggleButton.textContent = 'Light Mode';
    } else {
        toggleButton.textContent = 'Dark Mode';
    }
});

darkModeButton.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});
