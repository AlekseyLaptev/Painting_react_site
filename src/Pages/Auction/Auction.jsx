import React, { useState, useEffect } from "react";
import './Auction.scss';
import "../../components/utils/AdressBar.scss";

import { FaHeart } from 'react-icons/fa';
import { AiOutlineCheckCircle } from 'react-icons/ai';

import auction from '../../img/Auction/auction.png';
import slider_img from '../../img/Auction/slider_img.png';
import PayPal from "../../img/logo/PayPal-Logo.png"
import Visa from "../../img/logo/Visa-Logo.png"
import Discover from "../../img/logo/Discover-Logo.png"
import American from "../../img/logo/American-Express-Logo.png"
import Master from "../../img/logo/Mastercard-logo.png"

import generateNavigationLine from "../../components/utils/Navigation";
import formatDate from "../../components/utils/dateFormatter";
import CurrentBid from "../../components/utils/CurrentBid";
import BlueSolials from "../../components/utils/BlueSocials";
import Socials from "../../components/utils/Socials";
import SliderPainting from "../../components/utils/SliderPainting";





export default function Auction() {
    // TODO replace to fetch function
    const [finishDate, _] = useState(new Date(Date.now() + 24 * 60 * 60 * 1000));
    const [displayTime, setDisplayTime] = useState("");
    useEffect(() => {
        const interval = setInterval(() => {
            const diffTime = finishDate - new Date();
            setDisplayTime(formatDate(diffTime));
        }, 1000);
        return () => clearInterval(interval)
    }, [])

    const elements = new Array(7).fill(0).map((_, idx) => <CurrentBid key={idx} />)
    const elements_2 = new Array(4).fill(0).map((_, idx) => <SliderPainting key={idx} />)
    return (
        <div className="Auction_wrapper">
            <div className="content__container">
                <div className="address__bar">
                    {generateNavigationLine(["Home", "Auctions", "Name of the painting"])}
                </div>
            </div>

            <main className="auction_painting">
                <div className="container_one">
                    <div className="auction_wrap">
                        <h2>Name of the painting</h2>
                        <div className="left__heart">
                            <div className="heart__icon">
                                <FaHeart size={20} fill='red' />
                            </div>
                            <div className="heart__title">55</div>
                        </div>
                    </div>
                    <div className="name_title">№ 56798599</div>
                </div>
                <div className="container_two">
                    <div className="slider_container">
                        <div className="slider_painting">
                            <img src={slider_img} alt="img" />
                            <img src={slider_img} alt="img" />
                            <img src={slider_img} alt="img" />
                            <img src={slider_img} alt="img" />
                            <div className="nav__circles">
                                <div className="outer-circle">
                                    <div className="inner-circle"></div>
                                </div>
                                <div className="outer-circle">
                                    <div className="inner-circle"></div>
                                </div>
                                <div className="outer-circle">
                                    <div className="inner-circle active"></div>
                                </div>
                                <div className="outer-circle">
                                    <div className="inner-circle"></div>
                                </div>
                            </div>
                        </div>
                        <div className="img_painting">
                            <img src={auction} alt="img" />
                        </div>
                    </div>
                </div>
                <div className="container_three">
                    <div className="nav__buttons">
                        <div className="left__button"></div>
                        <div className="right__button"></div>
                    </div>
                </div>
                <div className="container_four">
                    <div className="auctionTimer_container">
                        <div className="auction_timer">
                            <div className="timer_title">Closes in {displayTime}</div>
                            <div className="timer_subtitle">You haven’t on this lot yet</div>
                        </div>
                        <div className="bid_container">
                            <div className="bid_title">Current bid 500 USD</div>
                            <div className="bid_subtitle">No reserve price</div>
                        </div>
                        <div className="bid_container">
                            <div className="bid_title">Next minimum bid  735 USD</div>
                            <div className="bid_subtitle_2">Bids include shipping</div>
                        </div>
                        <div className="bid_container">
                            <div className="bid_title">Quick bid</div>
                            <div className="bid_button">
                                <button className="guick_bid">$ 705</button>
                                <button className="guick_bid">$ 730</button>
                                <button className="guick_bid">$ 755</button>
                            </div>
                            <div className="bid_subtitle_3">Bid directly</div>
                            <div className="input_container">
                                <div className="bidInput_container">
                                    <input placeholder="$" className="bid_current" type="text" />
                                </div>
                                <button className="place_bid">Place bid</button>
                            </div>
                            <div className="bid_subtitle_3">The maximal bid you would like to place</div>
                            <div className="input_container">
                                <div className="bidInput_container second">
                                    <input placeholder="$" className="bid_current" type="text" />
                                </div>
                                <button className="place_bid two">Automatic bid</button>
                            </div>
                            <div className="bid_subtitle_3">Your email (no one will see it)</div>
                            <div className="input_container">
                                <div className="bidInput_container three">
                                    <input placeholder="Your email" className="bid_current" type="email" />
                                </div>
                            </div>
                        </div>
                        <div className="currentBid_container">
                            {elements}
                        </div>
                        <div className="view">View all bids</div>
                    </div>
                </div>
                <div className="container_five">
                    <div className="five_title">Name of the painting</div>
                    <div className="five_subtitle">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.
                        <br /><br />Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc.
                        <ul className="description__list">
                            <li><div className="icon__li"><AiOutlineCheckCircle size={21} /></div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </li>
                            <li><div className="icon__li"><AiOutlineCheckCircle size={21} /></div>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
                            <li><div className="icon__li"><AiOutlineCheckCircle size={21} /></div>Lorem ipsum dolor sit amet consectetur adipisicing elit. </li>
                        </ul>
                    </div>
                </div>
                <div className="container_six">
                    <div className="sale_title title_posicion">Buying safely</div>
                    <div className="sale_subtitle">All puchrases protected by PayPal</div>
                    <div className="sale_title title_posicion-2">Payment options</div>
                    <div className="payment">
                        <div className="payment_name">
                            <div className="payment__cart">
                                <div className="img__cart">
                                    <img src={PayPal} alt="PayPal" />
                                </div>
                            </div>
                            <div className="payment__cart">
                                <div className="img__cart">
                                    <img src={Visa} alt="PayPal" />
                                </div>
                            </div>
                            <div className="payment__cart">
                                <div className="img__cart">
                                    <img src={Discover} alt="PayPal" />
                                </div>
                            </div>
                            <div className="payment__cart">
                                <div className="img__cart">
                                    <img src={American} alt="PayPal" />
                                </div>
                            </div>
                            <div className="payment__cart">
                                <div className="img__cart">
                                    <img src={Master} alt="PayPal" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sale_title title_posicion-3">Share this lot with your friends</div>
                    <Socials />
                </div>
            </main >
            <div className="socials_wrap">
                <BlueSolials />
            </div>
            <div className="container_seven">
                <h2>Others love these</h2>
                <div className="pictures_container">
                    {elements_2}
                </div>
            </div>
        </div >
    )
}
