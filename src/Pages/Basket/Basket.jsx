import React from "react";
import "./Basket.scss";
import "../../components/utils/AdressBar.scss";
import bg_basket from "../../img/Basket/bg_basket.png";
import Product_card_V2 from "../../components/utils/Product_cart_V2";

import generateNavigationLine from "../../components/utils/Navigation";

export default class Basket extends React.Component {
    render() {
        const elements = new Array(4).fill(0).map((_, idx) => <Product_card_V2 heartVisible={false} buttonVisible={false} closeVisible={true} key={idx} />)
        return (
            <div className="Basket__wrapper">
                <div className="content__container">
                    <div className="address__bar">
                        {generateNavigationLine(["Home","Favorites"])}
                    </div>
                    <header className="header">
                        <div className="img_container">
                            <img src={bg_basket} alt="img" />
                        </div>
                        <h1 className="Basket_posicion">Basket</h1>
                    </header>
                    <main className="Basket">
                        {elements}
                    </main>
                    <div className="total__container">
                        <div className="total__text">Total: $780</div>
                        <button className="total_button">make a purchase</button>
                    </div>
                </div>
            </div>
        )
    }
}