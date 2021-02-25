// listen for auth status changes
var authFlag = true;
auth.onAuthStateChanged((user) => {
  if (authFlag) {
    authFlag = false;
    if (user) {
      // logged in
      console.log(user);
      window.location.replace('/home');
    } else {
      // logged out
      window.location.replace('/');
    }
  }
});
