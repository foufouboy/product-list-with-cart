import RemoveItemIcon from "./../assets/images/icon-remove-item.svg?react";

function CartItem({item, cartActions}) {
    return (
        <>
            <div className="cart-item">
                <div>
                    <h3 className="name">{item.name}</h3>
                    <p className="infos">
                        <span>{`${item.quantity}x`}</span>
                        <span>{"@$" + item.price.toFixed(2)}</span>
                        <span>{"$" + (item.price * item.quantity).toFixed(2)}</span>
                    </p>
                </div>
                <button className="remove-item" onClick={
                        () => cartActions.removeAll(item)
                    }>
                    <RemoveItemIcon/>
                </button>
            </div>
            <hr />
        </>
    );
}

export default CartItem;