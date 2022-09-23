import React from "react";
import "./Contact_icon.scss";
import { IoIosMail, IoLogoWhatsapp } from 'react-icons/io';
import { HiPhone } from 'react-icons/hi';
import { FaViber } from 'react-icons/fa';
import Socials from "./Socials";


export default function Contact_icon() {
    return (
        <>
            <div className="contact__icon">
                <a className="icon__container">
                    <IoIosMail size={40} />
                </a>
                <div className="icon__title">E-mail<br />
                    <span>katushakulish@i.ua</span></div>
            </div>
            <div className="contact__icon">
                <a className="icon__container">
                    <HiPhone size={40} />
                </a>
                <div className="icon__title">Tel<br />
                    <span>+38 (096) 644 98 48</span></div>
            </div>
            <div className="contact__icon ">
                <a className="icon__container viber__icon">
                    <FaViber size={40} />
                </a>
                <div className="icon__title">Viber<br />
                    <span>+38 (096) 644 98 48</span></div>
            </div>
            <div className="contact__icon ">
                <a className="icon__container WhatsApp__icon">
                    <IoLogoWhatsapp size={40} />
                </a>
                <div className="icon__title">WhatsApp<br />
                    <span>+38 (096) 644 98 48</span></div>
            </div>
            <div className="contact__icon">
                <Socials />
            </div>
        </>
    )
}