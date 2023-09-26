
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Produtos from "./Components/Produtos";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import './App.css';
import Contato from "./Components/Contato";
import Produto from "./Components/Produto";

function App() {
 

  return (
    < div className="App" >
     <BrowserRouter >
      <Header/>
        <Routes>
          <Route  path="/" element={<Produtos/>}/>
          <Route path="produto/:id" element={<Produto />}/>
          <Route path="contato" element={<Contato/>}/>
        </Routes>
      <Footer/>
     </BrowserRouter>
    </div>
  )
}

export default App
