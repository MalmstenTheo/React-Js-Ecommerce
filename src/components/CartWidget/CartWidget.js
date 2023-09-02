import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"

function CartWidget() {
    const {totalQuantity} = useContext(CartContext)

    return (
        <Link to="/cart" style={{display: totalQuantity > 0 ? 'none' : 'none'}}>
            <img src="https://cdn-icons-png.flaticon.com/128/7533/7533993.png" alt="cart"/>
            {totalQuantity}
        </Link>
    )
}

export default CartWidget