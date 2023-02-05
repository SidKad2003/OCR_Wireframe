import React, { useState, useEffect } from "react";
import axios from "axios";

// const TableOCR = () => {
    //   const [responseData, setResponseData] = useState(null);
    
  
//     const fetchData = async (e) => {
//       try {
//         const response = await axios.post(
    //           "https://api.nanonets.com/v2/OCR/Model/5a29a63c-ac53-4e7e-bb33-c6f7b4f91ac3/LabelFile/",
    //           {
        //             file: e.target.image.files[0],
//             modelId: "5a29a63c-ac53-4e7e-bb33-c6f7b4f91ac3",
//             api_key: "698975ac-a4c0-11ed-8eea-2e320c0c3d43"
//           }
//         );
//         setResponseData(response.data);
//       } catch (error) {
    //         console.error(error);
    //       }
    //     };

    
const TableOCR = () => {
    const [responseData, setResponseData] = useState(null);
    console.log("hey")
    const fetchData = async (e) => {
        console.log("CLICKED")
        e.preventDefault();
        const formData = new FormData();
        formData.append("file", e.target.image.files[0]);
        formData.append("modelId", "5a29a63c-ac53-4e7e-bb33-c6f7b4f91ac3");
        formData.append("api_key", "698975ac-a4c0-11ed-8eea-2e320c0c3d43");
        
        try {
          const response = await axios.post(
            "https://api.nanonets.com/v2/OCR/Model/5a29a63c-ac53-4e7e-bb33-c6f7b4f91ac3/",
            formData
            );
            setResponseData(response.data);
        } catch (error) {
          console.error(error);
        }
        
    }
    return (
      <div>
        {responseData ? (
          <div>
            {responseData}
            </div>
            ) : (
            <div>Loading...</div>
        )}
          <form onSubmit={fetchData}>
              <input type="file" name="image" accept="image/*" required />
              <button type="submit">Extract Text</button>
          </form>
          {/* <p>"sadasd"</p> */}
      </div>
    );
}
export default TableOCR;
