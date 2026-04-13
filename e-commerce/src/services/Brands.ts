import { CategoryType, productType } from "@/types/Product.type";

export async function getAllBrands(): Promise<CategoryType[] | null> {

    try {

        const res = await fetch("https://ecommerce.routemisr.com/api/v1/brands" , {
            cache: "force-cache"
        })

        const finalRes = await res.json()

        return finalRes.data
    } catch (error) {
            console.log(error);
            return null
    }

}