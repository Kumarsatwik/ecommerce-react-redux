import { useEffect, useState } from "react";
import Hero from "../../components/hero/Hero";
import StatsCard from "../../components/statsCard/StatsCard";
import Categories from "../../components/categories/Categories";
import ProductList from "../../components/productList/ProductList";
import { useSelector } from "react-redux";


// import Skeleton from "react-loading-skeleton";
// import "react-loading-skeleton/dist/skeleton.css";

const Home = () => {
  const products = useSelector((state) => state.products.products);

  return (
    <>
      <Hero />
      <Categories />
      <div className="flex flex-col text-center w-full mt-20">
        <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
          Products
        </h2>
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
          Most Popular Products
        </h1>
      </div>

      {products.length > 0 ? (
        <ProductList products={products} />
      ) : (
        <div className="text-center text-2xl font-semibold mt-20">
          Loading . . .
        </div>
      )}

      <StatsCard />
    </>
  );
};

export default Home;



  //   const fetchProducts = async () => {
  //     const response = await fetch("https://fakestoreapi.com/products?limit=12");
  //     const data = await response.json();
  //     setProduct(data);
  //   };

  //   useEffect(() => {
  //     fetchProducts();
  //   }, []);


// <Skeleton
//   count={4}
//   wrapper={InlineWrapperWithMargin}
//   inline
//   style={{marginTop:'5rem',marginLeft:'5rem'}}
//   height={150}
//   width={250}
// />

//   function InlineWrapperWithMargin({ children }) {
//     return <span style={{ margin: "0.5rem" }}>{children}</span>;
//   }
