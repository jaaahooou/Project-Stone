const aboutUsButton = document.querySelector('.about_us_button');
const aboutTilesButton = document.querySelector('.about_tiles_button');
const logoButton = document.querySelector('.logo');
const aboutStonesButton = document.querySelector('.about_stones_button');
const aboutLargeFormatTilesButton = document.querySelector('.about_lagre_format_tiles_button');
const aboutInspirations = document.querySelector('.inspirations_button');
const introWrapper = document.querySelector('.intro_wrapper');










logoButton.addEventListener('click', () => {
    location.href = './index.html';

})

aboutUsButton.addEventListener('click', () => {
    location.href = './about_us.html'
    previousUrl()
})

aboutTilesButton.addEventListener('click', () => {
    location.href = './about_tiles.html'
    introWrapper.classList.add('hidden')
})

aboutStonesButton.addEventListener('click', () => {
    location.href = './about_stones.html'

})

aboutLargeFormatTilesButton.addEventListener('click', ()=>{
    console.log('działam');
    location.href = './about_large_format_tiles.html'
})



// --------  MOBILE MENU --------


const aboutUsButtonMobile = document.querySelector('.about_us_button_mobile');
const aboutTilesButtonMobile = document.querySelector('.about_tiles_button_mobile');
const logoButtonMobile = document.querySelector('.logo_mobile');
const aboutStonesButtonMobile = document.querySelector('.about_stones_button_mobile');
const aboutLargeFormatTilesButtonMobile = document.querySelector('.about_lagre_format_tiles_button_mobile');
const aboutInspirationsMobile = document.querySelector('.inspirations_button_mobile');
const introWrapperMobile = document.querySelector('.intro_wrapper');



logoButtonMobile.addEventListener('click', () => {
    location.href = './index.html';

})

aboutUsButtonMobile.addEventListener('click', () => {
    location.href = './about_us.html'
    previousUrl()
})

aboutTilesButtonMobile.addEventListener('click', () => {
    location.href = './about_tiles.html'
    introWrapper.classList.add('hidden')
})

aboutStonesButtonMobile.addEventListener('click', () => {
    location.href = './about_stones.html'

})

aboutLargeFormatTilesButtonMobile.addEventListener('click', ()=>{
    console.log('działam');
    location.href = './about_large_format_tiles.html'
})


const mobileNavigation = document.querySelector('.mobile-navigation')
const hamburgerButton = document.querySelector('.fa-bars');
const articleWrapper = document.querySelector('.article_wrapper');
const mainPageContentWrapper = document.querySelector('.main_page_content_wrapper');
const mobileNavigationContentWrapper = document.querySelector('.mobile-navigation-content-wrapper') ;
const socialMediaWrapperMobile = document.querySelector('.social-media-buttons-for-mobile-navigation');
const instagramButtonMobile = document.querySelector('.instagram-button-mobile');
const facebookButtonMobile = document.querySelector('.facebook-button-mobile');

const closeMobileMenu = ()=>{

    mobileNavigation.classList.add('mobile-menu-is-inactive');
    mobileNavigationContentWrapper.classList.remove('rendering-buttons');
    mobileNavigationContentWrapper.classList.add('hidden');
    instagramButtonMobile.classList.add('hidden');
            facebookButtonMobile.classList.add('hidden');
    setTimeout(()=>{
        mobileNavigation.classList.remove('mobile-menu-is-active');
        mobileNavigation.classList.remove('mobile-menu-is-inactive');
    },300)

}


hamburgerButton.addEventListener('click',()=>{
    
    if(mobileNavigation.classList.contains('mobile-menu-is-active')){

        closeMobileMenu();

    }else{
        mobileNavigation.classList.add('mobile-menu-is-active');
        setTimeout(()=>{
            mobileNavigation.classList.remove('mobile-menu-is-inactive');
         mobileNavigationContentWrapper.classList.remove('hidden');
            mobileNavigationContentWrapper.classList.add('rendering-buttons');
            instagramButtonMobile.classList.remove('hidden');
            facebookButtonMobile.classList.remove('hidden');


        },300)
    }

   
})


if(articleWrapper){
    articleWrapper.addEventListener('click',()=>{
        if (mobileNavigation.classList.contains('mobile-menu-is-active')){
            closeMobileMenu();
        }
            
        }
        )
}

if(mainPageContentWrapper){
    mainPageContentWrapper.addEventListener('click',(event)=>{
        if (mobileNavigation.classList.contains('mobile-menu-is-active')){
            closeMobileMenu();
            event.preventDefault()
        }
            
        }
        )
}
