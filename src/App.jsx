import { useState } from 'react'
import Cart from './components/Cart';
import ProductList from './components/ProductList';
import ConfirmModal from './components/ConfirmModal';

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
    const [modalOpen, setModalOpen] = useState(false);

    const modalSwitch = () => {
        setModalOpen(!modalOpen);
    }
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

        function removeAllOfProduct(product) {
            setCart(cart.filter(item => item.name !== product.name));
        }

        function getProduct(product) {
            return cart.find(item => item.name === product.name);
        }

        function getCart() {
            return cart;
        }

        function getTotalPrice() {
            return cart.reduce((a, item) => {
                return a + (item.quantity * item.price);
            }, 0).toFixed(2);
        }

        function reset() {
            setCart([]);
            setModalOpen(false);
        }

        function logState() {
            console.log(cart);
        }

        return {
            add: addProduct,
            remove: removeProduct,
            removeAll: removeAllOfProduct,
            get: getProduct,
            getCart: getCart,
            getTotalPrice: getTotalPrice,
            reset: reset,
        }
    }());


    return (
        <>
            <ProductList
            cartActions={cartActions}/>
            <Cart
            cartActions={cartActions}
            modalSwitch={modalSwitch}/>
            {modalOpen && 
            <ConfirmModal 
            modalSwitch={modalSwitch}
            cartActions={cartActions}/>}
        </>
    );
}

export default App
