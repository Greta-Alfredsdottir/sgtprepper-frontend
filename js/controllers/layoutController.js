// Layout
import { Fragment } from "../views/atoms/index.js"
import { FooterView, HeaderView, MainView, NavBarView } from "../views/molecules/index.js"

export const Layout =(title, content) => {
    document.title = title
 const element = Fragment()
 element.append(
    HeaderView(),
    NavBarView(),
    MainView(title, content),
    FooterView()
 )
 return element
}