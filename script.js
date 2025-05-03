document.addEventListener('DOMContentLoaded', () => {
  particlesJS('particles-js', {
    particles: {
      number: { value: 80, density: { enable: true, value_area: 800 } },
      color: { value: "#ffffff" },
      shape: { type: "circle" },
      opacity: { value: 0.5, random: true },
      size: { value: 3, random: true },
      line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
      move: { enable: true, speed: 2, direction: "none", random: true }
    }
  });
});

const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  themeToggle.textContent = document.body.classList.contains('light-mode') ? '🌙' : '☀️';
  localStorage.setItem('theme', document.body.classList.contains('light-mode') ? 'light' : 'dark');
});

// Check saved preference on load
if (localStorage.getItem('theme') === 'light') {
  document.body.classList.add('light-mode');
  themeToggle.textContent = '🌙';
}

// Typewriter Effect for the Hero Heading
const typewriterElement = document.getElementById('typewriter');
const text = "Hi, I'm Cyric";
let index = 0;
function typeWriter() {
  if (index < text.length) {
    typewriterElement.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, 100);
  }
}
document.addEventListener('DOMContentLoaded', typeWriter);

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

//Underline the active link in the navigation menu
const navLinks = document.querySelectorAll('nav .menu a');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});

// Tab switching for About section
const tabButtons = document.querySelectorAll('.tab-button');
const tabPanels = document.querySelectorAll('.tab-panel');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove active states
    tabButtons.forEach(btn => btn.classList.remove('active'));
    tabPanels.forEach(panel => panel.classList.remove('active'));

    // Add active state to clicked button and corresponding panel
    button.classList.add('active');
    const tab = button.getAttribute('data-tab');
    document.getElementById(tab).classList.add('active');
  });
});

const form = document.getElementById('contact-form');
const email = document.getElementById('email');
const errorMessage = document.querySelector('.error-message');
const formStatus = document.getElementById('form-status');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  if (!email.validity.valid) {
    errorMessage.textContent = 'Please enter a valid email';
    errorMessage.style.display = 'block';
    return;
  }

  // Simulate form submission (replace with actual fetch/Formspree code)
  formStatus.textContent = 'Sending message...';
  formStatus.style.display = 'block';

  setTimeout(() => {
    formStatus.textContent = 'Message sent successfully!';
    formStatus.classList.add('success');
    form.reset();
  }, 1500);
});

const lazyLoad = () => {
  const lazyImages = document.querySelectorAll('.lazy-load');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove('lazy-load');
        observer.unobserve(img);
      }
    });
  }, { rootMargin: '200px' });

  lazyImages.forEach(img => observer.observe(img));
};

document.addEventListener('DOMContentLoaded', lazyLoad);