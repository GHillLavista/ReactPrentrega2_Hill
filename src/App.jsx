import { useState } from 'react'
import "./App.css";
import NavBar from './components/navBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from './components/NoPage';
//import Layout from './Paginas/Layout';


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        
        <Route path="/" element={<ItemListContainer saludo="Bienvenidos a Sweet & Tasty" />} />

        <Route path="/category/:idCategory" element={<ItemListContainer />} />

        <Route path="/detail/:idProduct" element={<ItemDetailContainer />} />
        
        <Route path='*' element= {<NoPage/>}/>

      </Routes>    
    </BrowserRouter>
  )
}

export default App