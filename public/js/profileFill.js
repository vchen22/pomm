auth.onAuthStateChanged((user) => {
  if (user) {
    db.collection('users')
      .doc(user.uid)
      .get()
      .then((doc) => {
        let firstName = doc.data().firstName;
        let lastName = doc.data().lastName;
        let fullName = firstName + ' ' + lastName;
        let sessions = doc.data().sessions;
        let pomms = doc.data().pomms;
        let minutes = doc.data().minutes;
        let nameHTML = `
        <h1 id="name">${fullName}</h1>
        `;
        let sessionsHTML = `
        <p id="sessions">${sessions}</p>
        `;
        let pommsHTML = `
        <p id="pomms">${pomms}</p>
        `;
        let minutesHTML = `
        <p id="minutes">${minutes}</p>
        `;
        document.getElementById('name').innerHTML = nameHTML;
        document.getElementById('sessions').innerHTML = sessionsHTML;
        document.getElementById('pomms').innerHTML = pommsHTML;
        document.getElementById('minutes').innerHTML = minutesHTML;
      });
  } else {
    console.log('user signed out');
  }
});
