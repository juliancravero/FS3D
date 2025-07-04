"use client"

import { useGetCategoryProducts } from "@/api/getCategoryProducts";
import { Separator } from "@/components/ui/separator";
import { ResponseType } from "@/types/response";
import { useParams, useRouter } from "next/navigation";
import FiltersControlCategory from "./components/filters-control-category";

export default function Page() {
    const params = useParams()
    const {categorySlug} = params
    const {result, loading}: ResponseType = useGetCategoryProducts(categorySlug as string)
    const router = useRouter()

    return (
        <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
            {result !== null && !loading &&(
                <h1 className="text-3xl font-medium">Filamento {result[0].attributes.category.data.attributes.categoryName}</h1>
            
            )}
            <Separator />

            <div className="sm:flex sm:justify-between">
                <FiltersControlCategory />
            </div>
        </div>
            
    );
}