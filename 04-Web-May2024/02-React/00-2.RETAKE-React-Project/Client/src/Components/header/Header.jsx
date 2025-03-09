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
                                        <option defaultValue="">Car Parts</option>
                                        <option defaultValue="">Tools &amp; Accessories</option>
                                        <option defaultValue="">Suspension Systems</option>
                                        <option defaultValue="">Turbo System</option>
                                        <option defaultValue="">Oils & Fluids</option>
                                        <option defaultValue="">Exterior</option>
                                        <option defaultValue="">Body Parts</option>
                                        <option defaultValue="">Interior</option>
                                        <option defaultValue="">Audio</option>
                                        
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
                                        </li>
                                        <li className="megamenu-holder "><a href="shop-left-sidebar.html">Catalog</a>
                                        </li>
                                        <li><a href="#" onClick={(e) => e.preventDefault()}>Create Offer</a></li>
                                        <li className=""><a href="about-us.html">About Us</a></li>
                                        <li className=""><a href="contact.html">Contact</a></li>
                                        <li><a href="#" onClick={(e) => e.preventDefault()}>Login</a></li>
                                        <li><a href="#" onClick={(e) => e.preventDefault()}>Register</a></li>
                                        <li><a href="#" onClick={(e) => e.preventDefault()}>Logout</a></li>
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
                                        <option alue="">Car Parts</option>
                                        <option alue="">Tools &amp; Accessories</option>
                                        <option alue="">Suspension Systems</option>
                                        <option alue="">Turbo System</option>
                                        <option alue="">Oils & Fluids</option>
                                        <option alue="">Exterior</option>
                                        <option alue="">Body Parts</option>
                                        <option alue="">Interior</option>
                                        <option alue="">Audio</option>
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
                                        </li>
                                        <li className="megamenu-holder ">
                                            <a href="shop-left-sidebar.html">Catalog</a>
                                        </li>
                                        <li><a href="#" onClick={(e) => e.preventDefault()}>Create Offer</a></li>
                                        <li className=""><a href="about-us.html">About Us</a></li>
                                        <li className=""><a href="contact.html">Contact</a></li>
                                        <li><a href="#" onClick={(e) => e.preventDefault()}>Login</a></li>
                                        <li><a href="#" onClick={(e) => e.preventDefault()}>Register</a></li>
                                        <li><a href="#" onClick={(e) => e.preventDefault()}>Logout</a></li>
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