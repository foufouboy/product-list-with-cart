
import SampleImage from "../assets/images/image-cake-desktop.jpg";
import CartIcon from "../assets/images/icon-add-to-cart.svg";
import PlusIcon from "../assets/images/icon-increment-quantity.svg?react";
import LessIcon from "../assets/images/icon-decrement-quantity.svg?react";

function ProductItem({cartActions, item}) {

    const inCartProduct = cartActions.get(item);

    return (
        <div className="product-item">
            <div className="product-img">
                <picture> 
                    <source 
                        srcSet={item.image.desktop}
                        media="(min-width: 800px)"
                    />
                    <img 
                        src={item.image.mobile}
                        alt="Product Image" 
                        className={inCartProduct ? "in-cart" : ""}/>
                </picture>
                <button 
                className={"add-to-cart" + (inCartProduct ? " in-cart" : "")}
                onClick={() => !inCartProduct && cartActions.add(item)}>
                    {inCartProduct ? (
                        <>
                            <LessIcon 
                            onClick={() => {cartActions.remove(item)}}/>
                            {inCartProduct.quantity}
                            <PlusIcon
                            onClick={() => {cartActions.add(item)}}/>
                        </>
                    ) : (
                        <>
                                <img src={CartIcon} alt="Cart icon"/>
                                Add to Cart
                        </>
                    )}
                </button>
            </div>
            <div className="product-infos">
                <p className="product-type">{item.category}</p>
                <h3 className="product-name">{item.name}</h3>
                <p className="product-price">{"$" + item.price.toFixed(2)}</p>
            </div>
        </div>
    );
}

export default ProductItem;
