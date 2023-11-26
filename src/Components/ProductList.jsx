import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:5000/products");
      if (!response.ok) throw new Error(response.statusText);
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
      // Handle any errors that occur during the data fetching process
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="album py-5 bg-body-tertiary">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {products.map((product, index) => (
            <div className="col" key={index}>
              <div className="card shadow-sm">
                <img src={product.image} alt="Product Image" />
                <div className="card-body">
                  <h4 className="productlist-h4">{product.name}</h4>
                  <p>${product.price}</p>
                  <p>{product.description}</p>
                  <Link to={`/${product.id}`} className="btn btn-primary">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
