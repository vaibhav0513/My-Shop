import { Routes, Route, NavLink } from "react-router-dom";
import "./App.css";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Pd from "./pages/Pd";
import login from './pages/Login';
import { useState } from "react";
import Login from "./pages/Login";
import ProtectedComponents from "./pages/ProtectedComponents";

function App() {
  const [display, setdisplay] = useState(true)
  const handlelogindisplay = () => {
    if(localStorage.getItem('login')===null || localStorage.getItem('login')==='false'){
      setdisplay(true)
    }else{
      setdisplay(false)
    }
  }
  const handlelogout = () => {
    localStorage.setItem("login", "false");
    window.location.reload();
  }

  return (
    <div className="app">
      <nav>
        <h1 style={{textAlign:'center', color:'#5970ff'}}>My Shop</h1>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        
      {display ? <NavLink to="/login">Login</NavLink>: <button onClick={handlelogout}>Logout</button>}
      </nav>

      <Routes>
        <Route element={<ProtectedComponents/>}>
         <Route path="/" element={<Home />} />
         <Route path="products" element={<Products />} />
         <Route path="products/:id" element={<Pd />} />
        </Route>
        <Route path="contact" element={<Contact />} />
        <Route path="/login" element={<Login display={handlelogindisplay}/>}/>
        <Route path="*" element={<NotFound />} />
        {/* <Route path="*" element={<Navigate to="/" />} /> */}
      </Routes>
    </div>
  );
}

export default App;
