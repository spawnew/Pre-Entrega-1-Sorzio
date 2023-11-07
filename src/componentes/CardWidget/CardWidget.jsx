import styles from "./CardWidget.module.css";
import { BsFillCartFill } from "react-icons/bs";
const CardWidget = () => {
  return (
    <div className={styles.carrito}>
      <BsFillCartFill size="30" color="blue"/>
     <h3>1</h3>
    </div>
  )
}

export default CardWidget
