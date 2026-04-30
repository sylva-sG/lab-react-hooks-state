function ProductCard({ product, addToCart }) {
  return (
    <div>
      <h3>{product.name}</h3>
      <p>{product.category}</p>
      <button
        data-testid={`product-${product.id}`}
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;