import React from "react";
import { Link } from "react-router-dom";

const ProductList = ({ products }) => {
  // console.log(products);
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {products?.map((product) => {
            // console.log(product);
            return (
              <Link
                to={`/product/${product.id}`}
                className="lg:w-1/4 md:w-1/2 p-4 w-full cursor-pointer"
                key={product.id}
              >
                <a className="block relative h-48 rounded overflow-hidden">
                  <img
                    alt="{product.name}"
                    className="object-contain  object-center w-full h-full block"
                    src={product.image}
                  />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 uppercase">
                    {product.category}
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    {product.title}
                  </h2>
                  <p className="flex align-items-center gap-2  mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 mt-0.5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      />
                    </svg>

                    <span className="font-semibold">{product.rating.rate}</span>
                    <span>({product.rating.count})</span>
                  </p>
                  <p className="mt-1 font-semibold text-xl">${product.price}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductList;
