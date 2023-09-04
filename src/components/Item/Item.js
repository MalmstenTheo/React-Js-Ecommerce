import { Link } from "react-router-dom"

const Item = ({id, title, image, price, stock}) => {

    return( 
        <div className="card m-5" style={{height: 'fit-content'}}>
            <img src={image} className="card-img-top" alt={title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">Precio: ${price}</p>
                <p className="card-text">Stock disponible: {stock}</p>
                <Link className="btn btn-primary" to={`/item/${id}`}>Ver detalle</Link>
            </div>
        </div>
    )
}

export default Item

