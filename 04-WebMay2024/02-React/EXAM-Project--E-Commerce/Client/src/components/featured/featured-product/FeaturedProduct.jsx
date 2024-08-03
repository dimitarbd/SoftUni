import { Link } from 'react-router-dom';

export default function FeaturedProduct({
    _id,
    title,
    imageUrl,
    price
}) {
    return (
        <div className="col-lg-3 col-md-4 col-sm-6 mix fastfood oranges">
            <div className="featured__item">
                <div className="featured__item__pic set-bg" data-setbg={imageUrl}>
                    <img src={imageUrl} />
                    <ul className="featured__item__pic__hover">
                        <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                    </ul>
                </div>
                <div className="featured__item__text">
                    <h6><Link to={`/details/${_id}`}>{title}</Link></h6>
                    <h5>{price}lv.</h5>
                </div>
            </div>
        </div>
    );
}