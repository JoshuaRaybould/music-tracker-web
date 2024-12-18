import { Album, Song } from "../types";
import "../App.css";

interface Props {
   firstColTitle: string;
   items: Song[] | Album[];
}

function BorderedTable({ items, firstColTitle }: Props) {
   /* handles click event
   const handleClick = (event: React.MouseEvent<HTMLElement>) =>
      console.log(event.clientX);*/

   return (
      <div className="tableContainer">
         <table className="table table-bordered">
            <thead>
               <tr>
                  <th scope="col">{firstColTitle}</th>
                  <th scope="col">Artist</th>
                  <th scope="col">Time listened</th>
               </tr>
            </thead>
            <tbody>
               {items.map((item) => (
                  <tr key={item.name + " " + item.artist}>
                     <td>{item.name}</td>
                     <td>{item.artist}</td>
                     <td>{formatTimeListened(item.timeListened)}</td>
                  </tr>
               ))}
            </tbody>
         </table>
      </div>
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

export default BorderedTable;
