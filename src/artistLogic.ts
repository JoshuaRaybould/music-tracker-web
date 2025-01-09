import { Artist, Song } from "./types";


function songsToArtists(songs : Song[]): Artist[] {
   const artists : Artist[] = []

   for (const song of songs) {
      let artistFound = false;
      for (const artist of artists) {
         if (song.artist === artist.name) {
            artistFound = true;
            artist.timeListened = artist.timeListened +song.timeListened;
            break;
         }
      }
      if (!artistFound) {
         artists.push(songToArtist(song));
      }
   }

   artists.sort((a, b) => (a.timeListened < b.timeListened ? 1 : -1));

   return artists;
}

function songToArtist(song : Song) : Artist {
   return {
      name: song.artist,
      timeListened: song.timeListened
   }
}

export default songsToArtists