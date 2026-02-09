// Basic interactions: nav toggle, smooth scrolling, contact form
document.addEventListener('DOMContentLoaded', function(){
  // Update year in footer
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  // Nav toggle for small screens
  const navToggle = document.querySelector('.nav-toggle');
  navToggle && navToggle.addEventListener('click', function(){
    const expanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', String(!expanded));
    document.body.classList.toggle('nav-open');
  });

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function(e){
      const hash = this.getAttribute('href');
      if(hash.length > 1){
        const target = document.querySelector(hash);
        if(target){
          e.preventDefault();
          target.scrollIntoView({behavior:'smooth',block:'start'});
          document.body.classList.remove('nav-open');
          const toggle = document.querySelector('.nav-toggle');
          if(toggle) toggle.setAttribute('aria-expanded','false');
        }
      }
    });
  });

  // Contact form (demo only)
  const form = document.getElementById('contact-form');
  const msg = document.getElementById('form-message');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const data = new FormData(form);
      const name = data.get('name')?.trim();
      const email = data.get('email')?.trim();
      const message = data.get('message')?.trim();
      if(!name || !email || !message){
        msg.textContent = 'Please complete all fields.';
        return;
      }
      // fake submit
      msg.textContent = 'Thanks — your message was sent (demo).';
      form.reset();
    });
  }

  // Back to top button
  const backToTop = document.getElementById('back-to-top');
  if(backToTop){
    const toggleBtn = () => {
      if(window.scrollY > 300) backToTop.classList.remove('hidden');
      else backToTop.classList.add('hidden');
    };
    backToTop.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));
    window.addEventListener('scroll', toggleBtn);
    toggleBtn();
  }
});