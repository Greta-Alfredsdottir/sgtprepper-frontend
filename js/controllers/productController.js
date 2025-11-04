
import { getList } from "../models/productModel.js";
import { ProductListView } from "../views/organisms/productsViews.js";
import { Layout } from "./layoutController.js";

export const ProductPage = async () => {
        
    // "Object.fromEntries" den retunerer et object. Location.search er en string
    const { category = "vand-og-vandrensning" } = Object.fromEntries(new URLSearchParams(location.search));
    
    //Bygger produkt liste
    const data = await getList(category) // laver kall til produkter og henter.

    const formattedProducts = data.map(item => ({
        ...item,
        stockText: item.stock ? 'På lager' : 'Forventes på lager indenfor 1 - 2 uger',
        stockClass: item.stock ? 'text-green-600' : 'text-rød-600'
    }))

    //console.log(formattedProducts); // dette er for at se om det virker
    

    const html = ProductListView(formattedProducts) //kalder mit view, 
    
    
    // Samler og returnerer side layoutet 
    const layout = Layout('produkter', html)
    return layout
    
}