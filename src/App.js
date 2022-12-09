import React, {useState, useEffect} from "react";
import './App.css';
import TicketList from "./components/TicketList";
import { CartList } from "./components/cartList";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom'
import { Link } from "react-router-dom";


function App() {
  const  [tickets , setTickets] = useState([
    {ticketCaterogries: "Regular", Number: 0, unitPrice: 10000},
    {ticketCaterogries: "Vip", Number: 0, unitPrice: 20000},
    {ticketCaterogries: "Vvip", Number: 0, unitPrice: 30000},
    {ticketCaterogries: "Table", Number: 0, unitPrice: 50000},
  ])

  const[cart, setCart] = useState([])

  return (
    <div className="App">
      <h1>EVENT TICKET</h1>
      

      <Router>
        <div>
          <Link to="/">Ticket List</Link>
          <Link to="/cart">Cart</Link>
        </div>

        <Routes>
          <Route path="/" 
            element={<TicketList 
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
