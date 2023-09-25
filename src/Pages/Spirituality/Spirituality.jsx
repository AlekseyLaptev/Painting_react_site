import React from "react";
import "./Spirituality.scss";
import "../../components/utils/AdressBar.scss";
import { Link } from 'react-router-dom';
import Img from '../../img/Spirtuality/Mask_group.png';

import generateNavigationLine from "../../components/utils/Navigation"
import Picture from "../../components/utils/Picture";
import SliderPainting from "../../components/utils/SliderPainting";
import BlueSolials from "../../components/utils/BlueSocials";




export default class Spirituality extends React.Component {
    render() {
        const elements = new Array(4).fill(0).map((_, idx) => <Picture key={idx} />)
        const elements_1 = new Array(8).fill(0).map((_, idx) => <SliderPainting key={idx} />)
        return (

            <div className="content__container">
                <div className="address__bar">
                    {generateNavigationLine(["Home", "Exhibition", "Spirituality"])}
                </div>
                <h2 className="spirit_posicion">Spirituality</h2>
                <div className="spirit_content">Generally, spirituality is about everything that has to do with the spirit.
                    <br />Its simplest meaning is the concept that in addition to the tangible matter exists a spiritual level of existence, from which matter takes life.
                </div>
                <div className="painting_wrap">
                    {elements}
                </div>
                <div className="index_cart__container">
                    <div className="cart__img">
                        <img src={Img} alt="picture" />
                    </div>
                    <div className="border_pictures">|</div>
                    <div className="namePainting_V2">Name of the painting</div>
                </div>
                <div className="litle_slider_container">
                    {elements_1}
                </div>
                <div className="socials_container"> <BlueSolials /></div>

            </div>

        )
    }
}
