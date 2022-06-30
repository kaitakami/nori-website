import { containerElement } from './index'
const renderElementsFooter = () => {
    const footerElement = document.createElement('footer')
    containerElement.appendChild(footerElement)
    footerElement.classList.add('footer')
    const footerIconsElement = document.createElement('div')
    footerElement.appendChild(footerIconsElement)
    footerIconsElement.classList.add('footer__icons')
    let iconsClassName = ['fa-instagram', 'fa-phone', 'fa-envelope']
    let iconsLinks = ['https://www.instagram.com/nori_oficial_/', '#', '#']
    for (let i = 0; i < iconsClassName.length; i++) {
        let icon = document.createElement('a')
        icon.classList.add('footer__icon')
        footerIconsElement.appendChild(icon)
        icon.setAttribute('href', iconsLinks[i])
        icon.target = '_blank'
        if (i === 0) {
            let iElement = document.createElement('i')
            iElement.classList.add('fa-brands', iconsClassName[i])
            icon.appendChild(iElement)
            icon.setAttribute('href', iconsLinks[i])
        } else {
            let iElement = document.createElement('i')
            iElement.classList.add('fa-solid', iconsClassName[i])
            icon.appendChild(iElement)
            icon.setAttribute('href', iconsLinks[i])
        }
    }

    let footerTextElement = document.createElement('p')
    footerElement.appendChild(footerTextElement)
    footerTextElement.classList.add('footer__text')
    footerTextElement.innerHTML = '&#169; 2023 by Nori Japanese Wellness Food'
}


export { renderElementsFooter }