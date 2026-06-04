document.getElementById('loginForm').addEventListener('submit', function(e){
  e.preventDefault();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  const msg = document.getElementById('msg');
  msg.className = 'msg';
  if (!email){ msg.textContent = 'Please enter your email.'; msg.classList.add('error'); return }
  if (!password || password.length < 6){ msg.textContent = 'Password must be at least 6 characters.'; msg.classList.add('error'); return }

  // Simulate successful login (no backend). Replace with real POST in production.
  msg.textContent = 'Signed in successfully (demo).';
  msg.classList.add('success');
});
