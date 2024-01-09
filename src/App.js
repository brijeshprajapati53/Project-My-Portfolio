
import Navbar from "./Components/Navbar/Navbar";
import Intro from "./Components/Intro/Intro";
import Skills from "./Components/Skills/Skills.jsx";
import './App.css';
import Projectlist from "./Components/Projectlist/Projectlist";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import { themeContext } from "./Context";
import { useContext } from "react";



function App() {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (

    <div className="App"  
    style={{background: darkMode? 'black': '',
    color: darkMode? 'white': '',}}>

   
     <Navbar/>
     <Intro/>
     <Skills/>
     <Projectlist/>
     <Contact/>
     <Footer/>

    </div>
  );
}

export default App;
