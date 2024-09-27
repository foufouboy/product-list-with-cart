import CartContent from "./CartContent";

/**
 * TODO: 

 */

function Cart({cartActions, modalSwitch}) {

    const cart = cartActions.getCart();

    return (
        <div className="cart">
            <h2 className="cart-title">{`Your Cart (${cart.length})`}</h2>
            <CartContent 
            cartActions={cartActions} 
            cart={cart}
            modalSwitch={modalSwitch}/>
        </div>
    );
}

export default Cart;
