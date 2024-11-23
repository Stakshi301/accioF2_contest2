    const form = document.getElementById('validationForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const successMessage = document.getElementById('successMessage');

    form.addEventListener('submit', (event) => {
      let valid = true;

      // Clear previous errors
      emailError.textContent = '';
      passwordError.textContent = '';
      successMessage.style.display = 'none';

      // Email validation
      const emailValue = emailInput.value.trim();
      if (emailValue.length <= 3 || !emailValue.includes('@') || !emailValue.includes('.')) {
        emailError.textContent = 'Make sure email is more than 3 characters and has @ and a .';
        valid = false;
      }

      // Password validation
      const passwordValue = passwordInput.value.trim();
      if (passwordValue.length <= 8) {
        passwordError.textContent = 'Make sure password is more than 8 characters.';
        valid = false;
      }
      // Check if both fields are valid
      if (valid) {
        successMessage.style.display = 'block';
       event.preventDefault(); 
      } else {
        event.preventDefault();
      }
    });
