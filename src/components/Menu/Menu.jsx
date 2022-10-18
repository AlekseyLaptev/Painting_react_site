import React,{ useState } from "react";
import { Link } from "react-router-dom";

import "./menu.scss"
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
    const sublinks = categories.map((el, i) => <li key={i} className="title__sublink" onClick={() => setBurgerVisible(false)}><Link to={`/${el.toLocaleLowerCase()}`}>{el}</Link>
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
                <Socials basketVisible={true} openBurger={setBurgerVisible} popUpClick={props.setpopupVisible} />
            </div>
            <Socials  openBurger={setBurgerVisible} popUpClick={props.setpopupVisible}/>
           
        </div>

    );
}


