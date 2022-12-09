import { useState } from "react";
import './App.css';
import { BrowserRouter as Router , Link, Route , Routes, } from "react-router-dom";
import TicketList from "./components/TicketList";
import CartList from "./components/CartList";


function App() {
    
 const  [tickets , setTickets] = useState([
  {ticketCaterogries: "Regular", Number: 1, unitPrice: 10000},
  {ticketCaterogries: "Vip", Number: 1, unitPrice: 20000},
  {ticketCaterogries: "Vvip", Number: 1, unitPrice: 30000},
  {ticketCaterogries: "Table", Number: 1, unitPrice: 50000},
])

const[cart, setCart] = useState([])

  return (
    <div className="App">
       <h1>EVENT TICKET</h1>
      <Router>
        <div className="links">
          <div className="nav-bar">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/cart" className="nav-link">Cart</Link>
          </div>
          {
            <header>
            <button className='cart-btn'>Unit ({cart.length})</button>
          </header>
    }
        </div>
        <Routes>
        <Route path="/" element={<TicketList 
            tickets={tickets}
            setTickets={setTickets}
            cart={cart}
            setCart={setCart}
            />}

        />
        <Route path="/cart" element={<CartList cart={cart}/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
