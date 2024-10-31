const Destructions = () => {
  //Old
  //   const arr = [1, 2, 3, 4, 5];
  //   const first = arr[0];
  //   const second = arr[1];
  //   console.log(first, second) // 1 2

  //   const user = {
  //     id: 10001,
  //     name: 'Sam',
  //     email: 'sam74@gmail.com'
  //   };
  //   const name = user.name;
  //   console.log(name);

  //New
  const arr = [1, 2, 3, 4, 5];
  const [first, second] = arr;
  console.log(first, second); // 1 2

  const user = {
    id: 10001,
    name: "Sam",
    email: "sam74@gmail.com",
  };
  const { name } = user;
  console.log(name); //Sam

  //Return
  return <div></div>;
};

export default Destructions;
