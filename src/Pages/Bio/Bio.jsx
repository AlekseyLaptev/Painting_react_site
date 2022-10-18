import React from "react";
import "./Bio.scss"
import bg_img from '../../img/Bio/bg_bio_header.png';
import bg_img_2 from '../../img/Bio/bg_bio_main.png';
import img_video from '../../img/Bio/bio_main_2.png';
import circle from '../../img/Bio/bio_circle.png';

import generateNavigationLine from "../../components/utils/Navigation";

export default function Bio() {
    return (
        <div className="bio__wrapper">
            <div className="content__container">
                <div className="address__bar">
                {generateNavigationLine(["Home","Bio"])}
                </div>
                <header className="header">
                    <div className="img__container">
                        <img src={bg_img} alt="img" />
                    </div>
                    <h1 className="gallery_posicion">bio</h1>
                </header>
                <main className="bio">
                    <div className="img__container">
                        <img src={bg_img_2} alt="img" />
                    </div>
                    <div className="bio_content">
                        <div className="content__title"><span>Dear</span> friend</div>
                        <div className="content__text">My name is Kate Kulish. I am an artist from Ukraine. For a long time, I lived in Bali, Indonesia. I live my life based on the teachings of Buddhist philosophy by practicing mindfulness, non-violence, and compassion.</div>
                        <div className="content__text">The intention of my art is to reflect my inner calm. My technique has been shaped over the years by visiting many European museums and studying painting at university. I was strongly influenced by the works of masters, such as Gustav Klimt, Raphael, and Picasso. The main topics of my paintings are women, abstract landscapes, and decomposed cityscapes. </div>
                    </div>
                    <div className="bio_content_2">
                        <div className="bio_img">
                            <img src={img_video} alt="img" />
                        </div>
                        <div className="bio_wrap">
                            <div className="content__title"> Women</div>
                            <div className="content__text">In my paintings, women represent an object of pureness. They are a concentration of beauty and the divine. I create faces of women as archaic objects without individuality of character. This helps to bring me to explore all the qualities of pureness and divine creation, such as that seen in Madonna del Prato (Raphael).</div>
                        </div>
                        <div className="bio_wrap_2">
                            <div className="content__title"> Abstract Landscapes</div>
                            <div className="content__text">If we remove some forms of standard objects, all that remains is pure energy, which merges everything together. Everything passes from one to another and is constantly moving. This energy fills everything around us. Everything that we see serves as a vessel for this energy.</div>
                        </div>
                    </div>
                    <div className="bio_content_3">
                        <div className="content__title"> Decomposed Cityscapes</div>
                        <div className="content__text">For me, the city represents one of the highest manifestations of unity among people. The most important part of any city is its soul. Each of my cityscapes is an experiment in decomposing the city and bringing all the details together. After connecting all the details in a completely unthinkable sequence, with an incomprehensible perspective, one thing remains unchanged: the soul of the city. You can change all the details, but the soul will remain unchanged and unshakable.
                            In fact, I understand this more than ever, as since many of the cities in my beloved Ukraine have been destroyed. Regardless, the soul of each city remains unshakable. The cities continue to live, even if 90 buildings have been partially destroyed.
                        </div>
                    </div>
                    <div className="bio_circle">
                        <img src={circle} alt="circle" />
                    </div>
                </main>
            </div>
        </div>
    )
}