import { useCart } from "@/hooks/use-cart"
import { ProductType } from "@/types/product"
import { useRouter } from "next/navigation"

interface CartItemProps {
    product: ProductType
}

const CartItem = (props: CartItemProps) => {
    const {product} = props
    const router = useRouter()
    const {removeItem} = useCart()
    return (
        <li className="flex py-6 border-b">
            <div onClick={() => router.push(`/product/${product.attributes.slug}`)} className="cursor-pointer">
                <img 
                src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${product.attributes.images.data[0].attributes.url}`}
                alt="Product"
                className="w-24 h-24 overflow-hidden rounded-md sm:w-auto sm:h-32" />
            </div>
        </li>
    )
}

export default CartItem