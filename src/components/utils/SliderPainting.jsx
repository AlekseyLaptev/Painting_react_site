import React from "react";
import Img_1 from "../../img/Picture_content/slide_1.png";
import "./SliderPainting.scss";
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { useState } from "react";


export default class SliderPainting extends React.Component {

    render() {
        return (
            <div className="picture_cart__container">
                <div className="cart__img">
                    <img src={Img_1} alt="picture" />
                    <div className="heart__container">
                        <div className="left__heart">
                            <div className="heart__icon">
                                <FaHeart size={23} fill='red' />
                            </div>
                            <div className="heart__title">55</div>
                        </div>
                        <div className="right__heart">
                            <FaRegHeart size={23} />
                        </div>
                    </div>
                </div>

                <div className="title__container">
                    <div className="namePainting">Name of the painting</div>
                    <div className="price_painting">330.00 USD</div>
                </div>
                <div className="subtitle__container">
                    <div className="data__picture">(12.05.2020)</div>
                    <div className="size__picture">40х50</div>
                </div>
                <button className="buy">
                    <div className="buy__icon">
                        <HiOutlineShoppingBag size={20} strokeWidth={100} />
                    </div>
                    <div className="buy__text">Buy</div>
                </button>
            </div>
        )
    }
}