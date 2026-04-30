import ProductCard from "./ProductCard";

export const sampleProducts = [
  { id: 1, name: "Apple", category: "Fruits" },
  { id: 2, name: "Banana", category: "Fruits" },
  { id: 3, name: "Carrot", category: "Vegetables" },
  { id: 4, name: "Milk", category: "Dairy" },
  
];

function ProductList({ category, addToCart }) {
  const filteredProducts =
    category === "All"
      ? sampleProducts
      : sampleProducts.filter((p) => p.category === category);

  return (
    <div>
      {filteredProducts.length === 0 ? (
        <p>No products available</p>
      ) : (
        filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))
      )}
    </div>
  );
}

export default ProductList;