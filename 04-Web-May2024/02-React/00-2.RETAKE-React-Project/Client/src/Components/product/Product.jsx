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
            console.log(result);
            setLatestParts(result.reverse().slice(0, 6));
        })();
    }, []);

    useEffect(() => {
        const $slider = $('.uren-slick-slider');

        // Initialize slick slider
        $slider.slick({
            slidesToShow: 6,
            arrows: true,
            prevArrow: '<button class="slick-prev" style="..."><i class="ion-ios-arrow-back"></i></button>',
            nextArrow: '<button class="slick-next" style="..."><i class="ion-ios-arrow-forward"></i></button>',
            responsive: [
                { breakpoint: 1501, settings: { slidesToShow: 4 } },
                { breakpoint: 1200, settings: { slidesToShow: 3 } },
                { breakpoint: 992, settings: { slidesToShow: 2 } },
                { breakpoint: 767, settings: { slidesToShow: 1 } },
                { breakpoint: 480, settings: { slidesToShow: 1 } },
            ],
        });

        // Cleanup function to destroy the slider
        return () => {
            if ($slider.hasClass('slick-initialized')) {
                $slider.slick('unslick');
            }
        };
    }, [latestParts]); // Re-run when `latestParts` changes

    return (
        <div className="uren-product_area">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title_area">
                            <span>Top New On This Week</span>
                            <h3>New Arrivals Products</h3>
                        </div>
                        <div
                            className="product-slider uren-slick-slider slider-navigation_style-1 img-hover-effect_area"
                            data-slick-options='{
                                "slidesToShow": 6,
                                "arrows" : true
                            }'
                            data-slick-responsive='[
                                {"breakpoint":1501, "settings": {"slidesToShow": 4}},
                                {"breakpoint":1200, "settings": {"slidesToShow": 3}},
                                {"breakpoint":992, "settings": {"slidesToShow": 2}},
                                {"breakpoint":767, "settings": {"slidesToShow": 1}},
                                {"breakpoint":480, "settings": {"slidesToShow": 1}}
                            ]'
                        >
                            {latestParts.length > 0 
                                ? latestParts.map(part => <LatestPart key={part._id} {...part} />) 
                                : <p>Loading...</p>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}