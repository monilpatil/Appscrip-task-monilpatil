import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="  p-2 w-64 border border-lg shadow-lg   flex flex-col items-center hover:scale-[1.05] transition-all">
      <img
        src={product.image}
        alt={product.name}
        className="w-50 h-64  mb-4 object-contain"
      />
      <div className="flex flex-row justify-between">
        <div className="flex flex-col">
          <h2 className="font-semibold text-sm text-left text-black ">
            {product.name}
          </h2>
          <p className="text-gray text-left text-[12px]">
            <Link to="/login">
              <u>Sign in </u>or create accoutn to see pricing
            </Link>
          </p>
        </div>

        <span className="text-xl font-bold ml-5 text-right"></span>
        <button
          onClick={toggleFavorite}
          className={` text-xl ${isFavorite ? "text-red-500" : " "}`}
        >
          <FaHeart />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
