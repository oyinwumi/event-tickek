export function CartList({cart}) {
    return (
        <div>
            <h1>List of carts</h1>

            <div>
                {cart.length < 1 ? (
                    <div>There are no items in your cart</div> 
                ) :
                cart.map(item=>{
                    return (
                        <div>
                            <p>{item.ticketCaterogries}</p>
                            <p>{item.Number}</p>
                            <p>#{(item.unitPrice * item.Number).toLocaleString()}</p>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}