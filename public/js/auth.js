// get data
db.collection('users')
  .get()
  .then((snapshot) => {
    setupTree(snapshot.docs);
  });

// listen for auth status changes
auth.onAuthStateChanged((user) => {
  if (user) {
    // logged in
    console.log('user logged in: ', user);
  } else {
    // logged out
    console.log('user signed out');
  }
});

// sign up
const signupForm = document.querySelector('#signup-form');

signupForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // get user info
  const email = signupForm['signup-email'].value;
  const password = signupForm['signup-password'].value;

  // sign up the user
  auth
    .createUserWithEmailAndPassword(email, password)
    .then((cred) => {
      return db.collection('users').doc(cred.user.uid).set({
        points: 0,
      });
    })
    .then(() => {
      $('.close').click();
      signupForm.reset();
    });
});

// sign in
const signinForm = document.querySelector('#signin-form');

signinForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // get user info
  const email = signinForm['signin-email'].value;
  const password = signinForm['signin-password'].value;

  // sign in the user
  auth.signInWithEmailAndPassword(email, password).then((cred) => {
    $('.close').click();
    signinForm.reset();
  });
});

// logout
const logout = document.querySelector('#logout');

logout.addEventListener('click', (e) => {
  e.preventDefault();
  auth.signOut();
});
