import Menu from "./Menu/Menu"
import Popup from "./Popup/Popup";
import {useState} from "react";

function Wrapper() {
  const [popupVisible, setpopupVisible] = useState(false)

  return (
    <div className="Wrapper">
        {/* Menu(setpopupVisible) = <Menu setpopupVisible={setpopupVisible}/>  */}
      <Menu setpopupVisible={setpopupVisible}/>   
      {popupVisible?<Popup setpopupVisible={setpopupVisible}/>:null}
    </div>
  );
}

export default Wrapper;