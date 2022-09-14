import React from "react";
import "./Popup.scss";

export default function Popup(props) {
    /**
     * Bug 18178 (update react state inside render function)
     * https://github.com/facebook/react/issues/18178
     * 
    */
    function setInvisible() {
        props.setpopupVisible(false)
    }

    return (
        <div className="wrapper__popup">
            <div className="container__popup">
                <div className="text">If you would like to recive regular artistic news from Kate Kulish, pleace feel free to subscribe to the monthly newsletter</div>
                <div className="title">E-mail</div>
                <div className="input">
                    <input type="email" placeholder="E-mail"/>
                    <button >send</button>
                </div>
                <div className="closed__popup" onClick={setInvisible}></div>
            </div>
        </div>
    )
}