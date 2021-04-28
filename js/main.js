let itemBackground = [...document.querySelectorAll('.item_background')];
let white = [...document.querySelectorAll(".white")];
const list = document.querySelectorAll('#list li')




for (let i = 0; i < list.length; i++) {

    list[i].addEventListener('click', () => {
        console.log(list[i]);

    })

    list[i].addEventListener('mouseover', () => {
        white[i].classList.remove('hidden')

    })

    list[i].addEventListener('mouseleave', () => {
        white[i].classList.add('hidden')
    })

}