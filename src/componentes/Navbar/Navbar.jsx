import CardWidget from "../CardWidget/CardWidget"
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <>
    <nav className={styles.nav}>
    <img className={styles.logo}src="/public/img/357557966_741153148013341_6153979461801503541_n.jpg" />
    <div>
    <button className="btn btn-danger mx-2">Home </button>
    <button className="btn btn-danger mx-2">productos  </button>
    <button className="btn btn-danger mx-2">contactos </button>
    </div>
    <CardWidget/>
    </nav>
    
    
    
    </>
    
  )
}

export default Navbar