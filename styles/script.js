const card = document.getElementById('birthday-card');
const flipBtn = document.getElementById('flip-btn');
const flipBackBtn = document.getElementById('flip-back-btn');

flipBtn.addEventListener('click', () => {
  card.classList.add('flipped');
});

flipBackBtn.addEventListener('click', () => {
  card.classList.remove('flipped');
});
