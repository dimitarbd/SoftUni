import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';    

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
                                <Link to="/">
                                    <img src="/images/menu/logo/1.png" alt="Uren's Logo" />
                                </Link>
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
                                        <Link to="#mobileMenu" className="mobile-menu_btn toolbar-btn color--white">
                                            <i className="ion-navicon"></i>
                                        </Link>
                                    </li>
                                    <li className="minicart-wrap">
                                        <Link to="#miniCart" className="minicart-btn toolbar-btn">
                                            <div className="minicart-count_area">
                                                <span className="item-count">3</span>
                                                <i className="ion-bag"></i>
                                            </div>
                                            <div className="minicart-front_text">
                                                <span>Cart:</span>
                                                <span className="total-price">462.4</span>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className="contact-us_wrap">
                                        <Link to="tel://+123123321345"><i className="ion-android-call"></i>+123 321 345</Link>
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
                                        <li className="right-menu"><Link to="shop-left-sidebar.html">Car Parts</Link>
                                            <ul className="cat-mega-menu">
                                                <li className="right-menu cat-mega-title">
                                                    <Link to="shop-left-sidebar.html">Active body control</Link>
                                                    <ul>
                                                        <li><Link to="shop-left-sidebar.html">Aluminum Nonstick</Link></li>
                                                        <li><Link to="shop-left-sidebar.html">Calphalon</Link></li>
                                                        <li><Link to="shop-left-sidebar.html">Contemporary</Link></li>
                                                        <li><Link to="shop-left-sidebar.html">Hard-Anodized</Link></li>
                                                    </ul>
                                                </li>
                                                <li className="right-menu cat-mega-title">
                                                    <Link to="shop-left-sidebar.html">Battery Indicator</Link>
                                                    <ul>
                                                        <li><Link to="shop-left-sidebar.html">Sanai laptops</Link></li>
                                                        <li><Link to="shop-left-sidebar.html">Byteflight</Link></li>
                                                        <li><Link to="shop-left-sidebar.html">EXcaliberPC</Link></li>
                                                        <li><Link to="shop-left-sidebar.html">Gaming Laptops</Link></li>
                                                    </ul>
                                                </li>
                                                <li className="right-menu cat-mega-title">
                                                    <Link to="shop-left-sidebar.html">Remote Starter</Link>
                                                    <ul>
                                                        <li><Link to="shop-left-sidebar.html">Dual Core</Link></li>
                                                        <li><Link to="shop-left-sidebar.html">Gaming Monitors</Link></li>
                                                        <li><Link to="shop-left-sidebar.html">GPS Monitors</Link></li>
                                                        <li><Link to="shop-left-sidebar.html">Heat Shield</Link></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="right-menu"><Link to="shop-left-sidebar.html">Tools &amp;
                                            Accessories</Link>
                                            <ul className="cat-mega-menu cat-mega-menu-2">
                                                <li className="right-menu cat-mega-title">
                                                    <Link to="shop-left-sidebar.html">Drills</Link>
                                                    <ul>
                                                        <li><Link to="shop-left-sidebar.html">Angle Drills</Link></li>
                                                        <li><Link to="shop-left-sidebar.html">Combi Drills</Link></li>
                                                        <li><Link to="shop-left-sidebar.html">Drill Drivers</Link></li>
                                                        <li><Link to="shop-left-sidebar.html">PercussionDrills</Link></li>
                                                    </ul>
                                                </li>
                                                <li className="right-menu cat-mega-title">
                                                    <Link to="shop-left-sidebar.html">Nail Guns</Link>
                                                    <ul>
                                                        <li><Link to="shop-left-sidebar.html">Air Nail Guns</Link></li>
                                                        <li><Link to="shop-left-sidebar.html">Cordless Nail Guns</Link></li>
                                                        <li><Link to="shop-left-sidebar.html">Electric Nail Guns</Link></li>
                                                        <li><Link to="shop-left-sidebar.html">Gas Nail Guns</Link></li>
                                                    </ul>
                                                </li>
                                                <li className="right-menu cat-mega-title">
                                                    <Link to="shop-left-sidebar.html">Sanders</Link>
                                                    <ul>
                                                        <li><Link to="shop-left-sidebar.html">1/2 Sheet Sanders</Link></li>
                                                        <li><Link to="shop-left-sidebar.html">1/4 Sheet Sanders</Link></li>
                                                        <li><Link to="shop-left-sidebar.html">Belt Sanders</Link></li>
                                                        <li><Link to="shop-left-sidebar.html">Drywall Sanders</Link></li>
                                                    </ul>
                                                </li>
                                                <li className="right-menu cat-mega-title">
                                                    <Link to="shop-left-sidebar.html">Saws</Link>
                                                    <ul>
                                                        <li><Link to="shop-left-sidebar.html">Circular Saws</Link></li>
                                                        <li><Link to="shop-left-sidebar.html">Jigsaws</Link></li>
                                                        <li><Link to="shop-left-sidebar.html">Mitre Saws</Link></li>
                                                        <li><Link to="shop-left-sidebar.html">Reciprocating Saws</Link></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="right-menu"><Link to="shop-left-sidebar.html">Suspension Systems</Link>
                                            <ul className="cat-mega-menu cat-mega-menu-3">
                                                <li className="right-menu cat-mega-title">
                                                    <Link to="shop-left-sidebar.html">Clothing</Link>
                                                    <ul>
                                                        <li><Link to="shop-left-sidebar.html">Cuisinart</Link></li>
                                                        <li><Link to="shop-left-sidebar.html">Homeinart</Link></li>
                                                        <li><Link to="shop-left-sidebar.html">Kettle Stainless</Link></li>
                                                        <li><Link to="shop-left-sidebar.html">Steel Stovetop</Link></li>
                                                    </ul>
                                                </li>
                                                <li className="right-menu cat-mega-title">
                                                    <Link to="shop-left-sidebar.html">Jewelry</Link>
                                                    <ul>
                                                        <li><Link to="shop-left-sidebar.html">Hard Anodized</Link></li>
                                                        <li><Link to="shop-left-sidebar.html">Scratch Resistant</Link></li>
                                                        <li><Link to="shop-left-sidebar.html">Thermo-Spot</Link></li>
                                                        <li><Link to="shop-left-sidebar.html">Ultimate</Link></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="right-menu"><Link to="shop-left-sidebar.html">Turbo System</Link>
                                            <ul className="cat-mega-menu">
                                                <li className="right-menu cat-mega-title">
                                                    <Link to="shop-left-sidebar.html">BMW</Link>
                                                    <ul>
                                                        <li><Link to="shop-left-sidebar.html">Dining Chairs</Link></li>
                                                        <li><Link to="shop-left-sidebar.html">Dining Tables</Link></li>
                                                        <li><Link to="shop-left-sidebar.html">Gramophone</Link></li>
                                                        <li><Link to="shop-left-sidebar.html">Sideboards</Link></li>
                                                    </ul>
                                                </li>
                                                <li className="right-menu cat-mega-title">
                                                    <Link to="shop-left-sidebar.html">FORD</Link>
                                                    <ul>
                                                        <li><Link to="shop-left-sidebar.html">Chairs & Sofas</Link></li>
                                                        <li><Link to="shop-left-sidebar.html">Chest</Link></li>
                                                        <li><Link to="shop-left-sidebar.html">Loungers</Link></li>
                                                        <li><Link to="shop-left-sidebar.html">Sets</Link></li>
                                                    </ul>
                                                </li>
                                                <li className="right-menu cat-mega-title">
                                                    <Link to="shop-left-sidebar.html">POSCHER</Link>
                                                    <ul>
                                                        <li><Link to="shop-left-sidebar.html">Bed</Link></li>
                                                        <li><Link to="shop-left-sidebar.html">Daybed</Link></li>
                                                        <li><Link to="shop-left-sidebar.html">Futon</Link></li>
                                                        <li><Link to="shop-left-sidebar.html">Hammock</Link></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="right-menu"><Link to="shop-left-sidebar.html">Oils & Fluids</Link>
                                            <ul className="cat-dropdown">
                                                <li>
                                                    <Link to="shop-left-sidebar.html">Daylesford</Link>
                                                    <Link to="shop-left-sidebar.html">Delaware</Link>
                                                    <Link to="shop-left-sidebar.html">Fayence</Link>
                                                    <Link to="shop-left-sidebar.html">Franzea</Link>
                                                    <Link to="shop-left-sidebar.html">Mable</Link>
                                                    <Link to="shop-left-sidebar.html">Mobo</Link>
                                                    <Link to="shop-left-sidebar.html">Pippins</Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="right-menu"><Link to="shop-left-sidebar.html">Exterior</Link>
                                            <ul className="cat-dropdown cat-dropdown-2">
                                                <li>
                                                    <Link to="shop-left-sidebar.html">Coffee & side tables</Link>
                                                    <Link to="shop-left-sidebar.html">Living room lighting</Link>
                                                    <Link to="shop-left-sidebar.html">Living room storage</Link>
                                                    <Link to="shop-left-sidebar.html">Living room textiles & rugs</Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li><Link to="shop-left-sidebar.html">Body Parts</Link></li>
                                        <li><Link to="shop-left-sidebar.html">Interior</Link></li>
                                        <li><Link to="shop-left-sidebar.html">Audio</Link></li>
                                        <li className="rx-child"><Link to="shop-left-sidebar.html">Uncategorized</Link></li>
                                        <li className="rx-child"><Link to="shop-left-sidebar.html">Appliances</Link></li>
                                        <li className="rx-parent">
                                            <Link className="rx-show">Collapse</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="custom-menu_col col-12 d-none d-lg-block">
                            <div className="main-menu_area position-relative">
                                <nav className="main-nav">
                                    <ul>
                                        <li className="dropdown-holder active"><Link to="index.html">Home</Link>
                                        </li>
                                        <li className="megamenu-holder "><Link to="shop-left-sidebar.html">Catalog</Link>
                                        </li>
                                        <li><Link to="#" onClick={(e) => e.preventDefault()}>Create Offer</Link></li>
                                        <li className=""><Link to="about-us.html">About Us</Link></li>
                                        <li><Link to="#" onClick={(e) => e.preventDefault()}>Login</Link></li>
                                        <li><Link to="#" onClick={(e) => e.preventDefault()}>Register</Link></li>
                                        <li><Link to="#" onClick={(e) => e.preventDefault()}>Logout</Link></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="custom-setting_col col-12 d-none d-lg-block">
                            <div className="ht-right_area">
                                <div className="ht-menu">
                                    <ul>
                                        <li><Link to="my-account.html"><span className="fa fa-user"></span> <span>My Account</span><i className="fa fa-chevron-down"></i></Link>
                                            <ul className="ht-dropdown ht-my_account">
                                                <li><Link to="#" onClick={(e) => e.preventDefault()}>Register</Link></li>
                                                <li className="active"><Link to="#" onClick={(e) => e.preventDefault()}>Login</Link></li>
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
                                        <li className="dropdown-holder active"><Link to="index.html">Home</Link>
                                        </li>
                                        <li className="megamenu-holder ">
                                            <Link to="shop-left-sidebar.html">Catalog</Link>
                                        </li>
                                        <li><Link to="#" onClick={(e) => e.preventDefault()}>Create Offer</Link></li>
                                        <li className=""><Link to="about-us.html">About Us</Link></li>
                                        <li><Link to="#" onClick={(e) => e.preventDefault()}>Login</Link></li>
                                        <li><Link to="#" onClick={(e) => e.preventDefault()}>Register</Link></li>
                                        <li><Link to="#" onClick={(e) => e.preventDefault()}>Logout</Link></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="col-sm-3 d-block d-lg-none">
                            <div className="header-logo_area header-sticky_logo">
                                <Link to="index.html">
                                    <img src="/images/menu/logo/1.png" alt="Uren's Logo" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-5 col-sm-9">
                            <div className="header-right_area">
                                <ul>
                                    <li className="mobile-menu_wrap d-flex d-lg-none">
                                        <Link to="#mobileMenu" className="mobile-menu_btn toolbar-btn color--white">
                                            <i className="ion-navicon"></i>
                                        </Link>
                                    </li>
                                    <li className="minicart-wrap">
                                        <Link to="#miniCart" className="minicart-btn toolbar-btn">
                                            <div className="minicart-count_area">
                                                <span className="item-count">3</span>
                                                <i className="ion-bag"></i>
                                            </div>
                                            <div className="minicart-front_text">
                                                <span>Cart:</span>
                                                <span className="total-price">462.4</span>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className="contact-us_wrap">
                                        <Link to="tel://+123123321345"><i className="ion-android-call"></i>+123 321 345</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="offcanvas-minicart_wrapper" id="miniCart">
                <div className="offcanvas-menu-inner">
                    <Link to="#" className="btn-close"><i className="ion-android-close"></i></Link>
                    <div className="minicart-content">
                        <div className="minicart-heading">
                            <h4>Shopping Cart</h4>
                        </div>
                        <ul className="minicart-list">
                            <li className="minicart-product">
                                <Link className="product-item_remove" to="#" onClick={(e) => e.preventDefault()}><i
                                    className="ion-android-close"></i></Link>
                                <div className="product-item_img">
                                    <img src="/images/product/small-size/1.jpg" alt="Uren's Product Image" />
                                </div>
                                <div className="product-item_content">
                                    <Link className="product-item_title" to="shop-left-sidebar.html">Autem ipsa ad</Link>
                                    <span className="product-item_quantity">1 x $145.80</span>
                                </div>
                            </li>
                            <li className="minicart-product">
                                <Link className="product-item_remove" to="#" onClick={(e) => e.preventDefault()}><i
                                    className="ion-android-close"></i></Link>
                                <div className="product-item_img">
                                    <img src="/images/product/small-size/2.jpg" alt="Uren's Product Image" />
                                </div>
                                <div className="product-item_content">
                                    <Link className="product-item_title" to="shop-left-sidebar.html">Tenetur illum amet</Link>
                                    <span className="product-item_quantity">1 x $150.80</span>
                                </div>
                            </li>
                            <li className="minicart-product">
                                <Link className="product-item_remove" to="#" onClick={(e) => e.preventDefault()}><i
                                    className="ion-android-close"></i></Link>
                                <div className="product-item_img">
                                    <img src="/images/product/small-size/3.jpg" alt="Uren's Product Image" />
                                </div>
                                <div className="product-item_content">
                                    <Link className="product-item_title" to="shop-left-sidebar.html">Non doloremque placeat</Link>
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
                        <Link to="cart.html" className="uren-btn uren-btn_dark uren-btn_fullwidth">Minicart</Link>
                    </div>
                    <div className="minicart-btn_area">
                        <Link to="checkout.html" className="uren-btn uren-btn_dark uren-btn_fullwidth">Checkout</Link>
                    </div>
                </div>
            </div>
            <div className="mobile-menu_wrapper" id="mobileMenu">
                <div className="offcanvas-menu-inner">
                    <div className="container">
                        <Link to="#" className="btn-close" onClick={(e) => e.preventDefault()}><i className="ion-android-close"></i></Link>
                        <div className="offcanvas-inner_search">
                            <form action="#" className="inner-searchbox">
                                <input type="text" placeholder="Search for item..." />
                                <button className="search_btn" type="submit" onClick={(e) => e.preventDefault()}><i className="ion-ios-search-strong"></i></button>
                            </form>
                        </div>
                        <nav className="offcanvas-navigation">
                            <ul className="mobile-menu">
                                <li className="menu-item-has-children active"><Link to="index.html" onClick={(e) => e.preventDefault()}><span
                                    className="mm-text">Home</span></Link>
                                    <ul className="sub-menu">
                                        <li>
                                            <Link to="index.html" onClick={(e) => e.preventDefault()}>
                                                <span className="mm-text">Home One</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="index-2.html" onClick={(e) => e.preventDefault()}>
                                                <span className="mm-text">Home Two</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="index-3.html" onClick={(e) => e.preventDefault()}>
                                                <span className="mm-text">Home Three</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="menu-item-has-children">
                                    <Link to="shop-left-sidebar.html" onClick={(e) => e.preventDefault()}>
                                        <span className="mm-text">Shop</span>
                                    </Link>
                                    <ul className="sub-menu">
                                        <li className="menu-item-has-children">
                                            <Link to="shop-left-sidebar.html" onClick={(e) => e.preventDefault()}>
                                                <span className="mm-text">Grid View</span>
                                            </Link>
                                            <ul className="sub-menu">
                                                <li>
                                                    <Link to="shop-grid-fullwidth.html" onClick={(e) => e.preventDefault()}>
                                                        <span className="mm-text">Column Three</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="shop-4-column.html" onClick={(e) => e.preventDefault()}>
                                                        <span className="mm-text">Column Four</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="shop-left-sidebar.html" onClick={(e) => e.preventDefault()}>
                                                        <span className="mm-text">Left Sidebar</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="shop-right-sidebar.html" onClick={(e) => e.preventDefault()}>
                                                        <span className="mm-text">Right Sidebar</span>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <Link to="shop-list-left-sidebar.html" onClick={(e) => e.preventDefault()}>
                                                <span className="mm-text">Shop List</span>
                                            </Link>
                                            <ul className="sub-menu">
                                                <li>
                                                    <Link to="shop-list-fullwidth.html" onClick={(e) => e.preventDefault()}>
                                                        <span className="mm-text">Full Width</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="shop-list-left-sidebar.html" onClick={(e) => e.preventDefault()}>
                                                        <span className="mm-text">Left Sidebar</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="shop-list-right-sidebar.html" onClick={(e) => e.preventDefault()}>
                                                        <span className="mm-text">Right Sidebar</span>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <Link to="single-product-gallery-left.html" onClick={(e) => e.preventDefault()}>
                                                <span className="mm-text">Single Product Style</span>
                                            </Link>
                                            <ul className="sub-menu">
                                                <li>
                                                    <Link to="single-product-gallery-left.html" onClick={(e) => e.preventDefault()}>
                                                        <span className="mm-text">Gallery Left</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="single-product-gallery-right.html" onClick={(e) => e.preventDefault()}>
                                                        <span className="mm-text">Gallery Right</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="single-product-tab-style-left.html" onClick={(e) => e.preventDefault()}>
                                                        <span className="mm-text">Tab Style Left</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="single-product-tab-style-right.html" onClick={(e) => e.preventDefault()}>
                                                        <span className="mm-text">Tab Style Right</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="single-product-sticky-left.html" onClick={(e) => e.preventDefault()}>
                                                        <span className="mm-text">Sticky Left</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="single-product-sticky-right.html" onClick={(e) => e.preventDefault()}>
                                                        <span className="mm-text">Sticky Right</span>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <Link to="single-product.html" onClick={(e) => e.preventDefault()}>
                                                <span className="mm-text">Single Product Type</span>
                                            </Link>
                                            <ul className="sub-menu">
                                                <li>
                                                    <Link to="single-product.html" onClick={(e) => e.preventDefault()}>
                                                        <span className="mm-text">Single Product</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="single-product-sale.html" onClick={(e) => e.preventDefault()}>
                                                        <span className="mm-text">Single Product Sale</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="single-product-group.html" onClick={(e) => e.preventDefault()}>
                                                        <span className="mm-text">Single Product Group</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="single-product-variable.html" onClick={(e) => e.preventDefault()}>
                                                        <span className="mm-text">Single Product Variable</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="single-product-affiliate.html" onClick={(e) => e.preventDefault()}>
                                                        <span className="mm-text">Single Product Affiliate</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="single-product-slider.html" onClick={(e) => e.preventDefault()}>
                                                        <span className="mm-text">Single Product Slider</span>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li className="menu-item-has-children">
                                    <Link to="blog-left-sidebar.html" onClick={(e) => e.preventDefault()}>
                                        <span className="mm-text">Blog</span>
                                    </Link>
                                    <ul className="sub-menu">
                                        <li className="menu-item-has-children has-children">
                                            <Link to="blog-left-sidebar.html" onClick={(e) => e.preventDefault()}>
                                                <span className="mm-text">Grid View</span>
                                            </Link>
                                            <ul className="sub-menu">
                                                <li>
                                                    <Link to="blog-2-column.html" onClick={(e) => e.preventDefault()}>
                                                        <span className="mm-text">Column Two</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="blog-3-column.html" onClick={(e) => e.preventDefault()}>
                                                        <span className="mm-text">Column Three</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="blog-left-sidebar.html" onClick={(e) => e.preventDefault()}>
                                                        <span className="mm-text">Left Sidebar</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="blog-right-sidebar.html" onClick={(e) => e.preventDefault()}>
                                                        <span className="mm-text">Right Sidebar</span>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children has-children">
                                            <Link to="blog-list-left-sidebar.html" onClick={(e) => e.preventDefault()}>
                                                <span className="mm-text">List View</span>
                                            </Link>
                                            <ul className="sub-menu">
                                                <li>
                                                    <Link to="blog-list-fullwidth.html" onClick={(e) => e.preventDefault()}>
                                                        <span className="mm-text">List Fullwidth</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="blog-list-left-sidebar.html" onClick={(e) => e.preventDefault()}>
                                                        <span className="mm-text">List Left Sidebar</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="blog-list-right-sidebar.html" onClick={(e) => e.preventDefault()}>
                                                        <span className="mm-text">List Right Sidebar</span>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children has-children">
                                            <Link to="blog-details-left-sidebar.html" onClick={(e) => e.preventDefault()}>
                                                <span className="mm-text">Blog Details</span>
                                            </Link>
                                            <ul className="sub-menu">
                                                <li>
                                                    <Link to="blog-details-left-sidebar.html" onClick={(e) => e.preventDefault()}>
                                                        <span className="mm-text">Left Sidebar</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="blog-details-right-sidebar.html" onClick={(e) => e.preventDefault()}>
                                                        <span className="mm-text">Right Sidebar</span>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children has-children">
                                            <Link to="blog-gallery-format.html" onClick={(e) => e.preventDefault()}>
                                                <span className="mm-text">Blog Format</span>
                                            </Link>
                                            <ul className="sub-menu">
                                                <li>
                                                    <Link to="blog-gallery-format.html" onClick={(e) => e.preventDefault()}>
                                                        <span className="mm-text">Gallery Format</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="blog-audio-format.html" onClick={(e) => e.preventDefault()}>
                                                        <span className="mm-text">Audio Format</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="blog-video-format.html" onClick={(e) => e.preventDefault()}>
                                                        <span className="mm-text">Video Format</span>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li className="menu-item-has-children">
                                    <Link to="index.html" onClick={(e) => e.preventDefault()}>
                                        <span className="mm-text">Pages</span>
                                    </Link>
                                    <ul className="sub-menu">
                                        <li>
                                            <Link to="my-account.html" onClick={(e) => e.preventDefault()}>
                                                <span className="mm-text">My Account</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="login-register.html" onClick={(e) => e.preventDefault()}>
                                                <span className="mm-text">Login | Register</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="wishlist.html" onClick={(e) => e.preventDefault()}>
                                                <span className="mm-text">Wishlist</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="cart.html" onClick={(e) => e.preventDefault()}>
                                                <span className="mm-text">Cart</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="checkout.html" onClick={(e) => e.preventDefault()}>
                                                <span className="mm-text">Checkout</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="compare.html" onClick={(e) => e.preventDefault()}>
                                                <span className="mm-text">Compare</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="faq.html" onClick={(e) => e.preventDefault()}>
                                                <span className="mm-text">FAQ</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="404.html" onClick={(e) => e.preventDefault()}>
                                                <span className="mm-text">Error 404</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                        <nav className="offcanvas-navigation user-setting_area">
                            <ul className="mobile-menu">
                                <li className="menu-item-has-children active"><Link to="#" onClick={(e) => e.preventDefault()}><span
                                    className="mm-text">User
                                    Setting</span></Link>
                                    <ul className="sub-menu">
                                        <li>
                                            <Link to="my-account.html" onClick={(e) => e.preventDefault()}>
                                                <span className="mm-text">My Account</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="login-register.html" onClick={(e) => e.preventDefault()}>
                                                <span className="mm-text">Login | Register</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="menu-item-has-children"><Link to="#" onClick={(e) => e.preventDefault()}><span
                                    className="mm-text">Currency</span></Link>
                                    <ul className="sub-menu">
                                        <li>
                                            <Link to="#" onClick={(e) => e.preventDefault()}>
                                                <span className="mm-text">EUR €</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#" onClick={(e) => e.preventDefault()}>
                                                <span className="mm-text">USD $</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="menu-item-has-children"><Link to="#" onClick={(e) => e.preventDefault()}><span
                                    className="mm-text">Language</span></Link>
                                    <ul className="sub-menu">
                                        <li>
                                            <Link to="#" onClick={(e) => e.preventDefault()}>
                                                <span className="mm-text">English</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#" onClick={(e) => e.preventDefault()}>
                                                <span className="mm-text">Français</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#" onClick={(e) => e.preventDefault()}>
                                                <span className="mm-text">Romanian</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#" onClick={(e) => e.preventDefault()}>
                                                <span className="mm-text">Japanese</span>
                                            </Link>
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