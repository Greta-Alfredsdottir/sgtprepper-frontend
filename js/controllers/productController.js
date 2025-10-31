
import { getList } from "../models/productModel.js";
import { ProductListView } from "../views/organisms/productsViews.js";
import { Layout } from "./layoutController.js";

export const ProductPage = async () => {
        
    // "Object.fromEntries" den retunerer et object. Location.search er en string
    const { category = "vand-og-vandrensning" } = Object.fromEntries(new URLSearchParams(location.search));
    
    //Bygger produkt liste
    const data = await getList(category) // laver kall til produkter og henter.
    const html = ProductListView(data) //kalder mit view, 
    
    // Samler og returnerer side layoutet 
    const layout = Layout('produkter', html)
    return layout
    
}