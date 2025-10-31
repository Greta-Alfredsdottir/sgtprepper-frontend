
import { getList } from "../models/productModel.js";
import { ProductListView } from "../views/organisms/productsViews.js";
import { Layout } from "./layoutController.js";

export const ProductPage = async () => {
        
    // "Object.fromEntries" den retunerer et object. Location.search er en string
    const { category = "vand-og-vandrensning" } = Object.fromEntries(new URLSearchParams(location.search));
    const data = await getList(category) // laver kall til produkter og henter.
    const html = ProductListView(data) //kalder mit view, 
        
    return Layout('produkter', html)
    
}