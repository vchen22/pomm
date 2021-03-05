// document.getElementById('add-btn').addEventListener('click', addTask);

$("#add-btn").click(addTask);


function addTask(e) {
  e.preventDefault();

  // let data = document.getElementById('task-input').value;
  let data = $('#task-input').val();

  auth.onAuthStateChanged((user) => {
    //console.log(data);
    if (user) {
      db.collection('users')
        .doc(user.uid)
        .get()
        .then((doc) => {
          let dbTasks = doc.data().tasks;

          if (dbTasks.length >= 9) {
            alert(
              'Maximum number of tasks added. Please remove some to add more.'
            );
          } else {
            dbTasks.push(data);

            db.collection('users')
              .doc(user.uid)
              .update({
                tasks: dbTasks,
              })
              .then(() => {
                //console.log('done');
                document.getElementById('add-task-form').reset();
                //location.reload();
              });
          }
        });
    } else {
      console.log('user not logged in');
    }
  });
}

function handleRemove(num) {
  auth.onAuthStateChanged((user) => {
    if (user) {
      db.collection('users')
        .doc(user.uid)
        .get()
        .then((doc) => {
          let dbTasks = doc.data().tasks;

          //console.log(dbTasks);

          // remove from db
          //const index = dbTasks.indexOf(0);
          dbTasks.splice(num, 1);

          //console.log(dbTasks);

          db.collection('users').doc(user.uid).update({
            tasks: dbTasks,
          });
        });
    } else {
      console.log('user not logged in');
    }
  });
}
