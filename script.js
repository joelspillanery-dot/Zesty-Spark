// Bubble animation
const bubblesContainer = document.querySelector('.bubbles');

function createBubble() {
  const bubble = document.createElement('div');
  bubble.classList.add('bubble');
  bubble.style.left = Math.random() * 100 + 'vw';
  bubble.style.animationDuration = (2 + Math.random() * 3) + 's';
  bubblesContainer.appendChild(bubble);
  setTimeout(() => { bubble.remove(); }, 5000);
}

setInterval(createBubble, 300);
