import React from "react";
import { useState } from "react";

import "./footer.scss"
import logo from "../../assets/img/logo.png"

import Socials from "../utils/Socials";


// props vs state
export default function Menu(props) {
    //state
    const [burgerVisible, setBurgerVisible] = useState(false)

    function renderCloseBtn(idx) {
        if (idx == 0) {
            // кеширование функций (https://reactjs.org/docs/hooks-reference.html#usememo)
            return (<div className="icon closed" onClick={() => setBurgerVisible(false)}></div>)
        } else {
            return null
        }
    }

    const categories = ["Menu", "Main", "Gallery", "Exhibitions", "Bio", "FAQ", "Contacts", "Auction", "NFT"]
    const sublinks = categories.map((el, i) => <li key={i} className="title__sublink"><a href="#">{el}</a>
        {renderCloseBtn(i)}</li>)

    return (
        <>
            <div className="container footer">
                <div className={`shadow ${burgerVisible ? "_active" : ""}`}></div>
                <div className="footer__logo">
                    <img src={logo} alt="logo" className="logo__img" />
                </div>
                <div className={`footer__title ${burgerVisible ? "_active" : ""}`}>
                    {/* передача свойств от родителя к ребёнку */}


                    <ul className="title__link">

                        {sublinks}
                    </ul>
                    <Socials openBurger={setBurgerVisible} popUpClick={props.setpopupVisible} />
                </div>
                <Socials openBurger={setBurgerVisible} popUpClick={props.setpopupVisible} />

            </div>
            <div className="rights">
                <div className="rights__title">ⓒ 2022 all rights reserved</div>
            </div>
        </>

    );
}
