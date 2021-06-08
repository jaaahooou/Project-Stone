let itemBackground = [...document.querySelectorAll('.item_background')];
let white = [...document.querySelectorAll(".white")];
const list = document.querySelectorAll('#list li');
const tilesDescriptions = [...document.querySelectorAll('.item_description')];



const descriptions = [
        { id: 1, descrition : "cuarzo-reno", url: '../../img/main-site/small_images/cuarzo-reno.jpg'},
        { id: 2, descrition : "loire-arena", url: '../../img/main-site/small_images/loire-arena.jpg'},
        { id: 3, descrition : "artic-antracita", url: '../../img/main-site/small_images/artic-antracita.jpg'},
        { id: 4, descrition : "gala-penelope", url: '../../img/main-site/small_images/gala-penelope.jpg'},
        { id: 5, descrition : "ragno-look", url: '../../img/main-site/small_images/ragno-look.jpg'},
        { id: 6, descrition : "patagonia-castano", url: '../../img/main-site/small_images/patagonia-castano.jpg'},
        { id: 7, descrition : "abadia-fuego", url: '../../img/main-site/small_images/abadia-fuego.jpg'},
        { id: 8, descrition : "volcano-corten", url: '../../img/main-site/small_images/volcano-corten.jpg'},
]






// ===========  create descritpions of tiles ===========



const createDescritionsOfTiles = (i) =>{
    console.log(i);
    console.log(typeof tilesDescriptions[i]);

}

// ===========  main inspiration for high resolution ===========

for (let i = 0; i < list.length; i++) {

    createDescritionsOfTiles(i);

    list[i].addEventListener('click', () => {
        console.log(list[i]);
        
        mainInspirationsForMobilePhones(i);



    })

    list[i].addEventListener('mouseover', () => {
        white[i].classList.remove('hidden')

    })

    list[i].addEventListener('mouseleave', () => {
        white[i].classList.add('hidden')
    })




}










// ===========  main inspiration for mobile phones ===========

const mainInspirationsForMobilePhones = (i) =>{
    if(window.innerWidth < 1023){
        


        console.log(descriptions[i].url);
    
    }
    

}



