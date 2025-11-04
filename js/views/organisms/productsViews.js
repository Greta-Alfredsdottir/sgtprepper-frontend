
import { Div, Fragment, Heading, Image, Paragraph } from "../atoms/index.js"



export const ProductListView = (products) => {
    const element = Fragment()
    // Destructure assignment fra product object
    products.forEach(product => {
        const { imageUrl, name, price, slug, stockText, stockClass,  teaser} = product

        const div = Div('border flex justify-between') //div tag
        const img = Image(`http://localhost:4000${imageUrl}`, name, 'max-w-[200px]')
        div.append(img)

        const info = Div()
        const h2 = Heading(name,2)
        const p = Paragraph()
        p.innerHTML = teaser 
        info.append(h2, p)
        div.append(info)

        const cost = Div('text-right-border')
        cost.innerText = price

        const stockElm = Paragraph(stockClass)
        stockElm.innerText = stockText
        cost.append(stockElm)

      
        div.append(cost)
        
        element.append(div) // så append til elements
        
    });
    console.log();
    

    return element


}