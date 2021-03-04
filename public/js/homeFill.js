auth.onAuthStateChanged((user) => {
  if (user) {
    db.collection('users')
      .doc(user.uid)
      .get()
      .then((doc) => {
        let firstName = doc.data().firstName;
        //let lastName = doc.data().lastName;
        //let fullName = firstName + ' ' + lastName;
        //let sessions = doc.data().sessions;
        //let pomms = doc.data().pomms;
        let minutes = doc.data().minutes;

        let greeting = `<h3 class="pomm-counter" id="greeting">Welcome, ${firstName}<h3>`;

        document.getElementById('greeting').innerHTML = greeting;

        if (minutes > 0) {
          document.getElementById('pomm1').style.visibility = 'visible';
        }
        if (minutes > 20) {
          document.getElementById('pomm2').style.visibility = 'visible';
        }
        if (minutes > 40) {
          document.getElementById('pomm3').style.visibility = 'visible';
        }
        if (minutes > 60) {
          document.getElementById('pomm4').style.visibility = 'visible';
        }
        if (minutes > 80) {
          document.getElementById('pomm5').style.visibility = 'visible';
        }
        if (minutes > 100) {
          document.getElementById('pomm6').style.visibility = 'visible';
        }
        if (minutes > 120) {
          document.getElementById('pomm7').style.visibility = 'visible';
        }
        if (minutes > 140) {
          document.getElementById('pomm8').style.visibility = 'visible';
        }
        if (minutes > 160) {
          document.getElementById('pomm9').style.visibility = 'visible';
        }
        if (minutes > 180) {
          document.getElementById('pomm10').style.visibility = 'visible';
        }
      });
  } else {
    console.log('user not logged in');
  }
});
