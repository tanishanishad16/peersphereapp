document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;

  const usernamePattern = /^[a-z][a-z0-9._]{2,14}$/;
  if (!usernamePattern.test(username)) {
    alert("Invalid username! Use lowercase letters, numbers, '.' or '_' (3–15 characters).");
    return;
  }

  if (password.length < 8) {
    alert("Password must be at least 8 characters long.");
    return;
  }

  alert("✅ Login Successful!");
  document.getElementById("loginForm").reset();
});
