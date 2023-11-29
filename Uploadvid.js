import React,{useState,useEffect} from 'react';
import UploadForm from "./components/UploadForm";
import UploadsList from './components/UploadList';
import { BACKEND_URI } from './config/constants';
import axios from 'axios';


const Uploadvid=()=> {

  const [medias,setMedias]=useState([]);

  useEffect(()=>{
    getAllMedias();
  }, []);

  const getAllMedias=()=>{
    axios.get(`${BACKEND_URI}/api/v1/media/all`).then((result)=>{
        setMedias(result.data);
    }).catch((error) =>{
      setMedias([]);
      console.log(error.response);
      alert("Error happened");
    });
  };
  return (
    <div >
      <div className="row" 
      style={{
        backgroundColor:"#3B3F46",
        height:"100vh",
        width:"100vw",
        position:"absolute",
    }}>
        <div className="col-md-6">
            <div
            className="card"
            style={{
                height:"65vh",
                width:"30vw",
                margin:"40px",
             backgroundColor:"#FED053",
                marginLeft:"340px",
                border:"2px solid white",
                borderRadius:"30px",
                color:"white",
                position:"absolute",
                transform:"translate(50%,20%)",
            }}>

                <div className="card-body"><UploadForm getAllMedias={getAllMedias}/></div>
            </div>
        </div>
        <div className="col-md-6">
            {/* <div
            className="card"
            style={{
                height:"auto",
                width:"800px",
                margin:"40px",
                border:"1px solid black",
            }}>

                <div className="card-body"><UploadsList medias={medias}/></div>
            </div> */}
        </div>
      </div>
    </div>
  );
};

export default Uploadvid;
