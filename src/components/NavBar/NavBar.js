import CartWidget from "../CartWidget/CartWidget"
import { NavLink, Link } from "react-router-dom"

function NavBar() {
    return (
        <section className="header">
            <Link to="/">
                <img src="https://img.icons8.com/?size=512&id=ISaz3cXnEkiS&format=png" alt="Logo"/>
            </Link>
            <div className="botones">
                    <NavLink to={"/category/women's clothing"} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Women's clothing</NavLink>
                    <NavLink to={"/category/men's clothing"} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Men's clothing</NavLink>
                    <NavLink to={"/category/electronics"} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Electronics</NavLink>
                    <NavLink to={"/category/jewelery"} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Jewelery</NavLink>
            </div>
            <div className="cart">
                <CartWidget/>
            </div>
        </section>
        
    )
}

export default NavBar