document.addEventListener('DOMContentLoaded', () => {

  // Mobile Menu Toggle - CORRECTED
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const mainNav = document.querySelector('.main-nav');

  if (mobileMenuBtn && mainNav) {
    mobileMenuBtn.addEventListener('click', () => {
      // This now correctly targets the navigation menu to open/close it.
      mainNav.classList.toggle('mobile-active');
    });
  }

  // Header Scroll Effect (for index.html style header)
  const headerTransparent = document.querySelector('.header-transparent');
  if (headerTransparent) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        headerTransparent.classList.add('scrolled');
      } else {
        headerTransparent.classList.remove('scrolled');
      }
    });
  }

  // Testimonial Slider
  const testimonialsContainer = document.querySelector('.testimonials-slider');
  if (testimonialsContainer) {
    let currentTestimonial = 0;
    const testimonials = document.querySelectorAll('.testimonial');
    const dots = document.querySelectorAll('.dot');
    const nextBtn = document.querySelector('.testimonial-next');
    const prevBtn = document.querySelector('.testimonial-prev');
    let testimonialInterval;

    const showTestimonial = (index) => {
      if (testimonials.length === 0) return;
      currentTestimonial = (index + testimonials.length) % testimonials.length;
      
      testimonials.forEach(t => t.classList.remove('active'));
      dots.forEach(d => d.classList.remove('active'));
      
      testimonials[currentTestimonial].classList.add('active');
      if(dots[currentTestimonial]) dots[currentTestimonial].classList.add('active');
    };

    const startInterval = () => {
        testimonialInterval = setInterval(() => {
            showTestimonial(currentTestimonial + 1);
        }, 5000);
    };

    const resetInterval = () => {
        clearInterval(testimonialInterval);
        startInterval();
    };

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            showTestimonial(currentTestimonial + 1);
            resetInterval();
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            showTestimonial(currentTestimonial - 1);
            resetInterval();
        });
    }

    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        showTestimonial(index);
        resetInterval();
      });
    });

    if(testimonials.length > 0) {
      showTestimonial(0);
      startInterval();
    }
  }

  // FAQ Page Logic
  const faqContainer = document.querySelector('.faq-container');
  if (faqContainer) {
      // Accordion logic
      const faqItems = document.querySelectorAll('.faq-item');
      faqItems.forEach(item => {
          const question = item.querySelector('.faq-question');
          if (question) {
              question.addEventListener('click', () => {
                  const isActive = item.classList.contains('active');
                  faqItems.forEach(i => i.classList.remove('active'));
                  if (!isActive) {
                      item.classList.add('active');
                  }
              });
          }
      });

      // Tab logic
      const tabBtns = document.querySelectorAll('.tab-btn');
      const categories = document.querySelectorAll('.faq-category');
      
      tabBtns.forEach(btn => {
          btn.addEventListener('click', () => {
              const categoryId = btn.dataset.category;
              
              tabBtns.forEach(b => b.classList.remove('active'));
              btn.classList.add('active');
              
              categories.forEach(cat => {
                  cat.classList.remove('active');
                  if (cat.id === categoryId) {
                      cat.classList.add('active');
                  }
              });
          });
      });
  }

  // Automatic Copyright Year
  const copyrightYearSpan = document.getElementById('copyright-year');
  if (copyrightYearSpan) {
    copyrightYearSpan.textContent = new Date().getFullYear();
  }
});
