import React from 'react';

const CartList = ({cart}) => {
  return (
    <div className='cart-container'>
      <h1>List of Cart</h1>
      <div className='cart-holder'>
        {cart.length < 1 ? (
              <div>There is no item in your cart</div>
        ):
        cart.map(item=>{
            return (
                <div className='cart-card'>
                    <p>Ticket Caterogry:<span> {item.ticketCaterogries}</span></p>
                    <p>Quantity: <span>{item.Number}</span></p>
                    <p> Total Amount: <span>#{(item.unitPrice * item.Number).toLocaleString()}</span></p>
                </div>
            )
          })
            
        }
      
      </div>
 
    </div>
  );
}

export default CartList;
