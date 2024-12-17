type Song = {
   uri: string,
   name: string,
   artist: string,
   album: string,
   timeListened: number
}

function ProcessContents(file : File) {
   const fileReader = new FileReader();
   fileReader.onload = (event) => {
      const contents = event?.target?.result;
      console.log(contents)
      return contents;
      // do something with the file contents here
   };
   fileReader.readAsText(file)
}

export default ProcessContents