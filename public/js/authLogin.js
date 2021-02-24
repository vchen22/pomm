// sign in
const signinForm = document.querySelector('#signin-form');

signinForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // get user info
  const email = signinForm['signin-email'].value;
  const password = signinForm['signin-password'].value;

  console.log(email, password);

  // sign in the user
  auth.signInWithEmailAndPassword(email, password).then((cred) => {
    console.log(cred.user);

    signinForm.reset();
  });
});
