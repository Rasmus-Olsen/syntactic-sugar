const ArrowFunctions = () => {
  //Old
  //   const arr = [1, 2, 3, 4, 5];

  //   const doubled = arr.map(function (num) {
  //     return num * 2;
  //   });

  //   console.log(doubled);

  //New
  const arr = [1, 2, 3, 4, 5];

  const doubled = arr.map((num) => num * 2);

  console.log(doubled);

  //Return
  return <div></div>;
};

export default ArrowFunctions;
