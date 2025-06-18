'use client';

import { useEffect, useState } from "react";
import { ProductItem, ProductItemProps } from "../product-item";

interface SearchProps {
  initialProducts: ProductItemProps[];
}

export function Search({ initialProducts }: SearchProps) {
  const [value, setValue] = useState("");
  const [data, setData] = useState(initialProducts);

  useEffect(() => {
    if (value.trim() === "") {
      setData(initialProducts);
    } else {
      const timer = setTimeout(() => {
        fetch(`https://dummyjson.com/products/search?q=${value}`)
          .then(res => res.json())
          .then(res => setData(res.products || []));
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [value, initialProducts]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search products..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="border p-2 mb-4"
      />

      <div className="flex flex-wrap gap-4">
        {data.map((product) => (
          <ProductItem key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}
