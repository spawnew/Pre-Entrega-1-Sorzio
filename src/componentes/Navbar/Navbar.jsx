import CardWidget from "../CardWidget/CardWidget"
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <>
    <nav className={styles.nav}>
    <img src="/public/img/images.png alt=" style={{with:"150px"}}/>
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