document.addEventListener("DOMContentLoaded", function () {

    // Registration Form
    const registerForm = document.getElementById("registerForm");
    if (registerForm) {
        registerForm.addEventListener("submit", function (e) {
            e.preventDefault();
            let fullName = document.getElementById("fullName").value;
            let email = document.getElementById("registerEmail").value;
            let password = document.getElementById("registerPassword").value;

            if (localStorage.getItem(email)) {
                document.getElementById("registerError").textContent = "Email already registered!";
                return;
            }

            localStorage.setItem(email, JSON.stringify({ fullName, email, password }));
            alert("Registration successful! You can now login.");
            window.location.href = "index.html";
        });
    }

    // Login Form
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();
            let email = document.getElementById("loginEmail").value;
            let password = document.getElementById("loginPassword").value;

            let user = localStorage.getItem(email);
            if (user) {
                let userData = JSON.parse(user);
                if (userData.password === password) {
                    localStorage.setItem("isLoggedIn", "true");
                    window.location.href = "welcome.html";
                } else {
                    document.getElementById("loginError").textContent = "Incorrect password!";
                }
            } else {
                document.getElementById("loginError").textContent = "No account found. Please Sign Up first.";
            }
        });
    }
});
