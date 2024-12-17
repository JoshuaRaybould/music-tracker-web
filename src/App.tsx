import { useState } from "react";
import FileInput from "./components/FileInput";
import { Song } from "./types";
import ListGroup from "./components/ListGroup";

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
      </div>
   );
}

export default App;
