import { useState } from 'react'
import Cart from './components/Cart';
import ProductList from './components/ProductList';

function App() {
    const [cart, setCart] = useState([
        {
            name: "Waffle with Berries",
            price: 6.50,
            quantity: 2,
        },
        {
            name: "Vanilla Bean Crème Brûlée",
            price: 7.00,
            quantity: 1,
        },
        {
            name: "Classic Tiramisu",
            price: 5.50,
            quantity: 1,
        },
    ]);

    const cartActions = (function() {

        function addProduct(product) {
            if (cart.find(item => item.name === product.name)) {
                setCart(cart.map(item => {
                    item.name === product.name && ++item.quantity;
                }));
            } else {
                setCart([...cart, product]);
            }
        }

        function removeProduct(product) {
            // Si il ne reste plus qu'une quantité du produit
            // On le retire du panier
            // Sinon
            // On enlève une quantité du produit

            if (cart
                .filter(item => item.name === product.name)
                .quantity === 1) {
                    setCart(cart.filter(item => item.name !== product.name));
                }
            else {
                setCart(cart.map(item => {
                    item.name === product.name && --item.quantity;
                }));
            }
        }

        return {
            add: addProduct,
            remove: removeProduct,
        }
    }());


    return (
        <>
            <ProductList
            cartActions={cartActions}/>
            <Cart
            cartActions={cartActions}/>
        </>
    );
}

export default App
