import BannerBottom from './components/banner-bottom/BannerBottom';
import BlogSection from './components/blog-section/BlogSection';
import Categories from './components/categories/Categories';
import Featured from './components/featured/Featured';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Offer from './components/offer/Offer';
import PagePreloader from './components/page-preloader/PagePreloader';
import CategorizedProducts from './components/categorized-products/CategorizedProducts';

function App() {

  return (
    <>
      <PagePreloader />
      <Header />
      <Offer />
      <Categories />
      <Featured />
      <BannerBottom />
      <CategorizedProducts />
      <BlogSection />
      <Footer />
    </>
  );
}

export default App;
