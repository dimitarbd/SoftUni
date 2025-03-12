import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Banner from "./Components/OLD/banner/Banner"
import BannerTwo from "./Components/OLD/bannerTwo/BannerTwo"
import BestSellingProduct from "./Components/OLD/bestSellingProduct/BestSellingProduct"
import Blog from "./Components/OLD/blog/Blog"
import Brand from "./Components/OLD/brand/Brand"
import FeaturedCategories from "./Components/OLD/featuredCategories/FeaturedCategories"
import Footer from "./Components/footer/Footer"
import Header from "./Components/header/Header"
import Modal from "./Components/OLD/modal/Modal"
import Product from "./Components/product/Product"
import Shipping from "./Components/shipping/Shipping"
import Slider from "./Components/slider/Slider"
import SpecialProduct from "./Components/OLD/specialProduct/SpecialProduct"

function App() {

    return (
        <>
            <Header />

            <Slider />
            <Shipping />
            <Product />

            <Footer />
        </>


    )
}

export default App
