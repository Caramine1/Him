// script.js
const numStars = 100; // number of stars
for(let i = 0; i < numStars; i++) {
  const star = document.createElement('div');
  star.classList.add('star');

  // Random starting position
  const startX = Math.random() * window.innerWidth;
  const startY = Math.random() * window.innerHeight;
  star.style.left = startX + 'px';
  star.style.top = startY + 'px';

  // Random size
  const size = Math.random() * 3 + 1;
  star.style.width = size + 'px';
  star.style.height = size + 'px';

  // Random animation durations
  star.style.animationDuration = 
      (Math.random() * 3 + 2) + 's, ' + (Math.random() * 20 + 10) + 's';

  // Random drift direction
  const driftX = (Math.random() - 0.5) * 200; // px
  const driftY = (Math.random() - 0.5) * 200; // px
  star.style.setProperty('--x', driftX + 'px');
  star.style.setProperty('--y', driftY + 'px');

  document.body.appendChild(star);
}
