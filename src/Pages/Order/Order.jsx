import React from "react";
import "./Order.scss";
import img from "../../img/Picture_content/slide_4.png"
import PayPal from "../../img/logo/PayPal-Logo.png"
import Visa from "../../img/logo/Visa-Logo.png"
import Discover from "../../img/logo/Discover-Logo.png"
import American from "../../img/logo/American-Express-Logo.png"
import Master from "../../img/logo/Mastercard-logo.png"
import {Link} from "react-router-dom";

function Second_page() {
    const form = document.getElementsByClassName('second__form')[0]
    form.classList.add('second__form_active')
    const button = document.querySelector('.order.inactive')
    button.classList.remove('inactive')
    const step = document.getElementsByClassName('step__rectangle')[1]
    step.classList.add('active')
}

export default function Order() {
    return (
        <main className="Order">
            <div className="Order__content">
                <div className="order_header">Order</div>
                <div className="order_steps">
                    <div className="step">
                        <div className="step__rectangle active">1</div>
                        <div className="step__text">Contact details</div>
                    </div>
                    <div className="step_line"></div>
                    <div className="step">
                        <div className="step__rectangle">2</div>
                        <div className="step__text">Payment method</div>
                    </div>
                </div>
            </div>
            <div className="order__wrap">
                <div className="order__container">
                    <div className="order__form">
                        <h3 className="first">Your contact details</h3>
                        <div className="order__details">
                            <div className="input__container">
                                <div className="input__name">First Name*</div>
                                <input type="text" />
                            </div>
                            <div className="input__container">
                                <div className="input__name">Second Name*</div>
                                <input type="text" />
                            </div>
                            <div className="input__container">
                                <div className="input__name">Email*</div>
                                <input type="email" />
                            </div>
                            <div className="input__container">
                                <div className="input__name">Telephone*</div>
                                <input type="text" />
                            </div>
                            <div className="input__container">
                                <div className="input__name">Country*</div>
                                <input type="text" />
                            </div>
                            <div className="input__container">
                                <div className="input__name">Address*</div>
                                <input type="text" />
                            </div>
                            <div className="input__container">
                                <div className="input__name">City</div>
                                <input type="text" />
                            </div>
                            <div className="input__container">
                                <div className="input__name">Region (optional)</div>
                                <input type="text" />
                            </div>
                            <div className="input__container">
                                <div className="input__name">Postcode</div>
                                <input type="text" />
                            </div>
                        </div>
                        <h3 className="second">Additional information</h3>
                        <div className="input__container">
                            <div className="input__name">Note to order (optional)</div>
                            <textarea className="area" />
                        </div>
                        <div className="button__container">
                            <div className="left__container">
                                <input type="checkbox" name="checkbox" id="" />
                                <div className="checkbox_text">agreement policy</div>
                            </div>
                            <button onClick={Second_page}>Next</button>
                        </div>
                    </div>
                    <div className="listcart__container">
                        <div className="listcart_title">Order list</div>
                        <div className="listcart_img_wrap">
                            <div className="listcart_img">
                                <img src={img} alt="img" />
                            </div>
                            <div className="listcart_info">
                                <div className="info_name">Name of the painting
                                    painting</div>
                                <div className="info_price">390.00 USD</div>
                            </div>
                        </div>
                        <div className="total">Total:</div>
                        <div className="cost_wrap">
                            <div className="cost_text">Cost of 1 item:</div>
                            <div className="cost_price">390.00 USD</div>
                        </div>
                        <div className="cost_wrap">
                            <div className="cost_text">Total:</div>
                            <div className="cost_price">390.00 USD</div>
                        </div>
                        <button className="order inactive"><Link to="/thanks">order</Link></button>
                    </div>
                </div>
                <div className="second_page">
                    <div className="second__form">
                        <h3 className="form__first">Payment method</h3>
                        <div className="order__details">Online payment via:</div>
                        <div className="second_payment">
                            <div className="payment__system">
                                <div className="payment__cart">
                                    <div className="img__cart">
                                        <img src={PayPal} alt="PayPal" />
                                    </div>
                                </div>
                                <div className="payment__cart">
                                    <div className="img__cart">
                                        <img src={Visa} alt="Visa" />
                                    </div>
                                </div>
                                <div className="payment__cart">
                                    <div className="img__cart">
                                        <img src={Discover} alt="Discover" />
                                    </div>
                                </div>
                                <div className="payment__cart">
                                    <div className="img__cart">
                                        <img src={American} alt="American" />
                                    </div>
                                </div>
                                <div className="payment__cart">
                                    <div className="img__cart">
                                        <img src={Master} alt="Master" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="secont__text">All payments are collected and protected by PayPal. Also, you will be able to use all credit or debit cards to pay for your purchase in the next step</div>
                    </div>
                </div>
            </div>
        </main>
    )
}