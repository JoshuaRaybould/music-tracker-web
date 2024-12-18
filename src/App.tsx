import { useState } from "react";
import FileInput from "./components/FileInput";
import { Song } from "./types";
import BorderedTable from "./components/BorderedTable";
import songsToAlbums from "./albumLogic";

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
         <BorderedTable items={songs} firstColTitle={"Song"}></BorderedTable>
         <BorderedTable
            items={songsToAlbums(songs)}
            firstColTitle={"Album"}
         ></BorderedTable>
      </div>
   );
}

export default App;
