import Menu from "./Menu/Menu"
import Popup from "./Popup/Popup";
import { useState } from "react";
import Painting from "../Pages/Painting/Painting";
import Contact from "../Pages/Contact/Contact";

import Footer from "./Footer/Footer";
import Exhibitions from "../Pages/Exhibitions/Exhibitions";
import Gallery from "../Pages/Gallery/Gallery";
import Bio from "../Pages/Bio/Bio";
import NFT from "../Pages/NFT/NFT";
function Wrapper() {
    const [popupVisible, setpopupVisible] = useState(false)

    return (
        <div className="Wrapper">
            {/* Menu(setpopupVisible) = <Menu setpopupVisible={setpopupVisible}/>  */}
            <Menu setpopupVisible={setpopupVisible} />
            {popupVisible ? <Popup setpopupVisible={setpopupVisible} /> : null}
            {/* <Painting />  */}
            {/* <Gallery/> */}
            {/* <Contact /> */}
            {/* <Exhibitions/> */}
            {/* <Bio/> */}
            <NFT/>
            <Footer />
        </div>
    );
}

export default Wrapper;