"use client"

import { useGetProductBySlug } from "@/api/getProductBySlug";
import { ResponseType } from "@/types/response";
import { useParams } from "next/navigation"


export default function Page() {
    const params = useParams()
    const { productSlug } = params;
    const { result } : ResponseType = useGetProductBySlug(productSlug as string)

    console.log(result)

    if(result == null){
        return<p>Cargando...</p>

    }

    return(
        <p>Product page</p>
    )
}