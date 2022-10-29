import React from "react";
import "./landingFaq.scss";

const LandingFaq = ({ title, image, exp }) => {
    return (
        <div className="faq-item">
            <div className="cnt">
                <div className="title">
                    {title}
                    {image !== "" ? <img src={image} /> : ""}
                </div>
                <div className="exp">{exp}</div>
            </div>
        </div>
    )
}

export default LandingFaq;