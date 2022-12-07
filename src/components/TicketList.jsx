import { useState } from 'react';

const TicketList = () => {
 
 
 const  [tickets , setTickets] = useState([
    {ticketCaterogries: "Regular", Number: 0, unitPrice: "#10,000"},
    {ticketCaterogries: "Vip", Number: 0, unitPrice: "#20,000"},
    {ticketCaterogries: "Vvip", Number: 0, unitPrice: "#30,000"},
    {ticketCaterogries: "Table", Number: 0, unitPrice: "#50,000"},
])

const[cart, setCart] = useState([])
// const[page, setPage] = useState('tickets')

 const decreamentValue = (key)=>{
    let filtered = tickets.map((ticket, index)=>{
        if(key=== index){
            if(ticket.Number > 0 ){
                ticket.Number= ticket.Number-1
            }
           
          
        }
        return ticket
    })
     setTickets(filtered);
 }

 const increamentValue = (key)=>{
   
    let filtered = tickets.map((ticket, index)=>{
        if(key=== index){
            ticket.Number= ticket.Number+1
        }
        return ticket
    })
     setTickets(filtered);
 }

 const addToCart = (tickets ) =>{
   setCart([...cart, tickets])
 }
  return (
    <div>
        
    {
            <header>
            <button className='cart-btn'>Go to cart ({cart.length})</button>
          </header>
    }
    {/* {page === 'tickets' && (<></>)} */}
   {
          <table>
             <tr>
                <th>Tickets Categories</th>
                <th>Number</th>
                <th>Unit Price</th>
             </tr>
    {
        tickets.map((ticket, key) =>{
            return (
                <tr key={key}>
                    <td>{ticket.ticketCaterogries}</td>
                    <td> {<button className='decrease-button' onClick={ () => decreamentValue(key)}>-</button>}
                    <span>{ticket.Number}</span>
                    {<button className='increase-button' onClick={()=>increamentValue(key)}>+</button>}</td>
                    <td>{ticket.unitPrice} {<button className="add-button" onClick={() =>addToCart(tickets)}>Add</button>}</td>
                    
                </tr>
            )
        })
    }
          </table>
    }

    </div>
  );
}

export default TicketList;
