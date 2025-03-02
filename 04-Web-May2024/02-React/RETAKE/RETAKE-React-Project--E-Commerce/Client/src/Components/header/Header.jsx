export default function Header() {
   return (
    <header className="header-main_area header-main_area-2 bg--black">
    <div className="header-middle_area">
        <div className="container-fluid">
            <div className="row">
                <div className="col-xl-3 col-lg-2 col-md-3 col-sm-5">
                    <div className="header-logo_area">
                        <a href="index.html">
                            <img src="/images/menu/logo/1.png" alt="Uren's Logo">
                        </a>
                    </div>
                </div>
                <div className="col-xl-5 col-lg-6 d-none d-lg-block">
                    <div className="hm-form_area">
                        <form action="#" className="hm-searchbox">
                            <select className="nice-select select-search-category">
                                <option value="0">All Categories</option>
                                <option value="10">Laptops</option>
                                <option value="17">Prime Video</option>
                                <option value="20">All Videos</option>
                                <option value="21">Blouses</option>
                                <option value="22">Evening Dresses</option>
                                <option value="23">Summer Dresses</option>
                                <option value="24">T-shirts</option>
                                <option value="25">Rent or Buy</option>
                                <option value="26">Your Watchlist</option>
                                <option value="27">Watch Anywhere</option>
                                <option value="28">Getting Started</option>
                                <option value="18">Computers</option>
                                <option value="29">More to Explore</option>
                                <option value="30">TV &amp; Video</option>
                                <option value="31">Audio &amp; Theater</option>
                                <option value="32">Camera, Photo </option>
                                <option value="33">Cell Phones</option>
                                <option value="34">Headphones</option>
                                <option value="35">Video Games</option>
                                <option value="36">Wireless Speakers</option>
                                <option value="19">Electronics</option>
                                <option value="37">Amazon Home</option>
                                <option value="38">Kitchen &amp; Dining</option>
                                <option value="39">Furniture</option>
                                <option value="40">Bed &amp; Bath</option>
                                <option value="41">Appliances</option>
                                <option value="11">TV &amp; Audio</option>
                                <option value="42">Chamcham</option>
                                <option value="45">Office</option>
                                <option value="47">Gaming</option>
                                <option value="48">Chromebook</option>
                                <option value="49">Refurbished</option>
                                <option value="50">Touchscreen</option>
                                <option value="51">Ultrabooks</option>
                                <option value="52">Blouses</option>
                                <option value="43">Sanai</option>
                                <option value="53">Hard Drives</option>
                                <option value="54">Graphic Cards</option>
                                <option value="55">Processors (CPU)</option>
                                <option value="56">Memory</option>
                                <option value="57">Motherboards</option>
                                <option value="58">Fans &amp; Cooling</option>
                                <option value="59">CD/DVD Drives</option>
                                <option value="44">Meito</option>
                                <option value="60">Sound Cards</option>
                                <option value="61">Cases &amp; Towers</option>
                                <option value="62">Casual Dresses</option>
                                <option value="63">Evening Dresses</option>
                                <option value="64">T-shirts</option>
                                <option value="65">Tops</option>
                                <option value="12">Smartphone</option>
                                <option value="66">Camera Accessories</option>
                                <option value="68">Octa Core</option>
                                <option value="69">Quad Core</option>
                                <option value="70">Dual Core</option>
                                <option value="71">7.0 Screen</option>
                                <option value="72">9.0 Screen</option>
                                <option value="73">Bags &amp; Cases</option>
                                <option value="67">XailStation</option>
                                <option value="74">Batteries</option>
                                <option value="75">Microphones</option>
                                <option value="76">Stabilizers</option>
                                <option value="77">Video Tapes</option>
                                <option value="78">Memory Card Readers</option>
                                <option value="79">Tripods</option>
                                <option value="13">Cameras</option>
                                <option value="14">headphone</option>
                                <option value="15">Smartwatch</option>
                                <option value="16">Accessories</option>
                            </select>
                            <input type="text" placeholder="Enter your search key ...">
                            <button className="header-search_btn" type="submit"><i
                                className="ion-ios-search-strong"><span>Search</span></i></button>
                        </form>
                    </div>
                </div>
                <div className="col-lg-4 col-md-9 col-sm-7">
                    <div className="header-right_area">
                        <ul>
                            <li className="mobile-menu_wrap d-flex d-lg-none">
                                <a href="#mobileMenu" className="mobile-menu_btn toolbar-btn color--white">
                                    <i className="ion-navicon"></i>
                                </a>
                            </li>
                            <li className="minicart-wrap">
                                <a href="#miniCart" className="minicart-btn toolbar-btn">
                                    <div className="minicart-count_area">
                                        <span className="item-count">3</span>
                                        <i className="ion-bag"></i>
                                    </div>
                                    <div className="minicart-front_text">
                                        <span>Cart:</span>
                                        <span className="total-price">462.4</span>
                                    </div>
                                </a>
                            </li>
                            <li className="contact-us_wrap">
                                <a href="tel://+123123321345"><i className="ion-android-call"></i>+123 321 345</a>
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
                    <div className="category-menu category-menu-hidden">
                        <div className="category-heading">
                            <h2 className="categories-toggle">
                                <span>Shop By</span>
                                <span>Department</span>
                            </h2>
                        </div>
                        <div id="cate-toggle" className="category-menu-list">
                            <ul>
                                <li className="right-menu"><a href="shop-left-sidebar.html">Car Parts</a>
                                    <ul className="cat-mega-menu">
                                        <li className="right-menu cat-mega-title">
                                            <a href="shop-left-sidebar.html">Active body control</a>
                                            <ul>
                                                <li><a href="shop-left-sidebar.html">Aluminum Nonstick</a></li>
                                                <li><a href="shop-left-sidebar.html">Calphalon</a></li>
                                                <li><a href="shop-left-sidebar.html">Contemporary</a></li>
                                                <li><a href="shop-left-sidebar.html">Hard-Anodized</a></li>
                                            </ul>
                                        </li>
                                        <li className="right-menu cat-mega-title">
                                            <a href="shop-left-sidebar.html">Battery Indicator</a>
                                            <ul>
                                                <li><a href="shop-left-sidebar.html">Sanai laptops</a></li>
                                                <li><a href="shop-left-sidebar.html">Byteflight</a></li>
                                                <li><a href="shop-left-sidebar.html">EXcaliberPC</a></li>
                                                <li><a href="shop-left-sidebar.html">Gaming Laptops</a></li>
                                            </ul>
                                        </li>
                                        <li className="right-menu cat-mega-title">
                                            <a href="shop-left-sidebar.html">Remote Starter</a>
                                            <ul>
                                                <li><a href="shop-left-sidebar.html">Dual Core</a></li>
                                                <li><a href="shop-left-sidebar.html">Gaming Monitors</a></li>
                                                <li><a href="shop-left-sidebar.html">GPS Monitors</a></li>
                                                <li><a href="shop-left-sidebar.html">Heat Shield</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li className="right-menu"><a href="shop-left-sidebar.html">Tools &amp;
                                        Accessories</a>
                                    <ul className="cat-mega-menu cat-mega-menu-2">
                                        <li className="right-menu cat-mega-title">
                                            <a href="shop-left-sidebar.html">Drills</a>
                                            <ul>
                                                <li><a href="shop-left-sidebar.html">Angle Drills</a></li>
                                                <li><a href="shop-left-sidebar.html">Combi Drills</a></li>
                                                <li><a href="shop-left-sidebar.html">Drill Drivers</a></li>
                                                <li><a href="shop-left-sidebar.html">PercussionDrills</a></li>
                                            </ul>
                                        </li>
                                        <li className="right-menu cat-mega-title">
                                            <a href="shop-left-sidebar.html">Nail Guns</a>
                                            <ul>
                                                <li><a href="shop-left-sidebar.html">Air Nail Guns</a></li>
                                                <li><a href="shop-left-sidebar.html">Cordless Nail Guns</a></li>
                                                <li><a href="shop-left-sidebar.html">Electric Nail Guns</a></li>
                                                <li><a href="shop-left-sidebar.html">Gas Nail Guns</a></li>
                                            </ul>
                                        </li>
                                        <li className="right-menu cat-mega-title">
                                            <a href="shop-left-sidebar.html">Sanders</a>
                                            <ul>
                                                <li><a href="shop-left-sidebar.html">1/2 Sheet Sanders</a></li>
                                                <li><a href="shop-left-sidebar.html">1/4 Sheet Sanders</a></li>
                                                <li><a href="shop-left-sidebar.html">Belt Sanders</a></li>
                                                <li><a href="shop-left-sidebar.html">Drywall Sanders</a></li>
                                            </ul>
                                        </li>
                                        <li className="right-menu cat-mega-title">
                                            <a href="shop-left-sidebar.html">Saws</a>
                                            <ul>
                                                <li><a href="shop-left-sidebar.html">Circular Saws</a></li>
                                                <li><a href="shop-left-sidebar.html">Jigsaws</a></li>
                                                <li><a href="shop-left-sidebar.html">Mitre Saws</a></li>
                                                <li><a href="shop-left-sidebar.html">Reciprocating Saws</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li className="right-menu"><a href="shop-left-sidebar.html">Suspension Systems</a>
                                    <ul className="cat-mega-menu cat-mega-menu-3">
                                        <li className="right-menu cat-mega-title">
                                            <a href="shop-left-sidebar.html">Clothing</a>
                                            <ul>
                                                <li><a href="shop-left-sidebar.html">Cuisinart</a></li>
                                                <li><a href="shop-left-sidebar.html">Homeinart</a></li>
                                                <li><a href="shop-left-sidebar.html">Kettle Stainless</a></li>
                                                <li><a href="shop-left-sidebar.html">Steel Stovetop</a></li>
                                            </ul>
                                        </li>
                                        <li className="right-menu cat-mega-title">
                                            <a href="shop-left-sidebar.html">Jewelry</a>
                                            <ul>
                                                <li><a href="shop-left-sidebar.html">Hard Anodized</a></li>
                                                <li><a href="shop-left-sidebar.html">Scratch Resistant</a></li>
                                                <li><a href="shop-left-sidebar.html">Thermo-Spot</a></li>
                                                <li><a href="shop-left-sidebar.html">Ultimate</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li className="right-menu"><a href="shop-left-sidebar.html">Turbo System</a>
                                    <ul className="cat-mega-menu">
                                        <li className="right-menu cat-mega-title">
                                            <a href="shop-left-sidebar.html">BMW</a>
                                            <ul>
                                                <li><a href="shop-left-sidebar.html">Dining Chairs</a></li>
                                                <li><a href="shop-left-sidebar.html">Dining Tables</a></li>
                                                <li><a href="shop-left-sidebar.html">Gramophone</a></li>
                                                <li><a href="shop-left-sidebar.html">Sideboards</a></li>
                                            </ul>
                                        </li>
                                        <li className="right-menu cat-mega-title">
                                            <a href="shop-left-sidebar.html">FORD</a>
                                            <ul>
                                                <li><a href="shop-left-sidebar.html">Chairs & Sofas</a></li>
                                                <li><a href="shop-left-sidebar.html">Chest</a></li>
                                                <li><a href="shop-left-sidebar.html">Loungers</a></li>
                                                <li><a href="shop-left-sidebar.html">Sets</a></li>
                                            </ul>
                                        </li>
                                        <li className="right-menu cat-mega-title">
                                            <a href="shop-left-sidebar.html">POSCHER</a>
                                            <ul>
                                                <li><a href="shop-left-sidebar.html">Bed</a></li>
                                                <li><a href="shop-left-sidebar.html">Daybed</a></li>
                                                <li><a href="shop-left-sidebar.html">Futon</a></li>
                                                <li><a href="shop-left-sidebar.html">Hammock</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li className="right-menu"><a href="shop-left-sidebar.html">Oils & Fluids</a>
                                    <ul className="cat-dropdown">
                                        <li>
                                            <a href="shop-left-sidebar.html">Daylesford</a>
                                            <a href="shop-left-sidebar.html">Delaware</a>
                                            <a href="shop-left-sidebar.html">Fayence</a>
                                            <a href="shop-left-sidebar.html">Franzea</a>
                                            <a href="shop-left-sidebar.html">Mable</a>
                                            <a href="shop-left-sidebar.html">Mobo</a>
                                            <a href="shop-left-sidebar.html">Pippins</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="right-menu"><a href="shop-left-sidebar.html">Exterior</a>
                                    <ul className="cat-dropdown cat-dropdown-2">
                                        <li>
                                            <a href="shop-left-sidebar.html">Coffee & side tables</a>
                                            <a href="shop-left-sidebar.html">Living room lighting</a>
                                            <a href="shop-left-sidebar.html">Living room storage</a>
                                            <a href="shop-left-sidebar.html">Living room textiles & rugs</a>
                                        </li>
                                    </ul>
                                </li>
                                <li><a href="shop-left-sidebar.html">Body Parts</a></li>
                                <li><a href="shop-left-sidebar.html">Interior</a></li>
                                <li><a href="shop-left-sidebar.html">Audio</a></li>
                                <li><a href="shop-left-sidebar.html">End Tables</a></li>
                                <li className="rx-child"><a href="shop-left-sidebar.html">Uncategorized</a></li>
                                <li className="rx-child"><a href="shop-left-sidebar.html">Appliances</a></li>
                                <li className="rx-parent">
                                    <a className="rx-default">More Categories</a>
                                    <a className="rx-show">Collapse</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="custom-menu_col col-12 d-none d-lg-block">
                    <div className="main-menu_area position-relative">
                        <nav className="main-nav">
                            <ul>
                                <li className="dropdown-holder active"><a href="index.html">Home</a>
                                    <ul className="hm-dropdown">
                                        <li><a href="index.html">Home One</a></li>
                                        <li><a href="index-2.html">Home Two</a></li>
                                        <li><a href="index-3.html">Home Three</a></li>
                                    </ul>
                                </li>
                                <li className="megamenu-holder "><a href="shop-left-sidebar.html">Shop <i
                                        className="ion-ios-arrow-down"></i></a>
                                    <ul className="hm-megamenu">
                                        <li><span className="megamenu-title">Shop Page Layout</span>
                                            <ul>
                                                <li><a href="shop-grid-fullwidth.html">Grid Fullwidth</a></li>
                                                <li><a href="shop-left-sidebar.html">Left Sidebar</a></li>
                                                <li><a href="shop-right-sidebar.html">Right Sidebar</a></li>
                                                <li><a href="shop-list-fullwidth.html">List Fullwidth</a></li>
                                                <li><a href="shop-list-left-sidebar.html">List Left Sidebar</a>
                                                </li>
                                                <li><a href="shop-list-right-sidebar.html">List Right
                                                        Sidebar</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li><span className="megamenu-title">Single Product Style</span>
                                            <ul>
                                                <li><a href="single-product-gallery-left.html">Gallery Left</a>
                                                </li>
                                                <li><a href="single-product-gallery-right.html">Gallery
                                                        Right</a>
                                                </li>
                                                <li><a href="single-product-tab-style-left.html">Tab Style
                                                        Left</a>
                                                </li>
                                                <li><a href="single-product-tab-style-right.html">Tab Style
                                                        Right</a>
                                                </li>
                                                <li><a href="single-product-sticky-left.html">Sticky Left</a>
                                                </li>
                                                <li><a href="single-product-sticky-right.html">Sticky Right</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li><span className="megamenu-title">Single Product Type</span>
                                            <ul>
                                                <li><a href="single-product.html">Single Product</a></li>
                                                <li><a href="single-product-sale.html">Single Product Sale</a>
                                                </li>
                                                <li><a href="single-product-group.html">Single Product Group</a>
                                                </li>
                                                <li><a href="single-product-variable.html">Single Product
                                                        Variable</a>
                                                </li>
                                                <li><a href="single-product-affiliate.html">Single Product
                                                        Affiliate</a>
                                                </li>
                                                <li><a href="single-product-slider.html">Single Product
                                                        Slider</a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li><a href="javascript:void(0)">Specials</a></li>
                                <li className=""><a href="javascript:void(0)">Pages <i
                                        className="ion-ios-arrow-down"></i></a>
                                    <ul className="hm-dropdown">
                                        <li><a href="my-account.html">My Account</a></li>
                                        <li><a href="login-register.html">Login | Register</a></li>
                                        <li><a href="wishlist.html">Wishlist</a></li>
                                        <li><a href="cart.html">Cart</a></li>
                                        <li><a href="checkout.html">Checkout</a></li>
                                        <li><a href="compare.html">Compare</a></li>
                                        <li><a href="faq.html">FAQ</a></li>
                                        <li><a href="404.html">404 Error</a></li>
                                    </ul>
                                </li>
                                <li className=""><a href="about-us.html">About Us</a></li>
                                <li className=""><a href="contact.html">Contact</a></li>
                                <li className=""><a href="blog-left-sidebar.html">Blog <i
                                        className="ion-ios-arrow-down"></i></a>
                                    <ul className="hm-dropdown">
                                        <li><a href="blog-left-sidebar.html">Grid View</a>
                                            <ul className="hm-dropdown hm-sub_dropdown">
                                                <li><a href="blog-2-column.html">Column Two</a></li>
                                                <li><a href="blog-3-column.html">Column Three</a></li>
                                                <li><a href="blog-left-sidebar.html">Left Sidebar</a></li>
                                                <li><a href="blog-right-sidebar.html">Right Sidebar</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="blog-list-left-sidebar.html">List View</a>
                                            <ul className="hm-dropdown hm-sub_dropdown">
                                                <li><a href="blog-list-fullwidth.html">List Fullwidth</a></li>
                                                <li><a href="blog-list-left-sidebar.html">List Left Sidebar</a>
                                                </li>
                                                <li><a href="blog-list-right-sidebar.html">List Right
                                                        Sidebar</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li><a href="blog-details-left-sidebar.html">Blog Details</a>
                                            <ul className="hm-dropdown hm-sub_dropdown">
                                                <li><a href="blog-details-left-sidebar.html">Left Sidebar</a>
                                                </li>
                                                <li><a href="blog-details-right-sidebar.html">Right Sidebar</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li><a href="blog-gallery-format.html">Blog Format</a>
                                            <ul className="hm-dropdown hm-sub_dropdown">
                                                <li><a href="blog-gallery-format.html">Gallery Format</a></li>
                                                <li><a href="blog-audio-format.html">Audio Format</a></li>
                                                <li><a href="blog-video-format.html">Video Format</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className="custom-setting_col col-12 d-none d-lg-block">
                    <div className="ht-right_area">
                        <div className="ht-menu">
                            <ul>
                                <li><a href="javascript:void(0)"><span>$</span> <span>Currency</span><i className="fa fa-chevron-down"></i></a>
                                    <ul className="ht-dropdown ht-currency">
                                        <li><a href="javascript:void(0)">€ EUR</a></li>
                                        <li className="active"><a href="javascript:void(0)">£ Pound Sterling</a></li>
                                        <li><a href="javascript:void(0)">$ Us Dollar</a></li>
                                    </ul>
                                </li>
                                <li><a href="javascript:void(0)"><span><img src="/images/menu/icon/1.jpg" alt=""></span> <span>Language</span> <i className="fa fa-chevron-down"></i></a>
                                    <ul className="ht-dropdown">
                                        <li className="active"><a href="javascript:void(0)"><img src="/images/menu/icon/1.jpg" alt="JB's Language Icon">English</a></li>
                                        <li><a href="javascript:void(0)"><img src="/images/menu/icon/2.jpg" alt="JB's Language Icon">Français</a>
                                        </li>
                                    </ul>
                                </li>
                                <li><a href="my-account.html"><span className="fa fa-user"></span> <span>My Account</span><i className="fa fa-chevron-down"></i></a>
                                    <ul className="ht-dropdown ht-my_account">
                                        <li><a href="javascript:void(0)">Register</a></li>
                                        <li className="active"><a href="javascript:void(0)">Login</a></li>
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
                                <option value="0">All Categories</option>
                                <option value="10">Laptops</option>
                                <option value="17">Prime Video</option>
                                <option value="20">All Videos</option>
                                <option value="21">Blouses</option>
                                <option value="22">Evening Dresses</option>
                                <option value="23">Summer Dresses</option>
                                <option value="24">T-shirts</option>
                                <option value="25">Rent or Buy</option>
                                <option value="26">Your Watchlist</option>
                                <option value="27">Watch Anywhere</option>
                                <option value="28">Getting Started</option>
                                <option value="18">Computers</option>
                                <option value="29">More to Explore</option>
                                <option value="30">TV &amp; Video</option>
                                <option value="31">Audio &amp; Theater</option>
                                <option value="32">Camera, Photo </option>
                                <option value="33">Cell Phones</option>
                                <option value="34">Headphones</option>
                                <option value="35">Video Games</option>
                                <option value="36">Wireless Speakers</option>
                                <option value="19">Electronics</option>
                                <option value="37">Amazon Home</option>
                                <option value="38">Kitchen &amp; Dining</option>
                                <option value="39">Furniture</option>
                                <option value="40">Bed &amp; Bath</option>
                                <option value="41">Appliances</option>
                                <option value="11">TV &amp; Audio</option>
                                <option value="42">Chamcham</option>
                                <option value="45">Office</option>
                                <option value="47">Gaming</option>
                                <option value="48">Chromebook</option>
                                <option value="49">Refurbished</option>
                                <option value="50">Touchscreen</option>
                                <option value="51">Ultrabooks</option>
                                <option value="52">Blouses</option>
                                <option value="43">Sanai</option>
                                <option value="53">Hard Drives</option>
                                <option value="54">Graphic Cards</option>
                                <option value="55">Processors (CPU)</option>
                                <option value="56">Memory</option>
                                <option value="57">Motherboards</option>
                                <option value="58">Fans &amp; Cooling</option>
                                <option value="59">CD/DVD Drives</option>
                                <option value="44">Meito</option>
                                <option value="60">Sound Cards</option>
                                <option value="61">Cases &amp; Towers</option>
                                <option value="62">Casual Dresses</option>
                                <option value="63">Evening Dresses</option>
                                <option value="64">T-shirts</option>
                                <option value="65">Tops</option>
                                <option value="12">Smartphone</option>
                                <option value="66">Camera Accessories</option>
                                <option value="68">Octa Core</option>
                                <option value="69">Quad Core</option>
                                <option value="70">Dual Core</option>
                                <option value="71">7.0 Screen</option>
                                <option value="72">9.0 Screen</option>
                                <option value="73">Bags &amp; Cases</option>
                                <option value="67">XailStation</option>
                                <option value="74">Batteries</option>
                                <option value="75">Microphones</option>
                                <option value="76">Stabilizers</option>
                                <option value="77">Video Tapes</option>
                                <option value="78">Memory Card Readers</option>
                                <option value="79">Tripods</option>
                                <option value="13">Cameras</option>
                                <option value="14">headphone</option>
                                <option value="15">Smartwatch</option>
                                <option value="16">Accessories</option>
                            </select>
                            <input type="text" placeholder="Enter your search key ...">
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
                                <li className="dropdown-holder active"><a href="index.html">Home</a>
                                    <ul className="hm-dropdown">
                                        <li><a href="index.html">Home One</a></li>
                                        <li><a href="index-2.html">Home Two</a></li>
                                        <li><a href="index-3.html">Home Three</a></li>
                                    </ul>
                                </li>
                                <li className="megamenu-holder "><a href="shop-left-sidebar.html">Shop
                                        <i className="ion-ios-arrow-down"></i></a>
                                    <ul className="hm-megamenu">
                                        <li><span className="megamenu-title">Shop Page Layout</span>
                                            <ul>
                                                <li><a href="shop-grid-fullwidth.html">Grid Fullwidth</a></li>
                                                <li><a href="shop-left-sidebar.html">Left Sidebar</a></li>
                                                <li><a href="shop-right-sidebar.html">Right Sidebar</a></li>
                                                <li><a href="shop-list-fullwidth.html">List Fullwidth</a></li>
                                                <li><a href="shop-list-left-sidebar.html">List Left Sidebar</a>
                                                </li>
                                                <li><a href="shop-list-right-sidebar.html">List Right
                                                        Sidebar</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li><span className="megamenu-title">Single Product Style</span>
                                            <ul>
                                                <li><a href="single-product-gallery-left.html">Gallery Left</a>
                                                </li>
                                                <li><a href="single-product-gallery-right.html">Gallery
                                                        Right</a>
                                                </li>
                                                <li><a href="single-product-tab-style-left.html">Tab Style
                                                        Left</a>
                                                </li>
                                                <li><a href="single-product-tab-style-right.html">Tab Style
                                                        Right</a>
                                                </li>
                                                <li><a href="single-product-sticky-left.html">Sticky Left</a>
                                                </li>
                                                <li><a href="single-product-sticky-right.html">Sticky Right</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li><span className="megamenu-title">Single Product Type</span>
                                            <ul>
                                                <li><a href="single-product.html">Single Product</a></li>
                                                <li><a href="single-product-sale.html">Single Product Sale</a>
                                                </li>
                                                <li><a href="single-product-group.html">Single Product Group</a>
                                                </li>
                                                <li><a href="single-product-variable.html">Single Product
                                                        Variable</a>
                                                </li>
                                                <li><a href="single-product-affiliate.html">Single Product
                                                        Affiliate</a>
                                                </li>
                                                <li><a href="single-product-slider.html">Single Product
                                                        Slider</a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li><a href="javascript:void(0)">Specials</a></li>
                                <li className=""><a href="javascript:void(0)">Pages <i
                                        className="ion-ios-arrow-down"></i></a>
                                    <ul className="hm-dropdown">
                                        <li><a href="my-account.html">My Account</a></li>
                                        <li><a href="login-register.html">Login | Register</a></li>
                                        <li><a href="wishlist.html">Wishlist</a></li>
                                        <li><a href="cart.html">Cart</a></li>
                                        <li><a href="checkout.html">Checkout</a></li>
                                        <li><a href="compare.html">Compare</a></li>
                                        <li><a href="faq.html">FAQ</a></li>
                                        <li><a href="404.html">404 Error</a></li>
                                    </ul>
                                </li>
                                <li className=""><a href="about-us.html">About Us</a></li>
                                <li className=""><a href="contact.html">Contact</a></li>
                                <li className=""><a href="blog-left-sidebar.html">Blog <i
                                        className="ion-ios-arrow-down"></i></a>
                                    <ul className="hm-dropdown">
                                        <li><a href="blog-left-sidebar.html">Grid View</a>
                                            <ul className="hm-dropdown hm-sub_dropdown">
                                                <li><a href="blog-2-column.html">Column Two</a></li>
                                                <li><a href="blog-3-column.html">Column Three</a></li>
                                                <li><a href="blog-left-sidebar.html">Left Sidebar</a></li>
                                                <li><a href="blog-right-sidebar.html">Right Sidebar</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="blog-list-left-sidebar.html">List View</a>
                                            <ul className="hm-dropdown hm-sub_dropdown">
                                                <li><a href="blog-list-fullwidth.html">List Fullwidth</a></li>
                                                <li><a href="blog-list-left-sidebar.html">List Left Sidebar</a>
                                                </li>
                                                <li><a href="blog-list-right-sidebar.html">List Right
                                                        Sidebar</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li><a href="blog-details-left-sidebar.html">Blog Details</a>
                                            <ul className="hm-dropdown hm-sub_dropdown">
                                                <li><a href="blog-details-left-sidebar.html">Left Sidebar</a>
                                                </li>
                                                <li><a href="blog-details-right-sidebar.html">Right Sidebar</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li><a href="blog-gallery-format.html">Blog Format</a>
                                            <ul className="hm-dropdown hm-sub_dropdown">
                                                <li><a href="blog-gallery-format.html">Gallery Format</a></li>
                                                <li><a href="blog-audio-format.html">Audio Format</a></li>
                                                <li><a href="blog-video-format.html">Video Format</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className="col-sm-3 d-block d-lg-none">
                    <div className="header-logo_area header-sticky_logo">
                        <a href="index.html">
                            <img src="/images/menu/logo/1.png" alt="Uren's Logo">
                        </a>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-5 col-sm-9">
                    <div className="header-right_area">
                        <ul>
                            <li className="mobile-menu_wrap d-flex d-lg-none">
                                <a href="#mobileMenu" className="mobile-menu_btn toolbar-btn color--white">
                                    <i className="ion-navicon"></i>
                                </a>
                            </li>
                            <li className="minicart-wrap">
                                <a href="#miniCart" className="minicart-btn toolbar-btn">
                                    <div className="minicart-count_area">
                                        <span className="item-count">3</span>
                                        <i className="ion-bag"></i>
                                    </div>
                                    <div className="minicart-front_text">
                                        <span>Cart:</span>
                                        <span className="total-price">462.4</span>
                                    </div>
                                </a>
                            </li>
                            <li className="contact-us_wrap">
                                <a href="tel://+123123321345"><i className="ion-android-call"></i>+123 321 345</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="offcanvas-minicart_wrapper" id="miniCart">
        <div className="offcanvas-menu-inner">
            <a href="#" className="btn-close"><i className="ion-android-close"></i></a>
            <div className="minicart-content">
                <div className="minicart-heading">
                    <h4>Shopping Cart</h4>
                </div>
                <ul className="minicart-list">
                    <li className="minicart-product">
                        <a className="product-item_remove" href="javascript:void(0)"><i
                            className="ion-android-close"></i></a>
                        <div className="product-item_img">
                            <img src="/images/product/small-size/1.jpg" alt="Uren's Product Image">
                        </div>
                        <div className="product-item_content">
                            <a className="product-item_title" href="shop-left-sidebar.html">Autem ipsa ad</a>
                            <span className="product-item_quantity">1 x $145.80</span>
                        </div>
                    </li>
                    <li className="minicart-product">
                        <a className="product-item_remove" href="javascript:void(0)"><i
                            className="ion-android-close"></i></a>
                        <div className="product-item_img">
                            <img src="/images/product/small-size/2.jpg" alt="Uren's Product Image">
                        </div>
                        <div className="product-item_content">
                            <a className="product-item_title" href="shop-left-sidebar.html">Tenetur illum amet</a>
                            <span className="product-item_quantity">1 x $150.80</span>
                        </div>
                    </li>
                    <li className="minicart-product">
                        <a className="product-item_remove" href="javascript:void(0)"><i
                            className="ion-android-close"></i></a>
                        <div className="product-item_img">
                            <img src="/images/product/small-size/3.jpg" alt="Uren's Product Image">
                        </div>
                        <div className="product-item_content">
                            <a className="product-item_title" href="shop-left-sidebar.html">Non doloremque placeat</a>
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
                <a href="cart.html" className="uren-btn uren-btn_dark uren-btn_fullwidth">Minicart</a>
            </div>
            <div className="minicart-btn_area">
                <a href="checkout.html" className="uren-btn uren-btn_dark uren-btn_fullwidth">Checkout</a>
            </div>
        </div>
    </div>
    <div className="mobile-menu_wrapper" id="mobileMenu">
        <div className="offcanvas-menu-inner">
            <div className="container">
                <a href="#" className="btn-close"><i className="ion-android-close"></i></a>
                <div className="offcanvas-inner_search">
                    <form action="#" className="inner-searchbox">
                        <input type="text" placeholder="Search for item..." />
                        <button className="search_btn" type="submit"><i className="ion-ios-search-strong"></i></button>
                    </form>
                </div>
                <nav className="offcanvas-navigation">
                    <ul className="mobile-menu">
                        <li className="menu-item-has-children active"><a href="index.html"><span
                                className="mm-text">Home</span></a>
                            <ul className="sub-menu">
                                <li>
                                    <a href="index.html">
                                        <span className="mm-text">Home One</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="index-2.html">
                                        <span className="mm-text">Home Two</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="index-3.html">
                                        <span className="mm-text">Home Three</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="menu-item-has-children">
                            <a href="shop-left-sidebar.html">
                                <span className="mm-text">Shop</span>
                            </a>
                            <ul className="sub-menu">
                                <li className="menu-item-has-children">
                                    <a href="shop-left-sidebar.html">
                                        <span className="mm-text">Grid View</span>
                                    </a>
                                    <ul className="sub-menu">
                                        <li>
                                            <a href="shop-grid-fullwidth.html">
                                                <span className="mm-text">Column Three</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="shop-4-column.html">
                                                <span className="mm-text">Column Four</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="shop-left-sidebar.html">
                                                <span className="mm-text">Left Sidebar</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="shop-right-sidebar.html">
                                                <span className="mm-text">Right Sidebar</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="menu-item-has-children">
                                    <a href="shop-list-left-sidebar.html">
                                        <span className="mm-text">Shop List</span>
                                    </a>
                                    <ul className="sub-menu">
                                        <li>
                                            <a href="shop-list-fullwidth.html">
                                                <span className="mm-text">Full Width</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="shop-list-left-sidebar.html">
                                                <span className="mm-text">Left Sidebar</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="shop-list-right-sidebar.html">
                                                <span className="mm-text">Right Sidebar</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="menu-item-has-children">
                                    <a href="single-product-gallery-left.html">
                                        <span className="mm-text">Single Product Style</span>
                                    </a>
                                    <ul className="sub-menu">
                                        <li>
                                            <a href="single-product-gallery-left.html">
                                                <span className="mm-text">Gallery Left</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="single-product-gallery-right.html">
                                                <span className="mm-text">Gallery Right</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="single-product-tab-style-left.html">
                                                <span className="mm-text">Tab Style Left</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="single-product-tab-style-right.html">
                                                <span className="mm-text">Tab Style Right</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="single-product-sticky-left.html">
                                                <span className="mm-text">Sticky Left</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="single-product-sticky-right.html">
                                                <span className="mm-text">Sticky Right</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="menu-item-has-children">
                                    <a href="single-product.html">
                                        <span className="mm-text">Single Product Type</span>
                                    </a>
                                    <ul className="sub-menu">
                                        <li>
                                            <a href="single-product.html">
                                                <span className="mm-text">Single Product</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="single-product-sale.html">
                                                <span className="mm-text">Single Product Sale</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="single-product-group.html">
                                                <span className="mm-text">Single Product Group</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="single-product-variable.html">
                                                <span className="mm-text">Single Product Variable</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="single-product-affiliate.html">
                                                <span className="mm-text">Single Product Affiliate</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="single-product-slider.html">
                                                <span className="mm-text">Single Product Slider</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className="menu-item-has-children">
                            <a href="blog-left-sidebar.html">
                                <span className="mm-text">Blog</span>
                            </a>
                            <ul className="sub-menu">
                                <li className="menu-item-has-children has-children">
                                    <a href="blog-left-sidebar.html">
                                        <span className="mm-text">Grid View</span>
                                    </a>
                                    <ul className="sub-menu">
                                        <li>
                                            <a href="blog-2-column.html">
                                                <span className="mm-text">Column Two</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="blog-3-column.html">
                                                <span className="mm-text">Column Three</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="blog-left-sidebar.html">
                                                <span className="mm-text">Left Sidebar</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="blog-right-sidebar.html">
                                                <span className="mm-text">Right Sidebar</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="menu-item-has-children has-children">
                                    <a href="blog-list-left-sidebar.html">
                                        <span className="mm-text">List View</span>
                                    </a>
                                    <ul className="sub-menu">
                                        <li>
                                            <a href="blog-list-fullwidth.html">
                                                <span className="mm-text">List Fullwidth</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="blog-list-left-sidebar.html">
                                                <span className="mm-text">List Left Sidebar</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="blog-list-right-sidebar.html">
                                                <span className="mm-text">List Right Sidebar</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="menu-item-has-children has-children">
                                    <a href="blog-details-left-sidebar.html">
                                        <span className="mm-text">Blog Details</span>
                                    </a>
                                    <ul className="sub-menu">
                                        <li>
                                            <a href="blog-details-left-sidebar.html">
                                                <span className="mm-text">Left Sidebar</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="blog-details-right-sidebar.html">
                                                <span className="mm-text">Right Sidebar</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="menu-item-has-children has-children">
                                    <a href="blog-gallery-format.html">
                                        <span className="mm-text">Blog Format</span>
                                    </a>
                                    <ul className="sub-menu">
                                        <li>
                                            <a href="blog-gallery-format.html">
                                                <span className="mm-text">Gallery Format</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="blog-audio-format.html">
                                                <span className="mm-text">Audio Format</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="blog-video-format.html">
                                                <span className="mm-text">Video Format</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className="menu-item-has-children">
                            <a href="index.html">
                                <span className="mm-text">Pages</span>
                            </a>
                            <ul className="sub-menu">
                                <li>
                                    <a href="my-account.html">
                                        <span className="mm-text">My Account</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="login-register.html">
                                        <span className="mm-text">Login | Register</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="wishlist.html">
                                        <span className="mm-text">Wishlist</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="cart.html">
                                        <span className="mm-text">Cart</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="checkout.html">
                                        <span className="mm-text">Checkout</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="compare.html">
                                        <span className="mm-text">Compare</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="faq.html">
                                        <span className="mm-text">FAQ</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="404.html">
                                        <span className="mm-text">Error 404</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
                <nav className="offcanvas-navigation user-setting_area">
                    <ul className="mobile-menu">
                        <li className="menu-item-has-children active"><a href="javascript:void(0)"><span
                                className="mm-text">User
                                Setting</span></a>
                            <ul className="sub-menu">
                                <li>
                                    <a href="my-account.html">
                                        <span className="mm-text">My Account</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="login-register.html">
                                        <span className="mm-text">Login | Register</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="menu-item-has-children"><a href="javascript:void(0)"><span
                                className="mm-text">Currency</span></a>
                            <ul className="sub-menu">
                                <li>
                                    <a href="javascript:void(0)">
                                        <span className="mm-text">EUR €</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)">
                                        <span className="mm-text">USD $</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="menu-item-has-children"><a href="javascript:void(0)"><span
                                className="mm-text">Language</span></a>
                            <ul className="sub-menu">
                                <li>
                                    <a href="javascript:void(0)">
                                        <span className="mm-text">English</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)">
                                        <span className="mm-text">Français</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)">
                                        <span className="mm-text">Romanian</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)">
                                        <span className="mm-text">Japanese</span>
                                    </a>
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