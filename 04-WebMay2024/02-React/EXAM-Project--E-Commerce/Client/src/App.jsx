import { Routes, Route} from 'react-router-dom';

import Home from './components/Home';
import LoginRegister from './components/login-register/LoginRegister';
import ShopDetails from './components/ShopDetails';
import ShopCatalog from './components/ShopCatalog';
import { useState } from 'react';
import { AuthContext } from './contexts/AuthContext';


function App() {
  const [authState, setAuthstate] = useState({});

  const changeAuthState = (state) => {
    setAuthstate(state);
  };

  const contextData = {
    userId: authState._id,
    email: authState.email,
    accessToken: authState.accessToken,
    isAuthenticated: !!authState.email,
    changeAuthState,
  };

  return (
    <>
    <AuthContext.Provider value={contextData}>
    <Routes>
      <Route path='/' element={ <Home /> }/>
      <Route path='/catalog' element={ <ShopCatalog /> }/>
      <Route path='/details/:productId' element={ <ShopDetails /> }/>
      <Route path='/login' element={ <LoginRegister /> }/>
    </Routes>

    </AuthContext.Provider>     
    </>
  );
}

export default App;
