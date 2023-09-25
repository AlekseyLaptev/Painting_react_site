import React from "react";
import "./Painting.scss"
import { AiOutlineCheck, AiOutlineCheckCircle, AiOutlineShareAlt } from 'react-icons/ai'

import { FaRegHeart, FaHeart } from 'react-icons/fa'
import PayPal from "../../img/logo/PayPal-Logo.png"
import Visa from "../../img/logo/Visa-Logo.png"
import Discover from "../../img/logo/Discover-Logo.png"
import American from "../../img/logo/American-Express-Logo.png"
import Master from "../../img/logo/Mastercard-logo.png"
import Big from "../../img/Picture_content/big.png"
import p1 from "../../img/Picture_content/p1.png"
import p2 from "../../img/Picture_content/p2.png"
import p3 from "../../img/Picture_content/p3.png"
import p4 from "../../img/Picture_content/p4.png"
import Socials from "../../components/utils/Socials";
import SliderPainting from "../../components/utils/SliderPainting"


import generateNavigationLine from "../../components/utils/Navigation";

function SetActive() {

}

export default function Painting() {
    const elements = new Array(4).fill(0).map((_, idx) => <SliderPainting key={idx} />)
    return (
        <div className="painting__wrapper">
            <div className="content__container">
                <div className="address__bar">
                    {generateNavigationLine(["Home", "Gallery", "Name of the painting"])}
                </div>
                <div className="picture__container">
                    <div className="picture__slider">
                        <div className="slider__container">
                            <div className="small__pictures">
                                <img src={p1} alt="p1" />
                                <img src={p2} alt="p2" />
                                <img src={p3} alt="p3" />
                                <img src={p4} alt="p4" />
                            </div>
                            <div className="big__pictures__container">
                                <div className="big__picture">
                                    <img src={Big} alt="Big" />
                                </div>
                                <div className="heart__counter">
                                    <div className="heart__left">
                                        <FaHeart size={23} fill='red' />
                                        <div className="number">55</div>
                                    </div>
                                    <div className="heart__right">
                                        <FaRegHeart size={23} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="slider__nav">
                            <div className="nav__circles">
                                <div className="outer-circle">
                                    <div className="inner-circle"></div>
                                </div>
                                <div className="outer-circle">
                                    <div className="inner-circle"></div>
                                </div>
                                <div className="outer-circle">
                                    <div className="inner-circle"></div>
                                </div>
                                <div className="outer-circle">
                                    <div className="inner-circle"></div>
                                </div>
                            </div>
                            <div className="nav__buttons">
                                <div className="left__button"></div>
                                <div className="right__button"></div>
                            </div>
                        </div>
                    </div>
                    <div className="picture___info">
                        <div className="picture__name">Oil painting by Kate Kulish “She is in unity with nature 2”</div>
                        <div className="picture__labels">
                            <div className="ellipse green">Free shipping</div>
                            <div className="ellipse red">Only 1 available</div>
                        </div>
                    </div>
                    <div className="picture__payment">
                        <div className="price__container">
                            <div className="picture__price">390.00 USD</div>
                            <button className="buyIt"> Buy it now</button>
                        </div>
                        <div className="informacion">
                            <div className="colomn__inf">
                                <div className="colomn__icon">
                                    <AiOutlineCheck size={14} strokeWidth={100} /></div>
                                <div className="colomn__title">Shipping & returns</div>
                            </div>
                            <div className="colomn__inf">
                                <div className="colomn__icon">
                                    <AiOutlineCheck size={14} strokeWidth={100} />
                                </div>
                                <div className="colomn__title">Ready to ship in 1 - 3 business days</div>
                            </div>
                            <div className="colomn__inf">
                                <div className="colomn__icon">
                                    <AiOutlineCheck size={14} strokeWidth={100} />
                                </div>
                                <div className="colomn__title">From Ukraine
                                </div>
                            </div>
                            <div className="colomn__inf">
                                <div className="colomn__icon">
                                    <AiOutlineCheck size={14} strokeWidth={100} />
                                </div>
                                <div className="colomn__title">You are fully protected by PayPal</div>
                            </div>
                        </div>
                        <div className="categories">
                            <div className="colomn__cat">
                                <div className="cat__title">Categories:</div>
                                <div className="cat__text">2019 year, Animals, Abstract</div>
                            </div>
                            <div className="colomn__cat">
                                <div className="cat__title">Categories:</div>
                                <div className="cat__text">Ready to ship in 1 - 3 business days
                                    From Ukraine</div>
                            </div>
                            <div className="colomn__cat">
                                <div className="cat__title">Returns and exchanges accepted</div>
                                <div className="cat__text"></div>
                            </div>
                        </div>
                        <div className="payment">Payment options:
                            <div className="payment_name">
                                <div className="payment__cart" onClick={SetActive}>
                                    <div className="img__cart">
                                        <img src={PayPal} alt="PayPal" />
                                    </div>
                                </div>
                                <div className="payment__cart" onClick={SetActive}>
                                    <div className="img__cart">
                                        <img src={Visa} alt="PayPal" />
                                    </div>
                                </div>
                                <div className="payment__cart" onClick={SetActive}>
                                    <div className="img__cart">
                                        <img src={Discover} alt="PayPal" />
                                    </div>
                                </div>
                                <div className="payment__cart" onClick={SetActive}>
                                    <div className="img__cart">
                                        <img src={American} alt="PayPal" />
                                    </div>
                                </div>
                                <div className="payment__cart" onClick={SetActive}>
                                    <div className="img__cart">
                                        <img src={Master} alt="PayPal" />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
                <div className="picture__description">
                    <div className="description__title">Name of the painting</div>
                    <div className="description__content">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.<br /><br />
                        Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc.
                    </div>
                    <ul className="description__list">
                        <li><div className="icon__li"><AiOutlineCheckCircle size={21} /></div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium libero dolor explicabo numquam.</li>
                        <li><div className="icon__li"><AiOutlineCheckCircle size={21} /></div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio dolores voluptas laborum corrupti nulla fugit incidunt, magni accusantium laudantium dicta magnam fuga quod tempora cum modi sint at vel quae!</li>
                        <li><div className="icon__li"><AiOutlineCheckCircle size={21} /></div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus neque at, animi tenetur eum fugit! Quis, quae!</li>
                    </ul>
                </div>
                <div className="socials">
                    <div className="social__container">
                        <div className="social__logo"><AiOutlineShareAlt size={30} fill={'#4137D0'} /></div>
                        <div className="social__content"><a href="#">Share Kate’s art with the world</a></div>
                        <div className="icon__container"><Socials /></div>
                    </div>
                    <div className="social__container_2"><Socials /></div>
                </div>
                <div className="related__painting">
                    <div className="related__title">Related paintings</div>
                    <div className="painting__slider__container">
                        {elements}
                    </div>
                    <div className="navigation__arrow">
                        <div className="arrow_left"></div>
                        <div className="arrow_right"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}