import Card from "./components/Card";
import CardWrapper from "./components/CardWrapper";
import type { Product } from "./types/ProductResponse";

const getProductList = async () => {
  const response = await fetch("https://dummyjson.com/products");
  const responseData = await response.json();
  return responseData;
};

export default async function Home() {
  const productList = await getProductList();
  const { products = [] } = productList;
  return (
    <main className="flex justify-center gap-4 flex-wrap">
      <CardWrapper products={products} />
    </main>
  );
}
