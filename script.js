document.addEventListener('DOMContentLoaded', () => {
  const projects = [
    {
      title: "NFL Passer Rating Calculator",
      desc: "A web application that calculates NFL passer ratings based on user input.",
      link: "https://jimkellyc.github.io/PasserRatingNFL/",
    },
    {
      title: "To do List App",
      desc: "A simple to-do list application that allows users to add, remove, and mark tasks as completed.",
      link: "https://jimkellyc.github.io/ToDoList/",
    }
  ];

  const grid = document.getElementById('projects-grid');
  if (grid) {
    projects.forEach(proj => {
      const card = document.createElement('article');
      card.className = 'card';
      card.innerHTML = `
        <div class="title">${proj.title}</div>
        <div class="desc">${proj.desc}</div>
        <a class="cta" href="${proj.link}" target="_blank" rel="noopener">View on GitHub</a>
      `;
      grid.appendChild(card);
    });
  }

  // Mobile nav toggle
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('primary-navigation');
  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      const visible = nav.getAttribute('data-visible') === 'true';
      nav.setAttribute('data-visible', String(!visible));
      navToggle.setAttribute('aria-expanded', String(!visible));
    });
  }

  // Theme toggle with localStorage
  const themeToggle = document.querySelector('.theme-toggle');
  const root = document.documentElement;
  const saved = localStorage.getItem('theme');
  if (saved) document.body.setAttribute('data-theme', saved);

  if (themeToggle) {
    const setIcon = () => {
      themeToggle.textContent = document.body.getAttribute('data-theme') === 'dark' ? '☀️' : '🌙';
    };
    setIcon();
    themeToggle.addEventListener('click', () => {
      const current = document.body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      document.body.setAttribute('data-theme', current);
      localStorage.setItem('theme', current);
      setIcon();
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      if (href.startsWith('#')) {
        e.preventDefault();
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({behavior:'smooth',block:'start'});
        // close mobile nav after click
        if (nav && nav.getAttribute('data-visible') === 'true'){
          nav.setAttribute('data-visible','false');
          if (navToggle) navToggle.setAttribute('aria-expanded','false');
        }
      }
    });
  });
});