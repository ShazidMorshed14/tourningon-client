import "./App.css";
import CallSection from "./components/CallSection/CallSection";
//import AccordionComp from './components/AccordionComp';
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import NewCallSection from "./components/NewCallSection/NewCallSection";
import NewNavbar from "./components/NewNavbar/NewNavbar";

import RegistrationForm from "./components/RegistrationForm";
import Slider from "./components/Slider";
import SocialMediaSection from "./components/SocialMediaSection";
import QueryWrapper from "./wrappers/QueryWrapper";

function App() {
  return (
    <QueryWrapper>
      <div className="App">
        {/* <NavBar/> */}
        <NewNavbar />
        <Slider />
        {/* <CallSection /> */}
        <NewCallSection />
        <RegistrationForm />
        {/* <SocialMediaSection /> */}

        <Footer />
      </div>
    </QueryWrapper>
  );
}

export default App;
