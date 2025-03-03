import Banner from "./Components/banner/Banner"
import Footer from "./Components/footer/Footer"
import Header from "./Components/header/Header"
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

                <Footer />
            </div>

        </body>

    )
}

export default App
