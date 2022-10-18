import React from "react";
import "./Exhibitions.scss";
import BlueSolials from "../../components/utils/BlueSocials";
import img from "../../img/Exhibitions/bg_exhibitions.png";
import img_1 from "../../img/Exhibitions/Mask group.png";
import img_2 from "../../img/Exhibitions/Bg_restangle.png";
import img_21 from "../../img/Exhibitions/Bg_restangle_2.png";
import img_3 from "../../img/Exhibitions/Mask group_2.png";
import img_4 from "../../img/Exhibitions/Mask group_3.png";
import img_5 from "../../img/Exhibitions/bg (1).png";
import img_6 from "../../img/Exhibitions/Mask group_5.png";
import img_7 from "../../img/Exhibitions/Mask group_6.png";

import { AiOutlineShareAlt } from 'react-icons/ai';


import generateNavigationLine from "../../components/utils/Navigation";

export default class Exhibitions extends React.Component {

    render() {
        return (
            <>
                <div className="exhibitions__wrapper">
                    <div className="address__bar">
                        {generateNavigationLine(["Home","Gallery","Name of the painting"])}
                    </div>
                    <div className="exhibitions__img">
                        <img src={img} alt="img" />
                        <h1 className="posicion">exhibitions</h1>
                    </div>
                    <div className="content content__container">
                        <div className="content__restangle_1">
                            <div className="restangle_1__img">
                                <img src={img_1} alt="img" />
                            </div>
                            <div className="restangle__content">
                                <h2 className="restangle__title">International Symposium in Mallnitz, Austria</h2>
                                <div className="data">August 18, 2019</div>
                                <div className="restangle__text">Lorem ipsum dolor sit amet, in prodesset definitiones mea, harum perfecto no vim. Quo ne perpetua recteque. Pertinax oportere ei eos, sit mazim voluptatum ea. His causae prompta ne, ex nec dico sanctus detraxit. Vim ei doming prompta, pri nemore phaedrum ex, eos ex augue homero.
                                    <br />Cum an ocurreret aliquando mediocritatem, movet sententiae eam no. Ei duo minim nonumy delicatissimi, vim doming possim no. Posse laoreet eu usu.
                                    <p>Cum an ocurreret aliquando mediocritatem, movet sententiae eam no. Ei duo minim nonumy delicatissimi, vim doming possim no. Posse laoreet eu usu.</p>
                                </div>
                                <div className="share__wrap">
                                    <a className="share icon"><AiOutlineShareAlt className="share__size" /></a>
                                    <a className="share__text">Share</a>
                                </div>
                                <div className="continue">continue reading</div>
                            </div>
                        </div>
                        <div className="content__restangle_2">
                            <img src={img_2} className="bg_restangle" />
                            <div className="restangle_2__img">
                                <img src={img_3} alt="img" />
                            </div>
                            <div className="restangle__content">
                                <h2 className="restangle__title">International Symposium in Mallnitz, Austria</h2>
                                <div className="data">August 18, 2019</div>
                                <div className="restangle__text">Lorem ipsum dolor sit amet, in prodesset definitiones mea, harum perfecto no vim. Quo ne perpetua recteque. Pertinax oportere ei eos, sit mazim voluptatum ea. His causae prompta ne, ex nec dico sanctus detraxit. Vim ei doming prompta, pri nemore phaedrum ex, eos ex augue homero.
                                    <br />Cum an ocurreret aliquando mediocritatem, movet sententiae eam no. Ei duo minim nonumy delicatissimi, vim doming possim no. Posse laoreet eu usu.
                                    <p>Cum an ocurreret aliquando mediocritatem, movet sententiae eam no. Ei duo minim nonumy delicatissimi, vim doming possim no. Posse laoreet eu usu.</p>
                                </div>
                                <div className="share__wrap">
                                    <a className="share icon"><AiOutlineShareAlt className="share__size" /></a>
                                    <a className="share__text">Share</a>
                                </div>
                                <div className="continue">continue reading</div>
                            </div>
                        </div>
                        <div className="content__restangle_3">
                            <div className="restangle_3__img">
                                <img src={img_4} alt="img" />
                            </div>
                            <div className="restangle__content">
                                <h2 className="restangle__title">International Symposium in Mallnitz, Austria</h2>
                                <div className="data">August 18, 2019</div>
                                <div className="restangle__text">Lorem ipsum dolor sit amet, in prodesset definitiones mea, harum perfecto no vim. Quo ne perpetua recteque. Pertinax oportere ei eos, sit mazim voluptatum ea. His causae prompta ne, ex nec dico sanctus detraxit. Vim ei doming prompta, pri nemore phaedrum ex, eos ex augue homero.
                                    <br />Cum an ocurreret aliquando mediocritatem, movet sententiae eam no. Ei duo minim nonumy delicatissimi, vim doming possim no. Posse laoreet eu usu.
                                    <p>Cum an ocurreret aliquando mediocritatem, movet sententiae eam no. Ei duo minim nonumy delicatissimi, vim doming possim no. Posse laoreet eu usu.</p>
                                </div>
                                <div className="share__wrap">
                                    <a className="share icon"><AiOutlineShareAlt className="share__size" /></a>
                                    <a className="share__text">Share </a>
                                </div>
                                <div className="continue">continue reading</div>
                            </div>
                        </div>
                        <div className="restangle__4">
                            <img src={img_5} alt="img" />
                        </div>
                        <div className="content__restangle_4">
                            <img src={img_21} className="bg_restangle_2" />
                            <div className="restangle_4__img">
                                <img src={img_6} alt="img" />
                            </div>
                            <div className="restangle__content">
                                <h2 className="restangle__title">International Symposium in Mallnitz, Austria</h2>
                                <div className="data">August 18, 2019</div>
                                <div className="restangle__text">Lorem ipsum dolor sit amet, in prodesset definitiones mea, harum perfecto no vim. Quo ne perpetua recteque. Pertinax oportere ei eos, sit mazim voluptatum ea. His causae prompta ne, ex nec dico sanctus detraxit. Vim ei doming prompta, pri nemore phaedrum ex, eos ex augue homero.
                                    <br />Cum an ocurreret aliquando mediocritatem, movet sententiae eam no. Ei duo minim nonumy delicatissimi, vim doming possim no. Posse laoreet eu usu.
                                    <p>Cum an ocurreret aliquando mediocritatem, movet sententiae eam no. Ei duo minim nonumy delicatissimi, vim doming possim no. Posse laoreet eu usu.</p>
                                </div>
                                <div className="share__wrap">
                                    <a className="share icon"><AiOutlineShareAlt className="share__size" /></a>
                                    <a className="share__text">Share</a>
                                </div>
                                <div className="continue">continue reading</div>
                            </div>
                        </div>
                        <div className="content__restangle_5">
                            <div className="restangle_5__img">
                                <img src={img_7} alt="img" />
                            </div>
                            <div className="restangle__content">
                                <h2 className="restangle__title">International Symposium in Mallnitz, Austria</h2>
                                <div className="data">August 18, 2019</div>
                                <div className="restangle__text">Lorem ipsum dolor sit amet, in prodesset definitiones mea, harum perfecto no vim. Quo ne perpetua recteque. Pertinax oportere ei eos, sit mazim voluptatum ea. His causae prompta ne, ex nec dico sanctus detraxit. Vim ei doming prompta, pri nemore phaedrum ex, eos ex augue homero.
                                    <br />Cum an ocurreret aliquando mediocritatem, movet sententiae eam no. Ei duo minim nonumy delicatissimi, vim doming possim no. Posse laoreet eu usu.
                                    <p>Cum an ocurreret aliquando mediocritatem, movet sententiae eam no. Ei duo minim nonumy delicatissimi, vim doming possim no. Posse laoreet eu usu.</p>
                                </div>
                                <div className="share__wrap">
                                    <a className="share icon"><AiOutlineShareAlt className="share__size" /></a>
                                    <a className="share__text">Share </a>
                                </div>
                                <div className="continue">continue reading</div>
                            </div>
                        </div>
                        <div className="paginatia_container">
                            <div className="paginatia">
                                <div className="left_arrow"></div>
                                <ul className="page_number">
                                    <li><a href="#">1</a></li>
                                    <li><a href="#">2</a></li>
                                    <li><a href="#">3</a></li>
                                    <li><a href="#">...</a></li>
                                    <li><a href="#">12</a></li>
                                </ul>
                                <div className="right_arrow"></div>
                            </div>
                        </div>
                        <BlueSolials popUpClick={this.props.setpopupVisible}/>
                    </div>
                </div>
            </>
        )
    }
}