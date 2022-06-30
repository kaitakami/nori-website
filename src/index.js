import './style.css';
import 'normalize.css';
import { slideshow, navbarReveal, responsiveNavbar } from './home';
import { renderElementsFooter } from './footer';

const containerElement = document.querySelector('.container'); 

slideshow()
navbarReveal()
responsiveNavbar()
renderElementsFooter()

export { containerElement }