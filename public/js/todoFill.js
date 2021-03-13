auth.onAuthStateChanged((user) => {
  //console.log(totalMinutes);
  if (user) {
    db.collection('users')
      .doc(user.uid)
      .onSnapshot((doc) => {
        let dbTasks = doc.data().tasks;

        let listHTML = '';

        for (var i = 0; i < dbTasks.length; i++) {
          listHTML =
            listHTML +
            `<li class="shadow" id="list${i}">${dbTasks[i]} <button class="btn list-button" id="remove${i}">X</button></li>`;
        }

        //listHTML = listHTML + '</ul>';

        // document.getElementById('todoList').innerHTML = listHTML;
        $('#todoList').html(listHTML);

        try {
          document
            .getElementById('remove0')
            .addEventListener('click', function () {
                handleRemove(0);
            });
          document
            .getElementById('remove1')
            .addEventListener('click', function () {
              handleRemove(1);
            });
          document
            .getElementById('remove2')
            .addEventListener('click', function () {
              handleRemove(2);
            });
          document
            .getElementById('remove3')
            .addEventListener('click', function () {
              handleRemove(3);
            });
          document
            .getElementById('remove4')
            .addEventListener('click', function () {
              handleRemove(4);
            });
          document
            .getElementById('remove5')
            .addEventListener('click', function () {
              handleRemove(5);
            });
          document
            .getElementById('remove6')
            .addEventListener('click', function () {
              handleRemove(6);
            });
          document
            .getElementById('remove7')
            .addEventListener('click', function () {
              handleRemove(7);
            });
          document
            .getElementById('remove8')
            .addEventListener('click', function () {
              handleRemove(8);
            });
          document
            .getElementById('remove9')
            .addEventListener('click', function () {
              handleRemove(9);
            });
        } catch (error) {
          //console.log('Element does not exist');
        }
      });
  } else {
    console.log('user not logged in');
  }
});
