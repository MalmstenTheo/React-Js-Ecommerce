import React, {useContext} from "react";
import { CartContext } from "../../context/CartContext";

export const CartItem = ({id,price,image,title,quantity}) => {
    const { removeItem} = useContext(CartContext)

    return(
        <div className="card m-3" style={{width: '30rem'}}>
        <h5 className="card-title ms-3">{title}</h5>
        <img src={image} className="card-img-top ms-3" alt={title}/>
        <div className="card-body">
            <p className="card-text">Precio: ${price}</p>
            <p className="card-text">Cantidad: {quantity}</p>
            <p className="card-text">Subtotal: ${price * quantity}</p>
        </div>
        <button className="btn btn-danger" onClick={() => removeItem(id)}>Eliminar</button>
    </div>
    )
}

export default CartItem 


