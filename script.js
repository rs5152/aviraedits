document.addEventListener('DOMContentLoaded', () => {

  // Mobile Menu Toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const mainNav = document.querySelector('.main-nav');

  if (mobileMenuBtn && mainNav) {
    mobileMenuBtn.addEventListener('click', () => {
      mainNav.classList.toggle('mobile-active');
    });
  }

  // Header Scroll Effect (for index.html style header)
  const header = document.querySelector('.header-transparent');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
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
/* =================================
   Detailed Pricing Page Styles 
   ================================= */

.pricing-grid.three-cards {
  max-width: 1200px; /* Allow more space for three cards */
}

.features-list li.disabled {
  color: #a0a0a0;
  text-decoration: line-through;
}

.features-list li.disabled .fa-check-circle,
.features-list li.disabled .fa-times-circle {
  color: #a0a0a0;
}

.addons-section {
  text-align: center;
  background: var(--light);
  padding: 50px 30px;
  border-radius: 15px;
  margin-top: 60px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
}

.addons-list {
  list-style: none;
  padding: 0;
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.addons-list li {
  background: #F9FAFF;
  padding: 10px 20px;
  border-radius: 10px;
  font-weight: 500;
  color: var(--dark-gray);
  border: 1px solid var(--gray);
}

.custom-project-cta {
  text-align: center;
  padding: 60px 20px;
  margin-top: 80px;
  background: linear-gradient(135deg, var(--primary), var(--primary-dark));
  border-radius: 15px;
  color: var(--light);
}

.custom-project-cta h2 {
  color: var(--light);
}

.custom-project-cta p {
  color: rgba(255, 255, 255, 0.9);
  max-width: 600px;
  margin: 0 auto 30px;
}

.custom-project-cta .btn-primary {
    background: var(--light);
    color: var(--primary);
}

.custom-project-cta .btn-primary:hover {
    background: var(--accent);
    color: var(--dark);
}
