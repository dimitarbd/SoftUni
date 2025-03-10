export default function Footer() {
   return (
    <div className="uren-footer_area">
       <div className="footer-middle_area">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-4">
                    <div className="footer-widgets_info">
                        <div className="footer-widgets_logo">
                            <a href="#">
                                <img src="/images/menu/logo/1.png" alt="Uren's Footer Logo"/>
                            </a>
                        </div>
                        <div className="widget-short_desc">
                            <p>We are a team of designers and developers that create high quality HTML Template &
                                Woocommerce, Shopify Theme.
                            </p>
                        </div>
                        <div className="widgets-essential_stuff">
                            <ul>
                                <li className="uren-address"><span>Address:</span> The Barn,
                                    Ullenhall, Henley
                                    in
                                    Arden B578 5CC, England</li>
                                <li className="uren-phone"><span>Call
                                Us:</span> <a href="tel://+123123321345">+123 321 345</a>
                                </li>
                                <li className="uren-email"><span>Email:</span> <a href="mailto://info@yourdomain.com">info@yourdomain.com</a></li>
                            </ul>
                        </div>
                        <div className="uren-social_link">
                            <ul>
                                <li className="facebook">
                                    <a href="https://www.facebook.com/" data-toggle="tooltip" target="_blank" title="Facebook">
                                        <i className="fab fa-facebook"></i>
                                    </a>
                                </li>
                                <li className="twitter">
                                    <a href="https://twitter.com/" data-toggle="tooltip" target="_blank" title="Twitter">
                                        <i className="fab fa-twitter-square"></i>
                                    </a>
                                </li>
                                <li className="google-plus">
                                    <a href="https://www.plus.google.com/discover" data-toggle="tooltip" target="_blank" title="Google Plus">
                                        <i className="fab fa-google-plus"></i>
                                    </a>
                                </li>
                                <li className="instagram">
                                    <a href="https://rss.com/" data-toggle="tooltip" target="_blank" title="Instagram">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-8">
                    <div className="footer-widgets_area">
                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                <div className="footer-widgets_title">
                                    <h3>Information</h3>
                                </div>
                                <div className="footer-widgets">
                                    <ul>
                                        <li><a href="#" onClick={(e) => e.preventDefault()}>About Us</a></li>
                                        <li><a href="#" onClick={(e) => e.preventDefault()}>Delivery Information</a></li>
                                        <li><a href="#" onClick={(e) => e.preventDefault()}>Privacy Policy</a></li>
                                        <li><a href="#" onClick={(e) => e.preventDefault()}>Terms & Conditions</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="footer-widgets_title">
                                    <h3>Customer Service</h3>
                                </div>
                                <div className="footer-widgets">
                                    <ul>
                                        <li><a href="#" onClick={(e) => e.preventDefault()}>Contact Us</a></li>
                                        <li><a href="#" onClick={(e) => e.preventDefault()}>Returns</a></li>
                                        <li><a href="#" onClick={(e) => e.preventDefault()}>Site Map</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="footer-widgets_title">
                                    <h3>Extras</h3>
                                </div>
                                <div className="footer-widgets">
                                    <ul>
                                        <li><a href="#" onClick={(e) => e.preventDefault()}>About Us</a></li>
                                        <li><a href="#" onClick={(e) => e.preventDefault()}>Delivery Information</a></li>
                                        <li><a href="#" onClick={(e) => e.preventDefault()}>Privacy Policy</a></li>
                                        <li><a href="#" onClick={(e) => e.preventDefault()}>Terms & Conditions</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="footer-widgets_title">
                                    <h3>My Account</h3>
                                </div>
                                <div className="footer-widgets">
                                    <ul>
                                        <li><a href="#" onClick={(e) => e.preventDefault()}>My Account</a></li>
                                        <li><a href="#" onClick={(e) => e.preventDefault()}>Order History</a></li>
                                        <li><a href="#" onClick={(e) => e.preventDefault()}>Wish List</a></li>
                                        <li><a href="#" onClick={(e) => e.preventDefault()}>Newsletter</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="footer-bottom_area">
        <div className="container-fluid">
            <div className="footer-bottom_nav">
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="copyright">
                            <span><a href="templateshub.net">Templateshub</a></span>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="payment">
                            <a href="#">
                                <img src="/images/footer/payment/1.png" alt="Uren's Payment Method"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
   );
}