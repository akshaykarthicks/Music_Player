document.addEventListener('DOMContentLoaded', function() {
  // Theme toggle logic (already present)
  const toggleBtn = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  function setTheme(theme) {
    document.body.className = theme === 'light' ? 'light-theme' : '';
    themeIcon.className = theme === 'light' ? 'fa fa-sun-o' : 'fa fa-moon-o';
    localStorage.setItem('theme', theme);
  }
  toggleBtn.onclick = function() {
    const isLight = document.body.classList.toggle('light-theme');
    setTheme(isLight ? 'light' : 'dark');
  };
  (function() {
    const saved = localStorage.getItem('theme');
    if(saved === 'light') setTheme('light');
    else setTheme('dark');
  })();

  // Player controls
  const audio = document.getElementById('fc-media');
  const playPauseBtn = document.getElementById('play-pause');
  const playPauseIcon = playPauseBtn.querySelector('i');
  const progressBar = document.getElementById('progress-bar');
  const currentTimeEl = document.getElementById('current-time');
  const durationEl = document.getElementById('duration');

  function formatTime(sec) {
    if (isNaN(sec)) return '0:00';
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return m + ':' + (s < 10 ? '0' : '') + s;
  }

  audio.addEventListener('loadedmetadata', function() {
    durationEl.textContent = formatTime(audio.duration);
    progressBar.max = audio.duration;
  });

  audio.addEventListener('timeupdate', function() {
    progressBar.value = audio.currentTime;
    currentTimeEl.textContent = formatTime(audio.currentTime);
  });

  playPauseBtn.addEventListener('click', function() {
    if (audio.paused) {
      audio.play();
      playPauseIcon.className = 'fa fa-pause';
    } else {
      audio.pause();
      playPauseIcon.className = 'fa fa-play';
    }
  });

  function seekAudio() {
    audio.currentTime = parseFloat(progressBar.value);
  }
  progressBar.addEventListener('input', seekAudio);
  progressBar.addEventListener('change', seekAudio);

  audio.addEventListener('ended', function() {
    playPauseIcon.className = 'fa fa-play';
  });
});




