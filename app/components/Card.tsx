import React from "react";
import Image from "next/image";

import type { Product } from "../types/ProductResponse";
import Link from "next/link";

const Card = ({ id, title, price, thumbnail }: Product) => {
  return (
    <Link
      href={`/details/?productid=${id}`}
      className="max-w-xs bg-gray-200 rounded-lg shadow-md overflow-hidden"
    >
      <div className="w-full h-48 relative">
        <Image
          src={thumbnail}
          alt={`Picture of ${title}`}
          layout="fill" // This makes the image fill the parent container
          objectFit="cover" // This scales the image nicely to cover the area
          objectPosition="center" // This centers the image within the element
        />
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold truncate">{title}</h2>
        <p className="text-md text-gray-800">${price}</p>
      </div>
    </Link>
  );
};

export default Card;
