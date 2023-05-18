import { BrowserRouter } from "react-router-dom"
import About from "./pages/About/About"
import Home from "./pages/Home/Home"
import Intro from "./pages/IntoPage/Intro"
import MyWork from "./pages/MyWork/MyWork";
import SocialLinks from "./pages/SocialLinks/SocialLinks";
import StartPage from "./pages/StartPage/StartPage";


function App() {


  console.log('hey');

  return (
    <div>

      {/* <StartPage/> */}

        <Intro />
        <Home />
        <About />
        <MyWork/>
        <SocialLinks/>
   
    </div>


  )
}

export default App
