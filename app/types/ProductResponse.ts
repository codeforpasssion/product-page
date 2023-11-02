export type Product = {
  title: string;
  thumbnail: string;
  price: string;
  id: string;
};

export type ProductResponseType = {
  products: Product[];
};
