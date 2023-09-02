import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";

const ItemListContainer = ({ greeting }) => {
    const [products, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    
    const { itemId } = useParams();
    
    useEffect(() => {
    setLoading(true);
    
    const collectionRef = itemId
        ? query(collection(db, "products"), where("category", "==", itemId))
        : collection(db, "products");
        
    getDocs(collectionRef)
        .then((response) => {
            const productsAdapted = response.docs.map((doc) => {
                const data = doc.data();
                return { id: doc.id, ...data };
            });

            
            setProduct(productsAdapted);
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {
            setLoading(false);
        });
        }, [itemId]); 
    
        return (
        <div>
            <ItemList productos={products} loading={loading} />
        </div>
        );
    };

    export default ItemListContainer;

