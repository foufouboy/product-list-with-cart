import CartItem from "./CartItem";
import CarbonNeutralIcon from "../assets/images/icon-carbon-neutral.svg?react";
import EmptyCartIcon from "../assets/images/illustration-empty-cart.svg?react";


function CartContent({cartActions, cart}) {

    if (cart.length === 0) {
        return (
            <div className="empty-cart-container">
                <EmptyCartIcon/>
                <p>Your added items will appear here</p>
            </div>
        )
    } else {
        return (
            <>
                <div className="cart-content">
                    {cart.map(item => (
                        <CartItem 
                        item={item} 
                        key={item.name}
                        cartActions={cartActions}/>
                        )
                    )}
                </div>
                <div className="cart-confirmation">
                    <div className="order-total">
                        <p>Order Total</p>
                        <p>{"$" + cartActions.getTotalPrice()}</p>
                    </div>
                    <div className="carbon-neutral">
                        <CarbonNeutralIcon/>
                        <p>This is a <strong>carbon-neutral</strong> delivery</p>
                    </div>
                    <button className="order-confirmation">
                        Confirm Order
                    </button>
                </div>
            </>
        );
    }

}

export default CartContent;