import { Search } from "../components/pages/search";
import { ProductItemProps } from "../components/product-item";

export default async function Page() {
  const res = await fetch("https://dummyjson.com/products", {
    cache: "no-store",
  });

  const data = await res.json();

  if (!data.products) {
    return <div>No products found.</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Product Search</h1>
      <Search initialProducts={data.products as ProductItemProps[]} />
    </div>
  );
}
