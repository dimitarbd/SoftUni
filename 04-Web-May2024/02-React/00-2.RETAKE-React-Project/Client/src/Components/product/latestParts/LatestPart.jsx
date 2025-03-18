import { Link } from "react-router-dom";


export default function LatestPart() {
    return (
        <div className="product-slide_item">
            <div className="inner-slide">
                <div className="single-product">
                    <div className="product-img">
                        <a href="single-product.html">
                            <img className="primary-img" src="/images/product/medium-size/1-1.jpg" alt="Uren's Product Image" />
                        </a>
                        <div className="sticker">
                            <span className="sticker">New</span>
                        </div>
                        <div className="add-actions">
                            <ul>
                                <li><a className="uren-add_cart" href="cart.html" data-toggle="tooltip" data-placement="top" title="Add To Cart"><i className="ion-bag"></i></a>
                                </li>
                                <li><a className="uren-wishlist" href="wishlist.html" data-toggle="tooltip" data-placement="top" title="Add To Wishlist"><i className="ion-android-favorite-outline"></i></a>
                                </li>
                                <li><a className="uren-add_compare" href="compare.html" data-toggle="tooltip" data-placement="top" title="Compare This Product"><i
                                    className="ion-android-options"></i></a>
                                </li>
                                <li className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter">
                                    <a href="#" onClick={(e) => e.preventDefault()} data-toggle="tooltip" data-placement="top" title="Quick View">
                                        <i className="ion-android-open"></i>
                                    </a>
                                </li>
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
                            <h6><a className="product-name" href="single-product.html">Veniam officiis voluptates</a></h6>
                            <div className="price-box">
                                <span className="new-price">$122.00</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}