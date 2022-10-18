import React from "react";
import "./FAQ.scss";
import "../../components/utils/AdressBar.scss";
import bg_faq from "../../img/FAQ/bg_faq.png";


import generateNavigationLine from "../../components/utils/Navigation";

export default class FAQ extends React.Component {
    constructor (){
        super();
        this.state={}
        this.upmenu = this.upmenu.bind(this)
    }
    upmenu (e){

    }

    render() {
        return (
            <div className="FAQ__wrapper">
                <div className="content__container">
                    <div className="address__bar">
                        {generateNavigationLine(["Home","FAQ"])}
                    </div>
                    <header className="header">
                        <div className="img_container">
                            <img src={bg_faq} alt="img" />
                        </div>
                        <h1 className="FAQ_posicion">FAQ</h1>
                    </header>
                    <main className="FAQ">
                        <div className="FAQ_title">Question - Answer</div>
                        <ul className="faq_linc" onClick={this.upmenu}>
                            <li className="faq_list">
                                <div className="list_container">
                                    <div className="list_number">01.</div>
                                    <div className="list_text">Is it possible to make custom paintings?</div>
                                </div>
                                <div className="icon_plus"></div>
                            </li>
                            <li className="faq_list">
                                <div className="list_container">
                                    <div className="list_number">02.</div>
                                    <div className="list_text">Is it possible to make custom paintings?</div>
                                </div>
                                <div className="icon_plus"></div>
                            </li>
                            <li className="faq_list">
                                <div className="list_container">
                                    <div className="list_number">03.</div>
                                    <div className="list_text">Is it possible to make custom paintings?</div>
                                </div>
                                <div className="icon_plus"></div>
                            </li>
                            <li className="faq_list">
                                <div className="list_container">
                                    <div className="list_number">04.</div>
                                    <div className="list_text">Is it possible to make custom paintings?</div>
                                </div>
                                <div className="icon_plus"></div>
                            </li>
                            <li className="faq_list">
                                <div className="list_container">
                                    <div className="list_number">05.</div>
                                    <div className="list_text">Is it possible to make custom paintings?</div>
                                </div>
                                <div className="icon_plus"></div>
                            </li>
                        </ul>
                    </main>
                </div>
            </div>
        )
    }
}