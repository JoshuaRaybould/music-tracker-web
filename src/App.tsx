import { useState } from "react";
import FileInput from "./components/FileInput";
import { Song } from "./types";
import BorderedTable from "./components/BorderedTable";
import ArtistBorderedTable from "./components/ArtistBorderedTable";
import songsToAlbums from "./albumLogic";
import songsToArtists from "./artistLogic";
import CleanSongs from "./SongLogic";

function App() {
   const [songs, setSongs] = useState<Song[]>([]);

   function addSongs(curSongs: Song[]) {
      setSongs((currentSongs) => {
         return CleanSongs([...currentSongs, ...curSongs]);
      });
   }

   const albums = songsToAlbums(songs);
   const artists = songsToArtists(songs);

   return (
      <div>
         <FileInput addSongs={addSongs} />
         <BorderedTable
            items={songs}
            firstCol={"Song"}
            secondCol={"Artist"}
            fifthColVisible={true}
         ></BorderedTable>
         <BorderedTable
            items={albums}
            firstCol={"Album"}
            secondCol={"Artist"}
            fifthColVisible={false}
         ></BorderedTable>
         <ArtistBorderedTable items={artists}></ArtistBorderedTable>
      </div>
   );
}

export default App;
