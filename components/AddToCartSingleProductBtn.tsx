"use client";

import React from "react";
import { useProductStore } from "@/app/_zustand/store";
import toast from "react-hot-toast";

const AddToCartSingleProductBtn = ({ product, quantityCount }: SingleProductBtnProps) => {
  const { addToCart, calculateTotals } = useProductStore();

  const handleAddToCart = () => {
    addToCart({
      id: product?.id.toString(),
      title: product?.title,
      price: product?.price,
      image: product?.mainImage,
      amount: quantityCount,
    });
    calculateTotals();
    toast.success("Product added to the cart");
  };

  return (
    <button
      onClick={handleAddToCart}
      className="w-52 max-[500px]:w-full text-base sm:text-lg font-medium uppercase tracking-wide border border-gray-300 text-blue-600 bg-white py-2 px-4 rounded-md transition-all duration-200 ease-in-out hover:bg-blue-600 hover:text-white hover:border-blue-600 hover:scale-105 shadow-sm"
    >
      Add to cart
    </button>
  );
};

export default AddToCartSingleProductBtn;
