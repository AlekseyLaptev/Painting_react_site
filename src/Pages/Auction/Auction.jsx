import React from "react";
import "./Auction.scss";
import "../../components/utils/AdressBar.scss";
import bg_Auction from "../../img/Auction/bg_auction.png";
import { AiOutlineMenu } from 'react-icons/ai';
import { CgMenuGridO } from 'react-icons/cg';
import Product_card from "../../components/utils/Product_card";
import Paginacia from "../../components/utils/Paginatia";
import BlueSolials from "../../components/utils/BlueSocials";

export default function Auction() {
    const elements = new Array(4).fill(0).map((_, idx) => <Product_card key={idx} />)
    return (
        <div className="Auction__wrapper">
            <div className="content__container">
                <div className="address__bar">
                    <ul className="bar__content">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Auction</a></li>
                    </ul>
                </div>
                <header className="header">
                    <div className="img_container">
                        <img src={bg_Auction} alt="img" />
                    </div>
                    <h1 className="Auction_posicion">Auction</h1>
                </header>
                <main className="Auction">
                    <h2>Popular auctions</h2>
                    <div className="resultat__container">
                        <div className="resultat">64 objects</div>
                        <div className="posicion_img">
                            <div className="row"><AiOutlineMenu className="Line" /></div>
                            <div className="colomn"><CgMenuGridO className="Grid" /></div>
                        </div>
                    </div>
                    <div className="auction__container">
                        {elements}
                    </div>
                    <Paginacia />
                </main>
                <BlueSolials />
            </div>
        </div >
    )
}