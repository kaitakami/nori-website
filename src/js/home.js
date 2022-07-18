const slideshow = () => {
    const slideElement = document.querySelector('.header__slider');
    let slideCount = 1;
    setInterval(() => changeSlide(slideCount), 8000)
    const changeSlide = () => {
        if (slideCount < 5) {
            slideElement.classList.remove(`slide-${slideCount}`)
            slideElement.classList.add(`slide-${slideCount + 1}`)
            slideCount++
        } else {
            slideElement.classList.remove(`slide-${slideCount}`)
            slideCount = 1
            slideElement.classList.add(`slide-${slideCount}`)
        }
    }
};

export { slideshow }