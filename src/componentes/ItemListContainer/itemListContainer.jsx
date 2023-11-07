import styles from "./ItemListContainer.module.css";

export const ItemListContainer = ( { greeting } ) => {
  return (
    <div className={styles.texto}>{greeting }</div>
  )
}

export default ItemListContainer;