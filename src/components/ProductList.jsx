import ProductItem from "./ProductItem";
import data from '../data';

function ProductList() {
    return (
        <div className="desserts-container">
            <h1 className="title">Desserts</h1>
            <ul className="desserts-list">
                {
                    data.map(item => <li key={item.name}><ProductItem item={item}/></li>)
                }
            </ul>
        </div>
    );
}

export default ProductList;
