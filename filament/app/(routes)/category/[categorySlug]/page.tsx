"use client"

import { useGetCategoryProducts } from "@/api/getCategoryProducts";

export default function Page() {
    const {result} = useGetCategoryProducts('pla-hs')

    console.log(result)
    
    return (
        <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
            <h3 className="px-6 pb-4 text-3xl sm:pb-8">Categorias: </h3>
        </div>
    );
}