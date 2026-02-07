import ProductCard from "./ProductCard";

function ProductListTable({ products, setProducts }) {
  const totalValue = products.reduce((sum, p) => sum + p.price * p.quantity, 0);

  return (
    <div>
      <h2>Product List</h2>
      {products.length === 0 ? (
        <p>No products yet</p>
      ) : (
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ borderBottom: "2px solid #1e90ff" }}>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id} style={{ borderBottom: "1px solid #ccc" }}>
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td>{product.price}</td>
                <td>{product.quantity}</td>
                <td>
                  <ProductCard product={product} setProducts={setProducts} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <h3>Total Inventory Value: ₹{totalValue}</h3>
    </div>
  );
}

export default ProductListTable;
