document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('registerForm');
    const loginForm = document.getElementById('loginForm');

    if (registerForm) {
        registerForm.addEventListener('submit', async function(event) {
            event.preventDefault();
            const formData = new FormData(registerForm);
            const data = Object.fromEntries(formData.entries());

            const response = await fetch('/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            const result = await response.json();
            const errorMessage = document.getElementById('errorMessage');

            if (response.ok) {
                window.location.href = '/login.html';
            } else {
                errorMessage.textContent = result.message;
            }
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', async function(event) {
            event.preventDefault();
            const formData = new FormData(loginForm);
            const data = Object.fromEntries(formData.entries());

            const response = await fetch('/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            const result = await response.json();
            const errorMessage = document.getElementById('errorMessage');

            if (response.ok) {
                if (result.userType === 'comprador') {
                    window.location.href = '/services_buyer.html';
                } else if (result.userType === 'estudiante') {
                    window.location.href = '/services_student.html';
                }
            } else {
                errorMessage.textContent = result.message;
            }
        });
    }
});
