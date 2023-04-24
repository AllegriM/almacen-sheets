import Products from "../components/Products";

import getProducts from "./api/api";

export default async function Home() {
  const products = await getProducts();

  return <Products products={products} />;
}
