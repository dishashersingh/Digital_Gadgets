import Image from "next/image";
import React from "react";
import Link from "next/link";
import ProductItemRating from "./ProductItemRating";

const ProductItem = ({
  product,
  color,
}: {
  product: Product;
  color: string;
}) => {
  return (
    <div
      className="w-56 sm:w-64 bg-white rounded-xl p-4 shadow-[0_8px_20px_rgba(0,0,0,0.15)] transform hover:-translate-y-2 transition-all duration-300 ease-in-out"
      style={{ backgroundColor: color }}
    >
      <Link href={`/product/${product.slug}`}>
        <div className="w-full h-40 relative">
          <Image
            src={
              product.mainImage
                ? `/${product.mainImage}`
                : "/product_placeholder.jpg"
            }
            alt={product.title}
            fill
            className="object-contain rounded-md"
          />
        </div>
      </Link>

      <Link
        href={`/product/${product.slug}`}
        className={`block mt-4 text-sm font-semibold uppercase ${
          color === "black" ? "text-black" : "text-gray-800"
        }`}
      >
        {product.title}
      </Link>

      <p
        className={`text-base font-bold mt-1 ${
          color === "black" ? "text-black" : "text-blue-600"
        }`}
      >
        ${product.price}
      </p>

      <div className="mt-2">
        <ProductItemRating productRating={product?.rating} />
      </div>

      <Link
        href={`/product/${product.slug}`}
        className="mt-4 inline-block w-full text-center uppercase bg-white text-blue-600 border border-gray-300 font-semibold py-2 rounded-md hover:bg-gray-100 transition-all duration-200"
      >
        View product
      </Link>
    </div>
  );
};

export default ProductItem;
