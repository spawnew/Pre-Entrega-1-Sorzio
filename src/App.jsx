import styles from "./app.module.css";



function App() {
  const nombre="lucas";
  const nombres =["lucas ","slashito","Rolo","costa"];
  return (
    <><div>
      
    
      <p className={styles.jojo} >{nombre}</p>
      <ul>
       { nombres.map( lista => <li>{ lista }</li> ) }
      </ul>
      </div>
    </>
  )
}

export default App
