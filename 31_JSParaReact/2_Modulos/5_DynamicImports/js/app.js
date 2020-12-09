video.addEventListener('click', function() {
  this.classList.add('hidden');
  import('./player.js').then(({ player }) => {
    setTimeout(() => {
      player.play();
    }, 100)
  });
});