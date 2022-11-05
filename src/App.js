 
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
 



function App() {

  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null);

  const showAlert = (message , type)=>{

    setAlert({

      message : message,
      type : type
    })
    setTimeout(()=>{

      setAlert(null)
    },1500)

  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor="#042745"
      showAlert("Dark mode has been enabled !", "success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor="white"
      showAlert("Light mode has been enabled !", "success")
    
    }
  }
  return (
    <>
     <Router>
          <Navbar title='TextUtils' homeText='Home' aboutText='About us' mode={mode} toggleMode={toggleMode}/>
          <Alert alert={alert}/>
          <div className="container">
            <Routes>
              <Route path="/about" element={<About mode={mode}/> }>
              </Route>
              <Route path="/" element={<Textform heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />}>
              </Route>
            </Routes>
          </div>       
         
          
     </Router>
      
       
        
   
    </>
  );
}

export default App;
