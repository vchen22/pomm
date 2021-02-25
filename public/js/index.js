// put pomms on tree based on user points
const setupTree = (data) => {
  data.forEach((doc) => {
    const points = doc.data();
    console.log(points);
  });
};
