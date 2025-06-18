import Link from "next/link"

export interface ProductItemProps {
    id: number,
    title: string,
    price: number,
    images: string[]
}

export function ProductItem({ id, title, price, images }: ProductItemProps) {
    return <div className="w-70 p-6">
        <img src={images[0]} alt={ title } />
        <Link href={`/products/${id}`}> { title } </Link>
        <span>{price}$</span>
    </div>
}