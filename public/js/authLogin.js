// sign in
const signinForm = document.querySelector('#signin-form');

signinForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // get user info
  const email = signinForm['signin-email'].value;
  const password = signinForm['signin-password'].value;

  // sign in the user
  auth.signInWithEmailAndPassword(email, password).then((cred) => {
    signinForm.reset();
  });
});
