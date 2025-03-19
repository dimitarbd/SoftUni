import { Link } from "react-router-dom";

// import PropTypes from "prop-types";

// LatestPart.propTypes = {
//     _id: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//     price: PropTypes.number.isRequired,
//     imageUrl: PropTypes.string,
//     rating: PropTypes.number.isRequired,
// };

// LatestPart.defaultProps = {
//     imageUrl: "/path/to/default-image.jpg",
// };


export default function LatestPart({
    _id,
    title,
    price,
    imageUrl,
    rating
}) {
    const renderRating = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <li key={i} className={i <= rating ? "" : "silver-color"}>
                    <i className="ion-android-star"></i>
                </li>
            );
        }
        return stars;
    };

    return (
        <div className="product-slide_item">
            <div className="inner-slide">
                <div className="single-product">
                    <div className="product-img">
                        <Link to={`/catalog/${_id}/details`} className="hover-effect">
                            <img
                                className="primary-img"
                                src={imageUrl}
                                alt="Uren's Product Image"
                            />
                        </Link>
                        {/* <div className="add-actions">
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
                        </div> */}
                    </div>
                    <div className="product-content">
                        <div className="product-desc_info">
                            <div className="rating-box">
                                <ul>
                                    {renderRating(rating)}
                                </ul>
                            </div>
                            <h6><Link className="product-name" to={`/catalog/${_id}/details`}>{title}</Link></h6>
                            <div className="price-box">
                                <span className="new-price">${Number(price).toFixed(2)}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}