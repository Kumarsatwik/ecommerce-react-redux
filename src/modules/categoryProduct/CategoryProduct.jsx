import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductList from "../../components/productList/ProductList";

const CategoryProduct = () => {
  const { name } = useParams();
  const [product, setProduct] = useState([]);

  const fetchProducts = async () => {
    const response = await fetch(
      `https://fakestoreapi.com/products/category/${name}`
    );
    const data = await response.json();
    setProduct(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // if (product.length > 0) return <div>Loading . . .</div>;

  return product.length > 0 ? (
    <ProductList products={product} />
  ) : (
    <div>Loading . . .</div>
  );
};

export default CategoryProduct;
