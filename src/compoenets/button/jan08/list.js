 const ListComponent = () => {
  const details = {
    ListItems: ["apple", "banana", "mango", "orange", "watermelon"],
    ListItems1: [1, 2, 3, 4, 5, 6, 6, 6]
  };
  return (
    <>
      <ol>
        <li>{details.ListItems[0]}</li>
        <li>{details.ListItems[1]}</li>
        <li>{details.ListItems[2]}</li>
        <li>{details.ListItems[3]}</li>
        <li>{details.ListItems[4]}</li>
      </ol>
      <ul>
        <li>{details.ListItems1[0]}</li>
        <li>{details.ListItems1[1]}</li>
        <li>{details.ListItems1[2]}</li>
        <li>{details.ListItems1[3]}</li>
       <li>{details.ListItems1[4]}</li>
      </ul>
    </>
  );
};
export default ListComponent