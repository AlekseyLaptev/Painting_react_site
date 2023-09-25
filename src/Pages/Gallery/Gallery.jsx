import React from "react";
import "./Gallery.scss"
import SliderPainting from "../../components/utils/SliderPainting";
import Img from "../../img/Picture_content/slide_2.png";
import bg_img from "../../img/Gallery/bg_gallery.png";
import { IoIosArrowDown } from 'react-icons/io';
import Paginacia from "../../components/utils/Paginatia";
import BlueSolials from "../../components/utils/BlueSocials";


import generateNavigationLine from "../../components/utils/Navigation";

export default function Gallery(props) {
    const elements = new Array(16).fill(0).map((el, idx) => <SliderPainting key={idx} Img={Img} />)

    function OpenCategory(e) {
        const Open = e.target.closest('.select-category');
        const actives = Open.querySelectorAll('.category_select')[0];
        actives.classList.toggle('active');
        const arrows = Open.querySelectorAll('.colomn__arrow')[0];
        arrows.classList.toggle('active__arrow');
    }

    function CategoryDefine(e) {
        const Open = e.target.closest('.select-category');
        const Define = e.target.closest('.category_select>p');
        const DefineText = Define.textContent;
        const Text = Open.querySelectorAll('.colomn__text')[0];
        Text.textContent = DefineText;
    }


    return (
        <div className="gallery__wrapper">
            <div className="content__container">
                <div className="address__bar">
                    {generateNavigationLine(["Home", "Gallery"])}
                </div>
                <header className="header">
                    <div className="img__container">
                        <img src={bg_img} alt="img" />
                    </div>
                    <h1 className="gallery_posicion">gallery</h1>
                </header>
                <div className="product__categorie">
                    <div className="content">
                        <div className="title_categories">Product categories
                            <div className="categories__input">

                                <div className="select-category" onClick={OpenCategory}>
                                    <div className="vertical__colomn colomn">
                                        <div className="colomn__text">Select a category</div>
                                        <div className="colomn__arrow">
                                            <a href="#" ><IoIosArrowDown /></a>
                                        </div>
                                    </div>
                                    <div className="category_select" onClick={CategoryDefine}>
                                        <p>Category 1</p>
                                        <p>Category 2</p>
                                        <p>Category 3</p>
                                        <p>Category 4</p>
                                        <p>Category 5</p>
                                    </div>
                                </div>

                                <div className="select-category" onClick={OpenCategory}>
                                    <div className="vertical__colomn colomn">
                                        <div className="colomn__text">Year</div>
                                        <div className="colomn__arrow">
                                            <a href="#" ><IoIosArrowDown /></a>
                                        </div>
                                    </div>
                                    <div className="category_select" onClick={CategoryDefine}>
                                        <p>2022</p>
                                        <p>2021</p>
                                        <p>2020</p>
                                        <p>2019</p>
                                        <p>2018</p>
                                        <p>2017</p>
                                    </div>
                                </div>

                                <div className="select-category" onClick={OpenCategory}>
                                    <div className="vertical__colomn colomn">
                                        <div className="colomn__text">Size</div>
                                        <div className="colomn__arrow">
                                            <a href="#" ><IoIosArrowDown /></a>
                                        </div>
                                    </div>
                                    <div className="category_select" onClick={CategoryDefine}>
                                        <p>40x50</p>
                                        <p>50x60</p>
                                        <p>60x80</p>
                                    </div>
                                </div>
                                <div className="select-category">
                                    <div className="vertical__colomn colomn_4">
                                        <div className="price__from">
                                            <div className="colomn__text">from</div>
                                            <div className="colomn__price">
                                                <input type="text" />
                                            </div>
                                            <div className="price__symbol">$</div>
                                            <div className="colomn__arrow">
                                                <a href="#" ><IoIosArrowDown /></a>
                                            </div>
                                        </div>
                                        <div className="price__from">
                                            <div className="colomn__text">to</div>
                                            <div className="colomn__price">
                                                 <input type="text" />
                                            </div>
                                            <div className="price__symbol">$</div>
                                            <div className="colomn__arrow">
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
                <Paginacia />
                <BlueSolials popUpClick={props.setpopupVisible} />
            </div>
        </div>
    );
}