// sign up
const signupForm = document.querySelector('#signup-form');

signupForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // get user info
  const email = signupForm['signup-email'].value;
  const password = signupForm['signup-password'].value;
  const confirm = signupForm['signup-confirm'].value;
  const first = signupForm['signup-first'].value;
  const last = signupForm['signup-last'].value;

  if (password !== confirm) {
    alert("Passwords don't match!");
  } else {
    // sign up the user
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((cred) => {
        return db.collection('users').doc(cred.user.uid).set({
          firstName: first,
          lastName: last,
          email: email,
          pomms: 0,
          sessions: 0,
          minutes: 0,
          profilePicture: false,
        });
      })
      .then(() => {
        signupForm.reset();
        window.location.href = '/home';
      })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        if (errorCode === 'auth/weak-password') {
          alert(
            'Password Not Strong Enough. Please Create A Password With At Least 6 Characters.'
          );
        } else if (errorCode === 'auth/invalid-email') {
          alert('Email Address Not Valid. Please Enter A Valid Email.');
        } else if (errorCode === 'auth/email-already-in-use') {
          alert('Email Already In Use. Please Sign In Instead.');
        }
      });
  }
});
