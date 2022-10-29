import React from 'react';
import { Link } from 'react-router-dom';
import { footerBg } from '../../assets/img';
import "./footer.scss";

const Footer = () => {
    return (
        <footer style={{ backgroundImage: 'url(' + footerBg + ')' }}>
            <div className="cnt">
                <div className="cc">
                    maded with
                    <svg width="29.616" height="26.087" viewBox="0 0 29.616 26.087"><path d="M25.487,2.129a7.266,7.266,0,0,0-10.279,0l-1.4,1.4-1.4-1.4A7.268,7.268,0,0,0,2.129,12.408l1.4,1.4L13.808,24.087,24.087,13.809l1.4-1.4a7.266,7.266,0,0,0,0-10.279Z" transform="translate(1 1)" /></svg>
                </div>
                <div className="developers">developers</div>
            </div>
        </footer>
    )
}

export default Footer;