import React, { useEffect } from 'react';

export default function Header() {
    useEffect(() => {
        const categoryHeading = document.querySelector('.category-heading');
        const categoryMenuList = document.getElementById('cate-toggle');

        if (categoryHeading && categoryMenuList) {
            categoryHeading.addEventListener('click', () => {
                if (categoryMenuList.style.display === 'none' || !categoryMenuList.style.display) {
                    categoryMenuList.style.display = 'block';
                } else {
                    categoryMenuList.style.display = 'none';
                }
            });
        }

        // Cleanup event listener
        return () => {
            if (categoryHeading) {
                categoryHeading.removeEventListener('click');
            }
        };
    }, []);

    return (
        <header className="header-main_area header-main_area-2 bg--black">
            <div className="header-middle_area">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-3 col-lg-2 col-md-3 col-sm-5">
                            <div className="header-logo_area">
                                <a href="index.html">
                                    <img src="/images/menu/logo/1.png" alt="Uren's Logo" />
                                </a>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-6 d-none d-lg-block">
                            <div className="hm-form_area">
                                <form action="#" className="hm-searchbox">
                                    <select className="nice-select select-search-category">
                                        <option defaultValue="">All Categories</option>
                                        <option defaultValue="">Laptops</option>
                                        <option defaultValue="">Prime Video</option>
                                        <option defaultValue="">All Videos</option>
                                        <option defaultValue="">Blouses</option>
                                        <option defaultValue="">Evening Dresses</option>
                                        <option defaultValue="">Summer Dresses</option>
                                        <option defaultValue="">T-shirts</option>
                                        <option defaultValue="">Rent or Buy</option>
                                        <option defaultValue="">Your Watchlist</option>
                                        <option defaultValue="">Watch Anywhere</option>
                                        <option defaultValue="">Getting Started</option>
                                        <option defaultValue="">Computers</option>
                                        <option defaultValue="">More to Explore</option>
                                        <option defaultValue="">TV &amp; Video</option>
                                        <option defaultValue="">Audio &amp; Theater</option>
                                        <option defaultValue="">Camera, Photo </option>
                                        <option defaultValue="">Cell Phones</option>
                                        <option defaultValue="">Headphones</option>
                                        <option defaultValue="">Video Games</option>
                                        <option defaultValue="">Wireless Speakers</option>
                                        <option defaultValue="">Electronics</option>
                                        <option defaultValue="">Amazon Home</option>
                                        <option defaultValue="">Kitchen &amp; Dining</option>
                                        <option defaultValue="">Furniture</option>
                                        <option defaultValue="">Bed &amp; Bath</option>
                                        <option defaultValue="">Appliances</option>
                                        <option defaultValue="">TV &amp; Audio</option>
                                        <option defaultValue="">Chamcham</option>
                                        <option defaultValue="">Office</option>
                                        <option defaultValue="">Gaming</option>
                                        <option defaultValue="">Chromebook</option>
                                        <option defaultValue="">Refurbished</option>
                                        <option defaultValue="">Touchscreen</option>
                                        <option defaultValue="">Ultrabooks</option>
                                        <option defaultValue="">Blouses</option>
                                        <option defaultValue="">Sanai</option>
                                        <option defaultValue="">Hard Drives</option>
                                        <option defaultValue="">Graphic Cards</option>
                                        <option defaultValue="">Processors (CPU)</option>
                                        <option defaultValue="">Memory</option>
                                        <option defaultValue="">Motherboards</option>
                                        <option defaultValue="">Fans &amp; Cooling</option>
                                        <option defaultValue="">CD/DVD Drives</option>
                                        <option defaultValue="">Meito</option>
                                        <option defaultValue="">Sound Cards</option>
                                        <option defaultValue="">Cases &amp; Towers</option>
                                        <option defaultValue="">Casual Dresses</option>
                                        <option defaultValue="">Evening Dresses</option>
                                        <option defaultValue="">T-shirts</option>
                                        <option defaultValue="">Tops</option>
                                        <option defaultValue="">Smartphone</option>
                                        <option defaultValue="">Camera Accessories</option>
                                        <option defaultValue="">Octa Core</option>
                                        <option defaultValue="">Quad Core</option>
                                        <option defaultValue="">Dual Core</option>
                                        <option defaultValue="">7.0 Screen</option>
                                        <option defaultValue="">9.0 Screen</option>
                                        <option defaultValue="">Bags &amp; Cases</option>
                                        <option defaultValue="">XailStation</option>
                                        <option defaultValue="">Batteries</option>
                                        <option defaultValue="">Microphones</option>
                                        <option defaultValue="">Stabilizers</option>
                                        <option defaultValue="">Video Tapes</option>
                                        <option defaultValue="">Memory Card Readers</option>
                                        <option defaultValue="">Tripods</option>
                                        <option defaultValue="">Cameras</option>
                                        <option defaultValue="">headphone</option>
                                        <option defaultValue="">Smartwatch</option>
                                        <option defaultValue="">Accessories</option>
                                    </select>
                                    <input type="text" placeholder="Enter your search key ..." />
                                    <button className="header-search_btn" type="submit"><i
                                        className="ion-ios-search-strong"><span>Search</span></i></button>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-9 col-sm-7">
                            <div className="header-right_area">
                                <ul>
                                    <li className="mobile-menu_wrap d-flex d-lg-none">
                                        <a href="#mobileMenu" className="mobile-menu_btn toolbar-btn color--white">
                                            <i className="ion-navicon"></i>
                                        </a>
                                    </li>
                                    <li className="minicart-wrap">
                                        <a href="#miniCart" className="minicart-btn toolbar-btn">
                                            <div className="minicart-count_area">
                                                <span className="item-count">3</span>
                                                <i className="ion-bag"></i>
                                            </div>
                                            <div className="minicart-front_text">
                                                <span>Cart:</span>
                                                <span className="total-price">462.4</span>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="contact-us_wrap">
                                        <a href="tel://+123123321345"><i className="ion-android-call"></i>+123 321 345</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-top_area">
                <div className="container-fluid">
                    <div className="row">
                        <div className="custom-category_col col-12">
                            <div className="category-menu">
                                <div className="category-heading">
                                    <h2 className="categories-toggle">
                                        <span>Shop By</span>
                                        <span>Department</span>
                                    </h2>
                                </div>
                                <div id="cate-toggle" className="category-menu-list" style={{ display: 'none' }}>
                                    <ul>
                                        <li className="right-menu"><a href="shop-left-sidebar.html">Car Parts</a>
                                            <ul className="cat-mega-menu">
                                                <li className="right-menu cat-mega-title">
                                                    <a href="shop-left-sidebar.html">Active body control</a>
                                                    <ul>
                                                        <li><a href="shop-left-sidebar.html">Aluminum Nonstick</a></li>
                                                        <li><a href="shop-left-sidebar.html">Calphalon</a></li>
                                                        <li><a href="shop-left-sidebar.html">Contemporary</a></li>
                                                        <li><a href="shop-left-sidebar.html">Hard-Anodized</a></li>
                                                    </ul>
                                                </li>
                                                <li className="right-menu cat-mega-title">
                                                    <a href="shop-left-sidebar.html">Battery Indicator</a>
                                                    <ul>
                                                        <li><a href="shop-left-sidebar.html">Sanai laptops</a></li>
                                                        <li><a href="shop-left-sidebar.html">Byteflight</a></li>
                                                        <li><a href="shop-left-sidebar.html">EXcaliberPC</a></li>
                                                        <li><a href="shop-left-sidebar.html">Gaming Laptops</a></li>
                                                    </ul>
                                                </li>
                                                <li className="right-menu cat-mega-title">
                                                    <a href="shop-left-sidebar.html">Remote Starter</a>
                                                    <ul>
                                                        <li><a href="shop-left-sidebar.html">Dual Core</a></li>
                                                        <li><a href="shop-left-sidebar.html">Gaming Monitors</a></li>
                                                        <li><a href="shop-left-sidebar.html">GPS Monitors</a></li>
                                                        <li><a href="shop-left-sidebar.html">Heat Shield</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="right-menu"><a href="shop-left-sidebar.html">Tools &amp;
                                            Accessories</a>
                                            <ul className="cat-mega-menu cat-mega-menu-2">
                                                <li className="right-menu cat-mega-title">
                                                    <a href="shop-left-sidebar.html">Drills</a>
                                                    <ul>
                                                        <li><a href="shop-left-sidebar.html">Angle Drills</a></li>
                                                        <li><a href="shop-left-sidebar.html">Combi Drills</a></li>
                                                        <li><a href="shop-left-sidebar.html">Drill Drivers</a></li>
                                                        <li><a href="shop-left-sidebar.html">PercussionDrills</a></li>
                                                    </ul>
                                                </li>
                                                <li className="right-menu cat-mega-title">
                                                    <a href="shop-left-sidebar.html">Nail Guns</a>
                                                    <ul>
                                                        <li><a href="shop-left-sidebar.html">Air Nail Guns</a></li>
                                                        <li><a href="shop-left-sidebar.html">Cordless Nail Guns</a></li>
                                                        <li><a href="shop-left-sidebar.html">Electric Nail Guns</a></li>
                                                        <li><a href="shop-left-sidebar.html">Gas Nail Guns</a></li>
                                                    </ul>
                                                </li>
                                                <li className="right-menu cat-mega-title">
                                                    <a href="shop-left-sidebar.html">Sanders</a>
                                                    <ul>
                                                        <li><a href="shop-left-sidebar.html">1/2 Sheet Sanders</a></li>
                                                        <li><a href="shop-left-sidebar.html">1/4 Sheet Sanders</a></li>
                                                        <li><a href="shop-left-sidebar.html">Belt Sanders</a></li>
                                                        <li><a href="shop-left-sidebar.html">Drywall Sanders</a></li>
                                                    </ul>
                                                </li>
                                                <li className="right-menu cat-mega-title">
                                                    <a href="shop-left-sidebar.html">Saws</a>
                                                    <ul>
                                                        <li><a href="shop-left-sidebar.html">Circular Saws</a></li>
                                                        <li><a href="shop-left-sidebar.html">Jigsaws</a></li>
                                                        <li><a href="shop-left-sidebar.html">Mitre Saws</a></li>
                                                        <li><a href="shop-left-sidebar.html">Reciprocating Saws</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="right-menu"><a href="shop-left-sidebar.html">Suspension Systems</a>
                                            <ul className="cat-mega-menu cat-mega-menu-3">
                                                <li className="right-menu cat-mega-title">
                                                    <a href="shop-left-sidebar.html">Clothing</a>
                                                    <ul>
                                                        <li><a href="shop-left-sidebar.html">Cuisinart</a></li>
                                                        <li><a href="shop-left-sidebar.html">Homeinart</a></li>
                                                        <li><a href="shop-left-sidebar.html">Kettle Stainless</a></li>
                                                        <li><a href="shop-left-sidebar.html">Steel Stovetop</a></li>
                                                    </ul>
                                                </li>
                                                <li className="right-menu cat-mega-title">
                                                    <a href="shop-left-sidebar.html">Jewelry</a>
                                                    <ul>
                                                        <li><a href="shop-left-sidebar.html">Hard Anodized</a></li>
                                                        <li><a href="shop-left-sidebar.html">Scratch Resistant</a></li>
                                                        <li><a href="shop-left-sidebar.html">Thermo-Spot</a></li>
                                                        <li><a href="shop-left-sidebar.html">Ultimate</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="right-menu"><a href="shop-left-sidebar.html">Turbo System</a>
                                            <ul className="cat-mega-menu">
                                                <li className="right-menu cat-mega-title">
                                                    <a href="shop-left-sidebar.html">BMW</a>
                                                    <ul>
                                                        <li><a href="shop-left-sidebar.html">Dining Chairs</a></li>
                                                        <li><a href="shop-left-sidebar.html">Dining Tables</a></li>
                                                        <li><a href="shop-left-sidebar.html">Gramophone</a></li>
                                                        <li><a href="shop-left-sidebar.html">Sideboards</a></li>
                                                    </ul>
                                                </li>
                                                <li className="right-menu cat-mega-title">
                                                    <a href="shop-left-sidebar.html">FORD</a>
                                                    <ul>
                                                        <li><a href="shop-left-sidebar.html">Chairs & Sofas</a></li>
                                                        <li><a href="shop-left-sidebar.html">Chest</a></li>
                                                        <li><a href="shop-left-sidebar.html">Loungers</a></li>
                                                        <li><a href="shop-left-sidebar.html">Sets</a></li>
                                                    </ul>
                                                </li>
                                                <li className="right-menu cat-mega-title">
                                                    <a href="shop-left-sidebar.html">POSCHER</a>
                                                    <ul>
                                                        <li><a href="shop-left-sidebar.html">Bed</a></li>
                                                        <li><a href="shop-left-sidebar.html">Daybed</a></li>
                                                        <li><a href="shop-left-sidebar.html">Futon</a></li>
                                                        <li><a href="shop-left-sidebar.html">Hammock</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="right-menu"><a href="shop-left-sidebar.html">Oils & Fluids</a>
                                            <ul className="cat-dropdown">
                                                <li>
                                                    <a href="shop-left-sidebar.html">Daylesford</a>
                                                    <a href="shop-left-sidebar.html">Delaware</a>
                                                    <a href="shop-left-sidebar.html">Fayence</a>
                                                    <a href="shop-left-sidebar.html">Franzea</a>
                                                    <a href="shop-left-sidebar.html">Mable</a>
                                                    <a href="shop-left-sidebar.html">Mobo</a>
                                                    <a href="shop-left-sidebar.html">Pippins</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="right-menu"><a href="shop-left-sidebar.html">Exterior</a>
                                            <ul className="cat-dropdown cat-dropdown-2">
                                                <li>
                                                    <a href="shop-left-sidebar.html">Coffee & side tables</a>
                                                    <a href="shop-left-sidebar.html">Living room lighting</a>
                                                    <a href="shop-left-sidebar.html">Living room storage</a>
                                                    <a href="shop-left-sidebar.html">Living room textiles & rugs</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li><a href="shop-left-sidebar.html">Body Parts</a></li>
                                        <li><a href="shop-left-sidebar.html">Interior</a></li>
                                        <li><a href="shop-left-sidebar.html">Audio</a></li>
                                        <li className="rx-child"><a href="shop-left-sidebar.html">Uncategorized</a></li>
                                        <li className="rx-child"><a href="shop-left-sidebar.html">Appliances</a></li>
                                        <li className="rx-parent">
                                            <a className="rx-show">Collapse</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="custom-menu_col col-12 d-none d-lg-block">
                            <div className="main-menu_area position-relative">
                                <nav className="main-nav">
                                    <ul>
                                        <li className="dropdown-holder active"><a href="index.html">Home</a>
                                            <ul className="hm-dropdown">
                                                <li><a href="index.html">Home One</a></li>
                                                <li><a href="index-2.html">Home Two</a></li>
                                                <li><a href="index-3.html">Home Three</a></li>
                                            </ul>
                                        </li>
                                        <li className="megamenu-holder "><a href="shop-left-sidebar.html">Shop <i
                                            className="ion-ios-arrow-down"></i></a>
                                            <ul className="hm-megamenu">
                                                <li><span className="megamenu-title">Shop Page Layout</span>
                                                    <ul>
                                                        <li><a href="shop-grid-fullwidth.html">Grid Fullwidth</a></li>
                                                        <li><a href="shop-left-sidebar.html">Left Sidebar</a></li>
                                                        <li><a href="shop-right-sidebar.html">Right Sidebar</a></li>
                                                        <li><a href="shop-list-fullwidth.html">List Fullwidth</a></li>
                                                        <li><a href="shop-list-left-sidebar.html">List Left Sidebar</a>
                                                        </li>
                                                        <li><a href="shop-list-right-sidebar.html">List Right
                                                            Sidebar</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li><span className="megamenu-title">Single Product Style</span>
                                                    <ul>
                                                        <li><a href="single-product-gallery-left.html">Gallery Left</a>
                                                        </li>
                                                        <li><a href="single-product-gallery-right.html">Gallery
                                                            Right</a>
                                                        </li>
                                                        <li><a href="single-product-tab-style-left.html">Tab Style
                                                            Left</a>
                                                        </li>
                                                        <li><a href="single-product-tab-style-right.html">Tab Style
                                                            Right</a>
                                                        </li>
                                                        <li><a href="single-product-sticky-left.html">Sticky Left</a>
                                                        </li>
                                                        <li><a href="single-product-sticky-right.html">Sticky Right</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li><span className="megamenu-title">Single Product Type</span>
                                                    <ul>
                                                        <li><a href="single-product.html">Single Product</a></li>
                                                        <li><a href="single-product-sale.html">Single Product Sale</a>
                                                        </li>
                                                        <li><a href="single-product-group.html">Single Product Group</a>
                                                        </li>
                                                        <li><a href="single-product-variable.html">Single Product
                                                            Variable</a>
                                                        </li>
                                                        <li><a href="single-product-affiliate.html">Single Product
                                                            Affiliate</a>
                                                        </li>
                                                        <li><a href="single-product-slider.html">Single Product
                                                            Slider</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li><a href="#" onClick={(e) => e.preventDefault()}>Specials</a></li>
                                        <li className=""><a href="#" onClick={(e) => e.preventDefault()}>Pages <i
                                            className="ion-ios-arrow-down"></i></a>
                                            <ul className="hm-dropdown">
                                                <li><a href="my-account.html">My Account</a></li>
                                                <li><a href="login-register.html">Login | Register</a></li>
                                                <li><a href="wishlist.html">Wishlist</a></li>
                                                <li><a href="cart.html">Cart</a></li>
                                                <li><a href="checkout.html">Checkout</a></li>
                                                <li><a href="compare.html">Compare</a></li>
                                                <li><a href="faq.html">FAQ</a></li>
                                                <li><a href="404.html">404 Error</a></li>
                                            </ul>
                                        </li>
                                        <li className=""><a href="about-us.html">About Us</a></li>
                                        <li className=""><a href="contact.html">Contact</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="custom-setting_col col-12 d-none d-lg-block">
                            <div className="ht-right_area">
                                <div className="ht-menu">
                                    <ul>
                                        <li><a href="my-account.html"><span className="fa fa-user"></span> <span>My Account</span><i className="fa fa-chevron-down"></i></a>
                                            <ul className="ht-dropdown ht-my_account">
                                                <li><a href="#" onClick={(e) => e.preventDefault()}>Register</a></li>
                                                <li className="active"><a href="#" onClick={(e) => e.preventDefault()}>Login</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="custom-search_col d-none d-md-block d-lg-none">
                            <div className="hm-form_area">
                                <form action="#" className="hm-searchbox">
                                    <select className="nice-select select-search-category">
                                        <option alue="">All Categories</option>
                                        <option alue="">Laptops</option>
                                        <option alue="">Prime Video</option>
                                        <option alue="">All Videos</option>
                                        <option alue="">Blouses</option>
                                        <option alue="">Evening Dresses</option>
                                        <option alue="">Summer Dresses</option>
                                        <option alue="">T-shirts</option>
                                        <option alue="">Rent or Buy</option>
                                        <option alue="">Your Watchlist</option>
                                        <option alue="">Watch Anywhere</option>
                                        <option alue="">Getting Started</option>
                                        <option alue="">Computers</option>
                                        <option alue="">More to Explore</option>
                                        <option alue="">TV &amp; Video</option>
                                        <option alue="">Audio &amp; Theater</option>
                                        <option alue="">Camera, Photo </option>
                                        <option alue="">Cell Phones</option>
                                        <option alue="">Headphones</option>
                                        <option alue="">Video Games</option>
                                        <option alue="">Wireless Speakers</option>
                                        <option alue="">Electronics</option>
                                        <option alue="">Amazon Home</option>
                                        <option alue="">Kitchen &amp; Dining</option>
                                        <option alue="">Furniture</option>
                                        <option alue="">Bed &amp; Bath</option>
                                        <option alue="">Appliances</option>
                                        <option alue="">TV &amp; Audio</option>
                                        <option alue="">Chamcham</option>
                                        <option alue="">Office</option>
                                        <option alue="">Gaming</option>
                                        <option alue="">Chromebook</option>
                                        <option alue="">Refurbished</option>
                                        <option alue="">Touchscreen</option>
                                        <option alue="">Ultrabooks</option>
                                        <option alue="">Blouses</option>
                                        <option alue="">Sanai</option>
                                        <option alue="">Hard Drives</option>
                                        <option alue="">Graphic Cards</option>
                                        <option alue="">Processors (CPU)</option>
                                        <option alue="">Memory</option>
                                        <option alue="">Motherboards</option>
                                        <option alue="">Fans &amp; Cooling</option>
                                        <option alue="">CD/DVD Drives</option>
                                        <option alue="">Meito</option>
                                        <option alue="">Sound Cards</option>
                                        <option alue="">Cases &amp; Towers</option>
                                        <option alue="">Casual Dresses</option>
                                        <option alue="">Evening Dresses</option>
                                        <option alue="">T-shirts</option>
                                        <option alue="">Tops</option>
                                        <option alue="">Smartphone</option>
                                        <option alue="">Camera Accessories</option>
                                        <option alue="">Octa Core</option>
                                        <option alue="">Quad Core</option>
                                        <option alue="">Dual Core</option>
                                        <option alue="">7.0 Screen</option>
                                        <option alue="">9.0 Screen</option>
                                        <option alue="">Bags &amp; Cases</option>
                                        <option alue="">XailStation</option>
                                        <option alue="">Batteries</option>
                                        <option alue="">Microphones</option>
                                        <option alue="">Stabilizers</option>
                                        <option alue="">Video Tapes</option>
                                        <option alue="">Memory Card Readers</option>
                                        <option alue="">Tripods</option>
                                        <option alue="">Cameras</option>
                                        <option alue="">headphone</option>
                                        <option alue="">Smartwatch</option>
                                        <option alue="">Accessories</option>
                                    </select>
                                    <input type="text" placeholder="Enter your search key ..." />
                                    <button className="header-search_btn" type="submit"><i
                                        className="ion-ios-search-strong"><span>Search</span></i></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-top_area header-sticky bg--black">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-8 col-lg-7 d-lg-block d-none">
                            <div className="main-menu_area position-relative">
                                <nav className="main-nav">
                                    <ul>
                                        <li className="dropdown-holder active"><a href="index.html">Home</a>
                                            <ul className="hm-dropdown">
                                                <li><a href="index.html">Home One</a></li>
                                                <li><a href="index-2.html">Home Two</a></li>
                                                <li><a href="index-3.html">Home Three</a></li>
                                            </ul>
                                        </li>
                                        <li className="megamenu-holder "><a href="shop-left-sidebar.html">Shop
                                            <i className="ion-ios-arrow-down"></i></a>
                                            <ul className="hm-megamenu">
                                                <li><span className="megamenu-title">Shop Page Layout</span>
                                                    <ul>
                                                        <li><a href="shop-grid-fullwidth.html">Grid Fullwidth</a></li>
                                                        <li><a href="shop-left-sidebar.html">Left Sidebar</a></li>
                                                        <li><a href="shop-right-sidebar.html">Right Sidebar</a></li>
                                                        <li><a href="shop-list-fullwidth.html">List Fullwidth</a></li>
                                                        <li><a href="shop-list-left-sidebar.html">List Left Sidebar</a>
                                                        </li>
                                                        <li><a href="shop-list-right-sidebar.html">List Right
                                                            Sidebar</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li><span className="megamenu-title">Single Product Style</span>
                                                    <ul>
                                                        <li><a href="single-product-gallery-left.html">Gallery Left</a>
                                                        </li>
                                                        <li><a href="single-product-gallery-right.html">Gallery
                                                            Right</a>
                                                        </li>
                                                        <li><a href="single-product-tab-style-left.html">Tab Style
                                                            Left</a>
                                                        </li>
                                                        <li><a href="single-product-tab-style-right.html">Tab Style
                                                            Right</a>
                                                        </li>
                                                        <li><a href="single-product-sticky-left.html">Sticky Left</a>
                                                        </li>
                                                        <li><a href="single-product-sticky-right.html">Sticky Right</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li><span className="megamenu-title">Single Product Type</span>
                                                    <ul>
                                                        <li><a href="single-product.html">Single Product</a></li>
                                                        <li><a href="single-product-sale.html">Single Product Sale</a>
                                                        </li>
                                                        <li><a href="single-product-group.html">Single Product Group</a>
                                                        </li>
                                                        <li><a href="single-product-variable.html">Single Product
                                                            Variable</a>
                                                        </li>
                                                        <li><a href="single-product-affiliate.html">Single Product
                                                            Affiliate</a>
                                                        </li>
                                                        <li><a href="single-product-slider.html">Single Product
                                                            Slider</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li><a href="#" onClick={(e) => e.preventDefault()}>Specials</a></li>
                                        <li className=""><a href="#" onClick={(e) => e.preventDefault()}>Pages <i
                                            className="ion-ios-arrow-down"></i></a>
                                            <ul className="hm-dropdown">
                                                <li><a href="my-account.html">My Account</a></li>
                                                <li><a href="login-register.html">Login | Register</a></li>
                                                <li><a href="wishlist.html">Wishlist</a></li>
                                                <li><a href="cart.html">Cart</a></li>
                                                <li><a href="checkout.html">Checkout</a></li>
                                                <li><a href="compare.html">Compare</a></li>
                                                <li><a href="faq.html">FAQ</a></li>
                                                <li><a href="404.html">404 Error</a></li>
                                            </ul>
                                        </li>
                                        <li className=""><a href="about-us.html">About Us</a></li>
                                        <li className=""><a href="contact.html">Contact</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="col-sm-3 d-block d-lg-none">
                            <div className="header-logo_area header-sticky_logo">
                                <a href="index.html">
                                    <img src="/images/menu/logo/1.png" alt="Uren's Logo" />
                                </a>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-5 col-sm-9">
                            <div className="header-right_area">
                                <ul>
                                    <li className="mobile-menu_wrap d-flex d-lg-none">
                                        <a href="#mobileMenu" className="mobile-menu_btn toolbar-btn color--white">
                                            <i className="ion-navicon"></i>
                                        </a>
                                    </li>
                                    <li className="minicart-wrap">
                                        <a href="#miniCart" className="minicart-btn toolbar-btn">
                                            <div className="minicart-count_area">
                                                <span className="item-count">3</span>
                                                <i className="ion-bag"></i>
                                            </div>
                                            <div className="minicart-front_text">
                                                <span>Cart:</span>
                                                <span className="total-price">462.4</span>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="contact-us_wrap">
                                        <a href="tel://+123123321345"><i className="ion-android-call"></i>+123 321 345</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="offcanvas-minicart_wrapper" id="miniCart">
                <div className="offcanvas-menu-inner">
                    <a href="#" className="btn-close"><i className="ion-android-close"></i></a>
                    <div className="minicart-content">
                        <div className="minicart-heading">
                            <h4>Shopping Cart</h4>
                        </div>
                        <ul className="minicart-list">
                            <li className="minicart-product">
                                <a className="product-item_remove" href="#" onClick={(e) => e.preventDefault()}><i
                                    className="ion-android-close"></i></a>
                                <div className="product-item_img">
                                    <img src="/images/product/small-size/1.jpg" alt="Uren's Product Image" />
                                </div>
                                <div className="product-item_content">
                                    <a className="product-item_title" href="shop-left-sidebar.html">Autem ipsa ad</a>
                                    <span className="product-item_quantity">1 x $145.80</span>
                                </div>
                            </li>
                            <li className="minicart-product">
                                <a className="product-item_remove" href="#" onClick={(e) => e.preventDefault()}><i
                                    className="ion-android-close"></i></a>
                                <div className="product-item_img">
                                    <img src="/images/product/small-size/2.jpg" alt="Uren's Product Image" />
                                </div>
                                <div className="product-item_content">
                                    <a className="product-item_title" href="shop-left-sidebar.html">Tenetur illum amet</a>
                                    <span className="product-item_quantity">1 x $150.80</span>
                                </div>
                            </li>
                            <li className="minicart-product">
                                <a className="product-item_remove" href="#" onClick={(e) => e.preventDefault()}><i
                                    className="ion-android-close"></i></a>
                                <div className="product-item_img">
                                    <img src="/images/product/small-size/3.jpg" alt="Uren's Product Image" />
                                </div>
                                <div className="product-item_content">
                                    <a className="product-item_title" href="shop-left-sidebar.html">Non doloremque placeat</a>
                                    <span className="product-item_quantity">1 x $165.80</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="minicart-item_total">
                        <span>Subtotal</span>
                        <span className="ammount">$462.40</span>
                    </div>
                    <div className="minicart-btn_area">
                        <a href="cart.html" className="uren-btn uren-btn_dark uren-btn_fullwidth">Minicart</a>
                    </div>
                    <div className="minicart-btn_area">
                        <a href="checkout.html" className="uren-btn uren-btn_dark uren-btn_fullwidth">Checkout</a>
                    </div>
                </div>
            </div>
            <div className="mobile-menu_wrapper" id="mobileMenu">
                <div className="offcanvas-menu-inner">
                    <div className="container">
                        <a href="#" className="btn-close" onClick={(e) => e.preventDefault()}><i className="ion-android-close"></i></a>
                        <div className="offcanvas-inner_search">
                            <form action="#" className="inner-searchbox">
                                <input type="text" placeholder="Search for item..." />
                                <button className="search_btn" type="submit" onClick={(e) => e.preventDefault()}><i className="ion-ios-search-strong"></i></button>
                            </form>
                        </div>
                        <nav className="offcanvas-navigation">
                            <ul className="mobile-menu">
                                <li className="menu-item-has-children active"><a href="index.html" onClick={(e) => e.preventDefault()}><span
                                    className="mm-text">Home</span></a>
                                    <ul className="sub-menu">
                                        <li>
                                            <a href="index.html" onClick={(e) => e.preventDefault()}>
                                                <span className="mm-text">Home One</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="index-2.html" onClick={(e) => e.preventDefault()}>
                                                <span className="mm-text">Home Two</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="index-3.html" onClick={(e) => e.preventDefault()}>
                                                <span className="mm-text">Home Three</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="menu-item-has-children">
                                    <a href="shop-left-sidebar.html" onClick={(e) => e.preventDefault()}>
                                        <span className="mm-text">Shop</span>
                                    </a>
                                    <ul className="sub-menu">
                                        <li className="menu-item-has-children">
                                            <a href="shop-left-sidebar.html" onClick={(e) => e.preventDefault()}>
                                                <span className="mm-text">Grid View</span>
                                            </a>
                                            <ul className="sub-menu">
                                                <li>
                                                    <a href="shop-grid-fullwidth.html" onClick={(e) => e.preventDefault()}>
                                                        <span className="mm-text">Column Three</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="shop-4-column.html" onClick={(e) => e.preventDefault()}>
                                                        <span className="mm-text">Column Four</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="shop-left-sidebar.html" onClick={(e) => e.preventDefault()}>
                                                        <span className="mm-text">Left Sidebar</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="shop-right-sidebar.html" onClick={(e) => e.preventDefault()}>
                                                        <span className="mm-text">Right Sidebar</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <a href="shop-list-left-sidebar.html" onClick={(e) => e.preventDefault()}>
                                                <span className="mm-text">Shop List</span>
                                            </a>
                                            <ul className="sub-menu">
                                                <li>
                                                    <a href="shop-list-fullwidth.html" onClick={(e) => e.preventDefault()}>
                                                        <span className="mm-text">Full Width</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="shop-list-left-sidebar.html" onClick={(e) => e.preventDefault()}>
                                                        <span className="mm-text">Left Sidebar</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="shop-list-right-sidebar.html" onClick={(e) => e.preventDefault()}>
                                                        <span className="mm-text">Right Sidebar</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <a href="single-product-gallery-left.html" onClick={(e) => e.preventDefault()}>
                                                <span className="mm-text">Single Product Style</span>
                                            </a>
                                            <ul className="sub-menu">
                                                <li>
                                                    <a href="single-product-gallery-left.html" onClick={(e) => e.preventDefault()}>
                                                        <span className="mm-text">Gallery Left</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="single-product-gallery-right.html" onClick={(e) => e.preventDefault()}>
                                                        <span className="mm-text">Gallery Right</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="single-product-tab-style-left.html" onClick={(e) => e.preventDefault()}>
                                                        <span className="mm-text">Tab Style Left</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="single-product-tab-style-right.html" onClick={(e) => e.preventDefault()}>
                                                        <span className="mm-text">Tab Style Right</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="single-product-sticky-left.html" onClick={(e) => e.preventDefault()}>
                                                        <span className="mm-text">Sticky Left</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="single-product-sticky-right.html" onClick={(e) => e.preventDefault()}>
                                                        <span className="mm-text">Sticky Right</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <a href="single-product.html" onClick={(e) => e.preventDefault()}>
                                                <span className="mm-text">Single Product Type</span>
                                            </a>
                                            <ul className="sub-menu">
                                                <li>
                                                    <a href="single-product.html" onClick={(e) => e.preventDefault()}>
                                                        <span className="mm-text">Single Product</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="single-product-sale.html" onClick={(e) => e.preventDefault()}>
                                                        <span className="mm-text">Single Product Sale</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="single-product-group.html" onClick={(e) => e.preventDefault()}>
                                                        <span className="mm-text">Single Product Group</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="single-product-variable.html" onClick={(e) => e.preventDefault()}>
                                                        <span className="mm-text">Single Product Variable</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="single-product-affiliate.html" onClick={(e) => e.preventDefault()}>
                                                        <span className="mm-text">Single Product Affiliate</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="single-product-slider.html" onClick={(e) => e.preventDefault()}>
                                                        <span className="mm-text">Single Product Slider</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li className="menu-item-has-children">
                                    <a href="blog-left-sidebar.html" onClick={(e) => e.preventDefault()}>
                                        <span className="mm-text">Blog</span>
                                    </a>
                                    <ul className="sub-menu">
                                        <li className="menu-item-has-children has-children">
                                            <a href="blog-left-sidebar.html" onClick={(e) => e.preventDefault()}>
                                                <span className="mm-text">Grid View</span>
                                            </a>
                                            <ul className="sub-menu">
                                                <li>
                                                    <a href="blog-2-column.html" onClick={(e) => e.preventDefault()}>
                                                        <span className="mm-text">Column Two</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="blog-3-column.html" onClick={(e) => e.preventDefault()}>
                                                        <span className="mm-text">Column Three</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="blog-left-sidebar.html" onClick={(e) => e.preventDefault()}>
                                                        <span className="mm-text">Left Sidebar</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="blog-right-sidebar.html" onClick={(e) => e.preventDefault()}>
                                                        <span className="mm-text">Right Sidebar</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children has-children">
                                            <a href="blog-list-left-sidebar.html" onClick={(e) => e.preventDefault()}>
                                                <span className="mm-text">List View</span>
                                            </a>
                                            <ul className="sub-menu">
                                                <li>
                                                    <a href="blog-list-fullwidth.html" onClick={(e) => e.preventDefault()}>
                                                        <span className="mm-text">List Fullwidth</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="blog-list-left-sidebar.html" onClick={(e) => e.preventDefault()}>
                                                        <span className="mm-text">List Left Sidebar</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="blog-list-right-sidebar.html" onClick={(e) => e.preventDefault()}>
                                                        <span className="mm-text">List Right Sidebar</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children has-children">
                                            <a href="blog-details-left-sidebar.html" onClick={(e) => e.preventDefault()}>
                                                <span className="mm-text">Blog Details</span>
                                            </a>
                                            <ul className="sub-menu">
                                                <li>
                                                    <a href="blog-details-left-sidebar.html" onClick={(e) => e.preventDefault()}>
                                                        <span className="mm-text">Left Sidebar</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="blog-details-right-sidebar.html" onClick={(e) => e.preventDefault()}>
                                                        <span className="mm-text">Right Sidebar</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children has-children">
                                            <a href="blog-gallery-format.html" onClick={(e) => e.preventDefault()}>
                                                <span className="mm-text">Blog Format</span>
                                            </a>
                                            <ul className="sub-menu">
                                                <li>
                                                    <a href="blog-gallery-format.html" onClick={(e) => e.preventDefault()}>
                                                        <span className="mm-text">Gallery Format</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="blog-audio-format.html" onClick={(e) => e.preventDefault()}>
                                                        <span className="mm-text">Audio Format</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="blog-video-format.html" onClick={(e) => e.preventDefault()}>
                                                        <span className="mm-text">Video Format</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li className="menu-item-has-children">
                                    <a href="index.html" onClick={(e) => e.preventDefault()}>
                                        <span className="mm-text">Pages</span>
                                    </a>
                                    <ul className="sub-menu">
                                        <li>
                                            <a href="my-account.html" onClick={(e) => e.preventDefault()}>
                                                <span className="mm-text">My Account</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="login-register.html" onClick={(e) => e.preventDefault()}>
                                                <span className="mm-text">Login | Register</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="wishlist.html" onClick={(e) => e.preventDefault()}>
                                                <span className="mm-text">Wishlist</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="cart.html" onClick={(e) => e.preventDefault()}>
                                                <span className="mm-text">Cart</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="checkout.html" onClick={(e) => e.preventDefault()}>
                                                <span className="mm-text">Checkout</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="compare.html" onClick={(e) => e.preventDefault()}>
                                                <span className="mm-text">Compare</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="faq.html" onClick={(e) => e.preventDefault()}>
                                                <span className="mm-text">FAQ</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="404.html" onClick={(e) => e.preventDefault()}>
                                                <span className="mm-text">Error 404</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                        <nav className="offcanvas-navigation user-setting_area">
                            <ul className="mobile-menu">
                                <li className="menu-item-has-children active"><a href="#" onClick={(e) => e.preventDefault()}><span
                                    className="mm-text">User
                                    Setting</span></a>
                                    <ul className="sub-menu">
                                        <li>
                                            <a href="my-account.html" onClick={(e) => e.preventDefault()}>
                                                <span className="mm-text">My Account</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="login-register.html" onClick={(e) => e.preventDefault()}>
                                                <span className="mm-text">Login | Register</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="menu-item-has-children"><a href="#" onClick={(e) => e.preventDefault()}><span
                                    className="mm-text">Currency</span></a>
                                    <ul className="sub-menu">
                                        <li>
                                            <a href="#" onClick={(e) => e.preventDefault()}>
                                                <span className="mm-text">EUR €</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" onClick={(e) => e.preventDefault()}>
                                                <span className="mm-text">USD $</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="menu-item-has-children"><a href="#" onClick={(e) => e.preventDefault()}><span
                                    className="mm-text">Language</span></a>
                                    <ul className="sub-menu">
                                        <li>
                                            <a href="#" onClick={(e) => e.preventDefault()}>
                                                <span className="mm-text">English</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" onClick={(e) => e.preventDefault()}>
                                                <span className="mm-text">Français</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" onClick={(e) => e.preventDefault()}>
                                                <span className="mm-text">Romanian</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" onClick={(e) => e.preventDefault()}>
                                                <span className="mm-text">Japanese</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
}