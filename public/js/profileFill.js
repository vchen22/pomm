auth.onAuthStateChanged((user) => {
  if (user) {
    db.collection('users')
      .doc(user.uid)
      .get()
      .then((doc) => {
        let profileBool = doc.data().profilePicture;
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
        // document.getElementById('name').innerHTML = nameHTML;
        // document.getElementById('sessions').innerHTML = sessionsHTML;
        // document.getElementById('pomms').innerHTML = pommsHTML;
        // document.getElementById('minutes').innerHTML = minutesHTML;
        $("#name").html(nameHTML);
        $("#sessions").html(sessionsHTML);
        $("#pomms").html(pommsHTML);
        $("#minutes").html(minutesHTML);

        let pommProgress = pomms * 20 - doc.data().minutes;
        //console.log(pommProgress);

        // if (pommProgress < 0) {
        //   // progress-text
        //   document.getElementById('pomm-progress').style.width = '100%';
        //   document.getElementById(
        //     'progress-text'
        //   ).innerHTML = `<h2 id="progress-text">Max Pomms Achieved!</h2>`;
        // } else if (pommProgress < 5) {
        //   document.getElementById('pomm-progress').style.width = '75%';
        // } else if (pommProgress < 10) {
        //   document.getElementById('pomm-progress').style.width = '50%';
        // } else if (pommProgress < 15) {
        //   document.getElementById('pomm-progress').style.width = '25%';
        // } else {
        //   document.getElementById('pomm-progress').style.width = '0%';
        // }

        if (pommProgress < 0) {
          $('#pomm-progress').css("width", "100%");
          var maxHTML = `<h2 id="progress-text">Max Pomms Achieved!</h2>`;
          $('#progress-text').html(maxHTML);
        }
        else if (pommProgress < 5) {
          $('#pomm-progress').css("width", "75%");
        }
        else if (pommProgress < 10) {
          $('#pomm-progress').css("width", "50%");
        }
        else if (pommProgress < 15) {
          $('#pomm-progress').css("width", "25%");
        }
        else {
          $('#pomm-progress').css("width", "0%");
        }

        if (profileBool) {
          firebase
            .storage()
            .ref('users/' + user.uid + '/profile.jpg')
            .getDownloadURL()
            .then((imgUrl) => {
              // document.getElementById('pfp').src = imgUrl;
              $('#pfp').attr("src", imgUrl);
            });
        }
      });
  } else {
    console.log('user signed out');
  }
});
