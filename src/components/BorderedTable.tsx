import { Album, Song } from "../types";
import { useState } from "react";
import "../App.css";
import { useDebounce } from "use-debounce";

interface Props {
   firstCol: String;
   secondCol: String;
   items: Song[] | Album[];
   fifthColVisible: Boolean;
}

function BorderedTable({ items, firstCol, secondCol, fifthColVisible }: Props) {
   /* handles click event
   const handleClick = (event: React.MouseEvent<HTMLElement>) =>
      console.log(event.clientX);*/

   const [search, setSearch] = useState("");
   const debouncedInputValue = useDebounce(search, 400); // Debounce with 400ms delay

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
                     <th scope="col">Time Listened</th>
                     <th scope="col">Plays</th>
                     {fifthColVisible && <th scope="col">Longest Streak</th>}
                     <th scope="col">First Listen</th>
                  </tr>
               </thead>
               <tbody>
                  {items
                     .filter((item) => {
                        return debouncedInputValue[0] === ""
                           ? item
                           : item.name
                                .toLowerCase()
                                .includes(debouncedInputValue[0].toLowerCase());
                     })
                     .map((item) => (
                        <tr key={item.name + " " + item.artist}>
                           <td>{item.name}</td>
                           <td>{item.artist}</td>
                           <td>{formatTimeListened(item.timeListened)}</td>
                           <td>{item.plays}</td>
                           {fifthColVisible && <td>{item.streak}</td>}
                           <td>{formatTimeStamp(item.firstListened)}</td>
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

function formatTimeStamp(firstListened: EpochTimeStamp): string {
   return new Intl.DateTimeFormat("en-GB", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
   }).format(new Date(firstListened));
}

export default BorderedTable;
