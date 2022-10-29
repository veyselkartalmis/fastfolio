import React from 'react';
import "./landingShowCase.scss";

const LandingShowCase = ({ image }) => {
    return (
        <div className="showcase-item">
            <div className="img" style={image}></div>
        </div>
    )
}

export default LandingShowCase