import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem" 
import {Link} from "react-router-dom"

const Cart = () => {
    const { cart, clearCart, totalQuantity, totalAmount} = useContext(CartContext)

    if(totalQuantity === 0) {
        return (
            <div>
                <h1>No hay items en el carrito</h1>
                <Link to="/">Productos</Link>
            </div>
        )
    }

    return(
        <div>
            { cart.map(p => <CartItem key = {p.id} {...p}/>) }
            <h3 className="m-3 p-2 border border-black rounded" style={{width: 'fit-content'}}>Total: ${totalAmount}</h3>
            <button onClick={() => clearCart()} className="ms-3 btn btn-outline-danger">Limpiar carrito</button>
            <Link to="/checkout" className="m-2 btn btn-success">CheckOut</Link> 
        </div>
    )
}

export default Cart