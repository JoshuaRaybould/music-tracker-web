function FileInput() {
   const onChange = (e: React.FormEvent<HTMLInputElement>): void => {
      let files: FileList | null = e.currentTarget.files;
      if (files) {
         // Check if files is not null
         Array.from(files).forEach((file) => {
            console.log("Do something with " + file.name);
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
