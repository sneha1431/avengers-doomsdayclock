// shared nav — injected by each page
function injectNav(activePage) {
  const pages = [
    { href: 'index.html', label: 'Countdown' },
    { href: 'will-return.html', label: 'Will Return' },
    { href: 'quiz.html', label: 'Which Avenger?' },
    { href: 'timeline.html', label: 'MCU Timeline' },
    { href: 'cast.html', label: 'Cast' },
  ];

  const links = pages.map(p =>
    `<li><a href="${p.href}" class="${activePage === p.href ? 'active' : ''}">${p.label}</a></li>`
  ).join('');

  document.body.insertAdjacentHTML('afterbegin', `
    <nav class="nav">
      <a href="index.html" class="nav-brand">⚡ <span>Doomsday</span> Countdown</a>
      <ul class="nav-links" id="nav-links">${links}</ul>
      <div class="nav-hamburger" id="hamburger" onclick="document.getElementById('nav-links').classList.toggle('open')">
        <span></span><span></span><span></span>
      </div>
    </nav>
  `);
}

function injectFooter() {
  document.body.insertAdjacentHTML('beforeend', `
    <footer class="site-footer">
      <p>Fan-made countdown site &nbsp;·&nbsp; Not affiliated with Marvel Studios or Disney<br>
      Avengers: Doomsday releases <a href="index.html">December 18, 2026</a></p>
    </footer>
  `);
}

function injectParticles(count = 25) {
  const bg = document.createElement('div');
  bg.className = 'particles-bg';
  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.left = Math.random() * 100 + '%';
    p.style.animationDuration = (Math.random() * 10 + 6) + 's';
    p.style.animationDelay = (Math.random() * 10) + 's';
    bg.appendChild(p);
  }
  document.body.prepend(bg);
}
