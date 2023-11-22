import { Cart, ItemDetailContainer, ItemListContainer, NavBar } from "./components";
import { BrowserRouter, Route, Routes } from "react-router-dom";


import ItemListContainer from "./componentes/ItemListContainer/itemListContainer";


function App() {
  
  return (
    <>
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:category" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
      
      </>
  
  )
}

export default App
