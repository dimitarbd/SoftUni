export default function Slider() {
   return (
    <div className="uren-slider_area uren-slider_area-2">
    <div className="container-fluid">
        <div className="row">
            <div className="col-xl-9 col-lg-8">
                <div className="main-slider slider-navigation_style-2">
                    {/* <!-- Begin Single Slide Area --> */}
                    <div className="single-slide animation-style-01 bg-3">
                        <div className="slider-content">
                            <span>New thinking new possibilities</span>
                            <h3>Car interior</h3>
                            <h4>Starting at <span>$99.00</span></h4>
                            <div className="uren-btn-ps_left slide-btn">
                                <a className="uren-btn" href="shop-left-sidebar.html">Read More</a>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Single Slide Area End Here --> */}
                    {/* <!-- Begin Single Slide Area --> */}
                    <div className="single-slide animation-style-02 bg-4">
                        <div className="slider-content slider-content-2">
                            <span className="primary-text_color">Car, Truck, CUV &amp; SUV Tires</span>
                            <h3>Wheels &amp; Tires</h3>
                            <h4>Sale up to 20% off</h4>
                            <div className="uren-btn-ps_left slide-btn">
                                <a className="uren-btn" href="shop-left-sidebar.html">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-3 col-lg-4">
                <div className="row banner-wrap">
                    <div className="col-lg-12 col-md-6">
                        <div className="slider-banner banner-item img-hover_effect">
                            <a href="shop-left-sidebar.html">
                                <img className="img-full" src="/images/banner/2-1.jpg" alt="Uren's Banner" />
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-6">
                        <div className="slider-banner-2 banner-item img-hover_effect">
                            <a href="shop-left-sidebar.html">
                                <img className="img-full" src="/images/banner/2-2.jpg" alt="Uren's Banner" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
   );
}