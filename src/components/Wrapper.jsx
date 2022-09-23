import Menu from "./Menu/Menu"
import Popup from "./Popup/Popup";
import {useState} from "react";
import Painting from "../Pages/Painting/Painting";
import Contact from "../Pages/Contact/Contact";

import Footer from "./Footer/Footer";

function Wrapper() {
  const [popupVisible, setpopupVisible] = useState(false)

  return (
    <div className="Wrapper">
        {/* Menu(setpopupVisible) = <Menu setpopupVisible={setpopupVisible}/>  */}
      <Menu setpopupVisible={setpopupVisible}/>   
      {popupVisible?<Popup setpopupVisible={setpopupVisible}/>:null}
      {/* <Painting/> */}
      <Contact/>
      <Footer/>
    </div>
  );
}

export default Wrapper;