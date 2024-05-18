import React from "react";
import { BsHeart } from "react-icons/bs";
import ProductCard from "./ProductCard";
import image2 from "../../public/p1.png";

const ProductList = () => {
  const products = [
    {
      name: "Adjective Attire | T-shirt",
      category: "T-shirt",
      price: 12,
      image: image2,
    },
    {
      name: "ThreadCraft Vibes | T-shirt",
      category: "T-shirt",
      price: 14,
      image: image2,
    },
    {
      name: "Adjective Attire | T-shirt",
      category: "T-shirt",
      price: 12,
      image: image2,
    },
    {
      name: "ThreadCraft Vibes | T-shirt",
      category: "T-shirt",
      price: 14,
      image: image2,
    },
    {
      name: "Adjective Attire | T-shirt",
      category: "T-shirt",
      price: 12,
      image: image2,
    },
    {
      name: "ThreadCraft Vibes | T-shirt",
      category: "T-shirt",
      price: 14,
      image: image2,
    },
    {
      name: "Adjective Attire | T-shirt",
      category: "T-shirt",
      price: 12,
      image: image2,
    },
    {
      name: "ThreadCraft Vibes | T-shirt",
      category: "T-shirt",
      price: 14,
      image: image2,
    },
  ];
  return (
    <div className=" font-[sans-serif] ">
      <div className="p-2 ml-20 w-[100%]  lg:max-w-5xl md:max-w-3xl sm:max-w-full bg-white">
        <div className="container mx-auto p-4 ">
          <div className="grid grid-cols-3 gap-20 ">
            {products.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
