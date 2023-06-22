import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForms from "./components/TextForms";


function App() {

  const[mode , setMode] = useState('light');  //  tells whether dark mode is enable or not

  let light={
    backgroundColor:'blue'
  }

  function disable(){
    document.body.style.backgroundColor= 'blue';
  }


  return (
    <>

    <Navbar logo="TextUtils" aboutSec="About Us" mode={mode}  ></Navbar>
    <TextForms></TextForms>






    </>
  );
}

export default App;
