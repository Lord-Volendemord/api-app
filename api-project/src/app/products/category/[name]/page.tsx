import Link from "next/link";

export default async function CategoryPage({ params }: { params: { name: string } }) {
  const res = await fetch(`https://dummyjson.com/products/category/${params.name}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return <div>Կատեգորիան չի գտնվել։</div>;
  }

  const data = await res.json();
  const products = data.products;

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Կատեգորիա՝ {params.name}</h1>
      <div className="grid grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id}>
            <Link href={`/products/${product.id}`}>
              <img
                src={product.images[0]}
                alt={product.title}
                className="w-full h-52 object-contain transition"
              />
            </Link>
            <h3 className="mt-3 text-lg font-bold">
              <Link href={`/products/${product.id}`}>
                {product.title}
              </Link>
            </h3>
            <p className="text-gray-600">{product.price}$</p>
          </div>
        ))}
      </div>
    </div>
  );
}
