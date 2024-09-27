import data from "../data";

function ConfirmItem({item}) {

    function getItemThumb(product) {
        return data
            .find(item => item.name === product.name)
            .image
            .thumbnail;
    }

    return (
        <div className="confirm-item">
            <div className="confirm-item-left">
                <img src={getItemThumb(item)} alt="product icon" />
                <div className="confirm-item-infos">
                    <p className="confirm-item-name">
                        {item.name}
                    </p>
                    <p className="quantity-and-unit">
                        <span>{item.quantity + "x"}</span>
                        <span>{"@$" + item.price.toFixed(2)}</span>
                    </p>
                </div>
            </div>
            <div className="confirm-item-right">
                <p>$5.50</p>
            </div>
        </div>
    )
}

export default ConfirmItem;