import React from "react";
import "./Thanks.scss";
import bg_thanks from '../../img/Thanks/bg_thanks.png';


export default class Thanks extends React.Component {
    render() {
        return (
            <header className="header">
                <div className="img_container">
                    <img src={bg_thanks} alt="img" />
                </div>
                <h1 className="thanks_posicion">Thanks for your order</h1>
                <div className="order_number">Your order No. 224567983 has been processed</div>
            </header>

        )
    }
}