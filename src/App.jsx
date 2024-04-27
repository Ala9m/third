import { useState } from 'react';
import './App.css'
//import About from './components/About';
import Navbar from './components/Navbar';
//import TextForm from './components/TextForm';
//import Alert from './components/Alert';

/*import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";*/

function App() {
  const [mode, setMode] = useState('light'); //whether dark mode is enabled or not
  const [mbtnt, setMbtnt] = useState('Enable Dark Mode');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      setMbtnt('Enable Light Mode');
      showAlert("Dark mode has been enabled", "success");
      document.body.style.backgroundColor = '#443f3f';
      document.title = 'TextUtils - Darkmode';
    }else{
      setMode('light');
      setMbtnt('Enable Dark Mode');  
      showAlert("Light mode has been enabled", "success");
      document.body.style.backgroundColor = 'white';
      document.title = 'TextUtils - Lightmode';
    }
  }
  
  return (
    <>
{/*<Navbar title="TextUtils" aboutText="About TextUtils"/>*/}
{/*<Navbar/>*/}
{/*<Router>*/}
<Navbar title="TextUtils" mode={mode} mbtnt={mbtnt} toggleMode={toggleMode}/>
{/*<Alert alert={alert}/>*/}

        {/*<Routes>*/}

          {/*<Route exact path="/about" element={<About />} />*/}
          
          {/*<Route exact path="/" element={} />*/}

          {/*<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />*/}
          
        {/*</Routes>*/}


{/*</Router>*/}
    </>
  )
}

export default App
