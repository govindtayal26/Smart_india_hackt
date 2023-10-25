document.addEventListener("DOMContentLoaded", () => {
      const loginForm = document.getElementById("loginForm");
  
      loginForm.addEventListener("submit", function (event) {
          event.preventDefault();
  
          const email = document.getElementById("email").value;
          const password = document.getElementById("password").value;
  
          // Replace with your actual login validation logic
          if (validateLogin(email, password)) {
              // Successful login, redirect to the main page
              window.location.href = "index.html";
          } else {
              alert("Invalid email or password. Please try again.");
          }
      });
  
      function validateLogin(email, password) {
          // Replace with your actual login validation logic
          // For a real website, you would typically send a request to a server for validation.
          // Here, we'll just use a simple example for demonstration.
          const validEmail = "user@example.com";
          const validPassword = "password123";
  
          return email === validEmail && password === validPassword;
      }
  });
  