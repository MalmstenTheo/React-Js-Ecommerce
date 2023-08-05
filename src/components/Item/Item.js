import { Link } from "react-router-dom"

const Item = ({id, title, image, price, stock}) => {

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
                <p>
                    precio: ${price}
                </p>
                <p>
                    Stock disponible: {stock}
                </p>
            </section>
            <footer>
                <Link to={`/item/${id}`}>Ver detalle</Link>
            </footer>
        </article>
    )
}

export default Item