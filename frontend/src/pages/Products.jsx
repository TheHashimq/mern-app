import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/products.json") // Assuming products.json is in the public folder
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching the products:", error));
  }, []);

  return (
    <div className="products-container">
      {products.length > 0
        ? (
          products.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              name={product.name}
              price={product.price}
              details={product.description}
            />
          ))
        )
        : <p>Loading products...</p>}
    </div>
  );
};

export default Products;
