import {Div, Heading, Paragraph} from "../views/atoms/index.js"
import { Header, Main, Footer} from "../views/molecules/index.js"

export const HomePage = () => {
    const div = Div()
    const header = Header ()
    const main = Main()
    const footer = Footer()
    div.append(header,main,footer )

    return div

    // const div = Div('producktbox')
    // const heading = Heading(3)
    // heading.innerHTML = 'hej verden'
    // div.append(heading)
    // return div
}