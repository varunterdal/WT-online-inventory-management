import ProductCard from "./ProductCard";

function ProductList({ products, setProducts }) {
  return (
    <div>
      <h2>Product List</h2>
      {products.length === 0 ? <p>No products yet</p> :
        products.map(product => (
          <ProductCard key={product._id} product={product} setProducts={setProducts} />
        ))
      }
    </div>
  );
}

export default ProductList;
