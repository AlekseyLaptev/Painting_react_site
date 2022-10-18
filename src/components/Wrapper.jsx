
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Menu from "./Menu/Menu"
import Popup from "./Popup/Popup";
import Painting from "../Pages/Painting/Painting";
import Contact from "../Pages/Contact/Contact";
import Footer from "./Footer/Footer";
import Exhibitions from "../Pages/Exhibitions/Exhibitions";
import Gallery from "../Pages/Gallery/Gallery";
import Bio from "../Pages/Bio/Bio";
import NFT from "../Pages/NFT/NFT";
import Auction from "../Pages/Auction/Auction";
import Favorites from "../Pages/Favorites/Favorites";
import Basket from "../Pages/Basket/Basket";
import FAQ from "../Pages/FAQ/FAQ";
import Index from "../Pages/Index/Index_Kate";
import Order from "../Pages/Order/Order";
import Thanks from "../Pages/Thanks/Thanks";
import Error from "../Pages/Error/Error";

function Wrapper() {
    const [popupVisible, setpopupVisible] = useState(false)

    return (
        <div className="Wrapper">
            {/* Menu(setpopupVisible) = <Menu setpopupVisible={setpopupVisible}/>  */}
            <Menu />
            {
                <Routes>
                    <Route path="/" element={<Index setpopupVisible={setpopupVisible} />} />
                    <Route index element={<Index setpopupVisible={setpopupVisible} />} />
                    <Route path="main" element={<Index setpopupVisible={setpopupVisible} />} />
                    <Route path="menu" element={<Index />} />
                    <Route path="faq" element={<FAQ />} />
                    <Route path="gallery" element={<Gallery setpopupVisible={setpopupVisible} />} />
                    <Route path="exhibitions" element={<Exhibitions setpopupVisible={setpopupVisible} />} />
                    <Route path="bio" element={<Bio />} />
                    <Route path="contacts" element={<Contact />} />
                    <Route path="auction" element={<Auction setpopupVisible={setpopupVisible} />} />
                    <Route path="nft" element={<NFT />} />
                    <Route path="favorites" element={<Favorites />} ></Route>
                    <Route path="basket" element={<Basket />} />
                    <Route path="order" element={<Order />}></Route>
                    <Route path="thanks" element={<Thanks />}/>
                    <Route path="error" element={<Error />}/>
                </Routes>
            }
{ popupVisible ? <Popup setpopupVisible={setpopupVisible} /> : null }
{/* <Painting />  */ }
{/* <Gallery/> */ }
{/* <Contact /> */ }
{/* <Exhibitions/> */ }
{/* <Bio/> */ }
{/* <NFT/> */ }
{/* <Auction /> */ }
{/* <Favorites/> */ }
{/* <Basket/> */ }
{/* <FAQ/> */ }
{/* <Index/> */ }
<Footer />
        </div >
    );
}

export default Wrapper;