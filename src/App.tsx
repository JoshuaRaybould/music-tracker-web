import { useState } from "react";
import FileInput from "./components/FileInput";
import { Song } from "./types";
import BorderedTable from "./components/BorderedTable";

function App() {
   const [songs, setSongs] = useState<Song[]>([]);

   function addSongs(curSongs: Song[]) {
      setSongs((currentSongs) => {
         return [...currentSongs, ...curSongs];
      });
   }

   return (
      <div>
         <FileInput addSongs={addSongs} />
         <BorderedTable items={songs}></BorderedTable>
      </div>
   );
}

export default App;
