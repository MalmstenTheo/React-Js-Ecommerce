import { useState, useEffect } from "react";
import { getProducts } from "../../AsyncMock";
import { getProductsByCategory } from "../../AsyncMock";
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom";

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])

    const { categoryId } = useParams()

    useEffect(() => {
        const asyncsFunc = categoryId ? getProductsByCategory : getProducts

        asyncsFunc(categoryId)
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [categoryId])

    return(
        <section>
            <h1>{greeting}</h1>
            <ItemList products={products}/>
        </section>
    )
}

export default ItemListContainer