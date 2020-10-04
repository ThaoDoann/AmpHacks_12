import React from "react";

function Footer(){
    return(
        <div class="row">
            <div class="col-md-12">
                <footer id="footer">
                    <section class="footer-menu">
                        <hr />
                        <div class="row footer-menu-row">
                            <div class="col-lg-3 col-md-6 col-sm-12 footer-col">
                                <p class="footer-menu-title">About Us</p>
                                <ul class="footer-menu-ul">
                                    <li>Our Mission</li>
                                    <li>Press</li>
                                    <li>Blog</li>
                                    <li>Engineering Blog</li>
                                    <li>Accessibility</li>
                                </ul>
                            </div>
                            <div class="col-lg-3 col-md-6 col-sm-12 footer-col">
                                <p class="footer-menu-title">Help</p>
                                <ul class="footer-menu-ul">
                                    <li>FAQ</li>
                                    <li>Payment</li>
                                    <li>Order Info</li>
                                    <li>Contact</li>
                                </ul>
                            </div>
                            <div class="col-lg-3 col-md-6 col-sm-12 footer-col">
                                <p class="footer-menu-title">Menu</p>
                                <ul class="footer-menu-ul">
                                    <li>Meal Packages</li>
                                    <li>Single Meals</li>
                                    <li>Party Pack</li>
                                    <li>Drinks and More</li>
                                </ul>
                            </div>
                            <div class="col-lg-3 col-md-6 col-sm-12 footer-col">
                                <p class="footer-menu-title">Newsletter Sign Up</p>
                                <div class="signup-input-container">
                                    <form class="subscribe" action="https://formspree.io/xgelbzpb" method="post">
                                        <input class="signup-input newsletter-input" type="email" id="newsletter-email" name="email" placeholder="Enter your email" />
                                        <input class="signup-submit newsletter-submit" type="submit" id="newsletter-submit" name="submit" value="Subscribe" />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="footer-bottom">
                        <hr />
                        <div class="row">
                            <div class="col-lg-4 col-md-6 col-sm-12 order-md-first order-sm-last">
                                <p class="footer-credit">© 2020 Oneperfectmeal | Yoonkyung Kim</p>
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-12 ">
                                <a href="https://twitter.com"><i class="social-icon fab fa-twitter fa-lg"></i></a>
                                <a href="https://facebook.com"><i class="social-icon fab fa-facebook-f fa-lg"></i></a>
                                <a href="https://instagram.com"><i class="social-icon fab fa-instagram fa-lg"></i></a>
                            </div>
                        </div>
                    </section>
                </footer>
            </div>
        </div>


    );
}

export default Footer;