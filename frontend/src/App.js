import { useState, useEffect } from "react";
import ProductForm from "./ProductForm";
import ProductListTable from "./ProductListTable";
import Login from "./login";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (!loggedIn) return;
    const fetchProducts = async () => {
      const res = await fetch("http://localhost:5000/products");
      setProducts(await res.json());
    };
    fetchProducts();
  }, [loggedIn]);

  if (!loggedIn) return <Login onLogin={() => setLoggedIn(true)} />;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Inventory System</h1>
      <ProductForm setProducts={setProducts} />
      <ProductListTable products={products} setProducts={setProducts} />
    </div>
  );
}

export default App;
