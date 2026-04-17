const lengthSlider = document.getElementById("length");
const lengthValue = document.getElementById("lengthValue");

lengthSlider.addEventListener("input", () => {
  lengthValue.innerText = lengthSlider.value;
});

// Generate password
function generatePassword() {
  const length = lengthSlider.value;
  const upper = document.getElementById("uppercase").checked;
  const lower = document.getElementById("lowercase").checked;
  const number = document.getElementById("numbers").checked;
  const symbol = document.getElementById("symbols").checked;

  const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerChars = "abcdefghijklmnopqrstuvwxyz";
  const numberChars = "0123456789";
  const symbolChars = "!@#$%^&*()_+[]{}|;:,.<>?";

  let allChars = "";
  if (upper) allChars += upperChars;
  if (lower) allChars += lowerChars;
  if (number) allChars += numberChars;
  if (symbol) allChars += symbolChars;

  if (allChars === "") {
    alert("Select at least one option!");
    return;
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }

  document.getElementById("password").value = password;

  checkStrength(password);
}

// Copy password
async function copyPassword() {
  const passwordField = document.getElementById("password");
  const password = passwordField.value;

  if (!password) {
    alert("No password to copy!");
    return;
  }

  try {
    await navigator.clipboard.writeText(password);
    alert("Copied to clipboard!");
  } catch (err) {
    alert("Failed to copy!");
    console.error(err);
  }
}

// Strength checker
function checkStrength(password) {
  let strength = 0;

  if (password.length >= 8) strength++;
  if (/[A-Z]/.test(password)) strength++;
  if (/[0-9]/.test(password)) strength++;
  if (/[^A-Za-z0-9]/.test(password)) strength++;

  const bar = document.getElementById("strengthBar");
  const text = document.getElementById("strengthText");

  if (strength <= 1) {
    bar.style.width = "50px";
    bar.style.background = "red";
    text.innerText = "Weak";
  } else if (strength === 2) {
    bar.style.width = "100px";
    bar.style.background = "orange";
    text.innerText = "Medium";
  } else {
    bar.style.width = "200px";
    bar.style.background = "green";
    text.innerText = "Strong";
  }
}