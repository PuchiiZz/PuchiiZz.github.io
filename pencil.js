const pencil = document.getElementById('pencil');
let isAnimating = false;

pencil.addEventListener('click', () => {
  isAnimating = !isAnimating;
  pencil.style.animation = isAnimating ? 'heartbeat 1.5s infinite' : '';
});
