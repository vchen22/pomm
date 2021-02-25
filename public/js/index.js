// put pomms on tree based on user points
const setupTree = (user) => {
  if (user) {
    const pointRef = db.collection('users').doc(user.uid);
    const doc = pointRef.get();
    console.log(doc);
  } else {
    console.log('user not logged in');
  }
};
