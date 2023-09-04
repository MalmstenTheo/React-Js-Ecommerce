import ItemCount from "../ItemCount/ItemCount";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ id, title, image, category, description, price, stock }) => {
    const [quantityAdded, setQuantityAdded] = useState(0)

    const {addItem} = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id, title, price
        }

        addItem(item, quantity)
    }

    return (
        <div className="card" style={{width: '20rem'}}>
            <img src={image} className="card-img-top" alt={title}/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">Categoria: {category}</p>
                <p className="card-text">{description}</p>
                <p className="card-text">Precio: ${price}</p>

                <footer>
                {
                    quantityAdded > 0 ? (
                        <Link to='/cart' className="btn btn-success">Terminar compra</Link>
                    ) : (
                        <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>
                    )
                }
            </footer>
            </div>
        </div>
    )
}

export default ItemDetail