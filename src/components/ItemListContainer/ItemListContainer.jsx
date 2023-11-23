import { useEffect, useState } from "react";
import { getProducts } from "../asyncMock";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";



export const ItemListContainer = () => {
  const { category } = useParams()
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
 

  useEffect(() => {
    setIsLoading(true) 
    getProducts()
      .then((resp) => {
        if(category){
          const productsFilter = resp.filter(product => product.category === category)
          if(productsFilter.length > 0){
            setProducts(productsFilter)
          } else {
            setProducts(resp)
          }
        } else {
          setProducts(resp)
        }
        setIsLoading(false)
      })
      .catch((error) => console.log(error));
  }, [category]);

  return <>{isLoading ? <h2> Cargando productos... </h2> : <ItemList products={products} />}</>;
};
