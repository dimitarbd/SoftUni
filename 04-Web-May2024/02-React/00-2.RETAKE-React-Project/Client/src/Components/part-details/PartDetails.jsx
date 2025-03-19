import { useEffect } from "react";
import { useState } from "react";

import { Link } from "react-router-dom";

import partsAPI from "../../api/parts-api";
import { useParams } from "react-router";


export default function PartDetails() {
    const [part, setPart] = useState({});
    const { partId } = useParams();

    useEffect(() => {
        (async () => {
            const result = await partsAPI.getOne(partId);

            console.log(result);


            setPart(result);
        })();
    }, []);
    return (
        <>
            {/* <!-- Begin Uren's Breadcrumb Area --> */}
            <div className="breadcrumb-area">
                <div className="container">
                    <div className="breadcrumb-content">
                        <h2>Single Product Type</h2>
                        <ul>
                            <li><Link href="/">Home</Link></li>
                            <li className="active">Single Product</li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* <!-- Uren's Breadcrumb Area End Here --> */}

            {/* <!-- Begin Uren's Single Product Area --> */}
            <div className="sp-area">
                <div className="container-fluid">
                    <div className="sp-nav">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="sp-img_area">
                                    <div className="sp-img_slider slick-img-slider uren-slick-slider" data-slick-options='{
                                "slidesToShow": 1,
                                "arrows": false,
                                "fade": true,
                                "draggable": false,
                                "swipe": false,
                                "asNavFor": ".sp-img_slider-nav"
                                }'>
                                        <div className="single-slide red zoom">
                                            <img src={part.imageUrl} alt="Uren's Product Image" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="sp-content">
                                    <div className="sp-heading">
                                        <h5><a href="#">{part.title}</a></h5>
                                    </div>
                                    <div className="rating-box">
                                        <ul>
                                            <li><i className="ion-android-star"></i></li>
                                            <li><i className="ion-android-star"></i></li>
                                            <li><i className="ion-android-star"></i></li>
                                            <li className="silver-color"><i className="ion-android-star"></i></li>
                                            <li className="silver-color"><i className="ion-android-star"></i></li>
                                        </ul>
                                    </div>
                                    <div className="sp-essential_stuff">
                                        <ul>
                                            <li>Brands <button className="btn-link">{part.brand}</button></li>
                                            <li>Availability: <button className="btn-link">{part.quantity} pieces</button></li>
                                            <li>Price: <button className="btn-link">${part.price}</button></li>
                                        </ul>
                                    </div>
                                    <div className="product-size_box">
                                        <span>Size</span>
                                        <select className="myniceselect nice-select">
                                            <option defaultValue="1">S</option>
                                            <option defaultValue="2">M</option>
                                            <option defaultValue="3">L</option>
                                            <option defaultValue="4">XL</option>
                                        </select>
                                    </div>
                                    <div className="quantity">
                                        <label>Quantity</label>
                                        <div className="cart-plus-minus">
                                            <input className="cart-plus-minus-box" defaultValue="1" type="text" />
                                            <div className="dec qtybutton"><i className="fa fa-angle-down"></i></div>
                                            <div className="inc qtybutton"><i className="fa fa-angle-up"></i></div>
                                        </div>
                                    </div>
                                    <div className="qty-btn_area">
                                        <ul>
                                            <li><a className="qty-cart_btn" href="cart.html">Add To Cart</a></li>
                                            <li><a className="qty-wishlist_btn" href="wishlist.html" data-toggle="tooltip" title="Add To Wishlist"><i className="ion-android-favorite-outline"></i></a>
                                            </li>
                                            <li><a className="qty-compare_btn" href="compare.html" data-toggle="tooltip" title="Compare This Product"><i className="ion-ios-shuffle-strong"></i></a></li>
                                        </ul>
                                    </div>
                                    <div className="uren-tag-line">
                                        <h6>Tags:</h6>
                                        <a href="#" onClick={(e) => e.preventDefault()}>vehicle</a>,
                                        <a href="#" onClick={(e) => e.preventDefault()}>car</a>,
                                        <a href="#" onClick={(e) => e.preventDefault()}>bike</a>
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
                                            <li className="youtube">
                                                <a href="https://www.youtube.com/" data-toggle="tooltip" target="_blank" title="Youtube">
                                                    <i className="fab fa-youtube"></i>
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
                        </div>
                    </div>
                </div>
            </div>
            {/* Uren's Single Product Area End Here */}

            {/* Begin Uren's Single Product Tab Area */}
            <div className="sp-product-tab_area">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="sp-product-tab_nav">
                                <div className="product-tab">
                                    <ul className="nav product-menu">
                                        <li><a className="active" data-toggle="tab" href="#description"><span>Description</span></a>
                                        </li>
                                        <li><a data-toggle="tab" href="#reviews"><span>Reviews (1)</span></a></li>
                                    </ul>
                                </div>
                                <div className="tab-content uren-tab_content">
                                    <div id="description" className="tab-pane active show" role="tabpanel">
                                        <div className="product-description">
                                            <span>{part.description}</span>
                                        </div>
                                    </div>
                                    <div id="reviews" className="tab-pane" role="tabpanel">
                                        <div className="tab-pane active" id="tab-review">
                                            <form className="form-horizontal" id="form-review">
                                                <div id="review">
                                                    <table className="table table-striped table-bordered">
                                                        <tbody>
                                                            <tr>
                                                                <td style={{ width: '50%' }}><strong>Customer</strong></td>
                                                                <td className="text-right">15/09/20</td>
                                                            </tr>
                                                            <tr>
                                                                <td colSpan="2">
                                                                    <p>Good product! Thank you very much</p>
                                                                    <div className="rating-box">
                                                                        <ul>
                                                                            <li><i className="ion-android-star"></i></li>
                                                                            <li><i className="ion-android-star"></i></li>
                                                                            <li><i className="ion-android-star"></i></li>
                                                                            <li><i className="ion-android-star"></i></li>
                                                                            <li><i className="ion-android-star"></i></li>
                                                                        </ul>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <h2>Write a review</h2>
                                                <div className="form-group required">
                                                    <div className="col-sm-12 p-0">
                                                        <label>Your Email <span className="required">*</span></label>
                                                        <input className="review-input" type="email" name="con_email" id="con_email" required />
                                                    </div>
                                                </div>
                                                <div className="form-group required second-child">
                                                    <div className="col-sm-12 p-0">
                                                        <label className="control-label">Share your opinion</label>
                                                        <textarea className="review-textarea" name="con_message" id="con_message"></textarea>
                                                        <div className="help-block"><span className="text-danger">Note:</span> HTML is not
                                                            translated!</div>
                                                    </div>
                                                </div>
                                                <div className="form-group last-child required">
                                                    <div className="col-sm-12 p-0">
                                                        <div className="your-opinion">
                                                            <label>Your Rating</label>
                                                            <span>
                                                                <select className="star-rating">
                                                                    <option defaultValue="1">1</option>
                                                                    <option defaultValue="2">2</option>
                                                                    <option defaultValue="3">3</option>
                                                                    <option defaultValue="4">4</option>
                                                                    <option defaultValue="5">5</option>
                                                                </select>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="uren-btn-ps_right">
                                                        <button className="uren-btn-2">Continue</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Uren's Single Product Tab Area End Here --> */}

        </>
    );
}
