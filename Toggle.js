// Set initial theme
document.body.classList.add('light-theme');

// Theme toggle logic
document.getElementById('theme-toggle').addEventListener('click', function () {
  document.body.classList.toggle('light-theme');
  document.body.classList.toggle('dark-theme');
});