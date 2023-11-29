import React, { useState } from "react";
import axios from "axios";
import { BACKEND_URI } from "../config/constants";

const UploadForm = ({getAllMedias}) => {
  const [name, setName] = useState("");
  const [videos, setVideos] = useState([]);

  
  

  const handleSubmit = (e) => {
    e.preventDefault();

    let formdata = new FormData();
    for (let i in videos) {
      formdata.append("videos", videos[i]);
    }
    formdata.append("name", name);
   
    
    
    axios.post(`${BACKEND_URI}/api/v1/media/create`,formdata).then(success => {
      getAllMedias();
        alert('Submitted successfully');
    }).catch(error=>{
      console.error('Axios Error:', error);
        
        alert("Error happened");
        console.log(error);
    })
  
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
       
        <div className="form-grp"
        style={{
          textAlign:"center",
        }}>
          <label htmlFor="videos" 
           style={{
            position:"absolute",
            transform:"translate(-60%,480%)",
            textAlign:"center",
            alignItems:"center",
          }}>Upload Videos</label>
          <br />
          <div 
           style={{
            position:"absolute",
            transform:"translate(60%,480%)",
            textAlign:"center",
            alignItems:"center",
          }}>
          <input
         
          placeholder="Upload files here"
            type="file"
            name="videos"
            id="videos"
            multiple
            className="form-control"
            accept=".mp4, .webm"
            onChange={(e) => {
              setVideos(e.target.files);
            }}
            
          />
          </div>
        </div>
        <div className="form-grp"
         style={{
          textAlign:"center",
        }}>
          <label htmlFor="name"
           style={{
            position:"absolute",
            transform:"translate(-40%,1560%)",
          }}
          >Description</label>
          <br />
        
          <textarea  cols="40" rows="6" 
          style={{
            transform:"translate(0%,340%)",
          }}
           type="textarea"
           name="name"
           id="name"
           className="text-area"
         
           onChange={(e) => setName(e.target.value)}></textarea>
        </div>
       

        <button className="btn" type="submit"
        style={{
          transform:"translate(230%,1160%)",
          height:"30px",
          width:"90px",
          borderRadius:"20px",
        }}>
          Submit
        </button>
      </form>
    </>
  );
};

export default UploadForm;
