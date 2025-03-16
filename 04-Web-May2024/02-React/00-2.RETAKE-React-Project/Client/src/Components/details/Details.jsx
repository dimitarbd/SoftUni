export default function Details() {
    return (
        <>
            {/* <!-- Begin Uren's Breadcrumb Area --> */}
            <div className="breadcrumb-area">
                <div className="container">
                    <div className="breadcrumb-content">
                        <h2>Single Product Type</h2>
                        <ul>
                            <li><a href="index.html">Home</a></li>
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
                                            <img src="/images/product/large-size/1.jpg" alt="Uren's Product Image" />
                                        </div>                                    
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="sp-content">
                                    <div className="sp-heading">
                                        <h5><a href="#">Dolorem odio provident ut nihil</a></h5>
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
                                            <li>Brands <button className="btn-link">Buxton</button></li>
                                            <li>Availability: <button className="btn-link">In Stock</button></li>                                            
                                            <li>Price: <button className="btn-link">400</button></li>
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
                                        <li><a data-toggle="tab" href="#specification"><span>Specification</span></a></li>
                                        <li><a data-toggle="tab" href="#reviews"><span>Reviews (1)</span></a></li>
                                    </ul>
                                </div>
                                <div className="tab-content uren-tab_content">
                                    <div id="description" className="tab-pane active show" role="tabpanel">
                                        <div className="product-description">
                                            <ul>
                                                <li>
                                                    <strong>Ullam aliquam</strong>
                                                    <span>Voluptatum, minus? Optio molestias voluptates aspernatur laborum ratione minima, natus eaque nemo rem quisquam, suscipit architecto saepe. Debitis omnis labore laborum consectetur, quas, esse voluptates minus aliquam modi nesciunt earum! Vero rerum molestiae corporis libero repellat doloremque quae sapiente ratione maiores qui aliquam, sunt obcaecati! Iure nisi doloremque numquam delectus.</span>
                                                </li>
                                                <li>
                                                    <strong>Enim tempore</strong>
                                                    <span>Molestias amet quibusdam eligendi exercitationem alias labore tenetur quaerat veniam similique aspernatur eveniet, suscipit corrupti itaque dolore deleniti nobis, rerum reprehenderit recusandae. Eligendi beatae asperiores nisi distinctio doloribus voluptatibus voluptas repellendus tempore unde velit temporibus atque maiores aliquid deserunt aspernatur amet, soluta fugit magni saepe fugiat vel sunt voluptate vitae</span>
                                                </li>
                                                <li>
                                                    <strong>Laudantium suscipit</strong>
                                                    <span>Odit repudiandae maxime, ducimus necessitatibus error fugiat nihil eum dolorem animi voluptates sunt, rem quod reprehenderit expedita, nostrum sit accusantium ut delectus. Voluptates at ipsam, eligendi labore dignissimos consectetur reprehenderit id error excepturi illo velit ratione nisi nam saepe quod! Reiciendis eos, velit fugiat voluptates accusamus nesciunt dicta ratione mollitia, asperiores error aliquam! Reprehenderit provident, omnis blanditiis fugit, accusamus deserunt illum unde, voluptatum consequuntur illo officiis labore doloremque quidem aperiam! Fuga, expedita? Laboriosam eum, tempore vitae libero voluptate omnis ducimus doloremque hic quibusdam reiciendis ab itaque aperiam maiores laudantium esse, consequuntur quos labore modi quasi recusandae distinctio iusto optio officia tempora.</span>
                                                </li>
                                                <li>
                                                    <strong>Molestiae veritatis officia</strong>
                                                    <span>Illum fuga esse tenetur inventore, in voluptatibus saepe iste quia cupiditate, explicabo blanditiis accusantium ut. Eaque nostrum, quisquam doloribus asperiores tempore autem. Ea perspiciatis vitae reiciendis maxime similique vel, id ratione blanditiis ullam officiis odio sunt nam quos atque accusantium ad! Repellendus, magni aliquid. Iure asperiores veniam eum unde dignissimos reprehenderit ut atque velit, harum labore nam expedita, pariatur excepturi consectetur animi optio mollitia ad a natus eaque aut assumenda inventore dolor obcaecati! Enim ab tempore nulla iusto consequuntur quod sit voluptatibus adipisci earum fuga, explicabo amet, provident, molestiae optio. Ducimus ex necessitatibus assumenda, nisi excepturi ut aspernatur est eius dignissimos pariatur unde ipsum sunt quaerat.</span>
                                                </li>

                                            </ul>
                                        </div>
                                    </div>
                                    <div id="specification" className="tab-pane" role="tabpanel">
                                        <table className="table table-bordered specification-inner_stuff">
                                            <tbody>
                                                <tr>
                                                    <td colSpan="2"><strong>Memory</strong></td>
                                                </tr>
                                            </tbody>
                                            <tbody>
                                                <tr>
                                                    <td>test 1</td>
                                                    <td>8gb</td>
                                                </tr>
                                            </tbody>
                                            <tbody>
                                                <tr>
                                                    <td colSpan="2"><strong>Processor</strong></td>
                                                </tr>
                                            </tbody>
                                            <tbody>
                                                <tr>
                                                    <td>No. of Cores</td>
                                                    <td>1</td>
                                                </tr>
                                            </tbody>
                                        </table>
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