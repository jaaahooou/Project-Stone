const whatWeDo = document.querySelector('.what-we-do');
const whatWeDoSecond = document.querySelector('.what-we-do-second');
const whatWeDoThird = document.querySelector('.what-we-do-third');
const introduce = document.querySelector('.introduce');
const logo = document.querySelector('.logo-colour');

let opacity = 0;
let opacitySecond = 0;
let opacityThird = 0;


window.addEventListener('scroll', (e)=>{

       console.log(window.pageYOffset);

if(window.pageYOffset >= 200){
   whatWeDo.classList.add('slide-element-from-left')
}    

if(window.pageYOffset >= 600){
    whatWeDoSecond.classList.add('slide-element-from-right')
}
if(window.pageYOffset >= 1000){
   whatWeDoThird.classList.add('show-element')
}

})

window.addEventListener('DOMContentLoaded', ()=>{

    introduce.classList.add('slide-element-from-right');

    console.log(logo);
    logo.classList.add('slide-element-from-left');

})




