const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const articleOne = document.querySelector('.article-one');
const articleTwo = document.querySelector('.article-two');
const articleThree = document.querySelector('.article-three');
const articleFour = document.querySelector('.article-four');
const articleFive = document.querySelector('.article-five');
const articleSix = document.querySelector('.article-six');



one.addEventListener('click',()=>{
    articleOne.scrollIntoView({
        behavior:"smooth",
        block:"center"
    }
    )
})
two.addEventListener('click',()=>{
    articleTwo.scrollIntoView({
        behavior:"smooth",
        block:"center"
    }
    )
})
three.addEventListener('click',()=>{
    articleThree.scrollIntoView({
        behavior:"smooth",
        block:"center"
    }
    )
})
four.addEventListener('click',()=>{
    articleFour.scrollIntoView({
        behavior:"smooth",
        block:"center"
    }
    )
})
five.addEventListener('click',()=>{
    articleFive.scrollIntoView({
        behavior:"smooth",
        block:"center"
    }
    )
})

six.addEventListener('click',()=>{
    articleSix.scrollIntoView({
        behavior:"smooth",
        block:"center"
    }
    )
})




