import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App(props) {

  // darkmode
  const [mode, setmode] = useState('light')

  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = '#042743';
      document.body.style.color = 'white';
      showAlert('Dark mode enabled', 'success');
    }

    else {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert('Light mode enabled', 'success');
    }
  }

  // alert

  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null)

    }, 1500);
  }

  return (
    <>

      {/* <Navbar title = 'Textutil' home = 'Home' mode={mode} togglemode={toggleMode} />
    <Alert alert = {alert}/>
    <Textform placeholder = 'Textarea' mode={mode} /> */}
      {/* <About/> */}

      <Router>
        <Navbar title='Textutil' home='Home' mode={mode} togglemode={toggleMode} />
        <Alert alert={alert} />
        <Routes>

          <Route exact path="/about" element={<About mode={mode} />} > </Route>
          <Route exact path="/" element={<Textform placeholder='Enter Text' mode={mode} />}> </Route>
        </Routes>
      </Router>



    </>
  );
}

export default App;
