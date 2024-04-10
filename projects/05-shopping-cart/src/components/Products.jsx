import { BiCartAlt } from "react-icons/bi";
import './products.css'

export function Products({ products }) {
    return (
        <div className="products">
            <ul>
                {products.slice(0, 10).map(product => (
                    <li key={product.id}>
                        <img src={product.thumbnail} alt={product.title} />
                        <div>
                            <strong>{product.title} - S/ {product.price}</strong>
                        </div>

                        <div>
                            <button><BiCartAlt /></button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}