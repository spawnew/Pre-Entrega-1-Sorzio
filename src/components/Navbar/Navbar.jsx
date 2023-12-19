import { NavLink } from "react-router-dom";
import { CartWidget } from "../CardWidget/CardWidget";
import styles from "./Navbar.module.css";
export const NavBar = () => {
  return (
    <nav className={styles.nav}>
    <div className={styles.logo}>
    <img className={styles.logo}src="/public/img/357557966_741153148013341_6153979461801503541_n.jpg" />
    <p className={ styles.titulo}>ImperioYugioh</p>
    </div>
      <div>
        < NavLink to="/">
          
    <button className="btn btn-danger mx-2">Home </button>
        </ NavLink>
        < NavLink to="/category/singles">
        <button className="btn btn-danger mx-2">Singles  </button>
        </ NavLink>
        
        < NavLink to="/category/sellados">
        <button className="btn btn-danger mx-2">Sellados </button>
        </ NavLink>
      
      < NavLink to="/cart">
        <CartWidget />
      </ NavLink>
      </div>
    </nav>
      
    
  );
};
// NavLink le da un hover a botenes