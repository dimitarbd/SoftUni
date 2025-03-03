import Banner from "./Components/banner/Banner"
import BannerTwo from "./Components/bannerTwo/BannerTwo"
import BestSellingProduct from "./Components/bestSellingProduct/BestSellingProduct"
import Brand from "./Components/brand/Brand"
import FeaturedCategories from "./Components/featuredCategories/FeaturedCategories"
import Footer from "./Components/footer/Footer"
import Header from "./Components/header/Header"
import Product from "./Components/product/Product"
import Shipping from "./Components/shipping/Shipping"
import Slider from "./Components/slider/Slider"
import SpecialProduct from "./Components/specialProduct/SpecialProduct"

function App() {

    return (
        <body class="template-color-1">

            <div class="main-wrapper">
                <Header />

                <Slider />
                <Shipping />
                <SpecialProduct />
                <Banner />
                <Product />
                <BannerTwo />
                <BestSellingProduct />
                <FeaturedCategories />
                <Brand />

                <Footer />
            </div>

        </body>

    )
}

export default App
