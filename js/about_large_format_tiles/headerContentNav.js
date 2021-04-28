const three = document.querySelector('.three');
const blatyArticle = document.querySelector('.blaty-article');
console.log(three);

three.addEventListener('click',()=>{
    blatyArticle.scrollIntoView({
        behavior:"smooth",
        block:"center"
    }
    )
})
