// import logo from './logo.svg';
import './App.css';
import TextForm from './components/TextForm';
import Navbar from './components/Navbar';
import React, { useState } from 'react';
import Alerts from './components/Alerts';

import About from './components/About';


import {
  // BrowserRouter, //react contexts hook!
  Routes,
  Route,
  //   Link
} from "react-router-dom";

// let name = "soni";


function App() {

  const [Mode, setMode] = useState('light');  //wheather dark mode is enabled or not

  const togglemode = () => {

    if (Mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#0d2470';
      showAlert("Dark Mode Has Been Enabled Successfully!", "success");

    }

    else {
      setMode("white");
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Has Been Enabled Successfully!", "success");
    }

  }
  const togglemode1 = () => {

    setMode('#ff8080');
    document.body.style.backgroundColor = 'red';
    showAlert("Danger Mode Has Been Enabled Successfully!", "danger");
    document.title = "Texay - Danger Mode";


  }
  const togglemode2 = () => {

    setMode('#ffff80');
    document.body.style.backgroundColor = 'yellow';
    showAlert("Warning Mode Has Been Enabled Successfully!", "warning");
    document.title = "Texay - Warning Mode";


  }
  const togglemode3 = () => {

    setMode('#80ffbf');
    document.body.style.backgroundColor = 'green';
    showAlert("Success Mode Has Been Enabled Successfully!", "success");

    document.title = "Texay - Success Mode";

  }
  const togglemode4 = () => {

    setMode('#809fff');
    document.body.style.backgroundColor = 'blue';
    showAlert("Blue Mode Has Been Enabled Successfully!", "primary");
    document.title = "Texay - Blue Mode";


  }
  const togglemode5 = () => {

    setMode('dark');
    document.body.style.backgroundColor = 'grey';
    showAlert("Grey Mode Has Been Enabled Successfully!", "secondary");
    document.title = "Texay - Dark Mode";


  }
  const togglemode6 = () => {

    setMode('#80ffff');
    document.body.style.backgroundColor = 'aqua';
    showAlert("Sky Mode Has Been Enabled Successfully!", "info");
    document.title = "Texay - Sky Mode";


  }
  const togglemode7 = () => {

    setMode('white');
    document.body.style.backgroundColor = 'white';
    showAlert("LED Mode Has Been Enabled Successfully!", "light");
    document.title = "Texay - LED Mode";


  }
  const togglemode8 = () => {

    setMode('#bfbfbf');
    document.body.style.backgroundColor = ' #666666';
    showAlert("Night Mode Has Been Enabled Successfully!", "dark");
    // Title virus mode on! ffLASh
    document.title = "Texay - Night Mode";
    setInterval(() => {
      document.title = "Texay the King!";

    }, 180);

    setInterval(() => {
      document.title = "Install Texay!";

    }, 130);


  }


  const [alert, setAlert] = useState(null);  //wheather dark mode is enabled or not
  // null is saying initiall we need no alert so for no alert to display we have to...... go in alert.js & see
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  return (

    <>
      {/*   <> </> this is called JSX Fragment */}

      {/* <Navbar title = "Soni" aboutText = "About Us" /> */}

      <Navbar title="Soni" mode={Mode} togglemode={togglemode} togglemode1={togglemode1} togglemode2={togglemode2} togglemode3={togglemode3} togglemode4={togglemode4} togglemode5={togglemode5} togglemode6={togglemode6} togglemode7={togglemode7} togglemode8={togglemode8} />
      <div className="container my-3">
        <Alerts alert={alert} />
        <Routes>

          <Route path="/" element={<TextForm showAlert={showAlert} heading='Heading hai' mode={Mode} />} />

          <Route path="/about" element={<About />} />



          {/* <TextForm showAlert={showAlert} heading='Heading hai' mode={Mode} /> */}
          {/* <About /> */}




        </Routes>
      </div>
    </>
    // <div classNameName="blank"> SONIJI </div>
  );

  // always return only one className name / /tag
}

export default App;
