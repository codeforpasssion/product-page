import React from "react";
import ProductDetailsCard from "../components/ProductDetailsCard";
import { AiOutlineHome } from "react-icons/ai";
import Link from "next/link";

const getProductById = async (productid) => {
  const response = await fetch(`https://dummyjson.com/products/${productid}`);
  const responseData = await response.json();
  return responseData;
};

const DetailsPage = async ({ searchParams }) => {
  const { productid } = searchParams;
  const response = await getProductById(productid);
  console.log("response", response);
  return (
    <div>
      <Link href="/" className="mx-auto w-full flex align-middle p-20">
        <AiOutlineHome size={24} className="text-gray-800" />{" "}
      </Link>
      <ProductDetailsCard product={response} />
    </div>
  );
};

export default DetailsPage;
