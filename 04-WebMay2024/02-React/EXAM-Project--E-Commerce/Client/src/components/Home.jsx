import BannerBottom from './banner-begin/BannerBegin';
import BlogSection from './blog-section/BlogSection';
import Categories from './categories/Categories';
import Featured from './featured/Featured';
import CategorizedProducts from './latest-product/CategorizedProducts';
import Offer from './offer/Offer';

export default function Home() {
  return (
    <>
      <Offer />
      <Categories />
      <Featured />
      <BannerBottom />
      <CategorizedProducts />
      <BlogSection />
    </>
  );
}

