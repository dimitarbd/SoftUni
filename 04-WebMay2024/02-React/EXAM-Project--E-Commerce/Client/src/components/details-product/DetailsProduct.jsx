import { useEffect, useState } from 'react';

import DetailsProductPic from './details-product-pic/DetailsProductPic';
import productsAPI from '../../../api/product-api';
import { useParams } from 'react-router-dom';

export default function DetailsProduct() {
    const [product, setProduct] = useState({});
    const { productId } = useParams();

    console.log(productId);


    useEffect((productId) => {
        (async () => {
            const result = await productsAPI.getOne(productId);

            setProduct(result);
        })();
    }, []);

    return (
        <section className="product-details spad">
            <div className="container">
                <div className="row">
                    <div className="col-lProductcol-md-6">
                        <div className="product__details__pic">
                            <div className="product__details__pic__item">
                                <img className="product__details__pic__item--large"
                                    src={product.imageUrl} alt="" />

                            </div>
                            <div className="product__details__pic__slider owl-carousel">
                                <DetailsProductPic />
                                <DetailsProductPic />
                                <DetailsProductPic />
                                <DetailsProductPic />
                            </div>
                        </div>
                    </div>
                    <div className="col-lProductcol-md-6">
                        <div className="product__details__text">
                            <h3>{product.title}</h3>
                            <div className="product__details__price">{product.price}</div>
                            <p>{product.description}</p>
                            <div className="product__details__quantity">
                                <div className="quantity">
                                    <div className="pro-qty">
                                        {/* <input type="text" value="1" /> */}
                                    </div>
                                </div>
                            </div>
                            <a href="#" className="primary-btn">ADD TO CARD</a>
                            <ul>
                                <li><b>Quantity</b> <span>{product.quantity}</span></li>
                                <li><b>Shipping</b> <span>{product.shipping} day shipping. <samp>Free pickup today</samp></span></li>
                                <li><b>Weight</b> <span>{product.weigth}</span></li>
                                <li><b>Share on</b>
                                    <div className="share">
                                        <a href="https://www.facebook.com/"><i className="fa fa-facebook"></i></a>
                                        <a href="https://www.linkedin.com/"><i className="fa fa-linkedin"></i></a>
                                        <a href="https://www.pinterest.com/"><i className="fa fa-pinterest-p"></i></a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lProduct">
                        <div className="product__details__tab">
                            <ul className="nav nav-tabs" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" data-toggle="tab" href="#tabs-1" role="tab"
                                        aria-selected="true">Description</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="tab" href="#tabs-2" role="tab"
                                        aria-selected="false">Information</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="tab" href="#tabs-3" role="tab"
                                        aria-selected="false">Reviews <span>(1)</span></a>
                                </li>
                            </ul>
                            <div className="tab-content">
                                <div className="tab-pane active" id="tabs-1" role="tabpanel">
                                    <div className="product__details__tab__desc">
                                        <h6>Products Infomation</h6>
                                        <p>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
                                            Pellentesque in ipsum id orci porta dapibus. Proin eProducttortor risus. Vivamus
                                            suscipit tortor eProductfelis porttitor volutpat. Vestibulum ac diam sit amet quam
                                            vehicula elementum sed sit amet dui. Donec rutrum conProductleo eProductmalesuada.
                                            Vivamus suscipit tortor eProductfelis porttitor volutpat. Curabitur arcu erat,
                                            accumsan id imperdiet et, porttitor at sem. Praesent sapien massa, convallis a
                                            pellentesque nec, eProductas non nisi. Vestibulum ac diam sit amet quam vehicula
                                            elementum sed sit amet dui. Vestibulum ante ipsum primis in faucibus orci luctus
                                            et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam
                                            vel, ullamcorper sit amet liProduct. Proin eProducttortor risus.</p>
                                        <p>Praesent sapien massa, convallis a pellentesque nec, eProductas non nisi. Lorem
                                            ipsum dolor sit amet, consectetur adipiscinProductit. Mauris blandit aliquet
                                            elit, eProducttincidunt nibh pulvinar a. Cras ultricies liProduct sed maProductdictum
                                            porta. Cras ultricies liProduct sed maProductdictum porta. Sed porttitor lectus
                                            nibh. Mauris blandit aliquet elit, eProducttincidunt nibh pulvinar a.
                                            Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Sed
                                            porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum
                                            sed sit amet dui. Proin eProducttortor risus.</p>
                                    </div>
                                </div>
                                <div className="tab-pane" id="tabs-2" role="tabpanel">
                                    <div className="product__details__tab__desc">
                                        <h6>Products Infomation</h6>
                                        <p>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
                                            Pellentesque in ipsum id orci porta dapibus. Proin eProducttortor risus.
                                            Vivamus suscipit tortor eProductfelis porttitor volutpat. Vestibulum ac diam
                                            sit amet quam vehicula elementum sed sit amet dui. Donec rutrum conProductleo
                                            eProductmalesuada. Vivamus suscipit tortor eProductfelis porttitor volutpat.
                                            Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Praesent
                                            sapien massa, convallis a pellentesque nec, eProductas non nisi. Vestibulum ac
                                            diam sit amet quam vehicula elementum sed sit amet dui. Vestibulum ante
                                            ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
                                            Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet liProduct.
                                            Proin eProducttortor risus.</p>
                                        <p>Praesent sapien massa, convallis a pellentesque nec, eProductas non nisi. Lorem
                                            ipsum dolor sit amet, consectetur adipiscinProductit. Mauris blandit aliquet
                                            elit, eProducttincidunt nibh pulvinar a. Cras ultricies liProduct sed maProductdictum
                                            porta. Cras ultricies liProduct sed maProductdictum porta. Sed porttitor lectus
                                            nibh. Mauris blandit aliquet elit, eProducttincidunt nibh pulvinar a.</p>
                                    </div>
                                </div>
                                <div className="tab-pane" id="tabs-3" role="tabpanel">
                                    <div className="product__details__tab__desc">
                                        <h6>Products Infomation</h6>
                                        <p>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
                                            Pellentesque in ipsum id orci porta dapibus. Proin eProducttortor risus.
                                            Vivamus suscipit tortor eProductfelis porttitor volutpat. Vestibulum ac diam
                                            sit amet quam vehicula elementum sed sit amet dui. Donec rutrum conProductleo
                                            eProductmalesuada. Vivamus suscipit tortor eProductfelis porttitor volutpat.
                                            Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Praesent
                                            sapien massa, convallis a pellentesque nec, eProductas non nisi. Vestibulum ac
                                            diam sit amet quam vehicula elementum sed sit amet dui. Vestibulum ante
                                            ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
                                            Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet liProduct.
                                            Proin eProducttortor risus.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        </section >
    );
}