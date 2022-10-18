import React from "react";
import bg from "../../img/Error/banner.png";
import "./Error.scss";
import { Link } from "react-router-dom";

export default class Error extends React.Component {
    render() {
        return (
            <header className="header_error">
                <div className="img_container">
                    <img src={bg} alt="img" />
                </div>
                <div className="error_title">Not Found</div>
                <div className="error_text">The resource requested could not be found on this server! </div>
                <button className="error"><Link to="/main">Go back main page</Link></button>
            </header>

        )
    }

}
