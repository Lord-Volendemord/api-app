
export default async function ProductPage({ params }: { params: { id: string } }) {
  const res = await fetch(`https://dummyjson.com/products/${params.id}`);
  const product = await res.json();

  return (
    <div className="flex flex-col items-center justify-center p-10">
      <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
      <img src={product.images[0]} alt={product.title} className="w-96 mb-4" />
      <p className="text-gray-700 mb-2 text-center">ABOUT: {product.description}</p>
      <p className="text-green-600 text-xl font-bold text-center">PRICE: {product.price}$</p>
      <p className="text-blue-800 text-xl font-bold text-center ">RATING: {product.rating}</p>
      <h1 className="text-brown-900 text-xl text-center">         BRAND: {product.brand}</h1>
    </div>
  );
}
