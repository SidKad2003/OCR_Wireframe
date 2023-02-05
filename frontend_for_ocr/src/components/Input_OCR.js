import React, { useState } from "react";
import axios from 'axios';
import { useEffect } from "react";

const setgo = (sendme) => {
  axios.put("http://localhost:3001/incoming", sendme)
  // console.log(sendme.name)
}
const UploadAndDisplayImage = () => {
  const [data, setdata] = useState([])
  useEffect(() => {
    getusers(); 
  }, [])

  const getusers = async () => {
    const response = await axios.get("http://localhost:3001/home")
    if (response.status === 200) {
      setdata(response.data);
    } 
  }
  
  const [selectedImage, setSelectedImage] = useState(null);
  return (
    <div>
      <h1>Upload and Display Image usign React Hooks</h1>
      <p>{data}</p>
      {selectedImage && (
        <div>
          <img alt="not found" width={"250px"} src={URL.createObjectURL(selectedImage)} />
          {/* {console.log((selectedImage), "1233")} */}
          <br />
          <button onClick={() => setSelectedImage(null)}>Remove</button>
        </div>
      )}
      <br />
      <br />
      <input
        type="file"
        name="myImage"
        onChange={(event) => {
          console.log(event.target.files[0]);
          setSelectedImage(event.target.files[0]);
        }}
      />
      {/* {console.log(selectedImage)} */}
      <button onClick={() => setgo(selectedImage)}>Upload</button>
    </div>
  );
};
export default UploadAndDisplayImage;