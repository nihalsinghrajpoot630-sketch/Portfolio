/**
 * NIHAL SINGH - PORTFOLIO JAVASCRIPT
 * Interactions: Theme Toggle, ScrollSpy, Modals, Copy to Clipboard, Form Handling
 */

document.addEventListener('DOMContentLoaded', () => {
  // ------------------------------------------------------------------------
  // 1. Theme Management (Dark / Light Mode)
  // ------------------------------------------------------------------------
  const html = document.documentElement;
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const storedTheme = localStorage.getItem('nihal_portfolio_theme');

  // Set default theme from localStorage or system preference
  if (storedTheme) {
    html.setAttribute('data-theme', storedTheme);
  } else {
    // Default to dark theme as requested by the reference
    html.setAttribute('data-theme', 'dark');
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = html.getAttribute('data-theme') || 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      html.setAttribute('data-theme', newTheme);
      localStorage.setItem('nihal_portfolio_theme', newTheme);
      showToast(`Switched to ${newTheme} mode`);
    });
  }

  // ------------------------------------------------------------------------
  // 2. Mobile Navigation Drawer
  // ------------------------------------------------------------------------
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const mobileLinks = document.querySelectorAll('[data-mobile-link]');

  if (mobileMenuBtn && mobileDrawer) {
    mobileMenuBtn.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.toggle('is-open');
      mobileMenuBtn.classList.toggle('is-active', isOpen);
      mobileMenuBtn.setAttribute('aria-expanded', String(isOpen));
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('is-open');
        mobileMenuBtn.classList.remove('is-active');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ------------------------------------------------------------------------
  // 3. Active Nav Link ScrollSpy & Smooth Scroll
  // ------------------------------------------------------------------------
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('[data-nav-link]');
  const header = document.querySelector('.site-header');

  const onScroll = () => {
    const scrollPos = window.scrollY + 120;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });

    // Subtle header background shadow on scroll
    if (header) {
      if (window.scrollY > 20) {
        header.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.35)';
      } else {
        header.style.boxShadow = 'none';
      }
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // initial trigger

  // ------------------------------------------------------------------------
  // 4. Modals (Project Details & CV Download)
  // ------------------------------------------------------------------------
  const projectModal = document.getElementById('project-modal');
  const openProjectBtn = document.getElementById('open-project-modal-btn');
  const closeProjectBtn = document.getElementById('modal-close-btn');
  const projectDismissBtns = document.querySelectorAll('.modal-dismiss-btn');

  const cvModal = document.getElementById('cv-modal');
  const openCvBtn = document.getElementById('download-cv-btn');
  const closeCvBtn = document.getElementById('cv-modal-close-btn');
  const cvDismissBtns = document.querySelectorAll('.cv-dismiss-btn');

  const openModal = (modal) => {
    if (!modal) return;
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = (modal) => {
    if (!modal) return;
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  // Project Modal Listeners
  if (openProjectBtn && projectModal) {
    openProjectBtn.addEventListener('click', () => openModal(projectModal));
  }
  if (closeProjectBtn && projectModal) {
    closeProjectBtn.addEventListener('click', () => closeModal(projectModal));
  }
  projectDismissBtns.forEach(btn => btn.addEventListener('click', () => closeModal(projectModal)));

  // CV Modal Listeners
  if (openCvBtn && cvModal) {
    openCvBtn.addEventListener('click', () => openModal(cvModal));
  }
  if (closeCvBtn && cvModal) {
    closeCvBtn.addEventListener('click', () => closeModal(cvModal));
  }
  cvDismissBtns.forEach(btn => btn.addEventListener('click', () => closeModal(cvModal)));

  // Backdrop and Escape Key Dismiss
  window.addEventListener('click', (e) => {
    if (e.target === projectModal) closeModal(projectModal);
    if (e.target === cvModal) closeModal(cvModal);
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal(projectModal);
      closeModal(cvModal);
    }
  });

  // ------------------------------------------------------------------------
  // 5. One-Click Copy to Clipboard & Toast Notifications
  // ------------------------------------------------------------------------
  const copyButtons = document.querySelectorAll('[data-copy]');
  const toast = document.getElementById('toast');
  const toastText = document.getElementById('toast-text');
  let toastTimer = null;

  function showToast(message) {
    if (!toast || !toastText) return;
    toastText.textContent = message;
    toast.classList.add('is-active');

    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove('is-active');
    }, 2800);
  }

  copyButtons.forEach(btn => {
    btn.addEventListener('click', async (e) => {
      e.preventDefault();
      const textToCopy = btn.getAttribute('data-copy');
      if (!textToCopy) return;

      try {
        await navigator.clipboard.writeText(textToCopy);
        showToast(`Copied "${textToCopy}" to clipboard!`);
      } catch (err) {
        // Fallback for clipboard
        const tempInput = document.createElement('input');
        tempInput.value = textToCopy;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
        showToast(`Copied "${textToCopy}" to clipboard!`);
      }
    });
  });

  // ------------------------------------------------------------------------
  // 6. Contact Form Submission
  // ------------------------------------------------------------------------
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('form-name')?.value.trim();
      const email = document.getElementById('form-email')?.value.trim();
      const subject = document.getElementById('form-subject')?.value.trim();
      const message = document.getElementById('form-message')?.value.trim();

      if (!name || !email || !message) {
        showToast('Please fill in all required fields.');
        return;
      }

      // Format mailto link
      const mailtoUrl = `mailto:nihalsinghrajpoot630@gmail.com?subject=${encodeURIComponent(subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`Hi Nihal,\n\nFrom: ${name} (${email})\n\nMessage:\n${message}`)}`;
      
      showToast('Opening your email client...');
      setTimeout(() => {
        window.location.href = mailtoUrl;
      }, 500);

      contactForm.reset();
    });
  }

  // ------------------------------------------------------------------------
  // 7. Scroll Reveal Animation for Cards
  // ------------------------------------------------------------------------
  const revealElements = document.querySelectorAll('[data-reveal]');
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    revealElements.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(24px)';
      el.style.transition = 'opacity 600ms cubic-bezier(0.16, 1, 0.3, 1), transform 600ms cubic-bezier(0.16, 1, 0.3, 1)';
      revealObserver.observe(el);
    });
  }
});
