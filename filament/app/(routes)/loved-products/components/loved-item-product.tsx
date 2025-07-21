import { useCart } from "@/hooks/use-cart";
import { useLovedProducts } from "@/hooks/use-loved-products";
import { ProductType } from "@/types/product";
import { useRouter } from "next/navigation";

interface LovedItemProductProps {
    product: ProductType
}

const LovedItemProduct = (props: LovedItemProductProps) => {
    const {product} = props
    const router = useRouter()
    const {removeLovedItem} = useLovedProducts()
    const { addItem } = useCart()

    return (
        <li className="flex py-6 border-b">
            <div onClick={() => router.push(`/product/${product.attributes.slug}`)}>
                <img 
                src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${product.attributes.images.data[0].attributes.url}`} alt="Product" className="w-24 h-24 overflow-hidden rounded-md sm:w-auto sm:h-32"/>
            </div>
        </li>
    )
}

export default LovedItemProduct;