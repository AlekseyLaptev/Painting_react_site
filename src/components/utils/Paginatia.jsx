import React from "react";
import "./Paginacia.scss";

export default function Paginacia() {
    return (
        <>  <div className="paginatia_container">
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
        </>
    )
}