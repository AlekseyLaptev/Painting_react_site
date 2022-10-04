import React from "react";
import "./NFTelement.scss";
import img_nft from '../../img/NFT/NFT__icon-1.png';

export default function NFTelement() {
    return (
        <div className="NFT__outerdiv">
            <div className="NFT__img">
                <img src={img_nft} alt="img" />
            </div>
            <a href="#" className="arrow__right"></a>
        </div>

    )
}