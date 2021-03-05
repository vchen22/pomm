// logout
// const logout = document.querySelector('#logout');

// logout.addEventListener('click', (e) => {
//   e.preventDefault();
//   auth.signOut();
//   window.location.href = '/logout';
// });

$('#logout').click( (e) => {
  e.preventDefault();
  auth.signOut();
  $(location).attr('href', './logout');
});
