let stonesDot = [...document.querySelectorAll('.stones_dot')];
let stonesPage = [...document.querySelectorAll('.stones_page')];
const aboutStonesDotsWrapper = document.querySelector('.about_stones_dots_wrapper');

const sections = document.querySelectorAll('.section');
let currentSectionIndex = 0;
let isUsed = false;




document.addEventListener('mousewheel', (e) => {



    if (isUsed) return;
    isUsed = true;
    setTimeout(function() {

        isUsed = false;
    }, 700)

    const direction = e.wheelDelta < 0 ? 1 : -1;


    scroll(direction);
    scrollToCurrentSection()
})


function scroll(direction) {

    if (direction === 1) {
        const isLastSection = currentSectionIndex === sections.length - 1;

        if (isLastSection) return

    } else if (direction === -1) {
        const firstSection = currentSectionIndex === 0;

        if (firstSection) return;
    }
    currentSectionIndex = currentSectionIndex + direction;
    console.log(currentSectionIndex);
}

function scrollToCurrentSection() {
    sections[currentSectionIndex].scrollIntoView({
        behavior: 'smooth',
        block: 'start',
    })
}


for (let i = 0; i < stonesPage.length; i++) {
    const stonesDivDot = document.createElement("div");
    stonesDivDot.classList.add('stones_dot');
    aboutStonesDotsWrapper.appendChild(stonesDivDot);
    // let divDotArray = [...document.querySelectorAll('.dot')];
    // divDotArray[activeElement].classList.add('active_dot')
}