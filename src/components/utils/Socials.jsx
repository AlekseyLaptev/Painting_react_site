import React from "react";

import { TiSocialFacebook } from 'react-icons/ti'
import { IoLogoTiktok, IoLogoYoutube } from 'react-icons/io5'
import { FaRegHeart } from 'react-icons/fa'
import { RiInstagramFill } from 'react-icons/ri'
// props -> handleClick   props.handleClick
export default function Socials({ handleClick, navInvisible }) {
    return (<div className="menu__icon">
        <a href="#" className="icon heart" >
            <FaRegHeart size={23} />
        </a>
        <div className="icon__spliter posicion__1"></div>
        <a href="https://www.facebook.com/" className="icon facebook">
            <TiSocialFacebook size={33} />
        </a>
        <a href="https://www.tiktok.com/" className="icon tiktok">
            <IoLogoTiktok size={21} />
        </a>
        <a href="https://www.instagram.com/" className="icon instagram">
            <RiInstagramFill size={25} />
        </a>
        <a href="https://www.youtube.com" className="icon youtube">
            <IoLogoYoutube size={24} />
        </a>
        <div className="icon__spliter posicion__2"></div>
        <div className="icon burger" onClick={handleClick}>
            <span className="span"></span>
        </div>

    </div>)
}