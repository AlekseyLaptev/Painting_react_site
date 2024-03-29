import React from "react";

import Img_1 from "../../img/Picture_content/slide_1.png";
import "./Product_cart_V2.scss";

import { FaHeart } from 'react-icons/fa';
import { IoCloseOutline } from 'react-icons/io5';

import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteElement } from "../../slices/basketSlice";

export default function Product_card_V2(props) {
        const dispatch = useDispatch()
        const { id = id, Img = Img_1, closeVisible = false, heartVisible = true, buttonVisible = true } = props
        return (
            <div className="cart__container_v2">
                <div className="cart_img_v2">
                    <img src={Img} alt="picture_v2" />
                    {heartVisible ? (<div className="left__heart_v2">
                        <div className="heart__icon_v2">
                            <FaHeart className="red_heart" size={18} fill='red' />
                        </div>
                    </div>) : null}
                </div>
                <div className="title__container_v2">
                    <div className="content__wrap">
                        <div className="name_Painting_v2">Name of the painting painting</div>
                        <div className="product_content_v2">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient.
                            eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient.</div>
                    </div>
                    <div className="subtitle__container_v2">
                        <div className="price_painting_v2">390.00 USD</div>
                        {buttonVisible ? (<Link to="/order"><button className="product__button_v2">
                            <div className="buy__text_v2"> Buy iy now</div>
                        </button></Link>) : null}
                    </div>
                    {closeVisible ? (<div 
                    className="closeButton" 
                    onClick={()=>{
                        dispatch(deleteElement({
                            id: id
                        }))
                    }}>
                        <IoCloseOutline size={26} />
                    </div>) : null}
                </div>
            </div>
        )
}