document.getElementById("signupForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  const emailPattern = /^[0-9]{13}@paruluniversity\.ac\.in$/;
  if (!emailPattern.test(email)) {
    alert("Email must be in the format: 2305101010154@paruluniversity.ac.in");
    return;
  }

  const usernamePattern = /^[a-z][a-z0-9._]{2,14}$/;
  if (!usernamePattern.test(username)) {
    alert("Username must start with a lowercase letter, and be 3–15 characters long (letters, numbers, '.', '_').");
    return;
  }

  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,15}$/;
  if (!passwordPattern.test(password)) {
    alert("Password must have 1 uppercase, 1 lowercase, 1 digit, 1 special character, and be 8–15 characters.");
    return;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  alert("✅ Sign Up Successful!");
  document.getElementById("signupForm").reset();
});