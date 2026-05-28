// Highlight the active sidebar link based on which section is in view
const sections = document.querySelectorAll('section[id]');
const sidebarLinks = document.querySelectorAll('.sidebar-link');

if (sections.length && sidebarLinks.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          sidebarLinks.forEach((link) => {
            link.classList.toggle(
              'active',
              link.getAttribute('href') === `#${entry.target.id}`
            );
          });
        }
      });
    },
    { rootMargin: '-15% 0px -70% 0px' }
  );

  sections.forEach((section) => observer.observe(section));
}
