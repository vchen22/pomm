// document.getElementById('end-button').addEventListener('click', endListener);

$('#end-button').click(endListener);

function endListener(e) {
  e.preventDefault();

  auth.onAuthStateChanged((user) => {
    //console.log(totalMinutes);
    if (user) {
      db.collection('users')
        .doc(user.uid)
        .get()
        .then((doc) => {
          let dbMinutes = doc.data().minutes;
          let dbPomms = doc.data().pomms;
          let dbSessions = doc.data().sessions;

          let newMinutes = dbMinutes + totalMinutes;

          if (newMinutes > 0) {
            dbPomms = 1;
          }
          if (newMinutes > 20) {
            dbPomms = 2;
          }
          if (newMinutes > 40) {
            dbPomms = 3;
          }
          if (newMinutes > 60) {
            dbPomms = 4;
          }
          if (newMinutes > 80) {
            dbPomms = 5;
          }
          if (newMinutes > 100) {
            dbPomms = 6;
          }
          if (newMinutes > 120) {
            dbPomms = 7;
          }
          if (newMinutes > 140) {
            dbPomms = 8;
          }
          if (newMinutes > 160) {
            dbPomms = 9;
          }
          if (newMinutes > 180) {
            dbPomms = 10;
          }
          dbSessions++;

          db.collection('users')
            .doc(user.uid)
            .update({
              minutes: newMinutes,
              pomms: dbPomms,
              sessions: dbSessions,
            })
            .then(() => {
              localStorage.setItem('totalMinutes', totalMinutes);
              localStorage.setItem('totalTasks', totalTasks);
              window.location.href = '/results';
            });
        });
    } else {
      console.log('user not logged in');
    }
  });
}
