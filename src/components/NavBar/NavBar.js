import CartWidget from "../CartWidget/CartWidget"
import { NavLink, Link } from "react-router-dom"

function NavBar() {
    return (
        <section className="d-flex align-items-center">
            <Link to="/">
                <img className="h-70 w-25 justify-content-start" src="https://img.icons8.com/?size=512&id=ISaz3cXnEkiS&format=png" alt="Logo"/>
            </Link>
            <div className="justify-content-end">
                    <NavLink to={"/category/women's clothing"} className={({ isActive }) => (isActive ? 'btn btn-primary mx-5' : 'btn btn-outline-primary fw-bolder mx-5')}>Women's clothing</NavLink>
                    <NavLink to={"/category/men's clothing"} className={({ isActive }) => (isActive ? 'btn btn-primary mx-5' : 'btn btn-outline-primary fw-bolder mx-5')}>Men's clothing</NavLink>
                    <NavLink to={"/category/electronics"} className={({ isActive }) => (isActive ? 'btn btn-primary mx-5' : 'btn btn-outline-primary fw-bolder mx-5')}>Electronics</NavLink>
                    <NavLink to={"/category/jewelery"} className={({ isActive }) => (isActive ? 'btn btn-primary mx-5' : 'btn btn-outline-primary fw-bolder mx-5')}>Jewelery</NavLink>
            </div>
            <div className="">
                <CartWidget/>
            </div>
        </section>
        
    )
}

export default NavBar