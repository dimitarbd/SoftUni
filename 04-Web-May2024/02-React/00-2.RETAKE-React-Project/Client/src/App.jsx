import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Footer from "./Components/footer/Footer"
import Header from "./Components/header/Header"
import Product from "./Components/product/Product"
import Shipping from "./Components/shipping/Shipping"
import Slider from "./Components/slider/Slider"
import Register from "./Components/register/Register"
import Login from "./Components/login/Login"
function App() {

    return (
        <>
            <Header />

            <Slider />
            <Shipping />
            <Product /> 

            {/* <Register /> */}
            {/* <Login /> */}

            <Footer />
        </>


    )
}

export default App
