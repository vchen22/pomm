// get data
// db.collection('users')
//   .get()
//   .then((snapshot) => {
//     setupTree(snapshot.docs);
//   });

// const navList = document.querySelector('.navbar-list');

// listen for auth status changes
// auth.onAuthStateChanged((user) => {
//   if (user) {
//     //     // logged in
//     console.log('user signed in');
//     //     // let loginBtn = document.getElementById('login-btn');
//     //     // let signupBtn = document.getElementById('signup-btn');
//     //     // loginBtn.remove();
//     //     // signupBtn.remove();
//     //     // document.getElementById('create-button').style.visibility = 'visible';
//     //     // document.getElementById('friend-btn').style.visibility = 'visible';
//     //     // document.getElementById('login-btn').style.visibility = 'hidden';
//     //     // document.getElementById('signup-btn').style.visibility = 'hidden';
//     //     // document.getElementById('logout-btn').style.visibility = 'visible';
//     //     db.collection('users')
//     //       .doc(user.uid)
//     //       .get()
//     //       .then((doc) => {
//     //         let firstName = doc.data().firstName;
//     //         let greeting = `
//     //         <h3 id="greeting-text">Welcome, ${firstName}</h3>
//     //         `;
//     //         document.getElementById('greeting-text').innerHTML = greeting;
//     //         let userPoints = doc.data().points;
//     //         console.log(userPoints);
//     //         if (userPoints > 0) {
//     //           document.getElementById('pomm1').style.visibility = 'visible';
//     //         }
//     //         // add more cases here and add ids
//     //       });
//     //     // let htmlFriends = `
//     //     //   <li class="nav-item">
//     //     //     <a href="/friends" class="btn btn-text">
//     //     //       Friends
//     //     //     </a>
//     //     //   </li>
//     //     //   `;

//     //     // let htmlLogout = `
//     //     //   <li class="nav-item" id="logout-btn">
//     //     // 			<button type="button" class="btn btn-text" id="logout">
//     //     // 				Logout
//     //     // 			</button>
//     //     //   </li>
//     //     // `;
//     //     // navList.innerHTML = htmlFriends + htmlLogout;
//   } else {
//     //     // let signoutBtn = document.getElementById('logout-btn');
//     //     // signoutBtn.remove();

//     //     // let htmlSignin = `
//     //     //   <li class="nav-item" id="login-btn">
//     //     //   <button type="button" class="btn btn-text" data-toggle="modal" data-target="#myModal">
//     //     //     Login
//     //     //   </button>
//     //     // </li>
//     //     //   `;
//     //     // let htmlSignup = `
//     //     //   <li class="nav-item" id="signup-btn">
//     //     // 				<button type="button" class="btn btn-text" data-toggle="modal" data-target="#myModal2">
//     //     // 					Sign Up
//     //     // 				</button>
//     //     // 			</li>
//     //     //   `;
//     //     // navList.innerHTML = htmlSignin + htmlSignup + htmlLogout;
//     //     // logged out
//     console.log('user signed out');
//     //     // let greeting = `
//     //     //     <h3 id="greeting-text">Please Sign In</h3>
//     //     //     `;
//     //     // document.getElementById('greeting-text').innerHTML = greeting;
//     //     // document.getElementById('create-button').style.visibility = 'hidden';
//     //     // document.getElementById('friend-btn').style.visibility = 'hidden';
//     //     // document.getElementById('login-btn').style.visibility = 'visible';
//     //     // document.getElementById('signup-btn').style.visibility = 'visible';
//     //     // document.getElementById('logout-btn').style.visibility = 'hidden';
//     //     // document.getElementById('pomm1').style.visibility = 'hidden';
//   }
// });

// sign up
// const signupForm = document.querySelector('#signup-form');

// signupForm.addEventListener('submit', (e) => {
//   e.preventDefault();

//   // get user info
//   const email = signupForm['signup-email'].value;
//   const password = signupForm['signup-password'].value;
//   const confirm = signupForm['signup-confirm'].value;
//   const first = signupForm['signup-first'].value;
//   const last = signupForm['signup-last'].value;

//   if (password !== confirm) {
//     alert("Passwords don't match!");
//   } else {
//     // sign up the user
//     auth
//       .createUserWithEmailAndPassword(email, password)
//       .then((cred) => {
//         return db.collection('users').doc(cred.user.uid).set({
//           firstName: first,
//           lastName: last,
//           points: 0,
//         });
//       })
//       .then(() => {
//         $('.close').click();
//         signupForm.reset();
//       });
//   }
// });

// sign in
const signinForm = document.querySelector('#signin-form');

signinForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // get user info
  const email = signinForm['inputEmail'].value;
  const password = signinForm['inputPassword'].value;

  // sign in the user
  auth
    .signInWithEmailAndPassword(email, password)
    .then((cred) => {
      //$('.close').click();
      signinForm.reset();
      console.log('redirect');
      window.location.href = '/home';
    })
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;

      if (errorCode === 'auth/user-not-found') {
        $("#authDialog").show();
        $("#authConfirm").click(function(){
          $("#authDialog").css("display", "none");
        })
      } else if (errorCode === 'auth/wrong-password') {
        $("#authDialog").show();
        $("#authConfirm").click(function(){
          $("#authDialog").css("display", "none");
        })
      }

      // ... look at all the possible Error codes in the doc to handle the different cases
    });
});

// logout
// const logout = document.querySelector('#logout');

// logout.addEventListener('click', (e) => {
//   e.preventDefault();
//   auth.signOut();
// });
