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
                  {item.name + " " + formatTimeListened(item.timeListened)}
               </li>
            ))}
         </ul>
      </>
   );
}

function formatTimeListened(timeListened: number): string {
   let seconds: number = Math.floor(timeListened % 60);
   let minutes: number = Math.floor((timeListened / 60) % 60);
   let hours: number = Math.floor((timeListened / 3600) % 60);

   if (hours === 0) {
      return minutes + " minutes and " + seconds + " seconds";
   }
   return hours + " hours and " + minutes + " minutes";
}

export default ListGroup;
