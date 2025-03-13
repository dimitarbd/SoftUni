import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Routes, Route } from 'react-router-dom';

import Footer from "./Components/footer/Footer"
import Header from "./Components/header/Header"
import Register from "./Components/register/Register"
import Login from "./Components/login/Login"
import Home from "./Home"
function App() {

    return (
        <div className="main-wrapper">

            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
            </Routes>


            <Footer />

        </div>


    )
}

export default App
