import React from "react";
import ProductCard from "./ProductCard";


const ProductList = () => {
  const products = [
    {
      name: "Product Name",
      image: "../../public/p1.png",
    }, {
      name: "Product Name",
      image: "../../public/p2.png",
    }, {
      name: "Product Name",
      image: "../../public/p3.png",
    }, {
      name: "Product Name",
      image: "../../public/p4.png",
    }, {
      name: "Product Name",
      image: "../../public/p5.png",
    }, {
      name: "Product Name",
      image: "../../public/p6.png",
    }, {
      name: "Product Name",
      image: "../../public/p7.png",
    }, {
      name: "Product Name",
      image: "../../public/p1.png",
    }, {
      name: "Product Name",
      image: "../../public/p2.png",
    }, {
      name: "Product Name",
      image: "../../public/p3.png",
    },{
      name: "Product Name",
      image: "../../public/p4.png",
    }, {
      name: "Product Name",
      image: "../../public/p5.png",
    }, {
      name: "Product Name",
      image: "../../public/p6.png",
    }, {
      name: "Product Name",
      image: "../../public/p7.png",
    },
  ];

  return (
    <div className="font-[sans-serif]">
      <div className="p-2 w-full max-w-screen-xl mx-auto bg-white">
        <div className=" container mx-auto p-4 grid gap-2 md:gap-16 lg:gap-24 grid-cols-3 md:grid-flow-row lg:grid-cols-3  lg:grid-flow-row lg:px-20">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
