import ProcessContents from "../processData";
import { Song } from "../types";

interface Props {
   addSongs: (curSongs: Song[]) => void;
}

function FileInput({ addSongs }: Props) {
   const onChange = (e: React.FormEvent<HTMLInputElement>): void => {
      let files: FileList | null = e.currentTarget.files;
      if (files) {
         // Check if files is not null
         Array.from(files).forEach(async (file) => {
            if (file) {
               if (file.type !== "application/json") {
                  console.error(
                     "Expected a json file but got a " + file.type + " file"
                  );
               } else {
                  const curSongs = await ProcessContents(file);
                  addSongs(curSongs);
               }
            } else {
               console.error("File could not be uploaded. Please try again.");
            }
         });
      } else {
         console.log("No files selected");
      }
   };

   return (
      <div className="mb-3">
         <label htmlFor="formFileMultiple" className="form-label">
            Upload your files
         </label>
         <input
            className="form-control"
            type="file"
            id="formFileMultiple"
            multiple
            accept=".json"
            onChange={onChange}
         />
      </div>
   );
}

export default FileInput;
