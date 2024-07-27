import CategoryProduct from './category-product/CategoryProduct';

export default function Categories() {
    return (
        <section className="categories">
            <div className="container">
                <div className="row">
                    <div className="categories__slider owl-carousel">
                        <CategoryProduct />
                        <CategoryProduct />
                        <CategoryProduct />
                        <CategoryProduct />
                    </div>
                </div>
            </div>
        </section>
    );
}