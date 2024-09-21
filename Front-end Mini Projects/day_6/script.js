const boxes = document.querySelectorAll('.box')
window.addEventListener('scroll',checkboxes)

checkboxes()

function checkboxes(){
    const triggerbottom =window.innerHeight / 5*4
    boxes.forEach(box =>{
        const boxtop= box.getBoundingClientRect().top

        if(boxtop < triggerbottom){
            box.classList.add('show')

        }else{
            box.classList.remove('show')
        }
    })
}