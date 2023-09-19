import React, { useEffect, useState } from "react";
import FeaturesCard from "../featuresCard/FeaturesCard";
import axios from "axios";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  const categoryList = async () => {
    const response = await axios.get(
      "https://fakestoreapi.com/products/categories"
    );

    // console.log(response.data);
    setCategories(response.data);
  };

  useEffect(() => {
    categoryList();
  }, []);

  return (
    <>
      {categories.length > 0 ? (
        <FeaturesCard category={categories} />
      ) : (
        <div className="text-center text-xl font-semibold my-10">
          Loading Categories. . .
        </div>
      )}
    </>
  );
};

export default Categories;
