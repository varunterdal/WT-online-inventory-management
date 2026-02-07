import { useState } from "react";

function ProductForm({ setProducts }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Electronics");
  const [price, setPrice] = useState(10);
  const [quantity, setQuantity] = useState(0);
  const [message, setMessage] = useState("");

  const categories = [
    "Electronics",
    "Groceries",
    "Clothing",
    "Stationery",
    "Furniture",
    "Toys",
    "Books",
    "Sports",
    "Others"
  ];

  const addProduct = async () => {
    if (!name || !category) { setMessage("Name & Category required"); return; }
    if (price < 0 || quantity < 0) { setMessage("Values cannot be negative"); return; }

    try {
      const res = await fetch("http://localhost:5000/product/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, category, price, quantity })
      });
      const result = await res.text();
      setMessage(result);

      const productsRes = await fetch("http://localhost:5000/products");
      setProducts(await productsRes.json());

      setName(""); setCategory("Electronics"); setPrice(10); setQuantity(0);
    } catch (err) {
      console.log(err); setMessage("Failed to add product");
    }
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <h2>Add Product</h2>
      <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
      
      <select value={category} onChange={e => setCategory(e.target.value)}>
        {categories.map((cat, index) => (
          <option key={index} value={cat}>{cat}</option>
        ))}
      </select>
      
      <input type="number" placeholder="Price" value={price} onChange={e => setPrice(Number(e.target.value))} />
      <input type="number" placeholder="Quantity" value={quantity} onChange={e => setQuantity(Number(e.target.value))} />
      <button onClick={addProduct}>Add</button>
      {message && <p style={{ color: "green" }}>{message}</p>}
    </div>
  );
}

export default ProductForm;
