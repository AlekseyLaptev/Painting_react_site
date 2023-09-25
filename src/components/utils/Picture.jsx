import React from "react";
import "./Picture.scss";
import img from '../../img/Spirtuality/She.png';

export default function Picture(){
    return(
        <div className="picture_container">
            <div className="img_container">
                <img src={img} alt="img" />
            </div>
            <div className="picture_name">“She was born with the light”</div>
            <div className="picture_size">100 cm х 120 cm</div>
        </div>
    )
}