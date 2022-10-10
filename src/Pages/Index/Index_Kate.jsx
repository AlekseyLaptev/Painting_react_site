import React from "react";
import "./Index_Kate.scss";
import bg_index from "../../img/Index/bg_index.png";
import Img from "../../img/Index/Mask group_1.png";
import Img_1 from "../../img/Index/img_1.png";
import Img_2 from "../../img/Index/img_2.png";
import Img_3 from "../../img/Index/img_3.png";
import img_4 from "../../img/Index/bg_2.png";
import SliderPainting from "../../components/utils/SliderPainting";
import NFTelement from "../../components/utils/NFTelement";
import Symposium_cart from "../../components/utils/Symposium_cart";
import BlueSolials from "../../components/utils/BlueSocials";


export default class Index extends React.Component {
    render() {
        const elements = new Array(3).fill(0).map((_, idx) => <SliderPainting descriptionVisible={false} key={idx} />)
        const elements_1 = new Array(6).fill(0).map((_, idx) => <NFTelement key={idx} />)
        const elements_2 = new Array(3).fill(0).map((_, idx) => < Symposium_cart key={idx} />)
        return (
            <div className="Index__wrapper">
                <div className="content__container">
                    <header className="header">
                        <div className="img_container">
                            <img src={bg_index} alt="img" />
                        </div>
                        <h1 className="Index_posicion">Kate</h1>
                        <h1 className="Index_posicion_2">kulish</h1>
                        <ul className="Index_linc">
                            <li className="Index_list">Pureness</li>
                            <li className="Index_list">Energy</li>
                            <li className="Index_list">Practicing mindfulness</li>
                        </ul>
                    </header>
                    <main className="Index">
                        <div className="Index_title title_posicion">Gallery</div>
                        <div className="index_slider">
                            {elements}
                        </div>
                        <div className="Index_title title_posicion_2">New painting</div>

                        <div className="index_cart__container">
                            <div className="cart__img">
                                <img src={Img} alt="picture" />
                            </div>
                            <div className="border_pictures">|</div>
                            <div className="V2_wrap">
                                <div className="namePainting_V2">Name of the painting</div>
                                <div className="data__picture_V2">(12.05.2020)</div>
                            </div>
                            <div className="price_painting_V2">330.00 USD</div>
                            <button className="buy_border ">Buy </button>
                        </div>
                        <div className="philosophy_container">
                            <div className="Index_title title_posicion_3">philosophy</div>
                            <div className="philosophy_text">My name is Kate Kulish. I am an artist from Ukraine. For a long time, I have been living in Bali, Indonesia. I live my life based on the teachings of Buddhist philosophy by practicing mindfulness, non-violence, and compassion.
                                <br /> <br />The intention of my art is to reflect my inner calm. My technique has been shaped over the years by visiting many European museums and studying painting at university. I was strongly influenced by the works of masters, such as Gustav Klimt, Raphael, and Picasso. The main topics of my paintings are women, abstract landscapes, and decomposed cityscapes.
                            </div>
                            <div className="philosophy_img">
                                <img src={Img_1} alt="img" />
                            </div>
                            <div className="philosophy_restangle_1">
                                <div className="restangle_img">
                                    <img src={Img_2} alt="img" />
                                </div>
                                <div className="restangle_content">
                                    <h2 className="restangle_posicion">Women</h2>
                                    <div className="restangle_text text_posicion">In my paintings, women represent an object of pureness. They are a concentration of beauty and the divine. I create faces of women as archaic objects without individuality of character. This helps to bring me to explore all the qualities of pureness and divine creation, such as that seen in Madonna del Prato (Raphael).</div>
                                    <h2>Abstract Landscapes</h2>
                                    <div className="restangle_text">In my paintings, women represent an object of pureness. They are a concentration of beauty and the divine. I create faces of women as archaic objects without individuality of character. This helps to bring me to explore all the qualities of pureness and divine creation, such as that seen in Madonna del Prato (Raphael).</div>
                                </div>
                            </div>
                            <div className="philosophy_restangle_2">
                                <div className="restangle_img">
                                    <img src={Img_3} alt="img" />
                                </div>
                                <div className="restangle_content">
                                    <h2>Decomposed Cityscapes</h2>
                                    <div className="restangle_text">For me, the city represents one of the highest manifestations of unity among people. The most important part of any city is its soul. Each of my cityscapes is an experiment in decomposing the city and bringing all the details together. After connecting all the details in a completely unthinkable sequence, with an incomprehensible perspective, one thing remains unchanged: the soul of the city. You can change all the details, but the soul will remain unchanged and unshakable.
                                        <br /><br />In fact, I understand this more than ever, as since many of the cities in my beloved Ukraine have been destroyed. Regardless, the soul of each city remains unshakable. The cities continue to live, even if 90 buildings have been partially destroyed.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="nft_restangle">
                            <div className="nft_img">
                                <img src={img_4} alt="img" />
                            </div>
                            <h1 className="posicion_nft_1">nft <br />marketplace</h1>
                            <div className="nft_title">An NFT is a digital asset that represents real-world objects like art, music, in-game items and videos. They are bought and sold online, frequently with cryptocurrency, and they are generally encoded with the same underlying software as many cryptos.</div>
                            <div className="nft_container">
                                {elements_1}
                            </div>
                        </div>
                        <div className="exhibition_container">
                            <div className="exhibiyion_position">Exhibitions</div>
                            <div className="symposium_wrap">
                                {elements_2}
                            </div>
                        </div>
                        <BlueSolials/>
                    </main>
                </div>
            </div>
        )
    }
}