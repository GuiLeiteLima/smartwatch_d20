const toggleModeButton = document.querySelector('#toggle-mode');
const body = document.querySelector('body');

toggleModeButton.addEventListener('click', function() {
  body.classList.toggle('dark-mode');
});

