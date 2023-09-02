import { Link } from "react-router-dom"

const Item = ({id, title, image, price, stock}) => {

    return(
        <article className="">
            <div className="" >
                <div className="card m-5" style={{width: '20rem'}}>
                <img src={image} class="card-img-top" alt={title}/>
                    <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">Precio: ${price}</p>
                    <p className="card-text">Stock disponible: {stock}</p>
                    <Link className="btn btn-primary" to={`/item/${id}`}>Ver detalle</Link>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default Item

