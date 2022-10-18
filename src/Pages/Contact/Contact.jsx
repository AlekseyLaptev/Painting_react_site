import React from "react";
import "./Contact.scss";
import img from "../../img/Contact_img/bg.png";
import Contact_icon from "../../components/utils/Contact_icon.jsx";


import generateNavigationLine from "../../components/utils/Navigation";



export default function Contact() {
    return (
        <div className="contact__wrapper">
            <div className="address__bar">
                {generateNavigationLine(["Home","Contacts"])}
            </div>
            <div className="contact__container">
                <div className="contact__img">
                    <img src={img} alt="img" />
                </div>
                <h1 className="contacts">Contacts</h1>
                <div className="contact__restangle">
                <Contact_icon/>
                </div>
            </div>

        </div>
    )
}