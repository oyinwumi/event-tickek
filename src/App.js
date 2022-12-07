import React from "react";
import './App.css';
import TicketList from "./components/TicketList";


function App() {
  return (
    <div className="App">
        <h1>EVENT TICKET</h1>
        {/* <p><i class="fa-solid fa-cart-shopping"></i><span>0</span></p> */}
      <TicketList/>
    </div>
  );
}

export default App;
