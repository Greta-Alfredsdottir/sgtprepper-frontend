import { Heading } from "../atoms/index.js"

export const Header = (className = '') => {
    const header = document.createElement('header')
    header.className = className
    const heading = Heading(1)
    heading.textContent = 'Sgt.Prepper'
    header.append(heading)
    return header

}