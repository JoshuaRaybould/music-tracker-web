import { useState } from "react";
import FileInput from "./components/FileInput";
import { Song } from "./types";
import BorderedTable from "./components/BorderedTable";
import ArtistBorderedTable from "./components/ArtistBorderedTable";
import songsToAlbums from "./albumLogic";

function App() {
   const [songs, setSongs] = useState<Song[]>([]);

   function addSongs(curSongs: Song[]) {
      setSongs((currentSongs) => {
         return [...currentSongs, ...curSongs];
      });
   }

   const albums = songsToAlbums(songs);
   const artists = songsToAlbums(songs);

   return (
      <div>
         <FileInput addSongs={addSongs} />
         <BorderedTable
            items={songs}
            firstCol={"Song"}
            secondCol={"Artist"}
            thirdCol={"Time Listened"}
         ></BorderedTable>
         <BorderedTable
            items={albums}
            firstCol={"Album"}
            secondCol={"Artist"}
            thirdCol={"Time Listened"}
         ></BorderedTable>
         <ArtistBorderedTable
            items={artists}
            firstCol={"Artist"}
            secondCol={"Time Listened"}
         ></ArtistBorderedTable>
      </div>
   );
}

export default App;
