import {  ItemListContainer,ItemDetailContainer, NavBar } from "./components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Cart} from "./components";
import  {Products}  from "./components/Products/Products";
export const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      
      <Routes>
     
      <Route path="/" element={<ItemListContainer />} />
     
        <Route path="/category/:category" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
      <Products/>
    </BrowserRouter>

  );
};
export default App;




