import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({title, image, category, description, price, stock }) => {
    return (
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
                    Categoria: {category}
                </p>
                <p>
                    Descripcion: {description}
                </p>
                <p>
                    Precio: ${price}
                </p>
            </section>
            <footer>
                <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log("Cantidad agregada: ", quantity)}/>
            </footer>
        </article>
    )
}

export default ItemDetail