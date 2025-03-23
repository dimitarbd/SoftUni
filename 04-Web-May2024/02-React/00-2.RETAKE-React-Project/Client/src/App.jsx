import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import Home from './Components/home/Home';
import Footer from "./Components/footer/Footer"
import Header from "./Components/header/Header"
import Register from "./Components/register/Register"
import Login from "./Components/login/Login"
import About from "./Components/about/About"
import PartDetails from './Components/part-details/PartDetails';
import PartCatalog from './Components/part-catalog/PartCatalog';
import { AuthContext } from './contexts/AuthContext';


function App() {
    const [authState, setAuthState] = useState({});

    const changeAuthState = (state) => {
        setAuthState(state);
    }

    const contextData = {
        userId: authState._id,
        email: authState.email,
        accessToken: authState.accessToken,
        isAuthenticated: Boolean(authState.email),
        changeAuthState,
    };

    return (
        <AuthContext.Provider value={{ contextData, changeAuthState }}>
            <div className="main-wrapper">

                <Header />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/catalog" element={<PartCatalog />} />
                    <Route path="/catalog/:partId/details" element={<PartDetails />} />
                    <Route path="/about" element={<About />} />
                </Routes>

                <Footer />

            </div>
        </AuthContext.Provider>
    )
}

export default App
