function FileInput() {
   const onChange = (
      event: React.ChangeEvent<HTMLInputElement | HTMLAreaElement>
   ) => {
      const files = (event.target as HTMLInputElement).files;

      console.log(files);
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
            onChange={onChange}
         />
      </div>
   );
}

export default FileInput;
