import { useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';

function Upload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const handleSubmit = async (e) => {
e.preventDefault();
if (!selectedFile) {
  alert('Please select a file');
  return;
}
const formData = new FormData();
formData.append('csvFile', selectedFile);
try {
  await axios.post("http://localhost:3500/uploadcsv/", formData);
  console.log("File uploaded successfully!");
} catch (error) {
  console.error("Error uploading file:", error);
}
};



return (
<div className="upload-container">
<form onSubmit={handleSubmit}>
  <label htmlFor="fileInput">INSERT FILE : </label>
  <input type='file' id="fileInput" onChange={(e) => setSelectedFile(e.target.files[0])} />
  <button type='submit'>Upload</button>
</form>
<p align="center">Reload the page to view data here or Click below link</p>
<div align="center" >
    <Link to="/display">View Data Here</Link>
</div>
<p align="center">Reload the page to view data here</p>
{/* <Viewdata/> */}
</div>
);
}

export default Upload;