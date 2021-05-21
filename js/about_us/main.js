const downArrowMobile = document.querySelector('.down-arrow-mobile')


window.addEventListener('scroll', ()=>{

    let opacity = window.pageYOffset *2 /1000
    
    downArrowMobile.style.opacity = 1 - `${opacity}`;
    console.log(opacity);
})