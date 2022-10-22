import React from 'react';
import "./style.css";
import "./mobile.css";

const Theme1 = () => {
    return (
        <>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <nav class="navbar">
                <div class="brand">
                    <img src="/img/logo.png" alt="" />
                </div>
                <div class="nav-list">
                    <ul>
                        <li>Home</li>
                        <li>Skills</li>
                        <li>Services</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div class="social-icons">
                    <ul>
                        <li><i class="fa fa-instagram"></i></li>
                        <li><i class="fa fa-twitter"></i></li>
                        <li><i class="fa fa-github"></i></li>
                        <li><i class="fa fa-linkedin"></i></li>
                    </ul>
                </div>
            </nav>
            <div class="toggle-btn">
                <i class="fa fa-bars"></i>
            </div>

            <header class="header container">
                <div class="circle"></div>
                <div class="row hero">
                    <div class="col col-1">
                        <h1>Hey, I'm a <span class="highlight">Front-End</span> web developer.</h1>
                        <p>Hi, I'm Jhon Doe a freelance web designer from San-Francisco.
                            I help brands turn their ideas into high quality websites.</p>
                        <a href="#" class="ctn">Contact</a>
                    </div>
                    <div class="col col-2">
                        <div class="hero-img">
                            <img src="/img/profile.png" alt="" />
                        </div>
                    </div>
                </div>
            </header>

            <section class="skills container">
                <div class="title">
                    <h3>MY SKILLS</h3>
                    <h1>My Expertise</h1>
                </div>
                <div class="grid-wrapper">
                    <div class="grid-box">
                        <div class="icon-title">
                            <img src="/img/skill-1.png" alt="" />
                            <h2>Responsive Web Design</h2>
                        </div>
                        <p><span class="highlight">Design Text </span>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Ullam accusantium nesciunt eligendi cupiditate corrupti! Itaque aspernatur voluptates ducimus
                            maiores autem!</p>
                    </div>
                    <div class="grid-box">
                        <div class="icon-title">
                            <img src="/img/skill-2.png" alt="" />
                            <h2>Responsive Web Design</h2>
                        </div>
                        <p><span class="highlight">Design Text </span>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Ullam accusantium nesciunt eligendi cupiditate corrupti! Itaque aspernatur voluptates ducimus
                            maiores autem!</p>
                    </div>
                    <div class="grid-box">
                        <div class="icon-title">
                            <img src="/img/skill-3.png" alt="" />
                            <h2>Responsive Web Design</h2>
                        </div>
                        <p><span class="highlight">Design Text </span>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Ullam accusantium nesciunt eligendi cupiditate corrupti! Itaque aspernatur voluptates ducimus
                            maiores autem!</p>
                    </div>
                    <div class="grid-box">
                        <div class="icon-title">
                            <img src="/img/skill-4.png" alt="" />
                            <h2>Responsive Web Design</h2>
                        </div>
                        <p><span class="highlight">Design Text </span>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Ullam accusantium nesciunt eligendi cupiditate corrupti! Itaque aspernatur voluptates ducimus
                            maiores autem!</p>
                    </div>
                </div>
            </section>

            <section class="portfolio container">
                <div class="rect-bg"></div>
                <div class="title">
                    <h3>PORTFOLIO</h3>
                    <div class="ctn-title">
                        <h1>All Creative Works</h1>
                        <h4>Discover All Projects on <span class="highlight">Github <i class="fa fa-arrow-right"></i></span>
                        </h4>
                    </div>
                </div>
                <div class="grid-wrapper">
                    <div class="grid-box">
                        <img src="/img/prj-1.png" alt="" />
                        <div class="hover">
                            <h4>Application</h4>
                            <a href="#" class="highlight">Github <i class="fa fa-arrow-right"></i></a>
                        </div>
                    </div>
                    <div class="grid-box">
                        <img src="/img/prj-2.png" alt="" />
                        <div class="hover">
                            <h4>Application</h4>
                            <a href="#" class="highlight">Github <i class="fa fa-arrow-right"></i></a>
                        </div>
                    </div>
                    <div class="grid-box">
                        <img src="/img/prj-3.png" alt="" />
                        <div class="hover">
                            <h4>Application</h4>
                            <a href="#" class="highlight">Github <i class="fa fa-arrow-right"></i></a>
                        </div>
                    </div>
                    <div class="grid-box">
                        <img src="/img/prj-4.png" alt="" />
                        <div class="hover">
                            <h4>Application</h4>
                            <a href="#" class="highlight">Github <i class="fa fa-arrow-right"></i></a>
                        </div>
                    </div>
                    <div class="grid-box">
                        <img src="/img/prj-5.png" alt="" />
                        <div class="hover">
                            <h4>Application</h4>
                            <a href="#" class="highlight">Github <i class="fa fa-arrow-right"></i></a>
                        </div>
                    </div>
                    <div class="grid-box">
                        <img src="/img/prj-3.png" alt="" />
                        <div class="hover">
                            <h4>Application</h4>
                            <a href="#" class="highlight">Github <i class="fa fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
            </section>

            <section class="testimonials">
                <div class="container">
                    <div class="title">
                        <h3>CRAFT AMAZING</h3>
                        <h1>Customer Testimonials</h1>
                    </div>
                    <div class="grid-wrapper">
                        <div class="grid-box">
                            <img src="/img/customer1.png" alt="" />
                            <i class="fa fa-quote-left"></i>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, est?</p>
                            <h4>John Doe</h4>
                            <p>Marketing Manager</p>
                            <div class="rating">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                            </div>
                        </div>
                        <div class="grid-box">
                            <img src="/img/customer2.png" alt="" />
                            <i class="fa fa-quote-left"></i>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, est?</p>
                            <h4>John Doe</h4>
                            <p>Marketing Manager</p>
                            <div class="rating-1">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                            </div>
                        </div>
                        <div class="grid-box">
                            <img src="/img/customer3.png" alt="" />
                            <i class="fa fa-quote-left"></i>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, est?</p>
                            <h4>John Doe</h4>
                            <p>Marketing Manager</p>
                            <div class="rating">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="contact">
                <div class="container">
                    <h3>CONTACT ME</h3>
                    <h1>Got A Project! Let's Talk</h1>
                    <h3><i class="fa fa-envelope-o"></i> veyselkartalms@gmail.com</h3>
                    <div class="quick-links">
                        <div class="brand">
                            <img src="/img/logo.png" alt="" />
                        </div>
                        <ul>
                            <li>Home</li>
                            <li>Skills</li>
                            <li>Services</li>
                            <li>About</li>
                        </ul>
                    </div>
                </div>
            </section>

            <div class="copyright container">
                <p>© 2022 @veyselkartalmis</p>
            </div>
        </>
    )
}

export default Theme1;