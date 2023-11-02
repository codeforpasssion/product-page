"use client";
import React, { useCallback, useEffect, useState } from "react";
import type { ProductResponseType, Product } from "../types/ProductResponse";
import Card from "./Card";
import { useDebounce } from "../hooks/useDebounce";

const CardWrapper = ({ products }: ProductResponseType) => {
  const [value, setValue] = useState("");
  const [productList, setProductList] = useState(products);
  const searchQuery = useDebounce(value, 1000) || "";

  const getFilteredData = useCallback(async () => {
    const response = await fetch(
      `https://dummyjson.com/products/search?q=${searchQuery}`
    );
    const responseData = await response.json();
    setProductList(responseData.products);
  }, [searchQuery]);

  useEffect(() => {
    if (searchQuery !== null) {
      getFilteredData();
    }
  }, [getFilteredData, searchQuery]);

  const handleOnChange = useCallback(
    (event: { target: { value: React.SetStateAction<string> } }) => {
      setValue(event.target.value);
    },
    []
  );

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4">
        <input
          value={value}
          onChange={handleOnChange}
          type="text"
          name="search"
          placeholder="Search products..."
          className={`transition-all duration-300 ease-in-out p-2 border border-gray-200 rounded ${
            value ? "w-4/6" : "w-2/6"
          }`}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {productList &&
          productList.map((product: Product) => (
            <Card
              key={product.id}
              id={product.id}
              title={product.title}
              thumbnail={product.thumbnail}
              price={product.price}
            />
          ))}
      </div>
    </div>
  );
};

export default CardWrapper;
