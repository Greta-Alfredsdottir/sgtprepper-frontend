import { Layout } from "../../controllers/layoutController.js"
import { Fragment } from "../atoms/index.js"



export const ProductListView = (products) => {
    const element = Fragment()
    element.innerText = 'ProduktListe'

    return element


}