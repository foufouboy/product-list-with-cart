
import SampleImage from "../assets/images/image-cake-desktop.jpg";
import CartIcon from "../assets/images/icon-add-to-cart.svg";
import PlusIcon from "../assets/images/icon-increment-quantity.svg?react";
import LessIcon from "../assets/images/icon-decrement-quantity.svg?react";

function ProductItem({inCart = false, item = {}}) {

    return (
        <div className="product-item">
            <div className="product-img">
                <img 
                src={item.image.desktop} 
                alt="Product Image" 
                className={inCart ? "in-cart" : ""}/>
                <button className={"add-to-cart" + (inCart ? " in-cart" : "")}>
                    {inCart ? (
                        <>
                            <LessIcon/>
                            1
                            <PlusIcon/>
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
