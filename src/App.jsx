import "./App.css";
import { useState } from "react";
import ProductList from "./components/ProductList";
import DarkModeToggle from "./components/DarkModeToggle";
import Cart from "./components/Cart";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [cart, setCart] = useState([]);
  const [category, setCategory] = useState("All");

  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className={darkMode ? "dark" : "light"}>
      <h1>Shopping App</h1>

      <DarkModeToggle
        darkMode={darkMode}
        toggle={handleToggleDarkMode}
      />

      <select onChange={(e) => setCategory(e.target.value)}>
        <option value="All">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Vegetables">Vegetables</option>
        <option value="Dairy">Dairy</option>
      </select>

      <ProductList
        category={category}
        addToCart={addToCart}
      />

      <Cart cart={cart} />
    </div>
  );
}

export default App;