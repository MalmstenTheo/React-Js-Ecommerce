import React, {useContext} from "react";
import { CartContext } from "../../context/CartContext";

export const CartItem = ({id,price,image,title,quantity}) => {
    const { removeItem, total } = useContext(CartContext)

    return(
        <article>
            <header>
                <h2>
                    {title}
                </h2>
            </header>

            <picture>
                <img src={image} alt={title}/>
            </picture>
            <section>
                <h3>
                    Precio: ${price}
                </h3>
            </section>

            <section>
                <h4>
                    Cantidad: {quantity}
                </h4>
            </section>
            <section>
                Subtotal: ${price * quantity}
            </section>

            <section>
                <h3>
                    Total a pagar: ${total}
                </h3>
            </section>
            <section>
                <button className="btn btn-danger" onClick={() => removeItem(id)}>Eliminar</button>
            </section>
        </article>
    )
}

export default CartItem 


