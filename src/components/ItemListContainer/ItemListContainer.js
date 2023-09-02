import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig"

const ItemListContainer = ({greeting}) => {
    const [products, setProduct] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true);
        
        const collectionRef = categoryId
            ? query(collection(db, 'products'), where("category", "==", categoryId))
            : collection(db, "products");
        
        getDocs(collectionRef)
            .then((response) => {
                const productsAdapted = response.docs.map((doc) => {
                    const data = doc.data();
                    return { id: doc.id, ...data };
            });
            
            setProduct(productsAdapted);
            /* console.log(productsAdapted); */ 
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {
            setLoading(false);
        });
    }, [categoryId]); /*categoryId*/
    
    return (
        <div>
            <ItemList products={products} loading={loading} />
        </div>
    );
}

export default ItemListContainer