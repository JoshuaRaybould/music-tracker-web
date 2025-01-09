import { Album, Song } from "./types";


function songsToAlbums(songs : Song[]): Album[] {
   const albums : Album[] = []

   for (const song of songs) {
      let albumFound = false;
      for (const album of albums) {
         if (song.album === album.name && song.artist === album.artist) {
            albumFound = true;
            album.timeListened += song.timeListened;
            album.plays +=  song.plays;
            album.firstListened = (album.firstListened < song.firstListened) ? album.firstListened : song.firstListened;
            break;
         }
      }
      if (!albumFound) {
         albums.push(songToAlbum(song));
      }
   }

   albums.sort((a, b) => (a.timeListened < b.timeListened ? 1 : -1));

   return albums;
}

function songToAlbum(song : Song) : Album {
   return {
      name: song.album,
      artist: song.artist,
      timeListened: song.timeListened,
      streak: 1,
      plays: song.plays,
      firstListened: song.firstListened
   }
}

export default songsToAlbums