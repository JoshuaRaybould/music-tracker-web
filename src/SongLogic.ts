import { Song } from "./types";

function CleanSongs(songs : Song[]) : Song[] {
   const cleanSongs : Song[] = [];
   for (const song of songs) {
      if (song.name === null || song.timeListened == null || song.timeListened < 20) {
         continue;
      }
      var songFound = false;
      for (const cleanedSong of cleanSongs) {
         if (cleanedSong.name === song.name && cleanedSong.artist === song.artist) {
            songFound = true;
            cleanedSong.timeListened = cleanedSong.timeListened +song.timeListened;
            break;
         }
      }
      if (!songFound) {
         cleanSongs.push(song);
      }
   }

   cleanSongs.sort((a, b) => (a.timeListened < b.timeListened ? 1 : -1));

   return cleanSongs;
}

export default CleanSongs