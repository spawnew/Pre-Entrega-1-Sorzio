import { ItemDetailContainer} from "./components";
import {ItemListContainer} from "./components";
import  {NavBar } from "./components";
import { BrowserRouter} from "./components";
import {Route} from "react-router-dom";
 import { Routes } from "react-router-dom";

function App () {
  
  return (
  
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:category" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        
        
      </Routes>
    </BrowserRouter>
      
      
  
  )
}
export default App;



