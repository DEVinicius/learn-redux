import { useCallback, useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { api } from '../services/api';
import { addProductToCart } from '../store/modules/cart/actions';
import { IProduct } from '../store/modules/cart/types';

export function Catalog() {
    const dispatch = useDispatch();
    const [catalog, setCatalog] = useState<IProduct[]>([]);

    useEffect(() => {
        async function getProducts() {
            const products = await api.get("/products");

            setCatalog(products.data);
        }

        getProducts()
    }, [])

    const handleAddProductToCart = useCallback((product:IProduct) => {
        dispatch(addProductToCart(product));
    }, [dispatch]);

    return (
        <main>
            <h1>Catalog</h1>

            {
                catalog.map(product => (
                    <article key={product.id}>
                        <strong>{product.title}</strong> {" - "}
                        <span>
                            {
                                Intl.NumberFormat("pt-BR", {
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(product.price)
                            }
                        </span> {" "}
                        <button 
                            type="button"
                            onClick={() => {
                                handleAddProductToCart(product)
                            }}
                        > 
                            COMPRAR
                        </button>
                    </article>
                ))
            }
        </main>
    )
}