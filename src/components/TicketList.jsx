import { useEffect } from 'react';

const TicketList = ({tickets , setTickets , cart, setCart}) => {
 
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

 const addToCart = ( category , ticket ) =>{
    let ticketArray = cart.filter(value => value.ticketCaterogries ===category)
    if(ticketArray && ticketArray.length > 0) {
        let selectedTicket = tickets.filter(ticket => {
            return ticketArray[0].Name === ticket.name
        })
    if(selectedTicket[0].Number === 0){
        let filtered = cart.filter(value => {
            return value.ticketCaterogries !== category
        })
       
        setCart(filtered)
        return false
    }
    else{
        ticketArray[0].Number = selectedTicket[0].Number

        let finalResult = cart.map(value =>{
            if(value.ticketCaterogries === category){
                value =ticketArray[0]
            }
            return value
        })
        setCart(finalResult)

    }
  
    }
    else{
        setCart([...cart, ticket])
    }
 }

 useEffect(()=>{
   console.log(cart)
 }, [cart])

//  const deleteItem = () =>{
//     setCart('')
//  }
  return (
    <div>
        
    {/* {
            <header>
            <button className='cart-btn'>Go to cart ({cart.length})</button>
          </header>
    } */}
   
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
                    <td>#{(ticket.unitPrice * ticket.Number).toLocaleString()} {<button className="add-button" 
                    onClick={() =>addToCart(ticket.ticketCaterogries, ticket)}>Add</button>}</td>
                    
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
