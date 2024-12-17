import { Song } from "../types";

interface Props {
   items: Song[];
}

function ListGroup({ items }: Props) {
   // handles click event
   const handleClick = (event: React.MouseEvent<HTMLElement>) =>
      console.log(event.clientX);

   return (
      <>
         <h1>songs</h1>
         {items.length === 0 && <p>No items found</p>}
         <ul className="list-group">
            {items.map((item) => (
               <li
                  className="list-group-item"
                  key={item.uri}
                  onClick={handleClick}
               >
                  {item.name}
               </li>
            ))}
         </ul>
      </>
   );
}

export default ListGroup;
