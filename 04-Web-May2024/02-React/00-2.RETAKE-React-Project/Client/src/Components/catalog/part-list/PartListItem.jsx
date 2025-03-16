import { Link } from "react-router-dom";

export default function PartListItem() {
    return (
        <div className="col-lg-4">
            <div className="product-slide_item">
                <div className="inner-slide">
                    <div className="single-product">
                        <div className="product-img">
                            <Link to="single-product.html">
                                <img className="primary-img" src="/images/product/large-size/1.jpg" alt="Uren's Product Image" />
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
        </div>
    );
}