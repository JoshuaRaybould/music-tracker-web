import { Album, Song } from "./types";


function songsToAlbums(songs : Song[]): Album[] {
   const albums : Album[] = []

   for (const song of songs) {
      let albumFound = false;
      for (const album of albums) {
         if (song.album === album.name && song.artist === album.artist) {
            albumFound = true;
            album.timeListened = album.timeListened +song.timeListened;
            break;
         }
         if (!albumFound) {
            albums.push(songToAlbum(song));
         }
      }
   }

   return albums;
}

function songToAlbum(song : Song) : Album {
   return {
      name: song.name,
      artist: song.artist,
      timeListened: song.timeListened
   }
}

export default songsToAlbums