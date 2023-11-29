import './App.css';
import React,{useEffect,useState} from 'react';
import { BrowserRouter ,Route ,Routes} from 'react-router-dom';
import UploadVid from './Uploadvid';
import Main from './MainPage/Main';
import Login from './loginandsignin/Login';
import Signup from './loginandsignin/Signup';
import Home from './loginandsignin/Home';
import Detail from './Detail/Detail';
import Detail2 from './Detail/Detail2';


const App =()=> {
return(
 <div>

      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/upload" element={<UploadVid/>}></Route>
        <Route path="/detail" element={<Detail/>}></Route>
        <Route path="/detail2" element={<Detail2/>}></Route>



        </Routes>
        </BrowserRouter>
     
    </div>
  );
}

export default App;
