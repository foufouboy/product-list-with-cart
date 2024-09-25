import CartContent from "./CartContent";

/**
 * TODO: 

 */

function Cart({cartActions}) {

    const cart = cartActions.getCart();

    return (
        <div className="cart">
            <h2 className="cart-title">{`Your Cart (${cart.length})`}</h2>
            <CartContent cartActions={cartActions} cart={cart}/>
        </div>
    );
}

export default Cart;
