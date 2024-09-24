
function Cart({cartActions}) {

    return (
        <div className="cart">
            <h2 className="cart-title">Your Cart (7)</h2>
            <div className="cart-content">
                <div className="cart-item">
                    <div className="items">
                        <h3 className="name">Classic Tiramisu</h3>
                        <p className="infos">
                            <span>1x</span>
                            <span>$5.50</span>
                            <span>$5.50</span>
                        </p>
                    </div>
                    <div className="delete"></div>
                </div>

            </div>
            <div className="cart-confirmation">
                <div className="order-total">
                    <p>Order Total</p>
                    <p>$46.50</p>
                </div>
                <p className="carbon-neutral">
                    This is <strong>carbon neutral</strong> delivery
                </p>
                <button className="order-confirmation">
                    Confirm Order
                </button>
            </div>
        </div>
    );
}

export default Cart;
