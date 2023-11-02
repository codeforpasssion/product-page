"use client";
import { useState } from "react";
import Image from "next/image";
import MoreImageComponent from "./MoreImageComponent";

const ProductDetailsCard = ({ product }) => {
  const [selectedImage, setSelectedImage] = useState(product.thumbnail);

  return (
    <div className="flex items-center justify-center">
      <div className="max-w-xl w-full mx-auto bg-white rounded-lg overflow-hidden shadow-lg">
        <div className="relative w-full h-64">
          <Image
            src={selectedImage}
            alt="Selected product image"
            layout="fill"
            objectFit="cover"
            className="transition-all duration-500 ease-in-out transform hover:scale-105"
          />
        </div>
        <div className="p-4">
          <h1 className="text-2xl font-bold">{product.title}</h1>
          <p className="text-gray-700 mt-2">{product.description}</p>
        </div>
        <MoreImageComponent
          product={product}
          setSelectedImage={setSelectedImage}
        />
      </div>
    </div>
  );
};

export default ProductDetailsCard;
