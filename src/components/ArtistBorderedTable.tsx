import { useState } from "react";
import { Artist } from "../types";
import "../App.css";

interface Props {
   firstCol: String;
   secondCol: String;
   items: Artist[];
}

function ArtistBorderedTable({ items, firstCol, secondCol }: Props) {
   /* handles click event
   const handleClick = (event: React.MouseEvent<HTMLElement>) =>
      console.log(event.clientX);*/
   const [search, setSearch] = useState("");

   return (
      <>
         <form className="form-control">
            <label>Search</label>
            <input
               className="input-group"
               type="text"
               value={search}
               onChange={(e) => setSearch(e.target.value)}
            ></input>
         </form>

         <div className="tableContainer">
            <table className="table table-bordered">
               <thead>
                  <tr>
                     <th scope="col">{firstCol}</th>
                     <th scope="col">{secondCol}</th>
                  </tr>
               </thead>
               <tbody>
                  {items
                     .filter((item) => {
                        return search === ""
                           ? item
                           : item.name
                                .toLowerCase()
                                .includes(search.toLowerCase());
                     })
                     .map((item) => (
                        <tr key={item.name + " " + item.timeListened}>
                           <td>{item.name}</td>
                           <td>{formatTimeListened(item.timeListened)}</td>
                        </tr>
                     ))}
               </tbody>
            </table>
         </div>
      </>
   );
}

function formatTimeListened(timeListened: number): string {
   let seconds: number = Math.floor(timeListened % 60);
   let minutes: number = Math.floor((timeListened / 60) % 60);
   let hours: number = Math.floor(timeListened / 3600);

   if (hours === 0) {
      return minutes + " minutes and " + seconds + " seconds";
   }
   return hours + " hours and " + minutes + " minutes";
}

export default ArtistBorderedTable;
