
import { getList } from "../models/productModel.js";
import { Paragraph } from "../views/atoms/index.js"
import { Layout } from "./layoutController.js"

export const ProductPage = async () => {
    // Object.fromEntries den retunerer et object. Location.search er en string
    const { category } = Object.fromEntries(new URLSearchParams(location.search));
    const data = await getList(category)
    console.log(data);
    
    
    
    const title = "Se vores produkter"
    const p = Paragraph()
    p.innerText = "Liste over produkter"
    return Layout(title, p)
   
}