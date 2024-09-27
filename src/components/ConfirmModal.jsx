import ConfirmItem from "./ConfirmItem";
import ConfirmIcon from "../assets/images/icon-order-confirmed.svg?react";

function ConfirmModal({modalSwitch, cartActions}) {
    const cart = cartActions.getCart();

    return (
        <div className="modal" onClick={modalSwitch}>
            <div className="confirm-container"
            onClick={(e) => e.stopPropagation()}>
                <ConfirmIcon className="confirm-icon"/>
                <h2>Order Confirmed</h2>
                <p>We hope you enjoy your food!</p>
                <div className="order-resume">
                    <div className="confirm-order-items">
                        {cart.map(item => (
                            <ConfirmItem
                            item={item}
                            key={item.name + "-confirm"}/>
                            )
                        )}
                    </div>
                    <p className="confirm-order-total">
                        <span>Order Total</span>
                        <span>$46.50</span>
                    </p>
                </div>
                <button className="order-confirmation reset"
                onClick={cartActions.reset}>
                    Start New Order
                </button>
            </div>
        </div>
    )
}

export default ConfirmModal;