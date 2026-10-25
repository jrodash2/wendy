/* Hollywood Bark additions. Original template/plugin files remain unchanged. */
(() => {
  'use strict';
  // Draft contact supplied in the PDF. Confirm with Wendy before publication.
  // Update this one object to replace the number everywhere on this page.
  const contact = { display: '+1 (281) 908-9671', number: '+12819089671' };
  document.querySelectorAll('[data-phone]').forEach(link => {
    const sms = link.dataset.phone === 'sms';
    link.href = `${sms ? 'sms' : 'tel'}:${contact.number}`;
    link.textContent = sms ? 'Send a text' : contact.display;
  });
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const header = document.querySelector('.hb-header');
  const menu = document.getElementById('hb-mobile-nav');
  const toggle = document.querySelector('.hb-menu-toggle');
  const measureHeader = () => document.documentElement.style.setProperty('--hb-header-height', `${header.offsetHeight + 12}px`);
  const closeMenu = () => { menu.hidden = true; toggle.setAttribute('aria-expanded', 'false'); measureHeader(); };
  toggle.addEventListener('click', () => { menu.hidden = !menu.hidden; toggle.setAttribute('aria-expanded', String(!menu.hidden)); measureHeader(); });
  menu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && !menu.hidden) { closeMenu(); toggle.focus(); } });
  document.addEventListener('click', event => { if (!header.contains(event.target) && !menu.hidden) closeMenu(); });
  window.addEventListener('resize', () => { if (innerWidth >= 1200) closeMenu(); measureHeader(); });
  measureHeader();
  if ('ResizeObserver' in window) new ResizeObserver(measureHeader).observe(header);
  // Keep the template’s slide animation with semantic heading/button markup.
  jQuery(() => {
    jQuery('.accordion-item button.heading').off('click').on('click', function () {
      const button = this;
      const item = jQuery(button).closest('.accordion-item');
      const wasOpen = item.hasClass('active');
      item.closest('.accordion').find('.accordion-item').each(function () {
        const current = jQuery(this);
        const open = this === item[0] && !wasOpen;
        current.toggleClass('active', open);
        current.find('button.heading').attr('aria-expanded', String(open));
        current.children('.content').stop(true, true)[open ? 'slideDown' : 'slideUp'](150);
      });
    });
    const carousel = jQuery('.hero-two-slider');
    const pause = document.querySelector('.hb-carousel-pause');
    let paused = reducedMotion.matches;
    const setCarouselState = () => {
      carousel.trigger(paused ? 'stop.owl.autoplay' : 'play.owl.autoplay', [6000]);
      pause.textContent = paused ? 'Play slideshow' : 'Pause slideshow';
      pause.setAttribute('aria-pressed', String(paused));
    };
    pause.addEventListener('click', () => { paused = !paused; setCarouselState(); });
    reducedMotion.addEventListener('change', () => { paused = reducedMotion.matches; setCarouselState(); });
    // Autoplay stops while a visitor focuses a slide; hidden clones cannot receive focus.
    const makeSlidesAccessible = () => {
      document.querySelectorAll('.hero-two-slider .owl-item').forEach(item => {
        const active = item.classList.contains('active');
        item.setAttribute('aria-hidden', String(!active));
        item.querySelectorAll('a, button').forEach(el => el.tabIndex = active ? 0 : -1);
        item.querySelectorAll('h1').forEach(el => { if (item.classList.contains('cloned')) { el.setAttribute('role', 'heading'); el.setAttribute('aria-level', '2'); } });
      });
      document.querySelectorAll('.hero-two-slider .owl-dot').forEach((dot, i) => dot.setAttribute('aria-label', `Show slide ${i + 1}`));
    };
    carousel.on('translated.owl.carousel refreshed.owl.carousel', makeSlidesAccessible);
    carousel.on('focusin mouseenter', () => carousel.trigger('stop.owl.autoplay'));
    carousel.on('focusout mouseleave', () => { if (!paused) carousel.trigger('play.owl.autoplay', [6000]); });
    setCarouselState(); makeSlidesAccessible();
  });
  if ('IntersectionObserver' in window) {
    const navLinks = document.querySelectorAll('.hb-header nav a[href^="#"]');
    const sections = [...document.querySelectorAll('main section[id]')];
    const updateActive = () => {
      const offset = header.offsetHeight + 80;
      const current = sections.filter(section => section.getBoundingClientRect().top <= offset).at(-1) || sections[0];
      navLinks.forEach(link => { if (link.hash === `#${current.id}`) link.setAttribute('aria-current', 'location'); else link.removeAttribute('aria-current'); });
    };
    window.addEventListener('scroll', updateActive, { passive: true }); updateActive();
    if (!reducedMotion.matches) {
      const observer = new IntersectionObserver(entries => entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
      }), { threshold: 0.08 });
      document.querySelectorAll('.package, .hb-benefits .pets-icon, .hb-step, .hb-review-seal').forEach(el => { el.classList.add('hb-reveal'); observer.observe(el); });
    }
  }
})();
