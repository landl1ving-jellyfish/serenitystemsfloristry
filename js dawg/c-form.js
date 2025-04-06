document.addEventListener('DOMContentLoaded', function() {
   
    const form = document.getElementById('consultationForm');
    
    form.addEventListener('submit', function(event) {
       
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        } else {
    
            alert('Form submitted successfully!');
    
        }
        
        
        form.classList.add('was-validated');
    });
    
   
    const emailInput = document.getElementById('email');
    emailInput.addEventListener('input', function() {
        if (emailInput.validity.typeMismatch) {
            emailInput.setCustomValidity('Please enter a valid email address.');
        } else {
            emailInput.setCustomValidity('');
        }
    });
    

    const phoneInput = document.getElementById('phone');
    phoneInput.addEventListener('input', function() {
        const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
        if (phoneInput.value && !phoneRegex.test(phoneInput.value)) {
            phoneInput.setCustomValidity('Please enter a valid phone number.');
        } else {
            phoneInput.setCustomValidity('');
        }
    });
    
    
    const dateInput = document.getElementById('preferredDate');
    dateInput.addEventListener('input', function() {
        const selectedDate = new Date(dateInput.value);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        
        if (selectedDate < today) {
            dateInput.setCustomValidity('Please select a future date.');
        } else {
            dateInput.setCustomValidity('Please select a date.');
        }
    });
    
    
    form.addEventListener('reset', function() {
        form.classList.remove('was-validated');
    });
});