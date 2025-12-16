// utils/scroll-spy.js
export default function initScrollSpy() {
  document.addEventListener('DOMContentLoaded', () => {
    const TOC = document.querySelector('#TableOfContents');
    if (!TOC) return;

    const headings = document.querySelectorAll('h2[id], h3[id]');
    if (!headings.length) return;

    let isScrolling = false; // flag to pause observer during smooth scroll

    const observer = new IntersectionObserver((entries) => {
      if (isScrolling) return; // skip updates while smooth scrolling

      entries.forEach(entry => {
        const id = entry.target.getAttribute('id');
        if (!id) return;

        const link = TOC.querySelector(`li a[href="#${id}"]`);
        if (!link) return;

        if (entry.isIntersecting) {
          TOC.querySelectorAll('.active').forEach(item => item.classList.remove('active'));
          link.parentElement.classList.add('active');
        }
      });
    }, {
      rootMargin: "0% 0px -80%"
    });

    headings.forEach(h => observer.observe(h));

    // Smooth scroll for TOC links
    TOC.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').slice(1);
        const targetEl = document.getElementById(targetId);
        if (!targetEl) return;

        // Temporarily disable observer updates
        isScrolling = true;

        // Smooth scroll
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });

        // Update active class immediately
        TOC.querySelectorAll('.active').forEach(item => item.classList.remove('active'));
        link.parentElement.classList.add('active');

        // Close TOC menu if mobile
        const menuToggle = document.querySelector('#TOC-container input');
        if (menuToggle) menuToggle.checked = false;

        // Re-enable observer after smooth scroll finishes (~500ms)
        setTimeout(() => { isScrolling = false; }, 500);
      });
    });
  });
}

