import React from "react";
import Image from "next/image";

function MoreImageComponent({ product, setSelectedImage }) {
  return (
    <div className="flex space-x-2 mt-2 overflow-x-auto justify-center mb-3">
      {product.images.map((image, index) => (
        <button
          key={index}
          onClick={() => setSelectedImage(image)}
          className="focus:outline-none"
        >
          <div className="w-20 h-20 relative">
            <Image
              src={image}
              alt={`${product.title} image ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="transition-all duration-300 ease-in-out transform hover:scale-110"
            />
          </div>
        </button>
      ))}
    </div>
  );
}

export default MoreImageComponent;
