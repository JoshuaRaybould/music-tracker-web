import { Song } from "./types" 

function ProcessContents(file: File): Promise<Song[]> {
   return new Promise((resolve, reject) => {
       const fileReader = new FileReader();
       
       fileReader.onload = (event) => {
           try {
               const contents = event?.target?.result as string;
               const jsonData = JSON.parse(contents);
               const songs: Song[] = jsonData.map((data: any) => DataToSong(data));
               const cleanSongs = CleanSongs(songs);
               
               for (var i = 0; i < 50; i++) {
                   console.log(cleanSongs[i].uri);
                   console.log(cleanSongs[i].name);
                   console.log(cleanSongs[i].timeListened);
               }
               
               resolve(cleanSongs);
           } catch (error) {
               reject(error);
           }
       };

       fileReader.onerror = () => reject(fileReader.error);
       
       fileReader.readAsText(file);
   });
}

function DataToSong(data : any) {
   return {
      uri: data.spotify_track_uri,
      name: data.master_metadata_track_name,
      artist: data.master_metadata_album_artist_name,
      album: data.master_metadata_album_album_name,
      timeListened: (+data.ms_played)/1000
   }
}

function CleanSongs(songs : Song[]) : Song[] {
   const cleanSongs : Song[] = [];
   for (const song of songs) {
      if (song.name === null || song.timeListened == null || song.timeListened < 20) {
         continue;
      }
      var songFound = false;
      for (const cleanedSong of cleanSongs) {
         if (cleanedSong.uri === song.uri) {
            songFound = true;
            cleanedSong.timeListened = cleanedSong.timeListened +song.timeListened;
            break;
         }
      }
      if (!songFound) {
         cleanSongs.push(song);
      }
   }
   return cleanSongs;
}

export default ProcessContents