
import { Div, Fragment, Image } from "../atoms/index.js"



export const ProductListView = (products) => {
    const element = Fragment()
    // Destructure assignment fra product object
    products.forEach(product => {
        const { imageUrl, name, price, slug, stock, teaser} = product

        const div = Div('border flex') //div tag
        const img = Image(imageUrl, name)
        div.append(img)
        
        element.append(div) // så append til elements
        
    });

    return element


}