import { useState } from "react";

const ItemCount = ({stock, initial, onAdd}) => {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1)
        }
    }

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    return(
        <div>
            <div className="d-flex">
                <button onClick={decrement} className="btn btn-outline-secondary">-</button>
                <h4 className="ms-3 me-3">{quantity}</h4>
                <button onClick={increment} className="btn btn-outline-secondary">+</button>
            </div>
            <div>
                <button onClick={() => onAdd(quantity)} disabled={!stock} className="btn btn-primary mt-3">Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount