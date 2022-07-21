import './style.css'
import 'normalize.css'
import './index.html'
import { renderNavbar, navbarReveal, responsiveNavbar } from './js/navbar'
import * as menu from './js/menu'
import { slideshow } from './js/home'
import { renderElementsFooter } from './js/footer'

const containerElement = document.querySelector('.container')

slideshow()
navbarReveal()
responsiveNavbar()

renderElementsFooter()

export { containerElement }