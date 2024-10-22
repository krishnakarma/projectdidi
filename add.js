const form = document.getElementById('registration-form');
const nameInput = document.getElementById('name1');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');

form.addEventListener('submit', (e) => {
    if (!nameInput.value.trim()) {
        alert('Please enter your name');
        e.preventDefault();
    }

    if (!emailInput.value.trim() || !emailInput.value.includes('@')) {
        alert('Please enter a valid email address');
        e.preventDefault();
    }

    if (!phoneInput.value.trim() || phoneInput.value.length !== 10) {
        alert('Please enter a valid phone number');
        e.preventDefault();
    }
});