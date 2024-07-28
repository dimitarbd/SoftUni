import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import PagePreloader from './components/page-preloader/PagePreloader';
import Home from './components/Home';

function App() {

  return (
    <>
      <PagePreloader />
      <Header />
      <Home />
      <Footer />
    </>
  );
}

export default App;
