import { useEffect } from 'react';

const TicketList = ({tickets, setTickets, cart, setCart}) => {

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

 const addToCart = (category, ticket ) =>{
    let foundArray = cart.filter(c=>c.ticketCaterogries === category)
    // console.log(foundArray)

    if(foundArray && foundArray.length > 0) {
        // if we found an object with the same category name
        let selectedTicket = tickets.filter(ticket=>{
            return foundArray[0].Name === ticket.name
        })

        // If the number of the ticket we are adding = 0, remove it from the cart instead
        if(selectedTicket[0].Number === 0) {
            
            let filtered = cart.filter(c=>{
                return c.ticketCaterogries !== category
            })
            console.log('add1')
            setCart(filtered)
            return false
        }

        // If the number is greater than 1, add it to the cart and update its number
        else {
            foundArray[0].Number = selectedTicket[0].Number

            let finalResult = cart.map(c=>{
                if(c.ticketCaterogries === category){
                    c = foundArray[0]
                }
                return c
            })
            console.log('add2')
            setCart(finalResult)
        }
    }
    else {
        // If we do not find any object with the same category name
        console.log('add3')
        setCart([...cart, ticket])
    }
//    
 }

 useEffect(()=>{
    console.log(cart)
 }, [cart])

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
                    <td>#{(ticket.unitPrice * ticket.Number).toLocaleString()} {<button className="add-button" onClick={() =>addToCart(ticket.ticketCaterogries, ticket)}>Add</button>}</td>
                    
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
