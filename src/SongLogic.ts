import { Song } from "./types";

function CleanSongs(songs : Song[]) : Song[] {
   const cleanSongs : Song[] = [];
   var prevSong = null;
   var curStreak = 1;
   for (const song of songs) {
      if (song.name === null || song.timeListened == null || song.timeListened < 20) {
         continue;
      }
      var songFound = false;
      for (const cleanedSong of cleanSongs) {
         if (cleanedSong.name === song.name && cleanedSong.artist === song.artist) {
            songFound = true;
            cleanedSong.timeListened += song.timeListened;
            cleanedSong.plays += song.plays;

            if (prevSong != null && prevSong.uri == song.uri) {
               curStreak++;
            } else {
               curStreak = 1;
            }

            cleanedSong.streak = (cleanedSong.streak > curStreak) ? cleanedSong.streak : curStreak;
            cleanedSong.firstListened = (cleanedSong.firstListened < song.firstListened) ? cleanedSong.firstListened : song.firstListened; 

            break;
         }
      }
      if (!songFound) {
         cleanSongs.push(song);
      }

      prevSong = song;
   }

   cleanSongs.sort((a, b) => (a.timeListened < b.timeListened ? 1 : -1));

   return cleanSongs;
}

export default CleanSongs