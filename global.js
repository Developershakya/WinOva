const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');
function validateForm() {
    if (selectedReason.value.trim() === '') {
        errorMessage.textContent = 'Please select a reason.';
        return false;
    } else {
        errorMessage.textContent = '';
        return true;
    }
}

  // Validate form on submit
  document.getElementById('myForm').addEventListener('submit', (event) => {
    if (!validateForm()) {
        event.preventDefault(); // Prevent form submission
    }
});

function validateForm() {
    if (selectedReason.value.trim() === '') {
        errorMessage.textContent = 'Please select a reason.';
        return false;
    } else {
        errorMessage.textContent = '';
        
        return true;
    }
}
