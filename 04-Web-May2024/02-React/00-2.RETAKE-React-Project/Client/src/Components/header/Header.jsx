import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContext';

export default function Header() {
    const { isAuthenticated, email } = useContext(AuthContext);
    
    
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
                                        <option formvalue="">Engine and Drivetrain</option>
                                        <option formvalue="">Suspension and Steering</option>
                                        <option formvalue="">Braking System</option>
                                        <option formvalue="">Electrical System</option>
                                        <option formvalue="">Exhaust System</option>
                                        <option formvalue="">Cooling System</option>
                                        <option formvalue="">Body and Exterior</option>
                                        <option formvalue="">Interior and Comfort</option>
                                        <option formvalue="">Wheels and Tires</option>
                                        <option formvalue="">Fuel System</option>
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
                                        <li><Link to="shop-left-sidebar.html">Engine and Drivetrain</Link></li>
                                        <li><Link to="shop-left-sidebar.html">Suspension and Steering</Link></li>
                                        <li><Link to="shop-left-sidebar.html">Braking System</Link></li>
                                        <li><Link to="shop-left-sidebar.html">Electrical System</Link></li>
                                        <li><Link to="shop-left-sidebar.html">Exhaust System</Link></li>
                                        <li><Link to="shop-left-sidebar.html">Cooling System</Link></li>
                                        <li><Link to="shop-left-sidebar.html">Body and Exterior</Link></li>
                                        <li><Link to="shop-left-sidebar.html">Interior and Comfort</Link></li>
                                        <li><Link to="shop-left-sidebar.html">Wheels and Tires</Link></li>
                                        <li><Link to="shop-left-sidebar.html">Fuel System</Link></li>
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
                                        <li className="dropdown-holder active"><Link to="/">Home</Link></li>
                                        <li className="megamenu-holder "><Link to="/catalog">Catalog</Link></li>
                                        {isAuthenticated && <li><Link to="/catalog/create">Create Offer</Link></li>}
                                        {isAuthenticated && <li><Link to="/logout">Logout</Link></li>}
                                        {!isAuthenticated && <li><Link to="/login">Login</Link></li>}
                                        {!isAuthenticated && <li><Link to="/register">Register</Link></li>}
                                        <li className=""><Link to="/about">About Us</Link></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="custom-setting_col col-12 d-none d-lg-block">
                            <div className="ht-right_area">
                                <div className="ht-menu">
                                    <ul>
                                        <li>
                                            <Link to="/my-account">
                                                <span className="fa fa-user"></span>
                                                <span>My Account {isAuthenticated && email ? `(${email})` : ''}</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="custom-search_col d-none d-md-block d-lg-none">
                            <div className="hm-form_area">
                                <form action="#" className="hm-searchbox">
                                    <select className="nice-select select-search-category">
                                        <option formvalue="">All Categories</option>
                                        <option formvalue="">Engine and Drivetrain</option>
                                        <option formvalue="">Suspension and Steering</option>
                                        <option formvalue="">Braking System</option>
                                        <option formvalue="">Electrical System</option>
                                        <option formvalue="">Exhaust System</option>
                                        <option formvalue="">Cooling System</option>
                                        <option formvalue="">Body and Exterior</option>
                                        <option formvalue="">Interior and Comfort</option>
                                        <option formvalue="">Wheels and Tires</option>
                                        <option formvalue="">Fuel System</option>
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
        </header>
    );
}