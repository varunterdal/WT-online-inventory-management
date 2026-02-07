function ProductCard({ product, setProducts }) {
  const updateProduct = async () => {
    const newName = prompt("Name:", product.name) || product.name;
    const newCategory = prompt("Category:", product.category) || product.category;
    const newPrice = Number(prompt("Price:", product.price)) || product.price;
    const newQuantity = Number(prompt("Quantity:", product.quantity)) || product.quantity;

    try {
      await fetch(`http://localhost:5000/product/update/${product._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: newName, category: newCategory, price: newPrice, quantity: newQuantity })
      });
      const productsRes = await fetch("http://localhost:5000/products");
      setProducts(await productsRes.json());
    } catch (err) {
      alert("Failed to update product");
    }
  };

  const deleteProduct = async () => {
    if (!window.confirm("Delete this product?")) return;
    try {
      await fetch(`http://localhost:5000/product/delete/${product._id}`, { method: "DELETE" });
      const productsRes = await fetch("http://localhost:5000/products");
      setProducts(await productsRes.json());
    } catch (err) {
      alert("Failed to delete product");
    }
  };

  return (
    <div className="product-card">
      <p><b>Name:</b> {product.name}</p>
      <p><b>Category:</b> {product.category}</p>
      <p><b>Price:</b> {product.price}</p>
      <p><b>Stock:</b> {product.quantity}</p>
      <button onClick={updateProduct}>Update</button>
      <button onClick={deleteProduct} style={{ marginLeft: "10px" }}>Delete</button>
    </div>
  );
}

export default ProductCard;
