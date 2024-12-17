type Song = {
   uri: string,
   name: string,
   artist: string,
   album: string,
   timeListened: number
}

function ProcessContents(file : File){
   const fileReader = new FileReader();
   fileReader.onload = (event) => {
      const contents = event?.target?.result as string;
      const jsonData = JSON.parse(contents);

      const songs: Song[] = jsonData.map((data: any) => CleanSongData(data));
      console.log(songs[0].uri);
      
      // do something with the file contents here
   };
   
   const conts = fileReader.readAsText(file)
}

function CleanSongData(data : any) {
   return {
      uri: data.spotify_track_uri,
      name: data.master_metadata_track_name,
      artist: data.master_metadata_album_artist_name,
      album: data.master_metadata_album_album_name,
      timeListened: data.ms_played
   }
}

export default ProcessContents