import React from "react";
import Img_1 from "../../img/Picture_content/slide_1.png";
import "./Product_cart_V2.scss";
import { FaHeart } from 'react-icons/fa';
import { useState } from "react";


export default class Product_card_V2 extends React.Component {

    render(props) {
        const { Img = Img_1 } = this.props
        return (
            <div className="cart__container_v2">
                <div className="cart_img_v2">
                    <img src={Img} alt="picture_v2" />
                    <div className="left__heart_v2">
                        <div className="heart__icon_v2">
                            <FaHeart className="red_heart" size={18} fill='red' />
                        </div>
                    </div>
                </div>
                <div className="title__container_v2">
                    <div className="content__wrap">
                        <div className="name_Painting_v2">Name of the painting</div>
                        <div className="product_content_v2">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient.
                            eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient.</div>
                    </div>
                    <div className="subtitle__container_v2">
                        <div className="price_painting_v2">390.00 USD</div>
                        <button className="product__button_v2">
                            <div className="buy__text_v2"> Buy iy now</div>
                        </button>
                    </div>

                </div>
            </div>
        )
    }
}