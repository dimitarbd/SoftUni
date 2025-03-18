import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Routes, Route } from 'react-router-dom';

import Footer from "./Components/footer/Footer"
import Header from "./Components/header/Header"
import Register from "./Components/register/Register"
import Login from "./Components/login/Login"
import Home from "./Home"
import About from "./Components/about/About"
import PartDetails from './Components/part-details/PartDetails';
import PartCatalog from './Components/part-catalog/PartCatalog';


function App() {

    return (
        <div className="main-wrapper">

            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/catalog" element={<PartCatalog />} />
                <Route path="/catalog/:partId/details" element={<PartDetails />} />
                <Route path="/about" element={<About />} />
                <Route path="/my-account" element={<My-Account />} />
            </Routes>


            <Footer />

        </div>


    )
}

export default App
