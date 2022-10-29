import React from 'react';
import "./landingPage.scss";
import { Link } from 'react-router-dom';
import LandingBanner from "../../components/LandingBanner/LandingBanner";
import Header from "../../components/Header/Header";
import LandingFaq from '../../components/LandingFaq/LandingFaq';
import LandingShowCase from "../../components/LandingShowCase/LandingShowCase";
import Footer from '../../components/Footer/Footer';
import { case1, case2, case3, fastfolioLogo } from '../../assets/img';

const LandingPage = () => {
    return (
        <div className="landing-page">
            <Header />
            <LandingBanner />
            <div className="home-showcase">
                <LandingShowCase image={{ backgroundImage: 'url(' + case1 + ')' }} />
                <LandingShowCase image={{ backgroundImage: 'url(' + case2 + ')' }} />
                <LandingShowCase image={{ backgroundImage: 'url(' + case3 + ')' }} />
            </div>
            <div className="home-faq">
                <LandingFaq title="what is" image={fastfolioLogo} exp={["It's a website that presents you to create portfolios as ", <span>fast</span>, " and ", <span>easy</span>, " as you can."]} />
                <LandingFaq title="how can i use it" image="" exp={["Besides being free, it is also very ", <span>simple</span>, " to use. Just ", <span>choose</span>, " a theme and fill the inputs."]} />
                <div className="go-templates">
                    <span>So why don't you</span>
                    <Link className="link" to="/templates">Checkout Templates</Link>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default LandingPage;