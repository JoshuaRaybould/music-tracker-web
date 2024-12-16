function ListGroup() {
   let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

   // handles click event
   const handleClick = (event: React.MouseEvent<HTMLElement>) =>
      console.log(event.clientX);

   return (
      <>
         <h1>List</h1>
         {items.length === 0 && <p>No items found</p>}
         <ul className="list-group">
            {items.map((item) => (
               <li className="list-group-item" key={item} onClick={handleClick}>
                  {item}
               </li>
            ))}
         </ul>
      </>
   );
}

export default ListGroup;
