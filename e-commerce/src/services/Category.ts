import { CategoryType } from "@/types/Product.type"

export async function getAllCategory() : Promise< CategoryType[] >{

    const res = await fetch("https://ecommerce.routemisr.com/api/v1/categories")

    const finalRes = await res.json()

    return finalRes.data
}

export async function getAllCategoryPage() : Promise< CategoryType[] | null >{

    try {

        const res = await fetch("https://ecommerce.routemisr.com/api/v1/categories" , {
            cache: "force-cache"
        })

        const finalRes = await res.json()

        console.log(finalRes);
        

        return finalRes.data
        
    } catch (error) {
            console.log(error);
            return null
    }

    
}