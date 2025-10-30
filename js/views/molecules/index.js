import { Heading, Li, Link, Ul } from "../atoms/index.js"

export const HeaderView = () => {
    const element = document.createElement('header')
    // Her bruger vi Tailwind for at style
    element.className = 'bg-slate-500 shadow-md border rounded-lg p-4 text-white-' 
    const h1 = Heading('sgt. Prepper')
    element.append(h1) 
    return element
}

export const NavBarView = arrNavItems => {
        const element = document.createElement('nav')
        element.className = 'border-2 border-blue bg-purple-200 rounded-lg'
        const ul = Ul('flex')

    arrNavItems.forEach(item => {
        const { url, title } = item
        const li = Li('p-2')
        const item1 = Link(url, title, 'hover:text-blue-300')
        li.append(item1)
        ul.append(li)

    })
    element.append(ul)
    return element
}

export const MainView = (title, content) => {
    
    
    const element = document.createElement('main')
    const h1 = Heading(title)
    element.className = 'min-h-[400px]'
    element.append(h1, content)
    return element
}

export const FooterView = () => {
    const element = document.createElement('footer')
    const image = document.createElement('img')
    image.src = "./Assets/images/footer.png"
    element.innerHTML = `&copy: TECHCOLLEGE 2025`
    element.append(image)
    return element
}