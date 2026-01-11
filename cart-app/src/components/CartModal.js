function CartModal({cart,closeModal,removeFromCart}) {

   return (
      <div className="modal-backdrop">
         <div className="modal">
          <h2>Cart Items</h2>
          {cart.length === 0 && <p>No items in the cart</p>}
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
               <img src={item.image} alt=""/>
               <p>{item.title}</p>
               <p>{item.price}</p>
               <button onClick={() => removeFromCart(item.id)} className="btn-remove-cart-item">
                  Remove
               </button>
               <button onClick={closeModal} className="close-btn">Close</button>
            </div>
          ))}
          </div>
      </div>

   )
}

export default CartModal;