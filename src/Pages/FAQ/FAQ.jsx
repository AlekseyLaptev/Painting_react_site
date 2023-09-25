import React from "react";
import "./FAQ.scss";
import "../../components/utils/AdressBar.scss";
import bg_faq from "../../img/FAQ/bg_faq.png";


import generateNavigationLine from "../../components/utils/Navigation";

export default class FAQ extends React.Component {
    constructor() {
        super();
        this.state = {}
        this.upmenu = this.upmenu.bind(this)
    }
    upmenu(e) {
        const fqqListElement = e.target.closest(".faq_list");
        const actives = fqqListElement.querySelectorAll('.collaps')[0]
        actives.classList.toggle('collaps_active')
        fqqListElement.classList.toggle('list_active')
        const icon = fqqListElement.querySelectorAll('.icon_plus')[0]
        icon.classList.toggle('active')
    }
    render() {
        return (
            <div className="FAQ__wrapper" >
                <div className="content__container">
                    <div className="address__bar">
                        {generateNavigationLine(["Home", "FAQ"])}
                    </div>
                    <header className="header">
                        <div className="img_container">
                            <img src={bg_faq} alt="img" />
                        </div>
                        <h1 className="FAQ_posicion">FAQ</h1>
                    </header>
                    <main className="FAQ">
                        <div className="FAQ_title">Question - Answer</div>
                        <ul className="faq_linc">
                            <li className="faq_list">
                                <div className="list_back">
                                    <div className="list_wrap" onClick={this.upmenu}>
                                        <div className="list_container">
                                            <div className="list_number">01.</div>
                                            <div className="list_text">Is it possible to make custom paintings?</div>
                                        </div>
                                        <div className="icon_plus"></div>
                                    </div>
                                </div>
                                <div className="collaps">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem ratione reiciendis suscipit quidem temporibus eum veritatis. Soluta commodi iure provident cumque reiciendis, error recusandae. Rem dolorum impedit perferendis ab cumque.</div>
                            </li>

                            <li className="faq_list">
                                <div className="list_back">
                                    <div className="list_wrap" onClick={this.upmenu}>
                                        <div className="list_container">
                                            <div className="list_number">02.</div>
                                            <div className="list_text">Is it possible to make custom paintings?</div>
                                        </div>
                                        <div className="icon_plus"></div>
                                    </div>
                                </div>
                                <div className="collaps">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem ratione reiciendis suscipit quidem temporibus eum veritatis. Soluta commodi iure provident cumque reiciendis, error recusandae. Rem dolorum impedit perferendis ab cumque.</div>
                            </li>
                            <li className="faq_list">
                                <div className="list_back">
                                    <div className="list_wrap" onClick={this.upmenu}>
                                        <div className="list_container">
                                            <div className="list_number">03.</div>
                                            <div className="list_text">Is it possible to make custom paintings?</div>
                                        </div>
                                        <div className="icon_plus"></div>
                                    </div>
                                </div>
                                <div className="collaps">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem sed optio nobis fugit rem. Accusamus ex neque itaque deserunt eaque cum beatae accusantium! Laborum commodi quia similique possimus dolor tempora vero, repellat fugiat fugit aspernatur in placeat expedita cum officia nesciunt dignissimos. Optio impedit dolorum consequuntur vitae soluta, et consectetur?</div>
                            </li>

                            <li className="faq_list">
                                <div className="list_back">
                                    <div className="list_wrap" onClick={this.upmenu}>
                                        <div className="list_container">
                                            <div className="list_number">04.</div>
                                            <div className="list_text">Is it possible to make custom paintings?</div>
                                        </div>
                                        <div className="icon_plus"></div>
                                    </div>
                                </div>
                                <div className="collaps">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem ratione reiciendis suscipit quidem temporibus eum veritatis. Soluta commodi iure provident cumque reiciendis, error recusandae. Rem dolorum impedit perferendis ab cumque.</div>
                            </li>

                            <li className="faq_list">
                                <div className="list_back">
                                    <div className="list_wrap" onClick={this.upmenu}>
                                        <div className="list_container">
                                            <div className="list_number">05.</div>
                                            <div className="list_text">Is it possible to make custom paintings?</div>
                                        </div>
                                        <div className="icon_plus"></div>
                                    </div>
                                </div>
                                <div className="collaps">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa quo assumenda id corporis distinctio eveniet adipisci, soluta, quaerat dolorem voluptatibus aperiam beatae commodi aliquid blanditiis provident at quae. Officia fugit ipsa voluptatibus autem placeat repellendus repudiandae quia minus harum, molestiae porro accusamus inventore provident beatae sequi excepturi odit facere ratione ad nisi totam dicta cumque vel. Nostrum consectetur adipisci iste odio veniam beatae saepe iure ipsa. Deserunt praesentium ipsum, odio commodi dolore velit debitis doloremque, itaque error voluptatem blanditiis suscipit provident voluptatibus vel rem ad veritatis voluptate perferendis. Animi adipisci reiciendis vel saepe dicta quisquam at ad voluptate, consectetur nihil!</div>
                            </li>

                        </ul>
                    </main>
                </div>
            </div >
        )
    }
}