const renderNavbar = () => {
  const containerElement = document.querySelector('.container')
  const navbarElement = document.createElement('nav')
  containerElement.appendChild(navbarElement)
  navbarElement.classList.add('nav__bar')
  const navbarLogo = document.createElement('img')
}

const navbarReveal = () => {
  const body = document.body;
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
      const currentScroll = window.scrollY

      if (currentScroll <= 0) {
          body.classList.remove("scroll-up")
      }

      if (currentScroll > lastScroll && !body.classList.contains('scroll-down')) {
          body.classList.remove('scroll-up')
          body.classList.add('scroll-down')
      }

      if (currentScroll < lastScroll && body.classList.contains('scroll-down')) {
          body.classList.remove('scroll-down')
          body.classList.add('scroll-up')
      }

      lastScroll = currentScroll
  })
}

const responsiveNavbar = () => {
  const navbar = document.querySelector('.nav__links');
  const openBtn = document.querySelector('.nav-open');
  const closeBtn = document.querySelector('.nav-close');

  openBtn.addEventListener('click', () => openNavbar())
  closeBtn.addEventListener('click', () => closeNavbar())

  const openNavbar = () => {
      navbar.classList.add('nav-active')
      openBtn.classList.add('nav-open-inactive')
  }
  const closeNavbar = () => {
      navbar.classList.remove('nav-active')
      openBtn.classList.remove('nav-open-inactive')
  }
}

export { renderNavbar, navbarReveal, responsiveNavbar }