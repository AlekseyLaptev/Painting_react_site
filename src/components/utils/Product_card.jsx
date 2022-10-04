import React from "react";
import Img_1 from "../../img/Picture_content/slide_1.png";
import bg_img from "../../img/Auction/Mask group.png";
import "./Product_card.scss";
import { FaHeart } from 'react-icons/fa';
import { useState } from "react";


export default class Product_card extends React.Component {

    render(props) {
        const { Img = Img_1 } = this.props
        return (
            <div className="cart__container">
                <div className="cart_img">
                    <img src={Img} alt="picture" />
                    <div className="left__heart">
                        <div className="heart__icon">
                            <FaHeart size={23} fill='red' />
                        </div>
                        <div className="heart__title">55</div>
                    </div>
                </div>
                <div className="title__container">
                    <img src={bg_img} alt="img" />
                    <div className="name_Painting">Name of the painting</div>
                    <div className="product_content">Acrylic on panel, Mixed media - Hand signed, Signed in stencil - 1/1 - 2022</div>


                    <div className="subtitle__container">
                        <div className="bid_wrap">
                            <div className="bid">Current bid</div>
                            <div className="price_painting">$ 500</div>
                            <div className="bid__timer">11h 28m 43s</div>
                        </div>
                        <button className="product__button">
                            <div className="buy__text">Place a bid</div>
                        </button>
                    </div>

                </div>
            </div>
        )
    }
}