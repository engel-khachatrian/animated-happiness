const button = document.querySelector('.cta');

button?.addEventListener('click', () => {
  const burst = document.createElement('div');
  burst.className = 'burst-layer';

  for (let i = 0; i < 16; i += 1) {
    const heart = document.createElement('span');
    heart.className = 'burst-heart';
    heart.textContent = ['💖', '✨', '💛', '🌟'][i % 4];
    heart.style.left = '50%';
    heart.style.top = '50%';
    const angle = (360 / 16) * i;
    const radius = 70 + (i % 4) * 18;
    const x = Math.cos((angle * Math.PI) / 180) * radius;
    const y = Math.sin((angle * Math.PI) / 180) * radius;
    heart.style.setProperty('--dx', `${x}px`);
    heart.style.setProperty('--dy', `${y}px`);
    heart.style.animationDelay = `${i * 0.03}s`;
    burst.appendChild(heart);
  }

  document.body.appendChild(burst);

  setTimeout(() => {
    burst.remove();
  }, 900);
});

const hero = document.querySelector('.hero');
const notes = document.querySelectorAll('.floating-note');

hero?.addEventListener('pointermove', (event) => {
  const rect = hero.getBoundingClientRect();
  const x = (event.clientX - rect.left) / rect.width - 0.5;
  const y = (event.clientY - rect.top) / rect.height - 0.5;

  notes.forEach((note, index) => {
    const depth = (index + 1) * 8;
    const dx = x * depth;
    const dy = y * depth;
    note.style.transform = `translate(${dx}px, ${dy}px)`;
  });
});

hero?.addEventListener('pointerleave', () => {
  notes.forEach((note) => {
    note.style.transform = 'translate(0, 0)';
  });
});

const style = document.createElement('style');
style.textContent = `
  .burst-layer {
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: 20;
  }

  .burst-heart {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 1.5rem;
    animation: burstOut 0.8s ease-out forwards;
  }

  @keyframes burstOut {
    0% {
      opacity: 0;
      transform: translate(-50%, -50%) scale(0.3);
    }
    18% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: translate(calc(-50% + var(--dx)), calc(-50% + var(--dy))) scale(1.2);
    }
  }
`;
document.head.appendChild(style);
