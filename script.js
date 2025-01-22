// Script to add interactivity to the landing page

// Navbar-related variables (Moved below Landing Page section)
const navbar = document.querySelector('.navbar');
const backToTopBtn = document.createElement('button');
backToTopBtn.textContent = '⬆';
backToTopBtn.classList.add('back-to-top');
document.body.appendChild(backToTopBtn);

// Smooth Scrolling
document.querySelectorAll('.nav-menu a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  });
});

// Back-to-top Button
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopBtn.style.display = 'block';
  } else {
    backToTopBtn.style.display = 'none';
  }
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Expandable Services Section
const serviceBoxes = document.querySelectorAll('.service');
serviceBoxes.forEach(box => {
  box.addEventListener('click', () => {
    const activeBox = document.querySelector('.service.active');
    if (activeBox && activeBox !== box) {
      activeBox.classList.remove('active');
    }
    box.classList.toggle('active');
  });
});

// Active Link for Navbar
document.querySelectorAll('.nav-menu a').forEach(link => {
  link.addEventListener('click', function () {
    document.querySelectorAll('.nav-menu a').forEach(a => a.classList.remove('active'));
    this.classList.add('active');
  });
});

// Read More Button functionality (Place this at the end of the script)
document.querySelector('.read-more-btn').addEventListener('click', function() {
  const moreText = document.querySelector('.about-more-text');
  const btn = document.querySelector('.read-more-btn');
  
  // Toggle display of more text
  if (moreText.style.display === 'none') {
    moreText.style.display = 'block';
    btn.textContent = 'Read Less';
  } else {
    moreText.style.display = 'none';
    btn.textContent = 'Read More';
  }
});
