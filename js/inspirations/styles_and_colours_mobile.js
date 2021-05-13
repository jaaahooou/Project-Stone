const stylesBtn = document.querySelector('.styles');
const stylesWrapperMobile = document.querySelector('.styles_wrapper');
const coloursBtn = document.querySelector('.colours');
const coloursWrapperMobile = document.querySelector('.colour_wrapper')

stylesBtn.addEventListener('click',()=>{

    if(stylesWrapperMobile.classList.contains('open_styles'))
    
    { 

        
        stylesWrapperMobile.classList.remove('open_styles');
        stylesWrapperMobile.classList.add('close_styles');
         setTimeout(()=>{
            stylesWrapperMobile.classList.remove('close_styles');

         },300)
       
        
    }else {
        stylesWrapperMobile.classList.add('open_styles');
    }
  
})



coloursBtn.addEventListener('click',()=>{

    if(coloursWrapperMobile.classList.contains('open_colours'))
    
    { 
      
        coloursWrapperMobile.classList.remove('open_colours');
        coloursWrapperMobile.classList.add('close_colours');
         setTimeout(()=>{
            coloursWrapperMobile.classList.remove('close_colours');

         },300)
       
        
    }else {
        coloursWrapperMobile.classList.add('open_colours');
    }
   
})
