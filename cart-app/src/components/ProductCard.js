function ProductCard({product , addToCart}) {

   return (
      <div className="card">
         <img src={product.image} alt=""/>
         <h4>{product.title}</h4>
         <p>Rs. {product.price}</p>
        <button onClick={() => addToCart(product)}>Add To Cart</button>
      </div>

   )
}

export default ProductCard;