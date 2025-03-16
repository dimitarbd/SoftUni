import { Link } from 'react-router-dom';
import * as partsAPI from '../../api/parts-api';
import { useEffect, useState } from 'react';
import PartListItem from './part-list/PartListItem';

export default function Catalog() {
    const [parts, setParts] = useState([]);

    useEffect(() => {
        partsAPI.getAll()
            .then(parts => setParts(parts));
    }, []);

    return (
        <>
            {/* <!-- Begin Uren's Breadcrumb Area --> */}
            <div className="breadcrumb-area">
                <div className="container">
                    <div className="breadcrumb-content">
                        <h2>Shop</h2>
                        <ul>
                            <li><Link to="/home">Home</Link></li>
                            <li className="active">Shop Left Sidebar</li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* <!-- Uren's Breadcrumb Area End Here --> */}

            {/* <!-- Begin Uren's Shop Left Sidebar Area --> */}
            <div className="shop-content_wrapper">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-3 col-md-5 order-2 order-lg-1 order-md-1">
                            <div className="uren-sidebar-catagories_area">
                                <div className="category-module uren-sidebar_categories">
                                    <div className="category-module_heading">
                                        <h5>Categories</h5>
                                    </div>
                                    <div className="module-body">
                                        <ul className="module-list_item">
                                            <li>
                                                <Link to="javascript:void(0)">Games & Consoles <span>(12)</span></Link>
                                                <Link to="javascript:void(0)">Appliances <span>(0)</span></Link>
                                                <Link to="javascript:void(0)">Audio <span>(0)</span></Link>
                                                <Link to="javascript:void(0)">Bakeware <span>(0)</span></Link>
                                                <Link to="javascript:void(0)">Body Parts <span>(12)</span></Link>
                                                <Link to="javascript:void(0)">Cameras & Camcoders <span>(12)</span></Link>
                                                <Link to="javascript:void(0)">Car Parts <span>(16)</span></Link>
                                                <Link to="javascript:void(0)">Cookies & Crackers <span>(2)</span></Link>
                                                <Link to="javascript:void(0)">Interior <span>(0)</span></Link>
                                                <Link className="active" to="javascript:void(0)">Shop <span>(18)</span></Link>
                                                <ul className="module-sub-list_item">
                                                    <li>
                                                        <Link to="javascript:void(0)">Brakes & Rotors <span>(8)</span></Link>
                                                        <Link to="javascript:void(0)">Lighting <span>(8)</span></Link>
                                                        <Link to="javascript:void(0)">Perfomance <span>(13)</span></Link>
                                                        <Link to="javascript:void(0)">Wheels & Tires <span>(13)</span></Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <Link to="javascript:void(0)">Smartwatch <span>(9)</span></Link>
                                                <Link to="javascript:void(0)">Suspension Systems <span>(15)</span></Link>
                                                <Link to="javascript:void(0)">Tools & Accessories <span>(0)</span></Link>
                                                <Link to="javascript:void(0)">Turbo System <span>(18)</span></Link>
                                                <Link to="javascript:void(0)">TV & Audio <span>(0)</span></Link>
                                                <Link to="javascript:void(0)">Exterior <span>(0)</span></Link>
                                                <Link to="javascript:void(0)">Oils & Fluids <span>(18)</span></Link>
                                                <Link to="javascript:void(0)">Accessories <span>(12)</span></Link>
                                                <Link to="javascript:void(0)">Breakfast <span>(0)</span></Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="uren-sidebar_categories">
                                    <div className="uren-categories_title">
                                        <h5>Price</h5>
                                    </div>
                                    <div className="price-filter">
                                        <div id="slider-range"></div>
                                        <div className="price-slider-amount">
                                            <div className="label-input">
                                                <label>price : </label>
                                                <input type="text" id="amount" name="price" placeholder="Add Your Price" />
                                            </div>
                                            {/* <button type="button">Filter</button> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="uren-sidebar_categories">
                                    <div className="uren-categories_title">
                                        <h5>Color</h5>
                                    </div>
                                    <ul className="sidebar-checkbox_list">
                                        <li>
                                            <Link to="javascript:void(0)">Black <span>(6)</span></Link>
                                        </li>
                                        <li>
                                            <Link to="javascript:void(0)">Blue <span>(2)</span></Link>
                                        </li>
                                        <li>
                                            <Link to="javascript:void(0)">Red <span>(3)</span></Link>
                                        </li>
                                        <li>
                                            <Link to="javascript:void(0)">Yellow <span>(0)</span></Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="uren-sidebar_categories">
                                    <div className="uren-categories_title">
                                        <h5>Manufacturers</h5>
                                    </div>
                                    <ul className="sidebar-checkbox_list">
                                        <li>
                                            <Link to="javascript:void(0)">Sanai <span>(10)</span></Link>
                                        </li>
                                        <li>
                                            <Link to="javascript:void(0)">Xail <span>(2)</span></Link>
                                        </li>
                                        <li>
                                            <Link to="javascript:void(0)">Chamcham <span>(1)</span></Link>
                                        </li>
                                        <li>
                                            <Link to="javascript:void(0)">Meito <span>(3)</span></Link>
                                        </li>
                                        <li>
                                            <Link to="javascript:void(0)">Walton <span>(0)</span></Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="sidebar-banner_area">
                                <div className="banner-item img-hover_effect">
                                    <Link to="javascript:void(0)">
                                        <img src="/images/shop/1.jpg" alt="Uren's Shop Banner Image" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-7 order-1 order-lg-2 order-md-2">
                            <div className="shop-toolbar">
                                <div className="product-view-mode">
                                    <Link className="grid-1" data-target="gridview-1" data-toggle="tooltip" data-placement="top" title="1">1</Link>
                                    <Link className="grid-2" data-target="gridview-2" data-toggle="tooltip" data-placement="top" title="2">2</Link>
                                    <Link className="active grid-3" data-target="gridview-3" data-toggle="tooltip" data-placement="top" title="3">3</Link>
                                    <Link className="grid-4" data-target="gridview-4" data-toggle="tooltip" data-placement="top" title="4">4</Link>
                                    <Link className="grid-5" data-target="gridview-5" data-toggle="tooltip" data-placement="top" title="5">5</Link>
                                    <Link className="list" data-target="listview" data-toggle="tooltip" data-placement="top" title="List"><i className="fa fa-th-list"></i></Link>
                                </div>
                                <div className="product-item-selection_area">
                                    <div className="product-short">
                                        <label className="select-label">Short By:</label>
                                        <select className="myniceselect nice-select">
                                            <option value="1">Default</option>
                                            <option value="2">Name, A to Z</option>
                                            <option value="3">Name, Z to A</option>
                                            <option value="4">Price, low to high</option>
                                            <option value="5">Price, high to low</option>
                                            <option value="5">Rating (Highest)</option>
                                            <option value="5">Rating (Lowest)</option>
                                            <option value="5">Model (A - Z)</option>
                                            <option value="5">Model (Z - A)</option>
                                        </select>
                                    </div>
                                    <div className="product-showing">
                                        <label className="select-label">Show:</label>
                                        <select className="myniceselect short-select nice-select">
                                            <option value="1">15</option>
                                            <option value="1">1</option>
                                            <option value="1">2</option>
                                            <option value="1">3</option>
                                            <option value="1">4</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="shop-product-wrap grid gridview-3 img-hover-effect_area row">

                                < PartListItem />

                                {/* <div className="col-lg-4">
                                    <div className="product-slide_item">
                                        <div className="inner-slide">
                                            <div className="single-product">
                                                <div className="product-img">
                                                    <Link to="single-product.html">
                                                        <img className="primary-img" src="/images/product/large-size/3.jpg" alt="Uren's Product Image" />
                                                        <img className="secondary-img" src="/images/product/large-size/4.jpg" alt="Uren's Product Image" />
                                                    </Link>
                                                    <div className="sticker-area-2">
                                                        <span className="sticker-2">-20%</span>
                                                        <span className="sticker">New</span>
                                                    </div>
                                                    <div className="add-actions">
                                                        <ul>
                                                            <li><Link className="uren-add_cart" to="cart.html" data-toggle="tooltip" data-placement="top" title="Add To Cart"><i
                                                                className="ion-bag"></i></Link>
                                                            </li>
                                                            <li><Link className="uren-wishlist" to="wishlist.html" data-toggle="tooltip" data-placement="top" title="Add To Wishlist"><i
                                                                className="ion-android-favorite-outline"></i></Link>
                                                            </li>
                                                            <li><Link className="uren-add_compare" to="compare.html" data-toggle="tooltip" data-placement="top" title="Compare This Product"><i
                                                                className="ion-android-options"></i></Link>
                                                            </li>
                                                            <li className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><Link to="javascript:void(0)" data-toggle="tooltip" data-placement="top" title="Quick View"><i
                                                                className="ion-android-open"></i></Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="product-content">
                                                    <div className="product-desc_info">
                                                        <div className="rating-box">
                                                            <ul>
                                                                <li><i className="ion-android-star"></i></li>
                                                                <li><i className="ion-android-star"></i></li>
                                                                <li className="silver-color"><i className="ion-android-star"></i></li>
                                                                <li className="silver-color"><i className="ion-android-star"></i></li>
                                                                <li className="silver-color"><i className="ion-android-star"></i></li>
                                                            </ul>
                                                        </div>
                                                        <h6><Link className="product-name" to="single-product.html">Rerum perspiciatis
                                                            qui</Link></h6>
                                                        <div className="price-box">
                                                            <span className="new-price new-price-2">$194.00</span>
                                                            <span className="old-price">$241.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="list-slide_item">
                                        <div className="single-product">
                                            <div className="product-img">
                                                <Link to="single-product.html">
                                                    <img className="primary-img" src="/images/product/large-size/3.jpg" alt="Uren's Product Image" />
                                                    <img className="secondary-img" src="/images/product/large-size/4.jpg" alt="Uren's Product Image" />
                                                </Link>
                                                <div className="sticker-area-2">
                                                    <span className="sticker-2">-20%</span>
                                                    <span className="sticker">New</span>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <div className="product-desc_info">
                                                    <div className="rating-box">
                                                        <ul>
                                                            <li><i className="ion-android-star"></i></li>
                                                            <li><i className="ion-android-star"></i></li>
                                                            <li className="silver-color"><i className="ion-android-star"></i></li>
                                                            <li className="silver-color"><i className="ion-android-star"></i></li>
                                                            <li className="silver-color"><i className="ion-android-star"></i></li>
                                                        </ul>
                                                    </div>
                                                    <h6><Link className="product-name" to="single-product.html">Rerum perspiciatis
                                                        qui</Link></h6>
                                                    <div className="price-box">
                                                        <span className="new-price new-price-2">$194.00</span>
                                                        <span className="old-price">$241.00</span>
                                                    </div>
                                                    <div className="product-short_desc">
                                                        <p>The invention relates to an electromechanical brake booster with an
                                                            electric motor and a helical gearing. The brake booster is used for
                                                            coupling an auxiliary force via a driver into a piston rod. The
                                                            invention proposes connecting a spindle of the helical gearing
                                                            elastically via a spring element to the piston rod such that, in the
                                                            event of rapid actuation of the brake, the helical gearing and a rotor
                                                            of the electric motor do not have to be accelerated entirely muscle
                                                            power. The muscle power required for actuating a brake is reduced as a
                                                            parts in the event of a rapid actuation of the brake.</p>
                                                    </div>
                                                </div>
                                                <div className="add-actions">
                                                    <ul>
                                                        <li><Link className="uren-add_cart" to="cart.html" data-toggle="tooltip" data-placement="top" title="Add To Cart"><i className="ion-bag"></i></Link>
                                                        </li>
                                                        <li><Link className="uren-wishlist" to="wishlist.html" data-toggle="tooltip" data-placement="top" title="Add To Wishlist"><i
                                                            className="ion-android-favorite-outline"></i></Link>
                                                        </li>
                                                        <li><Link className="uren-add_compare" to="compare.html" data-toggle="tooltip" data-placement="top" title="Compare This Product"><i
                                                            className="ion-android-options"></i></Link>
                                                        </li>
                                                        <li className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><Link to="javascript:void(0)" data-toggle="tooltip" data-placement="top" title="Quick View"><i
                                                            className="ion-android-open"></i></Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="product-slide_item">
                                        <div className="inner-slide">
                                            <div className="single-product">
                                                <div className="product-img">
                                                    <Link to="single-product.html">
                                                        <img className="primary-img" src="/images/product/large-size/5.jpg" alt="Uren's Product Image" />
                                                        <img className="secondary-img" src="/images/product/large-size/6.jpg" alt="Uren's Product Image" />
                                                    </Link>
                                                    <div className="sticker">
                                                        <span className="sticker">New</span>
                                                    </div>
                                                    <div className="add-actions">
                                                        <ul>
                                                            <li><Link className="uren-add_cart" to="cart.html" data-toggle="tooltip" data-placement="top" title="Add To Cart"><i
                                                                className="ion-bag"></i></Link>
                                                            </li>
                                                            <li><Link className="uren-wishlist" to="wishlist.html" data-toggle="tooltip" data-placement="top" title="Add To Wishlist"><i
                                                                className="ion-android-favorite-outline"></i></Link>
                                                            </li>
                                                            <li><Link className="uren-add_compare" to="compare.html" data-toggle="tooltip" data-placement="top" title="Compare This Product"><i
                                                                className="ion-android-options"></i></Link>
                                                            </li>
                                                            <li className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><Link to="javascript:void(0)" data-toggle="tooltip" data-placement="top" title="Quick View"><i
                                                                className="ion-android-open"></i></Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="product-content">
                                                    <div className="product-desc_info">
                                                        <div className="rating-box">
                                                            <ul>
                                                                <li><i className="ion-android-star"></i></li>
                                                                <li><i className="ion-android-star"></i></li>
                                                                <li><i className="ion-android-star"></i></li>
                                                                <li><i className="ion-android-star"></i></li>
                                                                <li className="silver-color"><i className="ion-android-star"></i></li>
                                                            </ul>
                                                        </div>
                                                        <h6><Link className="product-name" to="single-product.html">Inventore quibusdam
                                                            ut</Link></h6>
                                                        <div className="price-box">
                                                            <span className="new-price">$150.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="list-slide_item">
                                        <div className="single-product">
                                            <div className="product-img">
                                                <Link to="single-product.html">
                                                    <img className="primary-img" src="/images/product/large-size/5.jpg" alt="Uren's Product Image" />
                                                    <img className="secondary-img" src="/images/product/large-size/6.jpg" alt="Uren's Product Image" />
                                                </Link>
                                            </div>
                                            <div className="product-content">
                                                <div className="product-desc_info">
                                                    <div className="rating-box">
                                                        <ul>
                                                            <li><i className="ion-android-star"></i></li>
                                                            <li><i className="ion-android-star"></i></li>
                                                            <li><i className="ion-android-star"></i></li>
                                                            <li><i className="ion-android-star"></i></li>
                                                            <li className="silver-color"><i className="ion-android-star"></i></li>
                                                        </ul>
                                                    </div>
                                                    <h6><Link className="product-name" to="single-product.html">Inventore quibusdam
                                                        ut</Link></h6>
                                                    <div className="price-box">
                                                        <span className="new-price">$150.00</span>
                                                    </div>
                                                    <div className="product-short_desc">
                                                        <p>The invention relates to an electromechanical brake booster with an
                                                            electric motor and a helical gearing. The brake booster is used for
                                                            coupling an auxiliary force via a driver into a piston rod. The
                                                            invention proposes connecting a spindle of the helical gearing
                                                            elastically via a spring element to the piston rod such that, in the
                                                            event of rapid actuation of the brake, the helical gearing and a rotor
                                                            of the electric motor do not have to be accelerated entirely muscle
                                                            power. The muscle power required for actuating a brake is reduced as a
                                                            parts in the event of a rapid actuation of the brake.</p>
                                                    </div>
                                                </div>
                                                <div className="add-actions">
                                                    <ul>
                                                        <li><Link className="uren-add_cart" to="cart.html" data-toggle="tooltip" data-placement="top" title="Add To Cart"><i className="ion-bag"></i></Link>
                                                        </li>
                                                        <li><Link className="uren-wishlist" to="wishlist.html" data-toggle="tooltip" data-placement="top" title="Add To Wishlist"><i
                                                            className="ion-android-favorite-outline"></i></Link>
                                                        </li>
                                                        <li><Link className="uren-add_compare" to="compare.html" data-toggle="tooltip" data-placement="top" title="Compare This Product"><i
                                                            className="ion-android-options"></i></Link>
                                                        </li>
                                                        <li className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><Link to="javascript:void(0)" data-toggle="tooltip" data-placement="top" title="Quick View"><i
                                                            className="ion-android-open"></i></Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="product-slide_item">
                                        <div className="inner-slide">
                                            <div className="single-product">
                                                <div className="product-img">
                                                    <Link to="single-product.html">
                                                        <img className="primary-img" src="/images/product/large-size/7.jpg" alt="Uren's Product Image" />
                                                        <img className="secondary-img" src="/images/product/large-size/8.jpg" alt="Uren's Product Image" />
                                                    </Link>
                                                    <div className="sticker-area-2">
                                                        <span className="sticker-2">-10%</span>
                                                        <span className="sticker">New</span>
                                                    </div>
                                                    <div className="add-actions">
                                                        <ul>
                                                            <li><Link className="uren-add_cart" to="cart.html" data-toggle="tooltip" data-placement="top" title="Add To Cart"><i
                                                                className="ion-bag"></i></Link>
                                                            </li>
                                                            <li><Link className="uren-wishlist" to="wishlist.html" data-toggle="tooltip" data-placement="top" title="Add To Wishlist"><i
                                                                className="ion-android-favorite-outline"></i></Link>
                                                            </li>
                                                            <li><Link className="uren-add_compare" to="compare.html" data-toggle="tooltip" data-placement="top" title="Compare This Product"><i
                                                                className="ion-android-options"></i></Link>
                                                            </li>
                                                            <li className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><Link to="javascript:void(0)" data-toggle="tooltip" data-placement="top" title="Quick View"><i
                                                                className="ion-android-open"></i></Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="product-content">
                                                    <div className="product-desc_info">
                                                        <div className="rating-box">
                                                            <ul>
                                                                <li><i className="ion-android-star"></i></li>
                                                                <li><i className="ion-android-star"></i></li>
                                                                <li><i className="ion-android-star"></i></li>
                                                                <li className="silver-color"><i className="ion-android-star"></i></li>
                                                                <li className="silver-color"><i className="ion-android-star"></i></li>
                                                            </ul>
                                                        </div>
                                                        <h6><Link className="product-name" to="single-product.html">Cupiditate quia
                                                            cumque</Link></h6>
                                                        <div className="price-box">
                                                            <span className="new-price new-price-2">$185.00</span>
                                                            <span className="old-price">$210.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="list-slide_item">
                                        <div className="single-product">
                                            <div className="product-img">
                                                <Link to="single-product.html">
                                                    <img className="primary-img" src="/images/product/large-size/7.jpg" alt="Uren's Product Image" />
                                                    <img className="secondary-img" src="/images/product/large-size/8.jpg" alt="Uren's Product Image" />
                                                </Link>
                                            </div>
                                            <div className="product-content">
                                                <div className="product-desc_info">
                                                    <div className="rating-box">
                                                        <ul>
                                                            <li><i className="ion-android-star"></i></li>
                                                            <li><i className="ion-android-star"></i></li>
                                                            <li><i className="ion-android-star"></i></li>
                                                            <li className="silver-color"><i className="ion-android-star"></i></li>
                                                            <li className="silver-color"><i className="ion-android-star"></i></li>
                                                        </ul>
                                                    </div>
                                                    <h6><Link className="product-name" to="single-product.html">Cupiditate quia
                                                        cumque</Link></h6>
                                                    <div className="price-box">
                                                        <span className="new-price new-price-2">$185.00</span>
                                                        <span className="old-price">$210.00</span>
                                                    </div>
                                                    <div className="product-short_desc">
                                                        <p>The invention relates to an electromechanical brake booster with an
                                                            electric motor and a helical gearing. The brake booster is used for
                                                            coupling an auxiliary force via a driver into a piston rod. The
                                                            invention proposes connecting a spindle of the helical gearing
                                                            elastically via a spring element to the piston rod such that, in the
                                                            event of rapid actuation of the brake, the helical gearing and a rotor
                                                            of the electric motor do not have to be accelerated entirely muscle
                                                            power. The muscle power required for actuating a brake is reduced as a
                                                            parts in the event of a rapid actuation of the brake.</p>
                                                    </div>
                                                </div>
                                                <div className="add-actions">
                                                    <ul>
                                                        <li><Link className="uren-add_cart" to="cart.html" data-toggle="tooltip" data-placement="top" title="Add To Cart"><i className="ion-bag"></i></Link>
                                                        </li>
                                                        <li><Link className="uren-wishlist" to="wishlist.html" data-toggle="tooltip" data-placement="top" title="Add To Wishlist"><i
                                                            className="ion-android-favorite-outline"></i></Link>
                                                        </li>
                                                        <li><Link className="uren-add_compare" to="compare.html" data-toggle="tooltip" data-placement="top" title="Compare This Product"><i
                                                            className="ion-android-options"></i></Link>
                                                        </li>
                                                        <li className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><Link to="javascript:void(0)" data-toggle="tooltip" data-placement="top" title="Quick View"><i
                                                            className="ion-android-open"></i></Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="product-slide_item">
                                        <div className="inner-slide">
                                            <div className="single-product">
                                                <div className="product-img">
                                                    <Link to="single-product.html">
                                                        <img className="primary-img" src="/images/product/large-size/9.jpg" alt="Uren's Product Image" />
                                                        <img className="secondary-img" src="/images/product/large-size/10.jpg" alt="Uren's Product Image" />
                                                    </Link>
                                                    <div className="sticker">
                                                        <span className="sticker">New</span>
                                                    </div>
                                                    <div className="add-actions">
                                                        <ul>
                                                            <li><Link className="uren-add_cart" to="cart.html" data-toggle="tooltip" data-placement="top" title="Add To Cart"><i
                                                                className="ion-bag"></i></Link>
                                                            </li>
                                                            <li><Link className="uren-wishlist" to="wishlist.html" data-toggle="tooltip" data-placement="top" title="Add To Wishlist"><i
                                                                className="ion-android-favorite-outline"></i></Link>
                                                            </li>
                                                            <li><Link className="uren-add_compare" to="compare.html" data-toggle="tooltip" data-placement="top" title="Compare This Product"><i
                                                                className="ion-android-options"></i></Link>
                                                            </li>
                                                            <li className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><Link to="javascript:void(0)" data-toggle="tooltip" data-placement="top" title="Quick View"><i
                                                                className="ion-android-open"></i></Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="product-content">
                                                    <div className="product-desc_info">
                                                        <div className="rating-box">
                                                            <ul>
                                                                <li><i className="ion-android-star"></i></li>
                                                                <li><i className="ion-android-star"></i></li>
                                                                <li><i className="ion-android-star"></i></li>
                                                                <li><i className="ion-android-star"></i></li>
                                                                <li><i className="ion-android-star"></i></li>
                                                            </ul>
                                                        </div>
                                                        <h6><Link className="product-name" to="single-product.html">Adipisci et qui
                                                            eveniet</Link></h6>
                                                        <div className="price-box">
                                                            <span className="new-price">$110.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="list-slide_item">
                                        <div className="single-product">
                                            <div className="product-img">
                                                <Link to="single-product.html">
                                                    <img className="primary-img" src="/images/product/large-size/9.jpg" alt="Uren's Product Image" />
                                                    <img className="secondary-img" src="/images/product/large-size/10.jpg" alt="Uren's Product Image" />
                                                </Link>
                                            </div>
                                            <div className="product-content">
                                                <div className="product-desc_info">
                                                    <div className="rating-box">
                                                        <ul>
                                                            <li><i className="ion-android-star"></i></li>
                                                            <li><i className="ion-android-star"></i></li>
                                                            <li><i className="ion-android-star"></i></li>
                                                            <li><i className="ion-android-star"></i></li>
                                                            <li><i className="ion-android-star"></i></li>
                                                        </ul>
                                                    </div>
                                                    <h6><Link className="product-name" to="single-product.html">Adipisci et qui
                                                        eveniet</Link></h6>
                                                    <div className="price-box">
                                                        <span className="new-price">$110.00</span>
                                                    </div>
                                                    <div className="product-short_desc">
                                                        <p>The invention relates to an electromechanical brake booster with an
                                                            electric motor and a helical gearing. The brake booster is used for
                                                            coupling an auxiliary force via a driver into a piston rod. The
                                                            invention proposes connecting a spindle of the helical gearing
                                                            elastically via a spring element to the piston rod such that, in the
                                                            event of rapid actuation of the brake, the helical gearing and a rotor
                                                            of the electric motor do not have to be accelerated entirely muscle
                                                            power. The muscle power required for actuating a brake is reduced as a
                                                            parts in the event of a rapid actuation of the brake.</p>
                                                    </div>
                                                </div>
                                                <div className="add-actions">
                                                    <ul>
                                                        <li><Link className="uren-add_cart" to="cart.html" data-toggle="tooltip" data-placement="top" title="Add To Cart"><i className="ion-bag"></i></Link>
                                                        </li>
                                                        <li><Link className="uren-wishlist" to="wishlist.html" data-toggle="tooltip" data-placement="top" title="Add To Wishlist"><i
                                                            className="ion-android-favorite-outline"></i></Link>
                                                        </li>
                                                        <li><Link className="uren-add_compare" to="compare.html" data-toggle="tooltip" data-placement="top" title="Compare This Product"><i
                                                            className="ion-android-options"></i></Link>
                                                        </li>
                                                        <li className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><Link to="javascript:void(0)" data-toggle="tooltip" data-placement="top" title="Quick View"><i
                                                            className="ion-android-open"></i></Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="product-slide_item">
                                        <div className="inner-slide">
                                            <div className="single-product">
                                                <div className="product-img">
                                                    <Link to="single-product.html">
                                                        <img className="primary-img" src="/images/product/large-size/1.jpg" alt="Uren's Product Image" />
                                                        <img className="secondary-img" src="/images/product/large-size/2.jpg" alt="Uren's Product Image" />
                                                    </Link>
                                                    <div className="sticker-area-2">
                                                        <span className="sticker-2">-15%</span>
                                                        <span className="sticker">New</span>
                                                    </div>
                                                    <div className="add-actions">
                                                        <ul>
                                                            <li><Link className="uren-add_cart" to="cart.html" data-toggle="tooltip" data-placement="top" title="Add To Cart"><i
                                                                className="ion-bag"></i></Link>
                                                            </li>
                                                            <li><Link className="uren-wishlist" to="wishlist.html" data-toggle="tooltip" data-placement="top" title="Add To Wishlist"><i
                                                                className="ion-android-favorite-outline"></i></Link>
                                                            </li>
                                                            <li><Link className="uren-add_compare" to="compare.html" data-toggle="tooltip" data-placement="top" title="Compare This Product"><i
                                                                className="ion-android-options"></i></Link>
                                                            </li>
                                                            <li className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><Link to="javascript:void(0)" data-toggle="tooltip" data-placement="top" title="Quick View"><i
                                                                className="ion-android-open"></i></Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="product-content">
                                                    <div className="product-desc_info">
                                                        <div className="rating-box">
                                                            <ul>
                                                                <li><i className="ion-android-star"></i></li>
                                                                <li><i className="ion-android-star"></i></li>
                                                                <li className="silver-color"><i className="ion-android-star"></i></li>
                                                                <li className="silver-color"><i className="ion-android-star"></i></li>
                                                                <li className="silver-color"><i className="ion-android-star"></i></li>
                                                            </ul>
                                                        </div>
                                                        <h6><Link className="product-name" to="single-product.html">Reiciendis
                                                            repudiandae asperiores</Link></h6>
                                                        <div className="price-box">
                                                            <span className="new-price new-price-2">$95.00</span>
                                                            <span className="old-price">$141.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="list-slide_item">
                                        <div className="single-product">
                                            <div className="product-img">
                                                <Link to="single-product.html">
                                                    <img className="primary-img" src="/images/product/large-size/3.jpg" alt="Uren's Product Image" />
                                                    <img className="secondary-img" src="/images/product/large-size/4.jpg" alt="Uren's Product Image" />
                                                </Link>
                                                <div className="sticker-area-2">
                                                    <span className="sticker-2">-15%</span>
                                                    <span className="sticker">New</span>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <div className="product-desc_info">
                                                    <div className="rating-box">
                                                        <ul>
                                                            <li><i className="ion-android-star"></i></li>
                                                            <li><i className="ion-android-star"></i></li>
                                                            <li className="silver-color"><i className="ion-android-star"></i></li>
                                                            <li className="silver-color"><i className="ion-android-star"></i></li>
                                                            <li className="silver-color"><i className="ion-android-star"></i></li>
                                                        </ul>
                                                    </div>
                                                    <h6><Link className="product-name" to="single-product.html">Reiciendis repudiandae
                                                        asperioresi</Link></h6>
                                                    <div className="price-box">
                                                        <span className="new-price new-price-2">$95.00</span>
                                                        <span className="old-price">$141.00</span>
                                                    </div>
                                                    <div className="product-short_desc">
                                                        <p>The invention relates to an electromechanical brake booster with an
                                                            electric motor and a helical gearing. The brake booster is used for
                                                            coupling an auxiliary force via a driver into a piston rod. The
                                                            invention proposes connecting a spindle of the helical gearing
                                                            elastically via a spring element to the piston rod such that, in the
                                                            event of rapid actuation of the brake, the helical gearing and a rotor
                                                            of the electric motor do not have to be accelerated entirely muscle
                                                            power. The muscle power required for actuating a brake is reduced as a
                                                            parts in the event of a rapid actuation of the brake.</p>
                                                    </div>
                                                </div>
                                                <div className="add-actions">
                                                    <ul>
                                                        <li><Link className="uren-add_cart" to="cart.html" data-toggle="tooltip" data-placement="top" title="Add To Cart"><i className="ion-bag"></i></Link>
                                                        </li>
                                                        <li><Link className="uren-wishlist" to="wishlist.html" data-toggle="tooltip" data-placement="top" title="Add To Wishlist"><i
                                                            className="ion-android-favorite-outline"></i></Link>
                                                        </li>
                                                        <li><Link className="uren-add_compare" to="compare.html" data-toggle="tooltip" data-placement="top" title="Compare This Product"><i
                                                            className="ion-android-options"></i></Link>
                                                        </li>
                                                        <li className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><Link to="javascript:void(0)" data-toggle="tooltip" data-placement="top" title="Quick View"><i
                                                            className="ion-android-open"></i></Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="product-slide_item">
                                        <div className="inner-slide">
                                            <div className="single-product">
                                                <div className="product-img">
                                                    <Link to="single-product.html">
                                                        <img className="primary-img" src="/images/product/large-size/6.jpg" alt="Uren's Product Image" />
                                                        <img className="secondary-img" src="/images/product/large-size/5.jpg" alt="Uren's Product Image" />
                                                    </Link>
                                                    <div className="sticker">
                                                        <span className="sticker">New</span>
                                                    </div>
                                                    <div className="add-actions">
                                                        <ul>
                                                            <li><Link className="uren-add_cart" to="cart.html" data-toggle="tooltip" data-placement="top" title="Add To Cart"><i
                                                                className="ion-bag"></i></Link>
                                                            </li>
                                                            <li><Link className="uren-wishlist" to="wishlist.html" data-toggle="tooltip" data-placement="top" title="Add To Wishlist"><i
                                                                className="ion-android-favorite-outline"></i></Link>
                                                            </li>
                                                            <li><Link className="uren-add_compare" to="compare.html" data-toggle="tooltip" data-placement="top" title="Compare This Product"><i
                                                                className="ion-android-options"></i></Link>
                                                            </li>
                                                            <li className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><Link to="javascript:void(0)" data-toggle="tooltip" data-placement="top" title="Quick View"><i
                                                                className="ion-android-open"></i></Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="product-content">
                                                    <div className="product-desc_info">
                                                        <div className="rating-box">
                                                            <ul>
                                                                <li><i className="ion-android-star"></i></li>
                                                                <li><i className="ion-android-star"></i></li>
                                                                <li><i className="ion-android-star"></i></li>
                                                                <li><i className="ion-android-star"></i></li>
                                                                <li className="silver-color"><i className="ion-android-star"></i></li>
                                                            </ul>
                                                        </div>
                                                        <h6><Link className="product-name" to="single-product.html">Voluptas ipsum omnis
                                                            obcaecati</Link></h6>
                                                        <div className="price-box">
                                                            <span className="new-price">$145.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="list-slide_item">
                                        <div className="single-product">
                                            <div className="product-img">
                                                <Link to="single-product.html">
                                                    <img className="primary-img" src="/images/product/large-size/6.jpg" alt="Uren's Product Image" />
                                                    <img className="secondary-img" src="/images/product/large-size/5.jpg" alt="Uren's Product Image" />
                                                </Link>
                                            </div>
                                            <div className="product-content">
                                                <div className="product-desc_info">
                                                    <div className="rating-box">
                                                        <ul>
                                                            <li><i className="ion-android-star"></i></li>
                                                            <li><i className="ion-android-star"></i></li>
                                                            <li><i className="ion-android-star"></i></li>
                                                            <li><i className="ion-android-star"></i></li>
                                                            <li className="silver-color"><i className="ion-android-star"></i></li>
                                                        </ul>
                                                    </div>
                                                    <h6><Link className="product-name" to="single-product.html">Inventore quibusdam
                                                        ut</Link></h6>
                                                    <div className="price-box">
                                                        <span className="new-price">$150.00</span>
                                                    </div>
                                                    <div className="product-short_desc">
                                                        <p>The invention relates to an electromechanical brake booster with an
                                                            electric motor and a helical gearing. The brake booster is used for
                                                            coupling an auxiliary force via a driver into a piston rod. The
                                                            invention proposes connecting a spindle of the helical gearing
                                                            elastically via a spring element to the piston rod such that, in the
                                                            event of rapid actuation of the brake, the helical gearing and a rotor
                                                            of the electric motor do not have to be accelerated entirely muscle
                                                            power. The muscle power required for actuating a brake is reduced as a
                                                            parts in the event of a rapid actuation of the brake.</p>
                                                    </div>
                                                </div>
                                                <div className="add-actions">
                                                    <ul>
                                                        <li><Link className="uren-add_cart" to="cart.html" data-toggle="tooltip" data-placement="top" title="Add To Cart"><i className="ion-bag"></i></Link>
                                                        </li>
                                                        <li><Link className="uren-wishlist" to="wishlist.html" data-toggle="tooltip" data-placement="top" title="Add To Wishlist"><i
                                                            className="ion-android-favorite-outline"></i></Link>
                                                        </li>
                                                        <li><Link className="uren-add_compare" to="compare.html" data-toggle="tooltip" data-placement="top" title="Compare This Product"><i
                                                            className="ion-android-options"></i></Link>
                                                        </li>
                                                        <li className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><Link to="javascript:void(0)" data-toggle="tooltip" data-placement="top" title="Quick View"><i
                                                            className="ion-android-open"></i></Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="product-slide_item">
                                        <div className="inner-slide">
                                            <div className="single-product">
                                                <div className="product-img">
                                                    <Link to="single-product.html">
                                                        <img className="primary-img" src="/images/product/large-size/9.jpg" alt="Uren's Product Image" />
                                                        <img className="secondary-img" src="/images/product/large-size/3.jpg" alt="Uren's Product Image" />
                                                    </Link>
                                                    <div className="sticker-area-2">
                                                        <span className="sticker-2">-10%</span>
                                                        <span className="sticker">New</span>
                                                    </div>
                                                    <div className="add-actions">
                                                        <ul>
                                                            <li><Link className="uren-add_cart" to="cart.html" data-toggle="tooltip" data-placement="top" title="Add To Cart"><i
                                                                className="ion-bag"></i></Link>
                                                            </li>
                                                            <li><Link className="uren-wishlist" to="wishlist.html" data-toggle="tooltip" data-placement="top" title="Add To Wishlist"><i
                                                                className="ion-android-favorite-outline"></i></Link>
                                                            </li>
                                                            <li><Link className="uren-add_compare" to="compare.html" data-toggle="tooltip" data-placement="top" title="Compare This Product"><i
                                                                className="ion-android-options"></i></Link>
                                                            </li>
                                                            <li className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><Link to="javascript:void(0)" data-toggle="tooltip" data-placement="top" title="Quick View"><i
                                                                className="ion-android-open"></i></Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="product-content">
                                                    <div className="product-desc_info">
                                                        <div className="rating-box">
                                                            <ul>
                                                                <li><i className="ion-android-star"></i></li>
                                                                <li><i className="ion-android-star"></i></li>
                                                                <li><i className="ion-android-star"></i></li>
                                                                <li className="silver-color"><i className="ion-android-star"></i></li>
                                                                <li className="silver-color"><i className="ion-android-star"></i></li>
                                                            </ul>
                                                        </div>
                                                        <h6><Link className="product-name" to="single-product.html">Assumenda nemo magni
                                                            fugiat</Link></h6>
                                                        <div className="price-box">
                                                            <span className="new-price new-price-2">$158.00</span>
                                                            <span className="old-price">$195.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="list-slide_item">
                                        <div className="single-product">
                                            <div className="product-img">
                                                <Link to="single-product.html">
                                                    <img className="primary-img" src="/images/product/large-size/9.jpg" alt="Uren's Product Image" />
                                                    <img className="secondary-img" src="/images/product/large-size/3.jpg" alt="Uren's Product Image" />
                                                </Link>
                                            </div>
                                            <div className="product-content">
                                                <div className="product-desc_info">
                                                    <div className="rating-box">
                                                        <ul>
                                                            <li><i className="ion-android-star"></i></li>
                                                            <li><i className="ion-android-star"></i></li>
                                                            <li><i className="ion-android-star"></i></li>
                                                            <li className="silver-color"><i className="ion-android-star"></i></li>
                                                            <li className="silver-color"><i className="ion-android-star"></i></li>
                                                        </ul>
                                                    </div>
                                                    <h6><Link className="product-name" to="single-product.html">Assumenda nemo magni
                                                        fugiat</Link></h6>
                                                    <div className="price-box">
                                                        <span className="new-price new-price-2">$158.00</span>
                                                        <span className="old-price">$195.00</span>
                                                    </div>
                                                    <div className="product-short_desc">
                                                        <p>The invention relates to an electromechanical brake booster with an
                                                            electric motor and a helical gearing. The brake booster is used for
                                                            coupling an auxiliary force via a driver into a piston rod. The
                                                            invention proposes connecting a spindle of the helical gearing
                                                            elastically via a spring element to the piston rod such that, in the
                                                            event of rapid actuation of the brake, the helical gearing and a rotor
                                                            of the electric motor do not have to be accelerated entirely muscle
                                                            power. The muscle power required for actuating a brake is reduced as a
                                                            parts in the event of a rapid actuation of the brake.</p>
                                                    </div>
                                                </div>
                                                <div className="add-actions">
                                                    <ul>
                                                        <li><Link className="uren-add_cart" to="cart.html" data-toggle="tooltip" data-placement="top" title="Add To Cart"><i className="ion-bag"></i></Link>
                                                        </li>
                                                        <li><Link className="uren-wishlist" to="wishlist.html" data-toggle="tooltip" data-placement="top" title="Add To Wishlist"><i
                                                            className="ion-android-favorite-outline"></i></Link>
                                                        </li>
                                                        <li><Link className="uren-add_compare" to="compare.html" data-toggle="tooltip" data-placement="top" title="Compare This Product"><i
                                                            className="ion-android-options"></i></Link>
                                                        </li>
                                                        <li className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><Link to="javascript:void(0)" data-toggle="tooltip" data-placement="top" title="Quick View"><i
                                                            className="ion-android-open"></i></Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="product-slide_item">
                                        <div className="inner-slide">
                                            <div className="single-product">
                                                <div className="product-img">
                                                    <Link to="single-product.html">
                                                        <img className="primary-img" src="/images/product/large-size/7.jpg" alt="Uren's Product Image" />
                                                        <img className="secondary-img" src="/images/product/large-size/5.jpg" alt="Uren's Product Image" />
                                                    </Link>
                                                    <div className="sticker">
                                                        <span className="sticker">New</span>
                                                    </div>
                                                    <div className="add-actions">
                                                        <ul>
                                                            <li><Link className="uren-add_cart" to="cart.html" data-toggle="tooltip" data-placement="top" title="Add To Cart"><i
                                                                className="ion-bag"></i></Link>
                                                            </li>
                                                            <li><Link className="uren-wishlist" to="wishlist.html" data-toggle="tooltip" data-placement="top" title="Add To Wishlist"><i
                                                                className="ion-android-favorite-outline"></i></Link>
                                                            </li>
                                                            <li><Link className="uren-add_compare" to="compare.html" data-toggle="tooltip" data-placement="top" title="Compare This Product"><i
                                                                className="ion-android-options"></i></Link>
                                                            </li>
                                                            <li className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><Link to="javascript:void(0)" data-toggle="tooltip" data-placement="top" title="Quick View"><i
                                                                className="ion-android-open"></i></Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="product-content">
                                                    <div className="product-desc_info">
                                                        <div className="rating-box">
                                                            <ul>
                                                                <li><i className="ion-android-star"></i></li>
                                                                <li><i className="ion-android-star"></i></li>
                                                                <li><i className="ion-android-star"></i></li>
                                                                <li className="silver-color"><i className="ion-android-star"></i>
                                                                </li>
                                                                <li className="silver-color"><i className="ion-android-star"></i>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <h6><Link className="product-name" to="single-product.html">Veniam
                                                            officiis voluptates</Link></h6>
                                                        <div className="price-box">
                                                            <span className="new-price">$122.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="list-slide_item">
                                        <div className="single-product">
                                            <div className="product-img">
                                                <Link to="single-product.html">
                                                    <img className="primary-img" src="/images/product/large-size/7.jpg" alt="Uren's Product Image" />
                                                    <img className="secondary-img" src="/images/product/large-size/5.jpg" alt="Uren's Product Image" />
                                                </Link>
                                            </div>
                                            <div className="product-content">
                                                <div className="product-desc_info">
                                                    <div className="rating-box">
                                                        <ul>
                                                            <li><i className="ion-android-star"></i></li>
                                                            <li><i className="ion-android-star"></i></li>
                                                            <li><i className="ion-android-star"></i></li>
                                                            <li className="silver-color"><i className="ion-android-star"></i>
                                                            </li>
                                                            <li className="silver-color"><i className="ion-android-star"></i>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <h6><Link className="product-name" to="single-product.html">Veniam officiis
                                                        voluptates</Link></h6>
                                                    <div className="price-box">
                                                        <span className="new-price">$122.00</span>
                                                    </div>
                                                    <div className="product-short_desc">
                                                        <p>The invention relates to an electromechanical brake booster with an
                                                            electric motor and a helical gearing. The brake booster is used for
                                                            coupling an auxiliary force via a driver into a piston rod. The
                                                            invention proposes connecting a spindle of the helical gearing
                                                            elastically via a spring element to the piston rod such that, in the
                                                            event of rapid actuation of the brake, the helical gearing and a rotor
                                                            of the electric motor do not have to be accelerated entirely muscle
                                                            power. The muscle power required for actuating a brake is reduced as a
                                                            parts in the event of a rapid actuation of the brake.</p>
                                                    </div>
                                                </div>
                                                <div className="add-actions">
                                                    <ul>
                                                        <li><Link className="uren-add_cart" to="cart.html" data-toggle="tooltip" data-placement="top" title="Add To Cart"><i className="ion-bag"></i></Link>
                                                        </li>
                                                        <li><Link className="uren-wishlist" to="wishlist.html" data-toggle="tooltip" data-placement="top" title="Add To Wishlist"><i
                                                            className="ion-android-favorite-outline"></i></Link>
                                                        </li>
                                                        <li><Link className="uren-add_compare" to="compare.html" data-toggle="tooltip" data-placement="top" title="Compare This Product"><i
                                                            className="ion-android-options"></i></Link>
                                                        </li>
                                                        <li className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><Link to="javascript:void(0)" data-toggle="tooltip" data-placement="top" title="Quick View"><i
                                                            className="ion-android-open"></i></Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="product-slide_item">
                                        <div className="inner-slide">
                                            <div className="single-product">
                                                <div className="product-img">
                                                    <Link to="single-product.html">
                                                        <img className="primary-img" src="/images/product/large-size/2.jpg" alt="Uren's Product Image" />
                                                        <img className="secondary-img" src="/images/product/large-size/4.jpg" alt="Uren's Product Image" />
                                                    </Link>
                                                    <div className="sticker-area-2">
                                                        <span className="sticker-2">-20%</span>
                                                        <span className="sticker">New</span>
                                                    </div>
                                                    <div className="add-actions">
                                                        <ul>
                                                            <li><Link className="uren-add_cart" to="cart.html" data-toggle="tooltip" data-placement="top" title="Add To Cart"><i
                                                                className="ion-bag"></i></Link>
                                                            </li>
                                                            <li><Link className="uren-wishlist" to="wishlist.html" data-toggle="tooltip" data-placement="top" title="Add To Wishlist"><i
                                                                className="ion-android-favorite-outline"></i></Link>
                                                            </li>
                                                            <li><Link className="uren-add_compare" to="compare.html" data-toggle="tooltip" data-placement="top" title="Compare This Product"><i
                                                                className="ion-android-options"></i></Link>
                                                            </li>
                                                            <li className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><Link to="javascript:void(0)" data-toggle="tooltip" data-placement="top" title="Quick View"><i
                                                                className="ion-android-open"></i></Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="product-content">
                                                    <div className="product-desc_info">
                                                        <div className="rating-box">
                                                            <ul>
                                                                <li><i className="ion-android-star"></i></li>
                                                                <li><i className="ion-android-star"></i></li>
                                                                <li className="silver-color"><i className="ion-android-star"></i></li>
                                                                <li className="silver-color"><i className="ion-android-star"></i></li>
                                                                <li className="silver-color"><i className="ion-android-star"></i></li>
                                                            </ul>
                                                        </div>
                                                        <h6><Link className="product-name" to="single-product.html">Impedit accusantium
                                                            quidem</Link></h6>
                                                        <div className="price-box">
                                                            <span className="new-price new-price-2">$94.00</span>
                                                            <span className="old-price">$110.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="list-slide_item">
                                        <div className="single-product">
                                            <div className="product-img">
                                                <Link to="single-product.html">
                                                    <img className="primary-img" src="/images/product/large-size/2.jpg" alt="Uren's Product Image" />
                                                    <img className="secondary-img" src="/images/product/large-size/4.jpg" alt="Uren's Product Image" />
                                                </Link>
                                                <div className="sticker-area-2">
                                                    <span className="sticker-2">-20%</span>
                                                    <span className="sticker">New</span>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <div className="product-desc_info">
                                                    <div className="rating-box">
                                                        <ul>
                                                            <li><i className="ion-android-star"></i></li>
                                                            <li><i className="ion-android-star"></i></li>
                                                            <li className="silver-color"><i className="ion-android-star"></i></li>
                                                            <li className="silver-color"><i className="ion-android-star"></i></li>
                                                            <li className="silver-color"><i className="ion-android-star"></i></li>
                                                        </ul>
                                                    </div>
                                                    <h6><Link className="product-name" to="single-product.html">Impedit accusantium
                                                        quidem</Link></h6>
                                                    <div className="price-box">
                                                        <span className="new-price new-price-2">$94.00</span>
                                                        <span className="old-price">$110.00</span>
                                                    </div>
                                                    <div className="product-short_desc">
                                                        <p>The invention relates to an electromechanical brake booster with an
                                                            electric motor and a helical gearing. The brake booster is used for
                                                            coupling an auxiliary force via a driver into a piston rod. The
                                                            invention proposes connecting a spindle of the helical gearing
                                                            elastically via a spring element to the piston rod such that, in the
                                                            event of rapid actuation of the brake, the helical gearing and a rotor
                                                            of the electric motor do not have to be accelerated entirely muscle
                                                            power. The muscle power required for actuating a brake is reduced as a
                                                            parts in the event of a rapid actuation of the brake.</p>
                                                    </div>
                                                </div>
                                                <div className="add-actions">
                                                    <ul>
                                                        <li><Link className="uren-add_cart" to="cart.html" data-toggle="tooltip" data-placement="top" title="Add To Cart"><i className="ion-bag"></i></Link>
                                                        </li>
                                                        <li><Link className="uren-wishlist" to="wishlist.html" data-toggle="tooltip" data-placement="top" title="Add To Wishlist"><i
                                                            className="ion-android-favorite-outline"></i></Link>
                                                        </li>
                                                        <li><Link className="uren-add_compare" to="compare.html" data-toggle="tooltip" data-placement="top" title="Compare This Product"><i
                                                            className="ion-android-options"></i></Link>
                                                        </li>
                                                        <li className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><Link to="javascript:void(0)" data-toggle="tooltip" data-placement="top" title="Quick View"><i
                                                            className="ion-android-open"></i></Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="product-slide_item">
                                        <div className="inner-slide">
                                            <div className="single-product">
                                                <div className="product-img">
                                                    <Link to="single-product.html">
                                                        <img className="primary-img" src="/images/product/large-size/5.jpg" alt="Uren's Product Image" />
                                                        <img className="secondary-img" src="/images/product/large-size/7.jpg" alt="Uren's Product Image" />
                                                    </Link>
                                                    <div className="sticker">
                                                        <span className="sticker">New</span>
                                                    </div>
                                                    <div className="add-actions">
                                                        <ul>
                                                            <li><Link className="uren-add_cart" to="cart.html" data-toggle="tooltip" data-placement="top" title="Add To Cart"><i
                                                                className="ion-bag"></i></Link>
                                                            </li>
                                                            <li><Link className="uren-wishlist" to="wishlist.html" data-toggle="tooltip" data-placement="top" title="Add To Wishlist"><i
                                                                className="ion-android-favorite-outline"></i></Link>
                                                            </li>
                                                            <li><Link className="uren-add_compare" to="compare.html" data-toggle="tooltip" data-placement="top" title="Compare This Product"><i
                                                                className="ion-android-options"></i></Link>
                                                            </li>
                                                            <li className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><Link to="javascript:void(0)" data-toggle="tooltip" data-placement="top" title="Quick View"><i
                                                                className="ion-android-open"></i></Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="product-content">
                                                    <div className="product-desc_info">
                                                        <div className="rating-box">
                                                            <ul>
                                                                <li><i className="ion-android-star"></i></li>
                                                                <li><i className="ion-android-star"></i></li>
                                                                <li><i className="ion-android-star"></i></li>
                                                                <li><i className="ion-android-star"></i></li>
                                                                <li className="silver-color"><i className="ion-android-star"></i></li>
                                                            </ul>
                                                        </div>
                                                        <h6><Link className="product-name" to="single-product.html">Ea quaerat ducimus
                                                            nam ipsa</Link></h6>
                                                        <div className="price-box">
                                                            <span className="new-price">$125.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="list-slide_item">
                                        <div className="single-product">
                                            <div className="product-img">
                                                <Link to="single-product.html">
                                                    <img className="primary-img" src="/images/product/large-size/5.jpg" alt="Uren's Product Image" />
                                                    <img className="secondary-img" src="/images/product/large-size/7.jpg" alt="Uren's Product Image" />
                                                </Link>
                                            </div>
                                            <div className="product-content">
                                                <div className="product-desc_info">
                                                    <div className="rating-box">
                                                        <ul>
                                                            <li><i className="ion-android-star"></i></li>
                                                            <li><i className="ion-android-star"></i></li>
                                                            <li><i className="ion-android-star"></i></li>
                                                            <li><i className="ion-android-star"></i></li>
                                                            <li className="silver-color"><i className="ion-android-star"></i></li>
                                                        </ul>
                                                    </div>
                                                    <h6><Link className="product-name" to="single-product.html">Ea quaerat ducimus nam
                                                        ipsa</Link></h6>
                                                    <div className="price-box">
                                                        <span className="new-price">$125.00</span>
                                                    </div>
                                                    <div className="product-short_desc">
                                                        <p>The invention relates to an electromechanical brake booster with an
                                                            electric motor and a helical gearing. The brake booster is used for
                                                            coupling an auxiliary force via a driver into a piston rod. The
                                                            invention proposes connecting a spindle of the helical gearing
                                                            elastically via a spring element to the piston rod such that, in the
                                                            event of rapid actuation of the brake, the helical gearing and a rotor
                                                            of the electric motor do not have to be accelerated entirely muscle
                                                            power. The muscle power required for actuating a brake is reduced as a
                                                            parts in the event of a rapid actuation of the brake.</p>
                                                    </div>
                                                </div>
                                                <div className="add-actions">
                                                    <ul>
                                                        <li><Link className="uren-add_cart" to="cart.html" data-toggle="tooltip" data-placement="top" title="Add To Cart"><i className="ion-bag"></i></Link>
                                                        </li>
                                                        <li><Link className="uren-wishlist" to="wishlist.html" data-toggle="tooltip" data-placement="top" title="Add To Wishlist"><i
                                                            className="ion-android-favorite-outline"></i></Link>
                                                        </li>
                                                        <li><Link className="uren-add_compare" to="compare.html" data-toggle="tooltip" data-placement="top" title="Compare This Product"><i
                                                            className="ion-android-options"></i></Link>
                                                        </li>
                                                        <li className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><Link to="javascript:void(0)" data-toggle="tooltip" data-placement="top" title="Quick View"><i
                                                            className="ion-android-open"></i></Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="product-slide_item">
                                        <div className="inner-slide">
                                            <div className="single-product">
                                                <div className="product-img">
                                                    <Link to="single-product.html">
                                                        <img className="primary-img" src="/images/product/large-size/4.jpg" alt="Uren's Product Image" />
                                                        <img className="secondary-img" src="/images/product/large-size/6.jpg" alt="Uren's Product Image" />
                                                    </Link>
                                                    <div className="sticker-area-2">
                                                        <span className="sticker-2">-25%</span>
                                                        <span className="sticker">New</span>
                                                    </div>
                                                    <div className="add-actions">
                                                        <ul>
                                                            <li><Link className="uren-add_cart" to="cart.html" data-toggle="tooltip" data-placement="top" title="Add To Cart"><i
                                                                className="ion-bag"></i></Link>
                                                            </li>
                                                            <li><Link className="uren-wishlist" to="wishlist.html" data-toggle="tooltip" data-placement="top" title="Add To Wishlist"><i
                                                                className="ion-android-favorite-outline"></i></Link>
                                                            </li>
                                                            <li><Link className="uren-add_compare" to="compare.html" data-toggle="tooltip" data-placement="top" title="Compare This Product"><i
                                                                className="ion-android-options"></i></Link>
                                                            </li>
                                                            <li className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><Link to="javascript:void(0)" data-toggle="tooltip" data-placement="top" title="Quick View"><i
                                                                className="ion-android-open"></i></Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="product-content">
                                                    <div className="product-desc_info">
                                                        <div className="rating-box">
                                                            <ul>
                                                                <li><i className="ion-android-star"></i></li>
                                                                <li><i className="ion-android-star"></i></li>
                                                                <li className="silver-color"><i className="ion-android-star"></i></li>
                                                                <li className="silver-color"><i className="ion-android-star"></i></li>
                                                                <li className="silver-color"><i className="ion-android-star"></i></li>
                                                            </ul>
                                                        </div>
                                                        <h6><Link className="product-name" to="single-product.html">Minima ab quibusdam
                                                            hic</Link></h6>
                                                        <div className="price-box">
                                                            <span className="new-price new-price-2">$75.00</span>
                                                            <span className="old-price">$85.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="list-slide_item">
                                        <div className="single-product">
                                            <div className="product-img">
                                                <Link to="single-product.html">
                                                    <img className="primary-img" src="/images/product/large-size/4.jpg" alt="Uren's Product Image" />
                                                    <img className="secondary-img" src="/images/product/large-size/6.jpg" alt="Uren's Product Image" />
                                                </Link>
                                                <div className="sticker-area-2">
                                                    <span className="sticker-2">-25%</span>
                                                    <span className="sticker">New</span>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <div className="product-desc_info">
                                                    <div className="rating-box">
                                                        <ul>
                                                            <li><i className="ion-android-star"></i></li>
                                                            <li><i className="ion-android-star"></i></li>
                                                            <li className="silver-color"><i className="ion-android-star"></i></li>
                                                            <li className="silver-color"><i className="ion-android-star"></i></li>
                                                            <li className="silver-color"><i className="ion-android-star"></i></li>
                                                        </ul>
                                                    </div>
                                                    <h6><Link className="product-name" to="single-product.html">Minima ab quibusdam
                                                        hic</Link></h6>
                                                    <div className="price-box">
                                                        <span className="new-price new-price-2">$75.00</span>
                                                        <span className="old-price">$85.00</span>
                                                    </div>
                                                    <div className="product-short_desc">
                                                        <p>The invention relates to an electromechanical brake booster with an
                                                            electric motor and a helical gearing. The brake booster is used for
                                                            coupling an auxiliary force via a driver into a piston rod. The
                                                            invention proposes connecting a spindle of the helical gearing
                                                            elastically via a spring element to the piston rod such that, in the
                                                            event of rapid actuation of the brake, the helical gearing and a
                                                            rotor of the electric motor do not have to be accelerated entirely
                                                            muscle power. The muscle power required for actuating a brake is
                                                            reduced as a parts in the event of a rapid actuation of the brake.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="add-actions">
                                                    <ul>
                                                        <li><Link className="uren-add_cart" to="cart.html" data-toggle="tooltip" data-placement="top" title="Add To Cart"><i className="ion-bag"></i></Link>
                                                        </li>
                                                        <li><Link className="uren-wishlist" to="wishlist.html" data-toggle="tooltip" data-placement="top" title="Add To Wishlist"><i
                                                            className="ion-android-favorite-outline"></i></Link>
                                                        </li>
                                                        <li><Link className="uren-add_compare" to="compare.html" data-toggle="tooltip" data-placement="top" title="Compare This Product"><i
                                                            className="ion-android-options"></i></Link>
                                                        </li>
                                                        <li className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><Link to="javascript:void(0)" data-toggle="tooltip" data-placement="top" title="Quick View"><i
                                                            className="ion-android-open"></i></Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="product-slide_item">
                                        <div className="inner-slide">
                                            <div className="single-product">
                                                <div className="product-img">
                                                    <Link to="single-product.html">
                                                        <img className="primary-img" src="/images/product/large-size/7.jpg" alt="Uren's Product Image" />
                                                        <img className="secondary-img" src="/images/product/large-size/2.jpg" alt="Uren's Product Image" />
                                                    </Link>
                                                    <div className="sticker">
                                                        <span className="sticker">New</span>
                                                    </div>
                                                    <div className="add-actions">
                                                        <ul>
                                                            <li><Link className="uren-add_cart" to="cart.html" data-toggle="tooltip" data-placement="top" title="Add To Cart"><i
                                                                className="ion-bag"></i></Link>
                                                            </li>
                                                            <li><Link className="uren-wishlist" to="wishlist.html" data-toggle="tooltip" data-placement="top" title="Add To Wishlist"><i
                                                                className="ion-android-favorite-outline"></i></Link>
                                                            </li>
                                                            <li><Link className="uren-add_compare" to="compare.html" data-toggle="tooltip" data-placement="top" title="Compare This Product"><i
                                                                className="ion-android-options"></i></Link>
                                                            </li>
                                                            <li className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><Link to="javascript:void(0)" data-toggle="tooltip" data-placement="top" title="Quick View"><i
                                                                className="ion-android-open"></i></Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="product-content">
                                                    <div className="product-desc_info">
                                                        <div className="rating-box">
                                                            <ul>
                                                                <li><i className="ion-android-star"></i></li>
                                                                <li><i className="ion-android-star"></i></li>
                                                                <li><i className="ion-android-star"></i></li>
                                                                <li><i className="ion-android-star"></i></li>
                                                                <li className="silver-color"><i className="ion-android-star"></i></li>
                                                            </ul>
                                                        </div>
                                                        <h6><Link className="product-name" to="single-product.html">Perferendis itaque
                                                            unde</Link></h6>
                                                        <div className="price-box">
                                                            <span className="new-price">$135.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="list-slide_item">
                                        <div className="single-product">
                                            <div className="product-img">
                                                <Link to="single-product.html">
                                                    <img className="primary-img" src="/images/product/large-size/7.jpg" alt="Uren's Product Image" />
                                                    <img className="secondary-img" src="/images/product/large-size/2.jpg" alt="Uren's Product Image" />
                                                </Link>
                                            </div>
                                            <div className="product-content">
                                                <div className="product-desc_info">
                                                    <div className="rating-box">
                                                        <ul>
                                                            <li><i className="ion-android-star"></i></li>
                                                            <li><i className="ion-android-star"></i></li>
                                                            <li><i className="ion-android-star"></i></li>
                                                            <li><i className="ion-android-star"></i></li>
                                                            <li className="silver-color"><i className="ion-android-star"></i></li>
                                                        </ul>
                                                    </div>
                                                    <h6><Link className="product-name" to="single-product.html">Perferendis itaque
                                                        unde</Link></h6>
                                                    <div className="price-box">
                                                        <span className="new-price">$135.00</span>
                                                    </div>
                                                    <div className="product-short_desc">
                                                        <p>The invention relates to an electromechanical brake booster with an
                                                            electric motor and a helical gearing. The brake booster is used for
                                                            coupling an auxiliary force via a driver into a piston rod. The
                                                            invention proposes connecting a spindle of the helical gearing
                                                            elastically via a spring element to the piston rod such that, in the
                                                            event of rapid actuation of the brake, the helical gearing and a rotor
                                                            of the electric motor do not have to be accelerated entirely muscle
                                                            power. The muscle power required for actuating a brake is reduced as a
                                                            parts in the event of a rapid actuation of the brake.</p>
                                                    </div>
                                                </div>
                                                <div className="add-actions">
                                                    <ul>
                                                        <li><Link className="uren-add_cart" to="cart.html" data-toggle="tooltip" data-placement="top" title="Add To Cart"><i className="ion-bag"></i></Link>
                                                        </li>
                                                        <li><Link className="uren-wishlist" to="wishlist.html" data-toggle="tooltip" data-placement="top" title="Add To Wishlist"><i
                                                            className="ion-android-favorite-outline"></i></Link>
                                                        </li>
                                                        <li><Link className="uren-add_compare" to="compare.html" data-toggle="tooltip" data-placement="top" title="Compare This Product"><i
                                                            className="ion-android-options"></i></Link>
                                                        </li>
                                                        <li className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><Link to="javascript:void(0)" data-toggle="tooltip" data-placement="top" title="Quick View"><i
                                                            className="ion-android-open"></i></Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="product-slide_item">
                                        <div className="inner-slide">
                                            <div className="single-product">
                                                <div className="product-img">
                                                    <Link to="single-product.html">
                                                        <img className="primary-img" src="/images/product/large-size/9.jpg" alt="Uren's Product Image" />
                                                        <img className="secondary-img" src="/images/product/large-size/8.jpg" alt="Uren's Product Image" />
                                                    </Link>
                                                    <div className="sticker-area-2">
                                                        <span className="sticker-2">-5%</span>
                                                        <span className="sticker">New</span>
                                                    </div>
                                                    <div className="add-actions">
                                                        <ul>
                                                            <li><Link className="uren-add_cart" to="cart.html" data-toggle="tooltip" data-placement="top" title="Add To Cart"><i
                                                                className="ion-bag"></i></Link>
                                                            </li>
                                                            <li><Link className="uren-wishlist" to="wishlist.html" data-toggle="tooltip" data-placement="top" title="Add To Wishlist"><i
                                                                className="ion-android-favorite-outline"></i></Link>
                                                            </li>
                                                            <li><Link className="uren-add_compare" to="compare.html" data-toggle="tooltip" data-placement="top" title="Compare This Product"><i
                                                                className="ion-android-options"></i></Link>
                                                            </li>
                                                            <li className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><Link to="javascript:void(0)" data-toggle="tooltip" data-placement="top" title="Quick View"><i
                                                                className="ion-android-open"></i></Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="product-content">
                                                    <div className="product-desc_info">
                                                        <div className="rating-box">
                                                            <ul>
                                                                <li><i className="ion-android-star"></i></li>
                                                                <li><i className="ion-android-star"></i></li>
                                                                <li><i className="ion-android-star"></i></li>
                                                                <li className="silver-color"><i className="ion-android-star"></i></li>
                                                                <li className="silver-color"><i className="ion-android-star"></i></li>
                                                            </ul>
                                                        </div>
                                                        <h6><Link className="product-name" to="single-product.html">Odit magni quam
                                                            iure</Link></h6>
                                                        <div className="price-box">
                                                            <span className="new-price new-price-2">$57.00</span>
                                                            <span className="old-price">$85.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="list-slide_item">
                                        <div className="single-product">
                                            <div className="product-img">
                                                <Link to="single-product.html">
                                                    <img className="primary-img" src="/images/product/large-size/9.jpg" alt="Uren's Product Image" />
                                                    <img className="secondary-img" src="/images/product/large-size/8.jpg" alt="Uren's Product Image" />
                                                </Link>
                                                <div className="sticker-area-2">
                                                    <span className="sticker-2">-5%</span>
                                                    <span className="sticker">New</span>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <div className="product-desc_info">
                                                    <div className="rating-box">
                                                        <ul>
                                                            <li><i className="ion-android-star"></i></li>
                                                            <li><i className="ion-android-star"></i></li>
                                                            <li><i className="ion-android-star"></i></li>
                                                            <li className="silver-color"><i className="ion-android-star"></i></li>
                                                            <li className="silver-color"><i className="ion-android-star"></i></li>
                                                        </ul>
                                                    </div>
                                                    <h6><Link className="product-name" to="single-product.html">Odit magni quam iure</Link>
                                                    </h6>
                                                    <div className="price-box">
                                                        <span className="new-price new-price-2">$57.00</span>
                                                        <span className="old-price">$85.00</span>
                                                    </div>
                                                    <div className="product-short_desc">
                                                        <p>The invention relates to an electromechanical brake booster with an
                                                            electric motor and a helical gearing. The brake booster is used for
                                                            coupling an auxiliary force via a driver into a piston rod. The
                                                            invention proposes connecting a spindle of the helical gearing
                                                            elastically via a spring element to the piston rod such that, in the
                                                            event of rapid actuation of the brake, the helical gearing and a
                                                            rotor of the electric motor do not have to be accelerated entirely
                                                            muscle power. The muscle power required for actuating a brake is
                                                            reduced as a parts in the event of a rapid actuation of the brake.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="add-actions">
                                                    <ul>
                                                        <li><Link className="uren-add_cart" to="cart.html" data-toggle="tooltip" data-placement="top" title="Add To Cart"><i className="ion-bag"></i></Link>
                                                        </li>
                                                        <li><Link className="uren-wishlist" to="wishlist.html" data-toggle="tooltip" data-placement="top" title="Add To Wishlist"><i
                                                            className="ion-android-favorite-outline"></i></Link>
                                                        </li>
                                                        <li><Link className="uren-add_compare" to="compare.html" data-toggle="tooltip" data-placement="top" title="Compare This Product"><i
                                                            className="ion-android-options"></i></Link>
                                                        </li>
                                                        <li className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><Link to="javascript:void(0)" data-toggle="tooltip" data-placement="top" title="Quick View"><i
                                                            className="ion-android-open"></i></Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="product-slide_item">
                                        <div className="inner-slide">
                                            <div className="single-product">
                                                <div className="product-img">
                                                    <Link to="single-product.html">
                                                        <img className="primary-img" src="/images/product/large-size/3.jpg" alt="Uren's Product Image" />
                                                        <img className="secondary-img" src="/images/product/large-size/5.jpg" alt="Uren's Product Image" />
                                                    </Link>
                                                    <div className="sticker">
                                                        <span className="sticker">New</span>
                                                    </div>
                                                    <div className="add-actions">
                                                        <ul>
                                                            <li><Link className="uren-add_cart" to="cart.html" data-toggle="tooltip" data-placement="top" title="Add To Cart"><i
                                                                className="ion-bag"></i></Link>
                                                            </li>
                                                            <li><Link className="uren-wishlist" to="wishlist.html" data-toggle="tooltip" data-placement="top" title="Add To Wishlist"><i
                                                                className="ion-android-favorite-outline"></i></Link>
                                                            </li>
                                                            <li><Link className="uren-add_compare" to="compare.html" data-toggle="tooltip" data-placement="top" title="Compare This Product"><i
                                                                className="ion-android-options"></i></Link>
                                                            </li>
                                                            <li className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><Link to="javascript:void(0)" data-toggle="tooltip" data-placement="top" title="Quick View"><i
                                                                className="ion-android-open"></i></Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="product-content">
                                                    <div className="product-desc_info">
                                                        <div className="rating-box">
                                                            <ul>
                                                                <li><i className="ion-android-star"></i></li>
                                                                <li><i className="ion-android-star"></i></li>
                                                                <li><i className="ion-android-star"></i></li>
                                                                <li><i className="ion-android-star"></i></li>
                                                                <li className="silver-color"><i className="ion-android-star"></i></li>
                                                            </ul>
                                                        </div>
                                                        <h6><Link className="product-name" to="single-product.html">Veritatis illum
                                                            commodi sint</Link></h6>
                                                        <div className="price-box">
                                                            <span className="new-price">$155.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="list-slide_item">
                                        <div className="single-product">
                                            <div className="product-img">
                                                <Link to="single-product.html">
                                                    <img className="primary-img" src="/images/product/large-size/3.jpg" alt="Uren's Product Image" />
                                                    <img className="secondary-img" src="/images/product/large-size/5.jpg" alt="Uren's Product Image" />
                                                </Link>
                                            </div>
                                            <div className="product-content">
                                                <div className="product-desc_info">
                                                    <div className="rating-box">
                                                        <ul>
                                                            <li><i className="ion-android-star"></i></li>
                                                            <li><i className="ion-android-star"></i></li>
                                                            <li><i className="ion-android-star"></i></li>
                                                            <li><i className="ion-android-star"></i></li>
                                                            <li className="silver-color"><i className="ion-android-star"></i></li>
                                                        </ul>
                                                    </div>
                                                    <h6><Link className="product-name" to="single-product.html">Veritatis illum commodi
                                                        sint</Link></h6>
                                                    <div className="price-box">
                                                        <span className="new-price">$135.00</span>
                                                    </div>
                                                    <div className="product-short_desc">
                                                        <p>The invention relates to an electromechanical brake booster with an
                                                            electric motor and a helical gearing. The brake booster is used for
                                                            coupling an auxiliary force via a driver into a piston rod. The
                                                            invention proposes connecting a spindle of the helical gearing
                                                            elastically via a spring element to the piston rod such that, in the
                                                            event of rapid actuation of the brake, the helical gearing and a
                                                            rotor of the electric motor do not have to be accelerated entirely
                                                            muscle power. The muscle power required for actuating a brake is
                                                            reduced as a parts in the event of a rapid actuation of the brake.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="add-actions">
                                                    <ul>
                                                        <li><Link className="uren-add_cart" to="cart.html" data-toggle="tooltip" data-placement="top" title="Add To Cart"><i className="ion-bag"></i></Link>
                                                        </li>
                                                        <li><Link className="uren-wishlist" to="wishlist.html" data-toggle="tooltip" data-placement="top" title="Add To Wishlist"><i
                                                            className="ion-android-favorite-outline"></i></Link>
                                                        </li>
                                                        <li><Link className="uren-add_compare" to="compare.html" data-toggle="tooltip" data-placement="top" title="Compare This Product"><i
                                                            className="ion-android-options"></i></Link>
                                                        </li>
                                                        <li className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><Link to="javascript:void(0)" data-toggle="tooltip" data-placement="top" title="Quick View"><i
                                                            className="ion-android-open"></i></Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="uren-paginatoin-area">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <ul className="uren-pagination-box primary-color">
                                                    <li className="active"><Link to="javascript:void(0)">1</Link></li>
                                                    <li><Link to="javascript:void(0)">2</Link></li>
                                                    <li><Link to="javascript:void(0)">3</Link></li>
                                                    <li><Link to="javascript:void(0)">4</Link></li>
                                                    <li><Link to="javascript:void(0)">5</Link></li>
                                                    <li><Link className="Next" to="javascript:void(0)">Next</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Uren's Shop Left Sidebar Area End Here --> */}

        </>
    )
};