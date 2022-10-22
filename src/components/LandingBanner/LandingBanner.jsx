import React from 'react'
import "./landingBanner.scss";
import { clock, wallet, rocket } from '../../assets/img';

const LandingBanner = () => {
    return (
        <>
            <div className="landing-banner">
                <h4>Fast. Responsive. Free.</h4>
                <div className="decors">
                    <div className="clock">
                        <img src={clock} alt="clock" />
                    </div>
                    <div className="wallet">
                        <img src={wallet} alt="wallet" />
                    </div>
                    <div className="rocket">
                        <img src={rocket} alt="rocket" />
                    </div>
                </div>
                <div className="scroll-down">
                    take a look.
                    <svg width="20.083" height="10.926" viewBox="0 0 20.083 10.926"><path d="M15.84,0,9.32,6.52a1.986,1.986,0,0,1-2.8,0L0,0" transform="translate(2.121 2.121)" /></svg>
                </div>
            </div>
        </>
    )
}

export default LandingBanner;