import ProductItem from "./ProductItem";
import data from '../data';

function ProductList({cartActions}) {
    return (
        <div className="desserts-container">
            <h1 className="title">Desserts</h1>
            <ul className="desserts-list">
                {
                    data.map(item => {
                        return (<li key={item.name}>
                                <ProductItem item={item} cartActions={cartActions}/>
                                </li>);
                    })
                }
            </ul>
        </div>
    );
}

export default ProductList;
