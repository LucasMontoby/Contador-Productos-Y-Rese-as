import React, {useState} from 'react';

import './Style.css';

interface ProductCounterProps {
    producto: string;
    stockInicial: number;
}

const ProductCounter: React.FC <ProductCounterProps> = ({ producto, stockInicial }) => {
    const [stock, setStock] = useState(stockInicial);

    const decrementarStock = () =>{
        if(stock > 0){
            setStock(stock - 1);
            }
    }

    return(
        <div className="contador">
            <p>Producto: {producto}</p>
            <p>Stock Disponible: <strong>{stock}</strong></p>
            <button onClick={decrementarStock} disabled={stock === 0}>Comprar</button>
            {stock === 0 && <p>¡Producto Agotado!</p>}
        </div>
    )
}

export default ProductCounter;