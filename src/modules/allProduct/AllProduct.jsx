import { useEffect, useState } from "react";
import FeaturesCard from "../../components/featuresCard/FeaturesCard";
import ProductList from "../../components/productList/ProductList";
import axios from "axios";
import Categories from "../../components/categories/Categories";

const AllProduct = () => {
  const [product, setProduct] = useState([]);

  const fetchProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products?limit=12");
    const data = await response.json();
    // console.log(data);
    setProduct(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <Categories />
      {product.length > 0 ? (
        <ProductList products={product} />
      ) : (
        <div className="text-center text-xl font-semibold my-10">
          Loading Products. . .
        </div>
      )}
    </div>
  );
};

export default AllProduct;
