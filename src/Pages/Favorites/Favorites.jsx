import React from "react";
import "./Favorites.scss";
import "../../components/utils/AdressBar.scss";
import bg_favorites from "../../img/Favorites/bg_favorites.png";
import Product_card_V2 from "../../components/utils/Product_cart_V2";
import Paginacia from "../../components/utils/Paginatia";


import generateNavigationLine from "../../components/utils/Navigation";

export default class Favorites extends React.Component {
    render() {
        const elements= new Array(6).fill(0).map((_, idx) =><Product_card_V2 id={idx} key={idx}/> );
        return (
            <div className="Favorites__wrapper">
                <div className="content__container">
                    <div className="address__bar">
                        {generateNavigationLine(["Home","Favorites"])}
                    </div>
                    <header className="header">
                        <div className="img_container">
                            <img src={bg_favorites} alt="img" />
                        </div>
                        <h1 className="Auction_posicion">Favorites</h1>
                    </header>
                    <main className="Favorites">
                   {elements}
                    </main>
                    <Paginacia/>
                </div>
            </div>
        )
    }
}