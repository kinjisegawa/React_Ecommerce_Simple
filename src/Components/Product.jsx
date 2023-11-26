import React from "react";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import CartContext from "../Context/CartContext";

const Product = () => {
  const { id } = useParams();

  const { addToCart } = useContext(CartContext);

  const [product, setProduct] = useState({});

  const FetchProduct = async () => {
    try {
      const response = await fetch(`http://localhost:5000/products/${id}`);
      if (!response.ok) throw new Error(response.statusText);
      const data = await response.json();
      setProduct(data);
    } catch (error) {
      console.error("Error fetching products:", error);
      // Handle any errors that occur during the data fetching process
    }
  };

  useEffect(() => {
    FetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    addToCart(product);
    alert("Item added to Cart");
  };

  return (
    <div key={product.id} className="container">
      <div className="row justify-content-center">
        <div className="col col-lg-6">
          <div className="text-center mt-5">
            <img className="product-image" src={product.image} alt="" />
            <h4 className="product-4">{product.name}</h4>
            <p>${product.price}</p>
            <p>{product.description}</p>
            <button 
              className="btn btn-primary mb-5" 
              onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
