
import { Paragraph } from "../views/atoms/index.js"
import { Layout } from "./layoutController.js"

export const ProductPage = () => {
    // Object.fromEntries den retunerer et object. Location.search er en string
    const { category } = Object.fromEntries(new URLSearchParams(location.search));

    console.log(category);
    
    
    const title = "Se vores produkter"
    const p = Paragraph()
    p.innerText = "Liste over produkter"
    return Layout(title, p)
   
}