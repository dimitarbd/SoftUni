
import { useEffect, useState } from 'react';

import productsAPI from '../../api/product-api';

export function useGetAllProducts() {
    // eslint-disable-next-line no-unused-vars
    const [products, setProducts] = useState([]);

    useEffect(() => {
        (async () =>{
            const result = await productsAPI.getAll();

            setProducts(result);
        })();
    }, []);

    return [products, setProducts];
}