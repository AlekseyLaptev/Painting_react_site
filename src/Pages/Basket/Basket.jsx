import React, { useState } from "react";
import "./Basket.scss";
import "../../components/utils/AdressBar.scss";
import bg_basket from "../../img/Basket/bg_basket.png";
import Product_card_V2 from "../../components/utils/Product_cart_V2";

import generateNavigationLine from "../../components/utils/Navigation";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function BasketView(props) {
    const items = props.basket || []
    const elements = items.map((_, idx) => {

        return <Product_card_V2 id={_.id} heartVisible={false} buttonVisible={false} closeVisible={true} key={idx} />
    })
    const totalPrice = items.map(_ => _.price).reduce((acc, a) => acc + a, 0)

    return (
        <div className="Basket__wrapper">
            <div className="content__container">
                <div className="address__bar">
                    {generateNavigationLine(["Home", "Favorites"])}
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
                    <div className="total__text">Total: ${totalPrice}</div>
                    <Link to="/order">
                        <button
                            className="total_button"
                            disabled={totalPrice == 0}
                        >make a purchase</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
//basketItems
const mapStateToProps = function (state, ownProps) {
    return {
        ...ownProps,
        basket: state.basketReducer.basket
    }
}
const Basket = connect(mapStateToProps)(BasketView);
export default Basket;
