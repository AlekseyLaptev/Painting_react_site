import React, { useState } from "react";
import SliderElement from "../utils/SliderElement";
import "./Slider.scss";
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr"
import PropTypes from 'prop-types'
import { redirect } from "react-router-dom";

// imgs
// visible part
// slider step
export default class Slider extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            leftPosition: 0
        }
    }

    setLeftPosition(next) {
        this.setState({
            ...this.state,
            leftPosition: next
        })
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextState.leftPosition != this.state.leftPosition
    }

    // componentDidCatch() {}
    // componentDidUpdate() {}
    // componentDidMount() {}
    // componentWillUnmount() {}



    render() {

        // let [leftPosition, setLeftPosition] = useState(0);

        const { imgs, sliderElement, visiblePart = 4 } = this.props;
        const elements = imgs.map((img, idx) => sliderElement(img, idx))
        return (
            <div className="slider_container">
                <div className="navigation-container">

                    <button className="button-prev" onClick={() => {
                        if (this.state.leftPosition > -1 * (imgs.length - visiblePart) * 450) {
                            this.setLeftPosition(this.state.leftPosition - 450)
                        }
                    }}><GrFormPrevious/></button>


                    <button className="button-next" onClick={() => {
                        if (this.state.leftPosition != 0) {
                            this.setLeftPosition(this.state.leftPosition + 450)
                        }
                    }}><GrFormNext /></button>
                </div>
                <div className="slider-wrapper">
                    <div className="slider-line" style={{ left: this.state.leftPosition }}>
                        {elements}
                    </div>

                </div>
            </div>
        )
    }
}

Slider.propTypes = {
    imgs: PropTypes.array.isRequired,
    sliderElement: PropTypes.func.isRequired,
    visiblePart: PropTypes.number
}