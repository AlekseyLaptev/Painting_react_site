import React from "react";
import Product_card from "./Product_card";
import Product_card_V2 from "./Product_cart_V2";
import SliderPainting from "./SliderPainting";
import "./SliderElement.scss";

export default class SliderElement extends React.Component {
    render() {
        const { img } = this.props
        return (
            
            <div className="slider-element">
                  {/* <img src={img} alt="img" /> */}
                   <SliderPainting img={img} descriptionVisible={true} />
            </div>
        )
    }
}