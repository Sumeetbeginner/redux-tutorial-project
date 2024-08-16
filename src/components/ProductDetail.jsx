import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct, removeSelectedProduct } from "../redux/actions/productActions";

const ProductDetail = () => {
  const product = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const { productId } = useParams();

  const fetchProductDetails = async () => {
    try {
      const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
      dispatch(selectedProduct(response.data));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (productId) {
      fetchProductDetails();
    }

    return () => {
      dispatch(removeSelectedProduct())
    }
  }, [productId]);

  // Destructuring product data
  const { title, price, description, category, image, rating } = product || {};

  return (
    <div className="ui container">
      <div className="ui grid">
        <div className="eight wide column">
          <img src={image} alt={title} className="ui fluid image" />
        </div>
        <div className="eight wide column">
          <h1 className="ui header">{title}</h1>
          <h3 className="ui header">${price}</h3>
          <p>{description}</p>
          <p><strong>Category:</strong> {category}</p>
          <p><strong>Rating:</strong> {rating?.rate} ({rating?.count} reviews)</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
