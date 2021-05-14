const inspirationsButton = document.querySelector('.inspirations_button');
inspirationsButton.classList.add('menu_element_active');
const stylesWrapper = document.querySelector('.styles_wrapper');
const coloursWrapper = document.querySelector('.colour_wrapper');


const styles = [
    { id: 1, styleName: "modern", },
    { id: 2, styleName: "skandynawski", },
    { id: 3, styleName: "klasyczny", },
    { id: 4, styleName: "loft", },
    { id: 5, styleName: "rustykalny", },
    { id: 6, styleName: "glamour", },
    { id: 7, styleName: "retro", },
    { id: 8, styleName: "boho", },
    { id: 9, styleName: "art deco", },
];

const colours = [
    { id: 1, colourName: "czarny" },
    { id: 2, colourName: "biały", },
    { id: 3, colourName: "złoty", },
    { id: 4, colourName: "szary", },
    { id: 5, colourName: "niebieski", },
    { id: 6, colourName: "zielony", },
    { id: 7, colourName: "brązowy", },
    { id: 8, colourName: "czerwony", },
]

// -------- CREATE-STYLES --------

for (i = 0; i < styles.length; i++) {
    const stylesElement = document.createElement('li');
    stylesElement.classList.add('styles_element');
    stylesWrapper.appendChild(stylesElement);
    stylesElement.innerHTML = `${styles[i].styleName}`

}

// -------- CREATE-COLOURS --------


for (i = 0; i < colours.length; i++) {
    const coloursElement = document.createElement('li');
    coloursElement.classList.add('colour_element');
    coloursWrapper.appendChild(coloursElement);
    coloursElement.innerHTML = `${colours[i].colourName}`

}


// -------- MAIN FUNCTION --------

window.addEventListener('DOMContentLoaded', () => {
   
    renderingNewStyleElements();
    renderingNewColoursElements();

})



 

const goToTheTop = ()=>{
    
    window.scrollTo(0,0);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0
}




 // -------- RENDERING NEW STYLES ELEMENTS  --------

 const renderingNewStyleElements =()=>{
    const choosenStyle = document.querySelectorAll('#styles_list li');
    for (let i = 0; i < choosenStyle.length; i++) {

        
        choosenStyle[i].addEventListener('click', () => {
            goToTheTop();
            removeOldElements();

            // -------- RENDERING NEW ELEMENTS  --------
            let choosenStyleInnerHtml = choosenStyle[i].innerHTML;

            fetch('../json/images.json')
                .then(resp => {
                    return resp.json()
                }).then(imagesInfo => {
                   return imagesInfo.message;
                  
                     
                }).then(names=>{
                   const inspirationsContent = document.querySelector('.inspirations_content');
                    for (const name in names){
                           const tiles = names;
                          
                    if (Object.values(tiles[name].styles).includes(`${choosenStyleInnerHtml}`)){
                      
                        const inspirationsContentTile = document.createElement('div');
                        inspirationsContentTile.classList.add('inspirations_content-tile');
                        let tileBackground = tiles[name].url;
                        
                        inspirationsContentTile.innerHTML =`${tiles[name].nameOfTile}`
                        inspirationsContentTile.style.backgroundImage = `url(${tiles[name].url})`;
                        inspirationsContent.appendChild(inspirationsContentTile);

                    
                }
                }
                }).catch(err => {
                    console.log('Error:', err);
                })
        })

    }
 }


 const renderingNewColoursElements = () =>{
    const choosenColour = document.querySelectorAll('#colour_list li')

    for (let i = 0; i < choosenColour.length; i++) {
        choosenColour[i].addEventListener('click', () => {
            goToTheTop();
            removeOldElements();

            // -------- RENDERING NEW ELEMENTS  --------
            
            let choosenColourInnerHtml = choosenColour[i].innerHTML;
            console.log(choosenColour[i]);
        })

    }
 }

 const removeOldElements = () =>{
    if (document.querySelector('.inspirations_content-tile')){
                
                
        const inspirationsContentTile = document.querySelectorAll('.inspirations_content-tile');
        
        for(const el of inspirationsContentTile){
            el.remove()
        }
                
        
    }
 }