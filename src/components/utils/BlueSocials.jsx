import React from "react";
import './BlueSocials.scss';
import Socials from './Socials';
import {AiOutlineShareAlt} from 'react-icons/ai';

export default function BlueSolials() {
    return (
        <>
            <div className="blue__socials">
            <div className="socials">
                    <div className="social__container">
                        <div className="social__logo"><AiOutlineShareAlt size={30} fill = {'#4137D0'}/></div>
                        <div className="social__content"><a href="#">Share Kate’s art with the world</a></div>
                        <div className="icon__container"><Socials /></div>
                    </div>
                    <div className="social__container_2"><Socials /></div>
                </div>
            </div>
        </>
    )
}