import { Song } from "./types" 

function ProcessContents(file: File): Promise<Song[]> {
   return new Promise((resolve, reject) => {
       const fileReader = new FileReader();
       
       fileReader.onload = (event) => {
           try {
               const contents = event?.target?.result as string;
               const jsonData = JSON.parse(contents);
               const songs: Song[] = jsonData.map((data: any) => DataToSong(data));
               //const cleanSongs = CleanSongs(songs);
               
               /*for (var i = 0; i < 50; i++) {
                   console.log(cleanSongs[i].uri);
                   console.log(cleanSongs[i].name);
                   console.log(cleanSongs[i].timeListened);
               }*/
               
               resolve(songs);
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
      timeListened: (+data.ms_played)/1000,
      plays: 1,
      streak: 1,
      firstListened: data.ts
   }
}

export default ProcessContents