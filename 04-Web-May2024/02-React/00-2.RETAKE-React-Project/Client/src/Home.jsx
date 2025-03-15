import Slider from "./Components/slider/Slider"
import Shipping from "./Components/shipping/Shipping"
import Product from "./Components/product/Product"

export default function Home() {
    return (
        <>
            <Slider />
            <Product />
            <Shipping />
        </>
    );
}