
import { useEffect, useState } from "react";
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
import Auctions from "../Pages/Auctions/Auctions";
import Favorites from "../Pages/Favorites/Favorites";
import Basket from "../Pages/Basket/Basket";
import FAQ from "../Pages/FAQ/FAQ";
import Index from "../Pages/Index/Index_Kate";
import Order from "../Pages/Order/Order";
import Thanks from "../Pages/Thanks/Thanks";
import Error from "../Pages/Error/Error";
import Spirituality from "../Pages/Spirituality/Spirituality";
import Auction from "../Pages/Auction/Auction";
import { Provider } from "react-redux";
import store from "../store";


function Wrapper() {
    // const startDate = new Date('2022-10-28T03:24:00')
    const [popupVisible, setpopupVisible] = useState(false)

    return (
        <div className="Wrapper">
            {/* Menu(setpopupVisible) = <Menu setpopupVisible={setpopupVisible}/>  */}
            <Menu />
            {
                <Routes>
                    <Route path="/" element={<Index setpopupVisible={setpopupVisible} />} />
                    <Route element={<Index setpopupVisible={setpopupVisible} />} />
                    <Route index path="main" element={<Index setpopupVisible={setpopupVisible} />} />
                    <Route path="menu" element={<Index />} />
                    <Route path="faq" element={<FAQ />} />
                    <Route path="gallery" element={<Gallery setpopupVisible={setpopupVisible} />} />
                    <Route path="painting" element={<Painting setpopupVisible={setpopupVisible} />} />
                    <Route path="exhibitions" element={<Exhibitions setpopupVisible={setpopupVisible} />} />
                    <Route path="bio" element={<Bio />} />
                    <Route path="contacts" element={<Contact />} />
                    <Route path="auctions" element={<Auctions setpopupVisible={setpopupVisible} />} />
                    <Route path="nft" element={<NFT />} />
                    <Route path="favorites" element={<Favorites />} ></Route>
                    <Route path="basket" element={<Provider store={store}><Basket /></Provider>} />
                    <Route path="order" element={<Order />}></Route>
                    <Route path="thanks" element={<Thanks />} />
                    <Route path="error" element={<Error />} />
                    <Route path="spirituality" element={<Spirituality />} />
                    <Route path="auction" element={<Auction/>} />
                </Routes>
            }
            {popupVisible ? <Popup setpopupVisible={setpopupVisible} /> : null}
            {/* <Painting />  */}
            {/* <Gallery/> */}
            {/* <Contact /> */}
            {/* <Exhibitions/> */}
            {/* <Bio/> */}
            {/* <NFT/> */}
            {/* <Auctions/> */}
            {/* <Favorites/> */}
            {/* <Basket/> */}
            {/* <FAQ/> */}
            {/* <Index/> */}
            <Footer />
        </div >
    );
}

export default Wrapper;