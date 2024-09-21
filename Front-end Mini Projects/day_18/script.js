const body = document.body
const slides = document.querySelectorAll('.slide')
const leftbtn = document.getElementById('left')
const rightbtn = document.getElementById('right')




let activeSlide = 0
rightbtn.addEventListener('click', () => {
    activeSlide++
    if (activeSlide > slides.length - 1) {
        activeSlide = 0
    }
    setbgtobody()
    setactiveslide()

})


setbgtobody()

function setbgtobody() {
    body.style.backgroundImage = 
    slides[activeSlide].style.backgroundImage
}


function setactiveslide() {
    slides.forEach(slide =>  slide.classList.remove('active'))
    slides[activeSlide].classList.add('active')
}







