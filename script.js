// Dark Mode Toggle
const darkModeToggle = document.getElementById('dark-mode-checkbox');
const body = document.body;

darkModeToggle.addEventListener('change', () => {
    body.classList.toggle('dark-mode', darkModeToggle.checked);
});

// Example: Log a message to the console
console.log("Welcome to Kevin's Portfolio!");

// Example: Toggle a class for the navigation menu on small screens
const menuButton = document.getElementById('menu-button');
const navigation = document.getElementById('navigation');

menuButton.addEventListener('click', () => {
    navigation.classList.toggle('show');
});
