import React from "react";
import { useState } from "react";

import "./menu.scss"
import logo from "../../assets/img/logo.png"

import Socials from "../utils/Socials";

// props vs state
export default function Menu(/*{toggleSubscribePopUp}*/) {
    //state
    const [burgerVisible, setBurgerVisible] = useState(false)

    function handleClick(e) {
        setBurgerVisible(!burgerVisible)
    }

    function renderCloseBtn(idx) {
        if (idx == 0) {
            return (<div className="icon closed" onClick={handleClick}></div>)
        } else {
            return null
        }
    }


    const categories = ["Menu", "Main", "Gallery", "Exhibitions", "Bio", "FAQ", "Contacts", "Auction", "NFT"]
    const sublinks = categories.map((el, i) => <li key={i} className="title__sublink"><a href="#">{el}</a>
        {renderCloseBtn(i)}</li>)

    return (
        <div className="container menu">
            <div className={`shadow ${burgerVisible ? "_active" : ""}`}></div>
            <div className="menu__logo">
                <img src={logo} alt="logo" className="logo__img" />
            </div>
            <div className={`menu__title ${burgerVisible ? "_active" : ""}`}>
                    {/* передача свойств от родителя к ребёнку */}
                    
                
                <ul className="title__link">

                    {sublinks}
                </ul>
                <Socials handleClick={handleClick} navInvisible={false}/>
            </div>
            <Socials handleClick={handleClick} navInvisible={true}/>
           
        </div>

    );
}


