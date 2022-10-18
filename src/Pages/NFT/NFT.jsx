import React from "react";
import "./NFT.scss";
import "../../components/utils/AdressBar.scss";
import bg_NFT from '../../img/NFT/bg_NFT.png';
import NFTelement from "../../components/utils/NFTelement";
import Paginacia from "../../components/utils/Paginatia"


import generateNavigationLine from "../../components/utils/Navigation";

export default function NFT() {
    const elements = new Array(12).fill(0).map((_, idx) => <NFTelement key={idx}/>)
    return (
        <div className="NFT__wrapper">
            <div className="content__container">
                <div className="address__bar">
                    {generateNavigationLine(["Home","NFT"])}
                </div>
                <header className="header">
                    <div className="img_container">
                        <img src={bg_NFT} alt="img" />
                    </div>
                    <h1 className="NFT_posicion">NFT</h1>
                </header>
                <main className="NFT">
                    <div className="NFT__content">An NFT is a digital asset that represents real-world objects like art, music, in-game items and videos. They are bought and sold online, frequently with cryptocurrency, and they are generally encoded with the same underlying software as many cryptos.</div>
                    <div className="NFT__container">
                       {elements}
                    </div>
                    <Paginacia />
                </main>
            </div>
        </div>
    )
}