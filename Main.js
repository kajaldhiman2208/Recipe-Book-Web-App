import React,{useEffect,useState} from 'react';
import Maincss from './Main.module.css';
import UploadsList from '../components/UploadList';
import { BACKEND_URI } from '../config/constants';
import axios from 'axios';
import {UseNavigate, useNavigate } from "react-router-dom";


function Main() {
  const navigate=useNavigate();
    // const [backendData,setBackendData]=useState([{}])

    // useEffect(()=>{
    //   fetch("/api").then(
    //     response=>response.json()
    //   ).then(
    //     data=>{
    //       setBackendData(data)
    //     }
    //   )
    // },[])

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
      <>
    
        <div className={Maincss.App}>
        
        <header>
          <ul>
            <li className={Maincss.logo}>Logo</li>
            <li className={Maincss.search}><button  className={Maincss.input} onClick={()=> navigate ("/upload")}>Post</button></li>
            <li className={Maincss.signin}><button className={Maincss.button} onClick={()=> navigate ("/signup")}><b>SIGN UP</b></button></li>
            <li><button className={Maincss.button} onClick={()=> navigate ("/login")}><b>LOGIN</b></button></li>
          </ul>
        </header>
    
        <div className={Maincss.mainhead}>
          <h1>Health Is The Recipe, <br /><span className={Maincss.sechead}>and you're the chief of your well-being.</span></h1>
        </div>
    
    
      
    </div>
    
    <div className={Maincss.sideone}>
    <UploadsList medias={medias} />
    
      
    </div>
    
    <div className={Maincss.third}>


      <div className={Maincss.thirdone}>
        <div className={Maincss.imageone}></div>
        
          <button className={Maincss.readmore} onClick={()=> navigate ("/detail") } >READ MORE</button>
        
      </div>
      <div className={Maincss.thirdone}>
      <div className={Maincss.imagetwo}></div>
        
        <button className={Maincss.readmore} onClick={()=> navigate ("/detail2")}>READ MORE</button>
      </div>
      <div className={Maincss.thirdone}>
      <div className={Maincss.imagethree}></div>
        
        <button className={Maincss.readmore} onClick={()=> navigate ("/login")}>READ MORE</button>
      </div>
      <div className={Maincss.thirdone}>
      <div className={Maincss.imagefour} onClick={()=> navigate ("/login")}></div>
        
        <button className={Maincss.readmore}>READ MORE</button>
      </div>
    </div>
    </>
  )
}

export default Main;
