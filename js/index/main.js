let itemBackground = [...document.querySelectorAll('.item_background')];

const list = document.querySelectorAll('#list li');
const tilesDescriptions = document.querySelectorAll('.item_1_descritpion h1');
const indexPageContentWrapper = document.querySelector('.main_page_content_wrapper');
const productList = document.querySelector('.product_list');





const descriptions = [
        { id: 1, description : "cuarzo reno", url: './img/main-site/small_images/cuarzo-reno.jpg'},
        { id: 2, description : "loire arena", url: './img/main-site/small_images/loire-arena.jpg'},
        { id: 3, description : "artic antracita", url: './img/main-site/small_images/artic-antracita.jpg'},
        { id: 4, description : "gala penelope", url: './img/main-site/small_images/gala-penelope.jpg'},
        { id: 5, description : "ragno look", url: './img/main-site/small_images/ragno-look.jpg'},
        { id: 6, description : "patagonia castano", url: './img/main-site/small_images/patagonia-castano.jpg'},
        { id: 7, description : "abadia fuego", url: './img/main-site/small_images/abadia-fuego.jpg'},
        { id: 8, description : "volcano corten", url: './img/main-site/small_images/volcano-corten.jpg'},
]






// ===========  create main tiles ===========

const createMainTiles = () =>{

    for (let i = 0; i < descriptions.length; i++){

    // ===========  create items ===========

            const product = document.createElement("li");
            product.classList.add('product');
            product.classList.add(`item_${i+1}`);

    // ===========  create backgrounds ===========

            const itemBackground = document.createElement('div');
            itemBackground.classList.add(`item_${i+1}_background`);
            itemBackground.classList.add(`item_background`);


    // ===========  white backgrounds ===========  
    
            const whiteBackground = document.createElement("div");
            whiteBackground.classList.add('white');
            whiteBackground.classList.add('hidden');

// ===========  create buttons =========== 

            const  buyButton = document.createElement("div");
            buyButton.classList.add('button');
            buyButton.innerText = "Zobacz w sklepie";


 // ===========  create descriptions ===========   
 
            const itemDescriptionWrapper = document.createElement('div');
            itemDescriptionWrapper.classList.add('item_description_wrapper');


// ===========  create small photos =========== 

            const smallPhoto = document.createElement("div");
            smallPhoto.classList.add('hidden');
            smallPhoto.classList.add('small_photo');
            smallPhoto.style.backgroundImage = `url("${descriptions[i].url}")`



 // ===========  create description headers ===========

            const descriptionHeader = document.createElement('h1');
            descriptionHeader.classList.add('item_description');
            descriptionHeader.innerText = `${descriptions[i].description}`;


 // ===========  create closing buttons  ===========

            const closingButton = document.createElement('div');
            closingButton.classList.add('hidden');
            closingButton.classList.add('closing_button');
            
            closingButton.innerText = "x";

 // ===========  Add items to DOM ===========

            itemDescriptionWrapper.appendChild(descriptionHeader);
            itemBackground.appendChild(itemDescriptionWrapper);
            whiteBackground.appendChild(buyButton);
            itemBackground.appendChild(whiteBackground);
            productList.appendChild(product);
            itemBackground.appendChild(smallPhoto);
            itemBackground.appendChild(closingButton);

            product.appendChild(itemBackground)
    }
}

createMainTiles();





window.addEventListener("DOMContentLoaded",()=>{
    
    let white = [...document.querySelectorAll(".white")];
    const smallPhotosLoaded = [...document.querySelectorAll(".small_photo")];
    const loadedList = document.querySelectorAll('#list li');
    const closingButtonLoaded = [...document.querySelectorAll('.closing_button')];
  



// ===========  main inspiration for high resolution ===========


 
for (let i = 0; i < loadedList.length; i++) {

    
    

    loadedList[i].addEventListener('click', () => {
        

        for(let itemNumber = 0; itemNumber < loadedList.length; itemNumber++){
            white[itemNumber].classList.add('hidden');
            smallPhotosLoaded[itemNumber].classList.add("hidden")
        }
       

        console.log(i);

        mainInspirationsForMobilePhones(i);



    })

    if(window.innerWidth > 1023){
        loadedList[i].addEventListener('mouseover', () => {
            white[i].classList.remove('hidden')
    
    
        })
    
        loadedList[i].addEventListener('mouseleave', () => {
            white[i].classList.add('hidden')
        })
    
    }

  



}


// ===========  main inspiration for mobile phones ===========
const mainInspirationsForMobilePhones = (i) =>{
   
    if(window.innerWidth < 1023){
        console.log("działam 1");

        

            if( (smallPhotosLoaded[i].classList.contains('hidden'))){
               
              
                smallPhotosLoaded[i].classList.remove("hidden");
                 white[i].classList.remove('hidden');
                 closingButtonLoaded[i].classList.remove('hidden')
               

            }else {
                white[i].classList.add('hidden');
                smallPhotosLoaded[i].classList.add("hidden");
                closingButtonLoaded[i].classList.add('hidden')
            }
   
        
    
    }
  

}

} )

