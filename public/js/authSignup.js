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
    $("#passwordDialog").show();
    $("#passwordConfirm").click(function(){
      $("#passwordDialog").css("display", "none");
    });
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
          tasks: [],
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
          $("#weakDialog").show();
          $("#weakConfirm").click(function(){
            $("#weakDialog").css("display", "none");
          });
        } else if (errorCode === 'auth/invalid-email') {
          $("#invalidDialog").show();
          $("#invalidConfirm").click(function(){
            $("#invalidDialog").css("display", "none");
          });
        } else if (errorCode === 'auth/email-already-in-use') {
          $("#emailDialog").show();
          $("#emailConfirm").click(function(){
            $("#emailDialog").css("display", "none");
          });
        }
      });
  }
});
