import React from "react";
import "./Gallery.scss"
import SliderPainting from "../../components/utils/SliderPainting";
import Img from "../../img/Picture_content/slide_2.png";
import bg_img from "../../img/Gallery/bg_gallery.png";
import { IoIosArrowDown } from 'react-icons/io';
import Paginacia from "../../components/utils/Paginatia";
import BlueSolials from "../../components/utils/BlueSocials";


export default function Gallery(props) {
    const elements = new Array(16).fill(0).map((el, idx) => <SliderPainting key={idx} Img={Img} />)

    return (
        <>
            <div className="gallery__wrapper">
                <div className="content__container">
                    <div className="address__bar">
                        <ul className="bar__content">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Gallery</a></li>
                        </ul>
                    </div>
                    <header className="header">
                        <div className="img__container">
                            <img src={bg_img} alt="img" />
                        </div>
                        <h1 className="gallery_posicion">gallery</h1>
                    </header>
                    <div class="product__categorie">
                        <div class="content">
                            <div class="title_categories">Product categories
                                <div class="categories__input">

                                    <div class="select-category">
                                        <div class="vertical__colomn colomn">
                                            <div class="colomn__text">Select a category</div>
                                            <div class="colomn__arrow">
                                                <a href="#" ><IoIosArrowDown /></a>
                                            </div>
                                        </div>
                                        <div class="category_select">
                                            <p>Category 1</p>
                                            <p>Category 2</p>
                                            <p>Category 3</p>
                                            <p>Category 4</p>
                                            <p>Category 5</p>
                                        </div>
                                    </div>

                                    <div class="select-category">
                                        <div class="vertical__colomn colomn">
                                            <div class="colomn__text">Year</div>
                                            <div class="colomn__arrow">
                                                <a href="#" ><IoIosArrowDown /></a>
                                            </div>
                                        </div>
                                        <div class="category_select">
                                            <p>2022</p>
                                            <p>2021</p>
                                            <p>2020</p>
                                            <p>2019</p>
                                            <p>2018</p>
                                            <p>2017</p>
                                        </div>
                                    </div>

                                    <div class="select-category">
                                        <div class="vertical__colomn colomn">
                                            <div class="colomn__text">Size</div>
                                            <div class="colomn__arrow">
                                                <a href="#" ><IoIosArrowDown /></a>
                                            </div>
                                        </div>
                                        <div class="category_select">
                                            <p>40x50</p>
                                            <p>50x60</p>
                                            <p>60x80</p>
                                        </div>
                                    </div>
                                    <div class="select-category">
                                        <div class="vertical__colomn colomn_4">
                                            <div class="price__from">
                                                <div class="colomn__text">from</div>
                                                <div class="colomn__price" contenteditable="true">150</div>
                                                <div class="price__symbol">$</div>
                                                <div class="colomn__arrow">
                                                    <a href="#" ><IoIosArrowDown /></a>
                                                </div>
                                            </div>
                                            <div class="price__from">
                                                <div class="colomn__text">to</div>
                                                <div class="colomn__price" contenteditable="true">150</div>
                                                <div class="price__symbol">$</div>
                                                <div class="colomn__arrow">
                                                    <a href="#" ><IoIosArrowDown /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>



                        </div>

                    </div>
                    <div className="gallery__picture">
                        {elements}
                    </div>
                    <Paginacia/>
                    <BlueSolials/>
                </div>

            </div>
        </>
    );
}