import { useEffect, useState } from 'react';
import $ from 'jquery';
import 'slick-carousel';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import partsAPI from '../../api/parts-api';
import LatestPart from './latestParts/LatestPart';

export default function Product() {
    const [latestParts, setLatestParts] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await partsAPI.getAll();
            setLatestParts(result.reverse().slice(0, 3));
        })();
    }, []);

    useEffect(() => {
        // Initialize slick slider
        $('.uren-slick-slider').each(function () {
            let $this = $(this);
            let $slickOptions = $this.data('slick-options');
            let $slickResponsive = $this.data('slick-responsive');

            if ($slickOptions) {
                $this.slick({
                    ...$slickOptions,
                    responsive: $slickResponsive,
                    prevArrow: '<button class="slick-prev" style="width: 50px; height: 50px; display: flex; align-items: center; justify-content: flex-end; padding-right: 17px;"><i class="ion-ios-arrow-back" style="font-size: 40px;"></i></button>',
                    nextArrow: '<button class="slick-next" style="width: 50px; height: 50px; display: flex; align-items: center; justify-content: flex-start; padding-left: 0px;"><i class="ion-ios-arrow-forward" style="font-size: 40px;"></i></button>'
                });
            }
        });
    }, []);

    return (
        <div className="uren-product_area">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title_area">
                            <span>Top New On This Week</span>
                            <h3>New Arrivals Products</h3>
                        </div>
                        <div className="product-slider uren-slick-slider slider-navigation_style-1 img-hover-effect_area" data-slick-options='{
                "slidesToShow": 6,
                "arrows" : true
                }' data-slick-responsive='[
                                        {"breakpoint":1501, "settings": {"slidesToShow": 4}},
                                        {"breakpoint":1200, "settings": {"slidesToShow": 3}},
                                        {"breakpoint":992, "settings": {"slidesToShow": 2}},
                                        {"breakpoint":767, "settings": {"slidesToShow": 1}},
                                        {"breakpoint":480, "settings": {"slidesToShow": 1}}
                                    ]'>
                            {latestParts.length > 0 
                            ? latestParts.map(x => <LatestPart key={x._id} {...x} />) 
                            : <p>Loading...</p>
                            }                   
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}