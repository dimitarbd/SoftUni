import { Routes, Route} from 'react-router-dom';

import Home from './components/Home';
import LoginRegister from './components/login-register/LoginRegister';
import ShopDetails from './components/ShopDetails';
import ShopCatalog from './components/ShopCatalog';


function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={ <Home /> }/>
      <Route path='/catalog' element={ <ShopCatalog /> }/>
      <Route path='/details/:productId' element={ <ShopDetails /> }/>
      <Route path='/login' element={ <LoginRegister /> }/>
    </Routes>
     
    </>
  );
}

export default App;
