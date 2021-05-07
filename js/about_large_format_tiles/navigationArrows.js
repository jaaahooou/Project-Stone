
const backToTop = document.querySelector(".back-to-top");
const page = document.querySelector('.page')

window.addEventListener('scroll',()=>{
   if(window.pageYOffset > 600){
   
    backToTop.classList.remove('hidden')
   }
  else {
      if (window.pageYOffset <600 ) {
        if(backToTop.classList.contains("hidden")){
        } else{
            backToTop.classList.add('hidden');

        }
      }
  }
   
})

backToTop.addEventListener('click',()=>{
  page.scrollIntoView({
    behavior : "smooth"
  });
})