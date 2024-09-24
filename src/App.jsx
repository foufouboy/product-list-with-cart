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
            if (getProduct(product)) {
                setCart(cart.map(item => {
                    item.name === product.name && ++item.quantity;
                    return item;
                }));
            } else {
                const newProduct = {
                    name: product.name,
                    price: product.price,
                    quantity: 1,
                };

                setCart([...cart, newProduct]);
            }

            logState();
        }

        function removeProduct(product) {
            if (getProduct(product).quantity <= 1) {
                    setCart(cart.filter(item => item.name !== product.name));
                }
            else {
                setCart(cart.map(item => {
                    item.name === product.name && --item.quantity;
                    return item;
                }));
            }

            logState();
        }

        function getProduct(product) {
            return cart.find(item => item.name === product.name);
        }

        function logState() {
            console.log(cart);
        }

        return {
            add: addProduct,
            remove: removeProduct,
            get: getProduct,
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
