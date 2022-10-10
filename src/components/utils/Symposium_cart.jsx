import React from "react";
import img from '../../img/Index/symposium_1.png';
import "./Symposium_cart.scss";

export default function Symposium_cart() {
    return (
        <div className="symposium_container">
            <div className="container_img">
                <img src={img} alt="img" />
            </div>
            <div className="symposium_title">
                International Symposium in Mallnitz, Austria
            </div>
            <div className="symposium_text">
                It so happened that I was not used to living without traveling, and since there are a lot…
            </div>
            <a href="#" className="symposium_continue">continue reading</a>
        </div>
    )
}