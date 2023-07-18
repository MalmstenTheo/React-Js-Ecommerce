import CartWidget from "../CartWidget/CartWidget"

function NavBar() {
    return (
        <section className="header">
            <div className="logo">
                <img src="https://img.icons8.com/?size=512&id=ISaz3cXnEkiS&format=png" alt="Logo"/>
            </div>
            <div className="botones">
                    <button>Ofertas</button>
                    <button>Catalogo</button>
                    <button>Contacto</button>
            </div>
            <div className="cart">
                <CartWidget/>
            </div>
        </section>
        
    )
}

export default NavBar