const fbButton = document.querySelector('.facebook_button');
const instaButton = document.querySelector('.instagram_button');



const moveTheFbButtonOut = ()=>{
    
     fbButton.classList.remove('button_in')
    fbButton.classList.add('button_out')
}

const moveTheFbButtonIn = () =>{
    fbButton.classList.remove('button_out')
    fbButton.classList.add('button_in')
}

const moveTheInstaButtonOut = ()=>{
   
    
    instaButton.classList.remove('button_in')
   instaButton.classList.add('button_out')
}

const moveTheInstaButtonIn = () =>{
   instaButton.classList.remove('button_out')
   instaButton.classList.add('button_in')
}





fbButton.addEventListener('mouseover',moveTheFbButtonOut);
fbButton.addEventListener('mouseout',moveTheFbButtonIn);


instaButton.addEventListener('mouseover',moveTheInstaButtonOut);
instaButton.addEventListener('mouseout',moveTheInstaButtonIn);

