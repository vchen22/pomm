const fileInput = document.getElementById('file-input');

fileInput.onchange = () => {
  const selectedFile = fileInput.files[0];
  // Get current username
  var user = firebase.auth().currentUser;

  // Create a Storage Ref w/ username
  //var storageRef = firebase.storage().ref('users/' + user.uid + '/profile.jpg');
  var storageRef = firebase.storage().ref('users/' + user.uid + '/profile.jpg');

  // Delete existing file
  storageRef
    .delete()
    .then(() => {
      //console.log('file deleted');

      // Upload file
      var task = storageRef.put(selectedFile).then(() => {
        auth.onAuthStateChanged((user) => {
          if (user) {
            db.collection('users').doc(user.uid).update({
              profilePicture: true,
            });
          } else {
            console.log('user not logged in');
          }
        });

        $("#successDialog").show();
          $("#successConfirm").click(function(){
            $("#successDialog").css("display", "none");
            db.collection('users')
            .doc(user.uid)
            .update({
              profilePicture: true,
            })
            .then(() => {
              location.reload();
            });
          });
      });
    })
    .catch((error) => {
      //console.log('nothing to delete');

      // Upload file
      var task = storageRef.put(selectedFile).then(() => {
        auth.onAuthStateChanged((user) => {
          if (user) {
            db.collection('users').doc(user.uid).update({
              profilePicture: true,
            });
          } else {
            console.log('user not logged in');
          }
        });

        $("#successDialog").show();
          $("#successConfirm").click(function(){
            $("#successDialog").css("display", "none");
              db.collection('users')
              .doc(user.uid)
              .update({
                profilePicture: true,
              })
              .then(() => {
                location.reload();
              });
          });
      });
    });
};
