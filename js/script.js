// File: assets/js/script.js

// Handle club registration form submissions
const registrationForms = document.querySelectorAll('.registration-form');
registrationForms.forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const clubName = form.querySelector('#clubName').value;
    const name = form.querySelector('#name').value;
    const email = form.querySelector('#email').value;
    // Here, you can add code to send the form data to a backend server
    console.log(`New registration for ${clubName} by ${name} (${email})`);
    alert('Registration successful!');
    form.reset();
    hideRegistrationForm(form);
  });
});

function showRegistrationForm(clubName) {
  const registrationForm = document.querySelector(`#registration-form-${clubName.toLowerCase()}`);
  registrationForm.style.display = 'block';
}

function hideRegistrationForm(form) {
  form.style.display = 'none';
}

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
