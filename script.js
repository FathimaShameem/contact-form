document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  // Clear messages
  document.getElementById("nameError").innerText = "";
  document.getElementById("emailError").innerText = "";
  document.getElementById("messageError").innerText = "";
  document.getElementById("successMsg").innerText = "";

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();
  let isValid = true;

  if (name === "") {
    document.getElementById("nameError").innerText = "Name is required.";
    isValid = false;
  }

  if (email === "") {
    document.getElementById("emailError").innerText = "Email is required.";
    isValid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    document.getElementById("emailError").innerText = "Invalid email format.";
    isValid = false;
  }

  if (message === "") {
    document.getElementById("messageError").innerText = "Message is required.";
    isValid = false;
  }

  if (isValid) {
    document.getElementById("successMsg").innerText = "Form submitted successfully!";
    document.getElementById("contactForm").reset();
  }
});
