import {useState} from "react";
import styles from "./CardWidget.module.css";
import { BsFillCartFill } from "react-icons/bs";
const CardWidget = () => {
const [suma,setsuma] = useState(0);

const sumar =()=>{
  setsuma(suma+1);
}

  return (
    <div className={styles.carrito}>
      <BsFillCartFill size="30" color="blue"/>
     
     <div>sumar:{suma}
      
     <button onClick={sumar}>+</button>
     </div>
    </div>
  );
};

export default CardWidget;
